import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DealerLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      // Check if user is an admin - if so, redirect to admin
      const { data: adminRole } = await supabase.from('user_roles').select('role').eq('user_id', data.user.id).eq('role', 'admin').maybeSingle();
      if (adminRole) {
        navigate('/admin');
        return;
      }

      toast.success('Dealer login successful');
      const from = (location.state as any)?.from || '/';
      navigate(from);
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-36 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-md w-full space-y-8 bg-card p-8 rounded-xl border border-border shadow-lg">
          <div>
            <div className="flex justify-center mb-4 text-primary">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h2 className="mt-2 text-center text-3xl font-heading font-bold uppercase tracking-wider text-foreground">
              Dealer Login
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground font-body">
              Access your exclusive dealer pricing
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label className="sr-only">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="sr-only">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold uppercase tracking-wider rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-all"
              >
                {loading ? 'Signing in...' : 'Sign in'}
                <span className="absolute right-0 inset-y-0 flex items-center pr-3">
                  <ArrowRight className="h-5 w-5 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                </span>
              </button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground font-body">
                Not a dealer yet?{' '}
                <Link to="/dealer/register" className="font-bold text-primary hover:text-primary/80 transition-colors">
                  Apply Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DealerLoginPage;
