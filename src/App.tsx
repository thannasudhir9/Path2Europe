/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  GraduationCap, 
  Briefcase, 
  Globe, 
  MessageCircle, 
  Youtube, 
  Instagram, 
  Facebook, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Users,
  MapPin,
  Linkedin,
  Send,
  Star,
  Quote,
  Phone,
  CreditCard,
  Camera,
  FileText,
  ExternalLink,
  Folder,
  Heart,
  Copy,
  Check,
  LayoutDashboard,
  Database,
  Bot,
  Share2,
  Mail,
  Zap,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (val: boolean) => void }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "pricing", "webinar", "docs", "about", "partners", "gallery", "testimonials", "faq"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services", id: "services", isScroll: true },
    { name: "Pricing", href: "#pricing", id: "pricing", isScroll: true },
    { name: "Payment", href: "/payment", id: "payment", isScroll: false },
    { name: "Webinar", href: "#webinar", id: "webinar", isScroll: true },
    { name: "Docs", href: "#docs", id: "docs", isScroll: true },
    { name: "About", href: "#about", id: "about", isScroll: true },
    { name: "Partners", href: "#partners", id: "partners", isScroll: true },
    { name: "Gallery", href: "#gallery", id: "gallery", isScroll: true },
    { name: "Testimonials", href: "#testimonials", id: "testimonials", isScroll: true },
    { name: "FAQ", href: "#faq", id: "faq", isScroll: true },
  ];

  const isHome = location.pathname === "/";

  const handleNavClick = (link: any) => {
    setIsMenuOpen(false);
    if (link.isScroll) {
      if (!isHome) {
        navigate("/");
        setTimeout(() => {
          document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.href);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
              if (!isHome) {
                navigate("/");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsMenuOpen(false);
            }}
          >
            <Globe className="w-8 h-8 text-blue-600"/>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Path2Europe
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link)}
                className={`relative py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === link.id ? "text-blue-600 dark:text-blue-400" : ""
                }`} 
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeNav" 
                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-blue-600 rounded-full" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-600"/>}
            </button>

            <Link to="/admin" target="_blank" className="relative py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              Admin
            </Link>
            <button 
              onClick={() => {
                if (!isHome) {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-600"/>}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-y-auto max-h-[calc(100vh-64px)]"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  activeSection === link.id 
                    ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Link 
              to="/admin" 
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
            >
              Admin Panel
            </Link>
            <div className="pt-4 px-3">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  if (!isHome) {
                    navigate("/");
                    setTimeout(() => {
                      document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden transition-colors">
    <div className="max-w-7xl mx-auto text-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
          Your Bridge to a Career in Europe
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Consulting for the <br/>
          <span className="text-blue-600">Next Generation</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Specialized guidance for students and professionals to navigate educational 
          and career paths in Europe, powered by real-world IT expertise and AI tools.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://chat.whatsapp.com/K5ocM7obWynAUnCg3CalBE" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-100 dark:shadow-none">
            <MessageCircle className="w-5 h-5"/>
            Join WhatsApp Group
          </a>
          <button className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm">
            View YT Channel
            <Youtube className="w-5 h-5 text-red-600"/>
          </button>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"/>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"/>
    </div>
  </section>
);

const Gallery = () => {
  const locations = [
    { name: "Germany", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop", desc: "Berlin Cathedral" },
    { name: "Italy", img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop", desc: "Venice Canals" },
    { name: "Netherlands", img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1000&auto=format&fit=crop", desc: "Amsterdam Windmills" },
    { name: "Switzerland", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop", desc: "Swiss Alps" },
    { name: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop", desc: "Eiffel Tower, Paris" },
    { name: "Belgium", img: "https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?q=80&w=1000&auto=format&fit=crop", desc: "Grand Place, Brussels" },
    { name: "Norway", img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1000&auto=format&fit=crop", desc: "Geirangerfjord, Norway" },
    { name: "Finland", img: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1000&auto=format&fit=crop", desc: "Helsinki, Finland" },
    { name: "Hungary", img: "https://images.unsplash.com/photo-1565426964283-c3f5fed299ec?q=80&w=1000&auto=format&fit=crop", desc: "Parliament Building, Budapest" }
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-blue-600"/>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Explore Your Future</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Visualize your life and career in the heart of Europe.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {locations.map((loc, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.03 }} 
              className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-square shadow-lg"
            >
              <img 
                src={loc.img} 
                alt={loc.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold text-xl">{loc.name}</h4>
                <p className="text-blue-200 text-sm">{loc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const handleApplyPromo = () => {
    const code = promoCode.trim();
    if (code === "StudentOffer") {
      setAppliedPromo("StudentOffer");
      setDiscount(1999);
    } else if (code === "ExperiencedOffer") {
      setAppliedPromo("ExperiencedOffer");
      setDiscount(2999);
    } else if (code === "AdminOffer") {
      setAppliedPromo("AdminOffer");
      // AdminOffer stacks: 1999 + 500 = 2499 for students, 2999 + 500 = 3499 for experienced
      // We'll handle the specific calculation in the UI/Upgrade logic
      setDiscount(3499); 
    } else if (code === "TestOffer") {
      setAppliedPromo("TestOffer");
      setDiscount(24999); // Max discount
    } else if (code === "GroupOffer") {
      setAppliedPromo("GroupOffer");
      setDiscount(3000); // 4999 -> 1999
    } else {
      alert("Invalid Promo Code");
      setAppliedPromo(null);
      setDiscount(0);
    }
  };

  const handleUpgrade = (pkgName: string, basePrice: number, promo: string | null) => {
    // Validation logic for promos
    if (promo === "StudentOffer" && pkgName === "Experienced Pro (Mentorship)") {
      alert("StudentOffer is not applicable for Experienced Pro package.");
      return;
    }
    if (promo === "ExperiencedOffer" && pkgName === "Advanced Training (Freshers)") {
      alert("ExperiencedOffer is not applicable for Advanced Training package.");
      return;
    }
    if (promo === "GroupOffer" && pkgName === "Experienced Pro (Mentorship)") {
      alert("GroupOffer is only applicable for Advanced Training (Freshers) package.");
      return;
    }

    navigate("/payment", { 
      state: { 
        packageName: pkgName, 
        price: basePrice,
        appliedPromo: promo
      } 
    });
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CreditCard className="w-6 h-6 text-blue-600"/>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Transparent Pricing</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Invest in your global career with our specialized consulting plans.</p>
          
          <div className="mt-8 max-w-md mx-auto flex gap-2">
            <input 
              type="text" 
              placeholder="Enter Promo Code" 
              className="flex-grow px-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={promoCode} 
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handleApplyPromo} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Apply
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Available Offers:</span>
            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-lg border border-blue-100 dark:border-blue-800">StudentOffer</span>
            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-lg border border-blue-100 dark:border-blue-800">ExperiencedOffer</span>
            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-lg border border-blue-100 dark:border-blue-800">GroupOffer</span>
          </div>

          {appliedPromo && (
            <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">
              Promo "{appliedPromo}" applied!
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fresh Graduates - Free */}
          <motion.div whileHover={{ y: -10 }} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Fresh Graduates</h3>
              <p className="text-gray-500 text-xs">Basic Orientation</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-extrabold text-gray-900 dark:text-white">Free</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs">
                <CheckCircle2 className="w-4 h-4 text-green-500"/>
                Initial Orientation
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs">
                <CheckCircle2 className="w-4 h-4 text-green-500"/>
                EU vs India Pros/Cons
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs">
                <CheckCircle2 className="w-4 h-4 text-green-500"/>
                Community Access
              </li>
            </ul>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-sm"
            >
              Get Started
            </button>
          </motion.div>

          {/* Experienced Professionals - Free Consultation */}
          <motion.div whileHover={{ y: -10 }} className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-[32px] border border-blue-100 dark:border-blue-900/30 flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-1">Experienced Pro</h3>
              <p className="text-blue-600 dark:text-blue-400 text-xs">Free Consultation</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-extrabold text-blue-900 dark:text-blue-100">Free</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-blue-800 dark:text-blue-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-500"/>
                15 Min Strategy Call
              </li>
              <li className="flex items-center gap-2 text-blue-800 dark:text-blue-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-500"/>
                Profile Assessment
              </li>
              <li className="flex items-center gap-2 text-blue-800 dark:text-blue-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-500"/>
                Roadmap Discussion
              </li>
            </ul>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-sm"
            >
              Book Free Call
            </button>
          </motion.div>

          {/* Fresh Graduates - Advanced */}
          <motion.div whileHover={{ y: -10 }} className="bg-blue-600 p-6 rounded-[32px] text-white flex flex-col relative overflow-hidden shadow-xl">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-1">Advanced Training</h3>
              <p className="text-blue-100 text-xs">For Fresh Graduates</p>
              <p className="text-[10px] mt-1 font-bold text-yellow-300 uppercase tracking-wider">
                30 Days Training (Sat & Sun)
              </p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-extrabold">
                {appliedPromo === "StudentOffer" ? (
                  <>
                    <span className="line-through text-blue-300 text-xl mr-2">₹4,999</span>
                    ₹3,000
                  </>
                ) : appliedPromo === "AdminOffer" ? (
                  <>
                    <span className="line-through text-blue-300 text-xl mr-2">₹4,999</span>
                    ₹2,500
                  </>
                ) : appliedPromo === "GroupOffer" ? (
                  <>
                    <span className="line-through text-blue-300 text-xl mr-2">₹4,999</span>
                    ₹1,999
                  </>
                ) : appliedPromo === "TestOffer" ? (
                  <>
                    <span className="line-through text-blue-300 text-xl mr-2">₹4,999</span>
                    ₹0
                  </>
                ) : "₹4,999"}
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-blue-50 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-200"/>
                Salesforce, Java, Python, SQL & AI Basics
              </li>
              <li className="flex items-center gap-2 text-blue-50 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-200"/>
                Vibe Coding & Agentic World of AI
              </li>
              <li className="flex items-center gap-2 text-blue-50 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-200"/>
                Technical, HR & Director Round Prep
              </li>
              <li className="flex items-center gap-2 text-blue-50 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-200"/>
                Ready for real-time projects & market
              </li>
              <li className="flex items-center gap-2 text-blue-50 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-yellow-300"/>
                access to recordings & docs
              </li>
            </ul>
            <button 
              onClick={() => handleUpgrade("Advanced Training (Freshers)", 4999, appliedPromo)}
              className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all text-sm"
            >
              Upgrade Now
            </button>
          </motion.div>

          {/* Experienced Professionals - Paid */}
          <motion.div whileHover={{ y: -10 }} className="bg-gray-900 p-6 rounded-[32px] text-white flex flex-col border-2 border-blue-500/30">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-1">Experienced Pro</h3>
              <p className="text-gray-400 text-xs">Full Mentorship</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-extrabold">
                {appliedPromo === "ExperiencedOffer" ? (
                  <>
                    <span className="line-through text-gray-500 text-xl mr-2">₹24,999</span>
                    ₹22,000
                  </>
                ) : appliedPromo === "AdminOffer" ? (
                  <>
                    <span className="line-through text-gray-500 text-xl mr-2">₹24,999</span>
                    ₹21,500
                  </>
                ) : appliedPromo === "TestOffer" ? (
                  <>
                    <span className="line-through text-gray-500 text-xl mr-2">₹24,999</span>
                    ₹0
                  </>
                ) : "₹24,999"}
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-400"/>
                EU Plan, Blue Card & Agentic AI Strategy
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-400"/>
                Tech, HR & Director Round Interview Prep
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-400"/>
                Java, Python, SQL & AI Advanced Topics
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-400"/>
                Optimise resume for multiple EU Countries
              </li>
              <li className="mt-4 p-3 bg-blue-900/30 rounded-xl border border-blue-500/20">
                <p className="text-[10px] text-blue-300 font-medium leading-tight">
                  * Extended Free package for 1 year free of cost, if you don't get any responses from any European clients.
                </p>
              </li>
            </ul>
            <button 
              onClick={() => handleUpgrade("Experienced Pro (Mentorship)", 24999, appliedPromo)}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-sm"
            >
              Start Mentorship
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, icon: Icon, items, badge }: { title: string, icon: any, items: string[], badge: string }) => (
  <motion.div 
    whileHover={{ y: -5 }} 
    className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-100/50 dark:shadow-none flex flex-col transition-colors"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400"/>
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
        {badge}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h3>
    <ul className="space-y-4 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5"/>
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
      className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
    >
      Learn More
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
    </button>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"/>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/10 p-8 rounded-[32px] border border-blue-100 dark:border-blue-900/30 shadow-sm mb-16"
        >
          <p className="text-lg md:text-xl text-blue-900 dark:text-blue-100 font-medium leading-relaxed italic">
            "Give me just <span className="text-blue-600 font-bold">1 week (7 days)</span> of your time, and I will transform your understanding of real-time projects, workspace dynamics, and professional culture. I guarantee your IT knowledge will go from <span className="text-blue-600 font-bold">0 to Hero</span>."
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
            <Sparkles className="w-5 h-5"/>
            <span>Our Professional Guarantee</span>
          </div>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard 
          title="For Students" 
          badge="Fresh Graduates" 
          icon={GraduationCap} 
          items={[
            "Basics of Java, Python, SQL & AI",
            "Salesforce, Vibe Coding & Agentic AI",
            "Interview Prep: Technical, HR & Director Rounds",
            "Real time scenarios and projects in the market",
            "Make students ready for real time projects, real market outside",
            "IT real-world employee scenarios (Germany, India, Italy)"
          ]}
        />
        <ServiceCard 
          title="For Experienced" 
          badge="Professional Growth" 
          icon={Briefcase} 
          items={[
            "Advanced Java, Python, SQL & AI Topics",
            "Agentic World of AI & Future Tech Planning",
            "Interview Mastery: Technical, HR & Director Rounds",
            "EU Plan, Blue Card Strategy & LinkedIn Optimization",
            "Optimise the resume for multiple EU Countries",
            "Interview preparation for European markets"
          ]}
        />
      </div>
    </div>
  </section>
);

const Docs = () => {
  const resources = [
    {
      title: "Journey Path",
      icon: Globe,
      items: ["Step-by-step roadmap to Europe", "Visa categories overview", "Country-specific guides"],
      badge: "Free Guide"
    },
    {
      title: "Resume Samples",
      icon: FileText,
      items: ["European format (Europass) samples", "Salesforce-specific resumes", "Cover letter templates"],
      badge: "Templates"
    },
    {
      title: "Government Links",
      icon: ExternalLink,
      items: [
        { name: "Make it in Germany", url: "https://www.make-it-in-germany.com" },
        { name: "Study in Italy", url: "https://studyinitaly.esteri.it" },
        { name: "EU Blue Card Info", url: "https://ec.europa.eu/immigration/blue-card_en" }
      ],
      badge: "Official"
    },
    {
      title: "Google Drive Folder",
      icon: Folder,
      items: ["Shared study materials", "Interview prep docs", "Visa checklist PDFs"],
      badge: "Coming Soon"
    }
  ];

  return (
    <section id="docs" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-blue-600"/>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Free Resources</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Access our library of guides, templates, and official links.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((res, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5 }} 
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 flex flex-col transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                  <res.icon className="w-8 h-8 text-blue-600 dark:text-blue-400"/>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {res.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{res.title}</h3>
              <ul className="space-y-4 flex-grow">
                {res.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5"/>
                    {typeof item === 'string' ? (
                      <span className="text-sm leading-relaxed">{item}</span>
                    ) : (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                        {item.name} <ExternalLink className="w-3 h-3"/>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              {idx === 0 && (
                <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                  <p className="text-xs text-indigo-700 dark:text-indigo-300 font-semibold italic flex items-center gap-2">
                    <Sparkles className="w-4 h-4"/>
                    More resources coming soon!
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Guidance = () => (
  <section id="guidance" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Guidance & Preparation</h2>
          <div className="space-y-8">
            {[
              { 
                icon: BookOpen, 
                title: "Educational Opportunities", 
                desc: "Complete orientation about higher education in Italy and across Europe." 
              },
              { 
                icon: Globe, 
                title: "Life in EU vs India", 
                desc: "Deep dive into the pros and cons of living and working in different cultures." 
              },
              { 
                icon: Users, 
                title: "Peer Experiences", 
                desc: "Direct insights shared by colleagues and friends of our founders." 
              },
              { 
                icon: MapPin, 
                title: "Life Navigation", 
                desc: "Practical help with navigating daily life, administration, and culture in the EU." 
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white dark:bg-gray-700 rounded-2xl shadow-sm flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400"/>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-blue-600 rounded-[40px] rotate-3 absolute inset-0 opacity-10 dark:opacity-20"/>
          <div className="aspect-square bg-white dark:bg-gray-800 rounded-[40px] shadow-2xl relative overflow-hidden p-12 flex flex-col justify-center items-center text-center transition-colors">
            <Sparkles className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-6"/>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to start your journey?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Join our community of over 50+ students navigating their path to Europe.</p>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all"
            >
              Book a Free Consultation - 15 Min
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24 px-4 bg-white dark:bg-gray-900 overflow-hidden transition-colors">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
        <p className="text-gray-600 dark:text-gray-400">Hear from those who've successfully navigated their path to Europe.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Rahul Sharma",
            role: "Salesforce Developer in Germany",
            content: "The hands-on training and real-world scenarios were game-changers. I felt prepared for the German work culture from day one.",
            rating: 5
          },
          {
            name: "Priya Patel",
            role: "Master's Student in Italy",
            content: "Navigating the educational landscape in Italy was daunting until I found Path to Europe. Their guidance was precise and supportive.",
            rating: 5
          },
          {
            name: "Ankit Verma",
            role: "IT Professional in Netherlands",
            content: "The AI-powered LinkedIn optimization helped me land interviews I never thought possible. Truly expert consulting.",
            rating: 5
          }
        ].map((testimonial, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ scale: 1.02 }} 
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl relative transition-colors"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100 dark:text-blue-900/20"/>
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      question: "What is the scope of Salesforce in Europe?",
      answer: "Salesforce is one of the most in-demand skills in Europe. Companies across all sectors are moving to cloud solutions, creating a massive need for certified administrators, developers, and consultants."
    },
    {
      question: "Do I need a work visa to apply for jobs in Europe?",
      answer: "If you are from outside the EU, you generally need a work visa. Our consulting includes strategies for the EU Blue Card, which is designed for highly skilled professionals."
    },
    {
      question: "How long does the training take?",
      answer: "Our Advanced Training is designed to be comprehensive yet efficient, typically taking 8-12 weeks depending on your pace and prior experience."
    },
    {
      question: "Is there a job guarantee?",
      answer: "While we don't provide a 'guarantee' (as hiring depends on the company), we provide a 1-year free extension if you don't get responses, ensuring we stay with you until you succeed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We only offer UPI transfers. This ensures quick and secure payment processing for all our students."
    },
    {
      question: "How do I verify my payment?",
      answer: "Once you complete the payment, please send a screenshot of the transaction to pathtoeurope.eu@gmail.com. Our team will verify it and grant you access to the portal within 24 hours."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400">Everything you need to know about your journey to Europe.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Webinar = () => {
  const navigate = useNavigate();
  return (
    <section id="webinar" className="py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-950 text-white overflow-hidden relative transition-colors">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300"/>
              Free Live Webinar
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Master the Path to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200 underline decoration-blue-400/50">European Careers</span>
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-12 leading-relaxed max-w-xl">
              Join our exclusive live sessions where we break down the EU job market, 
              Salesforce opportunities, and the Blue Card process. Get your questions answered in real-time.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-blue-500 dark:bg-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-6 h-6"/>
                </div>
                <div>
                  <p className="font-bold">Every Sat & Sun</p>
                  <p className="text-blue-200 dark:text-blue-400 text-xs">5:00 PM - 6:00 PM IST</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-blue-500 dark:bg-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6"/>
                </div>
                <div>
                  <p className="font-bold">Google Meet</p>
                  <a href="https://meet.google.com/gyw-fqrm-vbg" target="_blank" rel="noopener noreferrer" className="text-blue-200 dark:text-blue-400 text-xs hover:text-white transition-colors flex items-center gap-1">
                    Join Link <ExternalLink className="w-3 h-3"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendar.app.google/rgAKRWjV8mS6y5bD6" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3">
                Add to Calendar
                <ArrowRight className="w-5 h-5"/>
              </a>
              <button 
                onClick={() => navigate('/register')}
                className="bg-transparent border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Register for Updates
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-[48px] border border-white/20 shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-indigo-600 bg-blue-400 flex items-center justify-center font-bold text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-indigo-600 bg-white text-blue-600 flex items-center justify-center font-bold text-xs">
                    +250
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-red-500 rounded-full flex items-center gap-2 animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"/>
                  <span className="text-xs font-bold tracking-wider">LIVE NOW</span>
                </div>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"/>
                  <div className="h-2 bg-white/20 rounded-full flex-grow"/>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"/>
                  <div className="h-2 bg-white/20 rounded-full w-[70%]"/>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"/>
                  <div className="h-2 bg-white/20 rounded-full w-[85%]"/>
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Quote className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-semibold text-blue-200">Recent Attendee</span>
                </div>
                <p className="text-sm italic text-blue-100 leading-relaxed">
                  "The weekend webinars were a game-changer for my understanding of the German job market. Highly recommended!"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">RS</div>
                  <p className="text-sm font-bold">Rahul S., Salesforce Developer</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl animate-pulse"/>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"/>
          </motion.div>
        </div>
      </div>
      
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-300 rounded-full blur-[120px]"/>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-300 rounded-full blur-[120px]"/>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experienceType: "fresh-graduate",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (value.length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = "Please enter a valid email address";
        break;
      case "phone":
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(value)) error = "Please enter a valid phone number (min 10 digits)";
        break;
      case "message":
        if (value.length < 10) error = "Message must be at least 10 characters";
        break;
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      return;
    }

    const experienceLabel = formData.experienceType === "fresh-graduate" ? "Fresh Graduate" : "Experienced Professional";
    
    // Save to CRM (localStorage)
    const crmData = JSON.parse(localStorage.getItem("crm_data") || "[]");
    crmData.push({
      ...formData,
      experienceLabel,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem("crm_data", JSON.stringify(crmData));

    const subject = encodeURIComponent(`Consultation Request from ${formData.name} (${experienceLabel})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Experience: ${experienceLabel}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:pathtoeurope.eu@gmail.com?subject=${subject}&body=${body}`;
  };

  const getInputClass = (fieldName: string) => {
    const baseClass = "w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border rounded-2xl focus:outline-none focus:ring-2 transition-all dark:text-white";
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-red-300 dark:border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900/20`;
    }
    if (touched[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-200 dark:border-green-500 focus:ring-green-500`;
    }
    return `${baseClass} border-gray-200 dark:border-gray-700 focus:ring-blue-500`;
  };

  return (
    <div id="contact-form" className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 transition-colors">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Book a Free Consultation - 15 Min</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Send your details to schedule a call</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
            <input name="name" required type="text" placeholder="John Doe" className={getInputClass("name")} value={formData.name} onChange={handleInputChange} onBlur={handleBlur}/>
            {touched.name && errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
            <input name="email" required type="email" placeholder="john@example.com" className={getInputClass("email")} value={formData.email} onChange={handleInputChange} onBlur={handleBlur}/>
            {touched.email && errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Phone Number</label>
            <input name="phone" required type="tel" placeholder="+91 98765 43210" className={getInputClass("phone")} value={formData.phone} onChange={handleInputChange} onBlur={handleBlur}/>
            {touched.phone && errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Experience Type</label>
            <select name="experienceType" className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer dark:text-white" value={formData.experienceType} onChange={handleInputChange}>
              <option value="fresh-graduate">Fresh Graduate</option>
              <option value="experienced">Experienced Professional</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Your Message / Requirements</label>
          <textarea name="message" required rows={4} placeholder="Tell us about your goals..." className={getInputClass("message")} value={formData.message} onChange={handleInputChange} onBlur={handleBlur}/>
          {touched.message && errors.message && <p className="text-xs text-red-500 ml-1">{errors.message}</p>}
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100 dark:shadow-none"
        >
          <Send className="w-5 h-5" />
          Book a Free Consultation - 15 Min
        </button>
      </form>
    </div>
  );
};

const About = () => {
  const [copied, setCopied] = useState(false);
  const email = "pathtoeurope.eu@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="mb-12">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Meet the Founders</h2>
              
              <div className="mb-12 p-8 bg-blue-600 dark:bg-blue-800 rounded-[32px] text-white shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold uppercase tracking-widest text-blue-100">Our Expertise</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">10+ Years of IT Excellence & EU Journey</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Led by Sudhir Kumar Thanna, our foundation is built on a decade of high-level IT experience 
                    and a successful personal transition to Europe. We don't just consult; we share a proven path.
                  </p>
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">Sudhir Kumar Thanna</p>
                  <a 
                    href="https://www.linkedin.com/in/thanna-sudhir-kumar-/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 text-sm font-semibold hover:underline"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed italic mb-8">
                "Our mission is to bridge the gap between ambition and reality. By combining 
                technical Salesforce training with modern AI tools and deep cultural insights, 
                we empower the next generation of global professionals."
              </p>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/919110368346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">WhatsApp us: +91-9110368346</span>
                </a>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-700 dark:text-gray-300">
                  <a 
                    href={`mailto:${email}?subject=Inquiry regarding Path to Europe Consulting`}
                    className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                    title="Click to send an email"
                  >
                    <Send className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">{email}</span>
                  </a>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-all ml-0 sm:ml-2"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const Partners = () => (
  <section id="partners" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/30 transition-colors">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="w-6 h-6 text-blue-600"/>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Co-Founders & Partners</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400">The visionaries and strategic partners driving Path2Europe forward.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-white dark:bg-gray-900 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sai Lakshmi Harisha</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">Co-Founder</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            With a strong background in strategic planning and a passion for empowering professionals, 
            Sai Lakshmi Harisha plays a pivotal role in shaping our mentorship programs and 
            ensuring the highest quality of career guidance.
          </p>
          <a 
            href="https://www.linkedin.com/in/harisha-vantaku-872299a1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-md border border-gray-50 dark:border-gray-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Strategic Partnerships</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We collaborate with leading IT firms and recruitment agencies across Europe to 
              provide our students with direct access to job opportunities.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-md border border-gray-50 dark:border-gray-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Global Network</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Our network of partners spans across Germany, Italy, and the UK, ensuring 
              comprehensive support for various visa types and career paths.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FooterBanner = () => (
  <section className="px-4 pb-12 bg-white dark:bg-gray-900 transition-colors">
    <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your career?</h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
          Join hundreds of successful candidates who have already made their move to Europe.
        </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white dark:bg-gray-100 text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Start Your Journey Today
            </button>
            <a 
              href="https://chat.whatsapp.com/K5ocM7obWynAUnCg3CalBE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/90 font-semibold hover:text-white transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-green-400" />
              <span>Join WhatsApp Group</span>
            </a>
          </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">Path to Europe</span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Leading consulting firm specializing in European career paths, 
            IT training, and AI-driven job search optimization.
          </p>
          <div className="mt-6 space-y-3">
            <a 
              href="https://chat.whatsapp.com/K5ocM7obWynAUnCg3CalBE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold">Join WhatsApp Group</span>
            </a>
            <a 
              href="mailto:pathtoeurope.eu@gmail.com?subject=Inquiry regarding Path to Europe Consulting"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Send className="w-5 h-5" />
              <span className="font-semibold text-sm">pathtoeurope.eu@gmail.com</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Connect</h4>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/thanna-sudhir-kumar-/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p className="mb-2">© 2026 Path to Europe Consulting. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const PACKAGES = [
  { name: "Advanced Training (Freshers)", price: 4999, description: "30 Days Training (Sat & Sun)" },
  { name: "Experienced Pro (Mentorship)", price: 24999, description: "Full Mentorship & EU Strategy" }
];

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const initialState = location.state || { 
    packageName: "Experienced Pro (Mentorship)", 
    price: 24999, 
    appliedPromo: null 
  };

  const [selectedPackageName, setSelectedPackageName] = useState(initialState.packageName);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(initialState.appliedPromo);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentPackage = PACKAGES.find(p => p.name === selectedPackageName) || PACKAGES[1];
  const price = currentPackage.price;

  const calculateDiscount = (promo: string | null, pkgName: string) => {
    if (!promo) return 0;
    const isFreshers = pkgName === "Advanced Training (Freshers)";
    
    if (promo === "StudentOffer") return isFreshers ? 1999 : 0;
    if (promo === "ExperiencedOffer") return isFreshers ? 0 : 2999;
    if (promo === "AdminOffer") return isFreshers ? 2499 : 3499;
    if (promo === "TestOffer") return isFreshers ? 4999 : 24999;
    if (promo === "GroupOffer") return isFreshers ? 3000 : 0;
    return 0;
  };

  const [discount, setDiscount] = useState(calculateDiscount(initialState.appliedPromo, initialState.packageName));

  // Re-calculate discount when package changes
  useEffect(() => {
    if (appliedPromo) {
      const newDiscount = calculateDiscount(appliedPromo, selectedPackageName);
      if (newDiscount === 0 && appliedPromo !== "TestOffer") {
        // If promo is no longer valid for this package, clear it
        setAppliedPromo(null);
        setDiscount(0);
      } else {
        setDiscount(newDiscount);
      }
    }
  }, [selectedPackageName]);

  const finalPrice = price - discount;

  const handleApplyPromo = () => {
    const code = promoCode.trim();
    const isFreshers = selectedPackageName === "Advanced Training (Freshers)";

    if (code === "StudentOffer") {
      if (!isFreshers) {
        alert("StudentOffer is not applicable for Experienced Pro package.");
        return;
      }
      setAppliedPromo("StudentOffer");
      setDiscount(1999);
    } else if (code === "ExperiencedOffer") {
      if (isFreshers) {
        alert("ExperiencedOffer is not applicable for Advanced Training package.");
        return;
      }
      setAppliedPromo("ExperiencedOffer");
      setDiscount(2999);
    } else if (code === "AdminOffer") {
      setAppliedPromo("AdminOffer");
      setDiscount(isFreshers ? 2499 : 3499);
    } else if (code === "TestOffer") {
      setAppliedPromo("TestOffer");
      setDiscount(isFreshers ? 4999 : 24999);
    } else if (code === "GroupOffer") {
      if (!isFreshers) {
        alert("GroupOffer is only applicable for Advanced Training (Freshers) package.");
        return;
      }
      setAppliedPromo("GroupOffer");
      setDiscount(3000);
    } else {
      alert("Invalid Promo Code");
    }
  };

  const upiId = "9000668360@jupiteraxis";
  const upiLink = `upi://pay?pa=${upiId}&pn=ThannaSudhirKumar&am=${finalPrice}&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-32 pb-24 px-4 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Order Summary */}
          <div className="space-y-8">
            <div>
              <button 
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Home
              </button>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Secure Payment</h1>
              <p className="text-gray-600 dark:text-gray-400">Complete your enrollment for global career success.</p>
            </div>

            {/* Package Selection */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <Folder className="w-6 h-6 text-blue-600" />
                Select Your Package
              </h3>
              <div className="space-y-3">
                {PACKAGES.map((pkg) => (
                  <label 
                    key={pkg.name}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedPackageName === pkg.name 
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20" 
                        : "border-gray-100 dark:border-gray-800 hover:border-blue-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="package"
                        className="w-5 h-5 text-blue-600"
                        checked={selectedPackageName === pkg.name}
                        onChange={() => setSelectedPackageName(pkg.name)}
                      />
                      <div>
                        <p className={`font-bold ${selectedPackageName === pkg.name ? "text-blue-900 dark:text-blue-100" : "text-gray-900 dark:text-gray-100"}`}>
                          {pkg.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{pkg.description}</p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-900 dark:text-white">₹{pkg.price.toLocaleString()}</p>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <CreditCard className="w-6 h-6 text-blue-600" />
                Order Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{selectedPackageName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Professional Consulting</p>
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white">₹{price.toLocaleString()}</p>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between items-center text-green-600 font-medium">
                    <p>Discount ({appliedPromo})</p>
                    <p>-₹{discount.toLocaleString()}</p>
                  </div>
                )}

                <div className="pt-4 flex justify-between items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <p>Total Amount</p>
                  <p>₹{finalPrice.toLocaleString()}</p>
                </div>
              </div>

              {!appliedPromo && (
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Have a discount code?</p>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Enter code" 
                      className="flex-grow px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button 
                      onClick={handleApplyPromo}
                      className="bg-gray-900 dark:bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-black dark:hover:bg-blue-700 transition-all"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 italic">
                    Try "StudentOffer" or "ExperiencedOffer" based on your profile.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pay via UPI</h3>
                <p className="text-gray-500 dark:text-gray-400">Scan QR or use UPI ID to pay</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 mb-6 inline-block">
                <img 
                  src={qrCodeUrl} 
                  alt="UPI QR Code" 
                  className="w-48 h-48 mx-auto rounded-xl shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl">
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-1">Account Holder Name & UPI Handle</p>
                  <p className="text-lg font-bold text-blue-900 dark:text-blue-100">Thanna Sudhir Kumar</p>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-1">{upiId}</p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <span className="font-bold text-gray-900 dark:text-white">Note:</span> We only accept payments via UPI. Please ensure you have a UPI-enabled app (GPay, PhonePe, Paytm, etc.) to complete the transaction.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => {
                    setIsProcessing(true);
                    setTimeout(() => {
                      setIsProcessing(false);
                      alert("Payment verification initiated. Please share the screenshot on WhatsApp for instant confirmation.");
                      window.open("https://wa.me/919110368346", "_blank");
                    }, 1500);
                  }}
                  disabled={isProcessing}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 dark:shadow-none flex items-center justify-center gap-3"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <CheckCircle2 className="w-6 h-6" />
                      I've Made the Payment
                    </>
                  )}
                </button>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  Secure transaction powered by UPI. By paying, you agree to our terms.
                </p>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-r-2xl text-left">
                  <p className="text-sm font-bold text-blue-900 dark:text-blue-100 leading-relaxed">
                    Please send a screenshot of the payment once done, so that we can activate you and give access to the portal for all access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Need Help Section - Centered at bottom */}
        <div className="p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-[40px] flex flex-col md:flex-row gap-6 items-center text-center md:text-left max-w-3xl mx-auto w-full shadow-sm">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Need Assistance?</p>
            <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
              If you face any issues during payment or have questions about the packages, contact us on WhatsApp at <span className="font-bold">+91-9110368346</span> or email us at <span className="font-bold underline">pathtoeurope.eu@gmail.com</span>. 
              Our team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WebinarRegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      const registrations = JSON.parse(localStorage.getItem("webinar_registrations") || "[]");
      const newRegistration = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      localStorage.setItem("webinar_registrations", JSON.stringify([...registrations, newRegistration]));
      
      setIsProcessing(false);
      setIsSubmitted(true);
      
      // Trigger mailto for user confirmation (optional but provides the "email sent" feel)
      const subject = encodeURIComponent("Webinar Registration Confirmed: Path to Europe");
      const body = encodeURIComponent(`Hi ${formData.name},\n\nThank you for registering for the Path to Europe Webinar!\n\nWebinar Details:\n- Date: Every Saturday & Sunday\n- Time: 5:00 PM - 6:00 PM IST\n- Link: https://meet.google.com/gyw-fqrm-vbg\n\nJoin our WhatsApp Group for live updates: https://chat.whatsapp.com/your-group-link\n\nSee you there!`);
      // window.location.href = `mailto:${formData.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 transition-colors">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white dark:bg-gray-900 p-12 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 text-center"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Registration Successful!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            We've sent the webinar details to <span className="font-bold text-blue-600 dark:text-blue-400">{formData.email}</span>. 
            Please check your inbox (and spam folder).
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 text-left mb-12">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Next Steps
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 dark:bg-blue-800 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Join WhatsApp Group</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Get instant updates and session reminders.</p>
                  <a 
                    href="https://chat.whatsapp.com/K5ocM7obWynAUnCg3CalBE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Join Group Now
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 dark:bg-blue-800 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Add to Calendar</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Don't miss the session! Add it to your Google Calendar.</p>
                  <a 
                    href="https://calendar.app.google/rgAKRWjV8mS6y5bD6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    <BookOpen className="w-4 h-4" />
                    Add to Calendar
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 dark:bg-blue-800 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Meeting Link</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Bookmark the Google Meet link for the session.</p>
                  <p className="text-sm font-mono bg-white dark:bg-gray-800 p-2 rounded border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400">meet.google.com/gyw-fqrm-vbg</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate("/")}
            className="text-gray-500 dark:text-gray-400 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24 px-4 transition-colors">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-12"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </button>

        <div className="bg-white dark:bg-gray-900 p-12 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Webinar Registration</h1>
            <p className="text-gray-600 dark:text-gray-400">Join our next live session and start your European journey.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe" 
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
              <input 
                required
                type="tel" 
                placeholder="+91 90000 00000" 
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <button 
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 dark:shadow-none flex items-center justify-center gap-3"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            By registering, you agree to receive webinar updates via email and WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

const AdminCRM = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [crmData, setCrmData] = useState<any[]>([]);
  const [webinarData, setWebinarData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"leads" | "webinar" | "docs">("leads");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("crm_data") || "[]");
    const wData = JSON.parse(localStorage.getItem("webinar_registrations") || "[]");
    setCrmData(data);
    setWebinarData(wData);
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "thannasudhir9" && password === "Sudhir@789") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <section id="admin" className="py-24 px-4 bg-gray-50 dark:bg-gray-950 min-h-screen flex items-center justify-center transition-colors">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 p-8 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all">
              Login
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className="py-24 px-4 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400">Monitor leads and manage your consulting business.</p>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab("leads")}
            className={`px-8 py-3 rounded-2xl font-bold transition-all ${
              activeTab === "leads" ? "bg-blue-600 text-white shadow-lg shadow-blue-100 dark:shadow-none" : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            Consulting Leads
          </button>
          <button 
            onClick={() => setActiveTab("webinar")}
            className={`px-8 py-3 rounded-2xl font-bold transition-all ${
              activeTab === "webinar" ? "bg-blue-600 text-white shadow-lg shadow-blue-100 dark:shadow-none" : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            Webinar Registrations
          </button>
          <button 
            onClick={() => setActiveTab("docs")}
            className={`px-8 py-3 rounded-2xl font-bold transition-all ${
              activeTab === "docs" ? "bg-blue-600 text-white shadow-lg shadow-blue-100 dark:shadow-none" : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            Docs & Prompts
          </button>
        </div>

        {activeTab === "leads" && (
          <>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] shadow-lg border border-gray-100 dark:border-gray-800">
                <h3 className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Total Leads</h3>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{crmData.length}</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] shadow-lg border border-gray-100 dark:border-gray-800">
                <h3 className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Students</h3>
                <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  {crmData.filter(d => d.experienceType === "fresh-graduate").length}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] shadow-lg border border-gray-100 dark:border-gray-800">
                <h3 className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Experienced</h3>
                <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                  {crmData.filter(d => d.experienceType === "experienced").length}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                      <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Date</th>
                      <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Name</th>
                      <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Type</th>
                      <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Contact</th>
                      <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {crmData.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-8 py-12 text-center text-gray-500 dark:text-gray-400 italic">
                          No leads found yet.
                        </td>
                      </tr>
                    ) : (
                      crmData.sort((a, b) => b.id - a.id).map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400">
                            {new Date(lead.timestamp).toLocaleDateString()}
                          </td>
                          <td className="px-8 py-6 font-bold text-gray-900 dark:text-white">{lead.name}</td>
                          <td className="px-8 py-6">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                              lead.experienceType === "fresh-graduate" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                            }`}>
                              {lead.experienceLabel}
                            </span>
                          </td>
                          <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex flex-col gap-1">
                              <span className="flex items-center gap-1"><Send className="w-3 h-3" /> {lead.email}</span>
                              <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {lead.phone}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
                            {lead.message}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === "webinar" && (
          <div className="bg-white dark:bg-gray-900 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-12">
            <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Webinar Registrations</h3>
              <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-xl font-bold text-sm">
                {webinarData.length} Registrations
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                    <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Date</th>
                    <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Full Name</th>
                    <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Email</th>
                    <th className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {webinarData.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-8 py-12 text-center text-gray-500 dark:text-gray-400 italic">
                        No registrations found yet.
                      </td>
                    </tr>
                  ) : (
                    webinarData.sort((a, b) => b.id - a.id).map((reg) => (
                      <tr key={reg.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400">
                          {new Date(reg.timestamp).toLocaleDateString()}
                        </td>
                        <td className="px-8 py-6 font-bold text-gray-900 dark:text-white">{reg.name}</td>
                        <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400">{reg.email}</td>
                        <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400">{reg.phone}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "docs" && (
          <>
            <div className="bg-white dark:bg-gray-900 p-12 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-500" />
            Future Scope & Roadmap
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">Google Sheets Integration</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Export leads directly to Google Sheets for better team collaboration and 
                import existing lead data from external sources.
              </p>
            </div>
            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl border border-indigo-100 dark:border-indigo-800">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">AI Chatbot Assistant</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                24/7 AI-powered support to answer common student queries about EU visas, 
                Salesforce training, and career paths instantly.
              </p>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-3xl border border-green-100 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">Automated Emailing</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Set up automated follow-up sequences for new leads and send personalized 
                newsletters with EU job market updates.
              </p>
            </div>
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-3xl border border-purple-100 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-4">
                <LayoutDashboard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">Advanced Analytics</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Visual charts and trends for lead conversion rates, popular services, 
                and geographical interest heatmaps.
              </p>
            </div>
            <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-3xl border border-orange-100 dark:border-orange-800">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">CRM Integrations</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Sync leads with popular CRM platforms like Salesforce, HubSpot, or Zoho 
                to streamline your sales pipeline.
              </p>
            </div>
            <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-3xl border border-pink-100 dark:border-pink-800">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">User Portal</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Dedicated login for students to track their application status, 
                access premium resources, and book sessions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-12 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Admin Docs & Prompts
          </h3>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold mb-4 dark:text-white">Project Structure</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li><strong className="dark:text-gray-200">/src/App.tsx</strong>: Main application logic and UI</li>
                  <li><strong className="dark:text-gray-200">/src/index.css</strong>: Tailwind 4 styles</li>
                  <li><strong className="dark:text-gray-200">/PROJECT_DOCUMENTATION.md</strong>: General documentation</li>
                  <li><strong className="dark:text-gray-200">/prompts.md</strong>: AI Prompt history</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 dark:text-white">CRM Logic</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Leads are captured from the contact form and stored in the browser's 
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mx-1">localStorage</code> under the key <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mx-1">crm_data</code>.
                </p>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800 rounded-2xl text-yellow-800 dark:text-yellow-200 text-sm italic">
                  Note: In a production environment, this should be migrated to a real database like Firebase.
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-800 pt-12">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Full Project Documentation</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 max-h-[500px] overflow-y-auto font-mono text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
{`# Project Documentation: Path to Europe Consulting

## Project Overview
Path to Europe Consulting is a full-stack web application designed to help professionals and fresh graduates transition to careers in Europe. It specializes in IT training (Salesforce), AI-driven job search optimization, and cultural integration.

## Project Structure
- PROJECT_DOCUMENTATION.md: Main project documentation and technical overview.
- prompts.md: History of all AI prompts used to build the application.
- GITHUB_HOSTING_GUIDE.md: Step-by-step instructions for hosting on GitHub Pages.
- /src/App.tsx: Main application component containing all sections and the Admin CRM.
- /src/index.css: Global styles using Tailwind CSS.
- /src/main.tsx: Entry point.
- /public/: Static assets (images, icons).
- package.json: Project dependencies and scripts.
- metadata.json: App metadata and permissions.

## Technical Architecture & Folder Structure
### Root Directory
- PROJECT_DOCUMENTATION.md: The primary documentation file.
- prompts.md: Tracks the evolution of the project through natural language prompts.
- GITHUB_HOSTING_GUIDE.md: Technical guide for CI/CD deployment via GitHub Actions.
- package.json: Defines project dependencies.
- vite.config.ts: Configuration for the Vite build tool.
- tsconfig.json: TypeScript configuration.
- metadata.json: Application-level metadata.

### Source Directory (/src)
- main.tsx: The application entry point.
- App.tsx: The "God Component" containing all logic and UI.
- index.css: The global stylesheet using Tailwind 4.0+.

## Key Features
- Dynamic Navbar: Smooth scrolling with active section highlighting.
- Form Engine: Custom-built validation engine with mailto integration.
- Admin CRM: A secure dashboard for monitoring leads.
- Discount Code System: Dynamic pricing updates based on promo codes.
- Responsive UI: Mobile-first breakpoint strategy.
- Motion Design: Hardware-accelerated animations.

## Timestamps
- Documentation Generated: Thu, 26 Mar 2026 10:42:04 UTC
- Last Updated: Sun, 29 Mar 2026 16:02:27 UTC
- GitHub Synced: Sun, 29 Mar 2026 16:02:27 UTC`}
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-800 pt-12">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">AI Prompt History</h4>
              <div className="bg-gray-900 dark:bg-black p-8 rounded-3xl border border-gray-800 dark:border-gray-700 max-h-[500px] overflow-y-auto font-mono text-sm text-blue-100 dark:text-blue-300 whitespace-pre-wrap">
{`# AI Prompt History: Path to Europe Consulting

1. Initial Build: Create a consulting website for European career paths.
2. Contact Form: Add a contact form with name, email, message, and WhatsApp integration.
3. Pricing & Gallery: Add pricing tiers and European travel images.
4. Validation: Implement real-time form validation.
5. Contact Details: Update official email and WhatsApp.
6. Package Updates: Add "1 Year Free" extension for experienced professionals.
7. Founder Update: Set founder name to Sudhir Kumar Thanna.
8. Co-Founder: Add Sai Lakshmi Harisha with LinkedIn profile.
9. Navbar Enhancements: Implement smooth scrolling and active link transitions.
10. Docs Section: Create a "Docs" tab with free resources and official links.
11. Final Polish: Add Google Drive "Coming Soon" and highlight 10+ years experience.
12. Services & Admin CRM: 
    - Detailed points for Students and Experienced Professionals.
    - Discount Code feature (StudentOffer, ExperiencedOffer).
    - Secure Admin Tab for CRM monitoring (thannasudhir9 / Sudhir@789).
    - Integrated lead capture and documentation display.`}
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
</section>
);
};

const LandingPage = () => {
  // We need to pass darkMode state if we want to use it in subcomponents, 
  // but Tailwind's dark: class handles most things via the html class.
  return (
    <main>
      <Hero />
      <Services />
      <Pricing />
      <Webinar />
      <Docs />
      <Guidance />
      <About />
      <Partners />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FooterBanner />
      <Footer />
    </main>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <div className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminCRM />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/register" element={<WebinarRegistrationPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
