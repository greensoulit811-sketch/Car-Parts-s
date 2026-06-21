import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User as UserIcon, LogOut, Phone, Mail, Clock, ChevronDown, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useActiveCategories } from '@/hooks/useCategories';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';
import { useSettings } from '@/hooks/useDatabase';
import { useAuth } from '@/context/AuthContext';

import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { cartCount } = useCart();
  const { data: categories = [] } = useActiveCategories();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { data: settings } = useSettings();
  const { user, signOut } = useAuth();
  const [isCustomer, setIsCustomer] = useState(() => localStorage.getItem('role') === 'customer');

  const navigate = useNavigate();
  const s = Array.isArray(settings) ? settings[0] || {} : settings || {};

  const topCategories = categories.filter(c => !c.parent_id && c.name.toLowerCase() !== 'parts').slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/parts?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Hides on Scroll */}
      <div className={`bg-[#0a0a0a] text-white/70 transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-[35px] lg:h-[34px] opacity-100'}`}>
        <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between text-[10px] lg:text-[11px] font-body tracking-wider uppercase font-semibold">
          {/* Mobile Marquee */}
          <div className="flex lg:hidden items-center w-full overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
              <span className="mx-4 flex items-center gap-1.5"><Phone className="w-3 h-3 text-neon" /> {s?.contact_phone || '+968 1234 5678'}</span>
              <span className="mx-4 flex items-center gap-1.5"><Mail className="w-3 h-3 text-neon" /> {s?.contact_email || 'info@oman-carparts.com'}</span>
              <span className="mx-4 flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-neon" /> 100% GENUINE PARTS</span>
              <span className="mx-4 flex items-center gap-1.5"><Clock className="w-3 h-3 text-neon" /> 24/7 SUPPORT</span>
            </div>
          </div>

          {/* Desktop Left */}
          <div className="hidden lg:flex items-center gap-6">
             <span className="flex items-center gap-2 hover:text-neon cursor-pointer transition-colors"><Phone className="w-[14px] h-[14px] text-neon" /> {s?.contact_phone || '+968 1234 5678'}</span>
             <span className="flex items-center gap-2 hover:text-neon cursor-pointer transition-colors"><Mail className="w-[14px] h-[14px] text-neon" /> {s?.contact_email || 'info@oman-carparts.com'}</span>
          </div>
          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
             <span className="flex items-center gap-2"><Clock className="w-[14px] h-[14px] text-neon" /> 24/7 SUPPORT</span>
             <div className="w-px h-3 bg-white/20"></div>
             <span className="flex items-center gap-2"><ShieldCheck className="w-[14px] h-[14px] text-neon" /> 100% GENUINE PARTS</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-background/95 backdrop-blur-xl border-b border-border/40 transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              {s?.logo_url ? (
                <img src={s.logo_url} alt={s?.site_name || 'Logo'} className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10 lg:h-12' : 'h-12 lg:h-14'}`} />
              ) : (
                <div className={`w-[150px] transition-all duration-300 ${isScrolled ? 'h-10 lg:h-12' : 'h-12 lg:h-14'}`}></div>
              )}
            </Link>

            {/* Navigation Links - Centered */}
            <div className="hidden lg:flex items-center gap-8 font-body text-[13px] tracking-[0.15em] uppercase font-bold text-foreground/80 absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="relative py-2 group transition-colors duration-300 hover:text-foreground">
                {t('nav.home')}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link to="/parts" className="relative py-2 group transition-colors duration-300 hover:text-foreground">
                {t('nav.parts')}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link to="/about" className="relative py-2 group transition-colors duration-300 hover:text-foreground">
                {t('footer.about')}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link to="/contact" className="relative py-2 group transition-colors duration-300 hover:text-foreground">
                {t('footer.contact')}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </div>

            {/* Right Action Area */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              
              {/* Expandable Search (Desktop) */}
              <div className="hidden md:block relative group">
                <form onSubmit={handleSearch} className="flex items-center">
                  <div className="relative flex items-center w-10 h-10 group-hover:w-64 transition-all duration-500 ease-out bg-secondary/50 hover:bg-secondary rounded-full overflow-hidden border border-transparent group-hover:border-border">
                    <div className="absolute left-0 w-10 h-10 flex items-center justify-center text-foreground z-10 pointer-events-none">
                      <Search className="w-[18px] h-[18px] text-muted-foreground group-hover:text-neon transition-colors" />
                    </div>
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search parts..." 
                      className="w-full h-full pl-10 pr-4 bg-transparent text-sm font-body outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 placeholder:text-muted-foreground"
                    />
                  </div>
                </form>
              </div>
              
              <Link to="/cart" aria-label="Shopping Cart" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-foreground transition-all duration-300 hover:text-neon hover:bg-secondary">
                <ShoppingCart className="w-[18px] h-[18px]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-neon text-accent-foreground rounded-full text-[10px] flex items-center justify-center font-bold shadow-md shadow-neon/30 border-2 border-background animate-in zoom-in">
                    {cartCount}
                  </span>
                )}
              </Link>

              <LanguageSwitcher />

              <div className="hidden md:block w-px h-6 bg-border mx-1"></div>

              {user ? (
                <div className="hidden md:flex items-center gap-2 group cursor-pointer relative">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-300 hover:text-neon">
                    <UserIcon className="w-[18px] h-[18px]" />
                  </div>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50">
                    <div className="px-5 py-2 border-b border-border/40 mb-1">
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Signed in as</p>
                      <p className="font-body font-bold text-sm truncate">{user.user_metadata?.full_name || 'Dealer'}</p>
                    </div>
                    <button onClick={() => signOut()} className="px-5 py-2.5 hover:bg-red-50 text-red-500 transition-colors text-[13px] font-body font-medium flex items-center gap-2 text-left w-full">
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                </div>
              ) : !isCustomer && (
                <div className="hidden md:block relative group">
                  <button className="flex items-center justify-center px-6 py-2.5 rounded-full bg-foreground text-background group-hover:bg-neon group-hover:text-accent-foreground transition-all duration-300 shadow-sm group-hover:shadow-neon/20 font-bold text-[11px] uppercase tracking-widest">
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span>Login</span>
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>
                  
                  <div className="absolute top-full right-0 mt-2 w-52 bg-background border border-border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 z-50">
                    <p className="px-3 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Select Role</p>
                    
                    <button onClick={() => { localStorage.setItem('role', 'customer'); setIsCustomer(true); navigate('/parts'); }} className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg hover:bg-secondary/80 transition-colors group/item">
                       <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                         <ShoppingCart className="w-4 h-4 text-primary" />
                       </div>
                       <div>
                         <p className="text-xs font-bold text-foreground">Customer</p>
                         <p className="text-[10px] text-muted-foreground">Shop without login</p>
                       </div>
                    </button>
                    
                    <div className="h-px w-full bg-border/50 my-1"></div>
                    
                    <button onClick={() => navigate('/dealer/login')} className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg hover:bg-neon/10 transition-colors group/item">
                       <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center">
                         <ShieldCheck className="w-4 h-4 text-neon" />
                       </div>
                       <div>
                         <p className="text-xs font-bold text-foreground">Dealer</p>
                         <p className="text-[10px] text-muted-foreground">Wholesale portal</p>
                       </div>
                    </button>
                  </div>
                </div>
              )}
              
              <button aria-label="Toggle mobile menu" className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-foreground transition-colors ml-1" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="w-[20px] h-[20px]" /> : <Menu className="w-[20px] h-[20px]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border overflow-hidden absolute top-full left-0 w-full shadow-2xl"
            >
              <div className="flex flex-col px-6 py-6 gap-2 font-body text-sm tracking-widest uppercase font-bold text-foreground">
                <Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-neon transition-colors py-3 border-b border-border/40 flex items-center justify-between">
                  {t('nav.home')}
                </Link>
                <Link to="/parts" onClick={() => setMobileOpen(false)} className="hover:text-neon transition-colors py-3 border-b border-border/40 flex items-center justify-between">
                  {t('nav.parts')}
                </Link>
                {topCategories.map(cat => (
                  <Link key={cat.id} to={`/parts?category=${cat.slug}`} onClick={() => setMobileOpen(false)} className="hover:text-neon transition-colors py-3 border-b border-border/40 pl-4 text-muted-foreground text-xs">
                    • {cat.name}
                  </Link>
                ))}
                <Link to="/about" onClick={() => setMobileOpen(false)} className="hover:text-neon transition-colors py-3 border-b border-border/40">{t('footer.about')}</Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="hover:text-neon transition-colors py-3 border-b border-border/40">{t('footer.contact')}</Link>
                
                {user ? (
                  <div className="flex flex-col gap-3 mt-6">
                    <button onClick={() => { signOut(); setMobileOpen(false); }} className="hover:bg-red-100 text-red-500 font-bold tracking-wider bg-red-50 rounded-xl transition-colors py-4 px-5 flex items-center justify-center gap-3">
                      <LogOut className="w-5 h-5" /> Logout
                    </button>
                  </div>
                ) : !isCustomer && (
                  <div className="flex flex-col gap-3 mt-6">
                    <button onClick={() => { localStorage.setItem('role', 'customer'); setIsCustomer(true); setMobileOpen(false); navigate('/parts'); }} className="bg-secondary/50 text-foreground hover:bg-secondary px-4 py-4 rounded-xl transition-all flex items-center justify-center gap-2 font-bold uppercase tracking-wider">
                      <ShoppingCart className="w-5 h-5" /> Continue as Customer
                    </button>
                    <button onClick={() => { setMobileOpen(false); navigate('/dealer/login'); }} className="bg-foreground text-background hover:bg-neon hover:text-accent-foreground px-4 py-4 rounded-xl transition-all flex items-center justify-center gap-2 font-bold uppercase tracking-wider shadow-lg">
                      <ShieldCheck className="w-5 h-5" /> Dealer Login
                    </button>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
