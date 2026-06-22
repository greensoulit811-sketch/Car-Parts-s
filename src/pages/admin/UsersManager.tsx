import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Search, User as UserIcon } from 'lucide-react';
import { toast } from 'sonner';

interface DbUser {
  id: string;
  full_name: string;
  email: string;
  role: string;
  sponsored_details?: string;
  license_number?: string;
  is_approved?: boolean;
  created_at: string;
}

const UsersManager = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['dealers_list'],
    queryFn: async () => {
      const { data, error } = await supabase.from('dealers').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      return data as DbUser[];
    }
  });

  const updateRole = useMutation({
    mutationFn: async ({ id, role }: { id: string; role: string }) => {
      const { error } = await supabase.from('users').update({ role }).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users_list'] });
    }
  });

  const updateApproval = useMutation({
    mutationFn: async ({ id, is_approved }: { id: string; is_approved: boolean }) => {
      const { error } = await supabase.from('dealers').update({ is_approved }).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dealers_list'] });
    }
  });

  const deleteDealer = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('dealers').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dealers_list'] });
    }
  });

  const handleRoleChange = async (id: string, newRole: string) => {
    try {
      await updateRole.mutateAsync({ id, role: newRole });
      toast.success(`User role updated to ${newRole}`);
    } catch {
      toast.error('Failed to update user role. Are you sure you are an admin?');
    }
  };

  const handleApprovalChange = async (id: string, is_approved: boolean) => {
    try {
      await updateApproval.mutateAsync({ id, is_approved });
      toast.success(`Dealer ${is_approved ? 'approved' : 'disabled'} successfully`);
    } catch {
      toast.error('Failed to update dealer status');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this dealer?')) {
      try {
        await deleteDealer.mutateAsync(id);
        toast.success('Dealer deleted successfully');
      } catch {
        toast.error('Failed to delete dealer');
      }
    }
  };

  const filtered = users.filter(u => 
    u.email?.toLowerCase().includes(search.toLowerCase()) || 
    u.full_name?.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p className="text-center py-10 text-muted-foreground">Loading users...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold uppercase tracking-wider text-foreground">Dealers</h1>
          <p className="font-body text-sm text-muted-foreground mt-1">Manage wholesale dealer registrations and approvals</p>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search by name or email..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 border border-border bg-card rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
      </div>

      <div className="bg-card border border-border rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="text-left p-4 font-heading text-xs uppercase tracking-wider text-muted-foreground">Dealer</th>
              <th className="text-left p-4 font-heading text-xs uppercase tracking-wider text-muted-foreground">Email</th>
              <th className="text-left p-4 font-heading text-xs uppercase tracking-wider text-muted-foreground">Details</th>
              <th className="text-left p-4 font-heading text-xs uppercase tracking-wider text-muted-foreground">Joined</th>
              <th className="text-right p-4 font-heading text-xs uppercase tracking-wider text-muted-foreground">Status & Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(user => (
              <tr key={user.id} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <UserIcon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-body text-sm font-semibold text-foreground">{user.full_name || 'No Name'}</span>
                  </div>
                </td>
                <td className="p-4 font-body text-sm text-muted-foreground">{user.email}</td>
                <td className="p-4 font-body text-sm text-muted-foreground">
                  <div className="flex flex-col gap-1 text-xs">
                    {user.license_number && <span><span className="font-semibold">License:</span> {user.license_number}</span>}
                    {user.sponsored_details && <span><span className="font-semibold">Sponsored:</span> {user.sponsored_details}</span>}
                    {!user.license_number && !user.sponsored_details && <span className="italic opacity-50">No details provided</span>}
                  </div>
                </td>
                <td className="p-4 font-body text-sm text-muted-foreground">{new Date(user.created_at).toLocaleDateString()}</td>
                <td className="p-4 text-right">
                  <div className="flex flex-col items-end gap-3">
                    <label className="flex items-center gap-2 cursor-pointer mt-1">
                      <span className={`text-xs font-semibold ${user.is_approved ? 'text-green-600' : 'text-red-500'}`}>
                        {user.is_approved ? 'Approved' : 'Disabled'}
                      </span>
                      <div className="relative inline-flex items-center">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={user.is_approved || false}
                          disabled={updateApproval.isPending}
                          onChange={(e) => handleApprovalChange(user.id, e.target.checked)}
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                      </div>
                    </label>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      disabled={deleteDealer.isPending}
                      className="text-xs text-red-500 hover:text-red-700 font-semibold border border-red-200 hover:bg-red-50 px-2 py-1 rounded transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="p-8 text-center text-muted-foreground font-body text-sm">No dealers found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManager;