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
  Heart
} from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "gallery", "pricing", "docs", "testimonials", "about"];
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
    { name: "Services", href: "#services", id: "services" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Docs", href: "#docs", id: "docs" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "About", href: "#about", id: "about" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Globe className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Path to Europe
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-2 transition-colors hover:text-blue-600 ${
                  activeSection === link.id ? "text-blue-600" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
    <div className="max-w-7xl mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
          Your Bridge to a Career in Europe
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Consulting for the <br />
          <span className="text-blue-600">Next Generation</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Specialized guidance for students and professionals to navigate educational 
          and career paths in Europe, powered by real-world IT expertise and AI tools.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/919110368346"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-100"
          >
            <MessageCircle className="w-5 h-5" />
            Join WhatsApp Group
          </a>
          <button className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm">
            View YT Channel
            <Youtube className="w-5 h-5 text-red-600" />
          </button>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20" />
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
    { name: "Belgium", img: "https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?q=80&w=1000&auto=format&fit=crop", desc: "Grand Place, Brussels" }
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Your Future</h2>
          </div>
          <p className="text-gray-600">Visualize your life and career in the heart of Europe.</p>
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

const Pricing = () => (
  <section id="pricing" className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CreditCard className="w-6 h-6 text-blue-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Transparent Pricing</h2>
        </div>
        <p className="text-gray-600">Invest in your global career with our specialized consulting plans.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Fresh Graduates - Free */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-gray-50 p-6 rounded-[32px] border border-gray-100 flex flex-col"
        >
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Fresh Graduates</h3>
            <p className="text-gray-500 text-xs">Basic Orientation</p>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-extrabold text-gray-900">Free</span>
          </div>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center gap-2 text-gray-600 text-xs">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Initial Orientation
            </li>
            <li className="flex items-center gap-2 text-gray-600 text-xs">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              EU vs India Pros/Cons
            </li>
            <li className="flex items-center gap-2 text-gray-600 text-xs">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Community Access
            </li>
          </ul>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all text-sm"
          >
            Get Started
          </button>
        </motion.div>

        {/* Experienced Professionals - Free Consultation */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-blue-50 p-6 rounded-[32px] border border-blue-100 flex flex-col"
        >
          <div className="mb-6">
            <h3 className="text-lg font-bold text-blue-900 mb-1">Experienced Pro</h3>
            <p className="text-blue-600 text-xs">Free Consultation</p>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-extrabold text-blue-900">Free</span>
          </div>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center gap-2 text-blue-800 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              15 Min Strategy Call
            </li>
            <li className="flex items-center gap-2 text-blue-800 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              Profile Assessment
            </li>
            <li className="flex items-center gap-2 text-blue-800 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
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
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-blue-600 p-6 rounded-[32px] text-white flex flex-col relative overflow-hidden shadow-xl"
        >
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-1">Advanced Training</h3>
            <p className="text-blue-100 text-xs">For Fresh Graduates</p>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-extrabold">₹4,999</span>
          </div>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center gap-2 text-blue-50 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-200" />
              Salesforce Training
            </li>
            <li className="flex items-center gap-2 text-blue-50 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-200" />
              Premium AI Tools
            </li>
            <li className="flex items-center gap-2 text-blue-50 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-200" />
              Real-time Scenarios
            </li>
          </ul>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all text-sm"
          >
            Upgrade Now
          </button>
        </motion.div>

        {/* Experienced Professionals - Paid */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-gray-900 p-6 rounded-[32px] text-white flex flex-col border-2 border-blue-500/30"
        >
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-1">Experienced Pro</h3>
            <p className="text-gray-400 text-xs">Full Mentorship</p>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-extrabold">₹24,999</span>
          </div>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center gap-2 text-gray-300 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Blue Card Strategy
            </li>
            <li className="flex items-center gap-2 text-gray-300 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Job Search Mentorship
            </li>
            <li className="flex items-center gap-2 text-gray-300 text-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              LinkedIn Optimization
            </li>
            <li className="mt-4 p-3 bg-blue-900/30 rounded-xl border border-blue-500/20">
              <p className="text-[10px] text-blue-300 font-medium leading-tight">
                * Extended Free package for 1 year free of cost, if you don't get any responses from any European clients.
              </p>
            </li>
          </ul>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-sm"
          >
            Start Mentorship
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, icon: Icon, items, badge }: { title: string, icon: any, items: string[], badge: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-blue-50 rounded-2xl">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
        {badge}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
    <ul className="space-y-4 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-600">
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
      className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-gray-50 text-gray-900 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all group"
    >
      Learn More
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard 
          title="Fresh Graduates"
          badge="0-2 Years Exp"
          icon={GraduationCap}
          items={[
            "Salesforce Trainings (Docs, PDFs, Videos)",
            "Hands-on Training with Real-time Scenarios",
            "Understanding how Business runs in the real world",
            "Specialized study paths for the new AI world",
            "Mastering modern AI Tools",
            "IT Real-world employee scenarios (Germany, India, Italy)"
          ]}
        />
        <ServiceCard 
          title="Experienced Professionals"
          badge="2-5 Years Exp"
          icon={Briefcase}
          items={[
            "EU Blue Card & Germany Path Guidance",
            "Opportunity Card (Chancenkarte) Support",
            "Strategic Job Application Mentorship",
            "AI-Powered LinkedIn Profile Optimization",
            "Smart AI Job Search & Application Techniques",
            "Interview Preparation for European Markets"
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
    <section id="docs" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Free Resources</h2>
          </div>
          <p className="text-gray-600">Access our library of guides, templates, and official links.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((res, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-100 rounded-2xl">
                  <res.icon className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
                  {res.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{res.title}</h3>
              <ul className="space-y-4 flex-grow">
                {res.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    {typeof item === 'string' ? (
                      <span className="text-sm leading-relaxed">{item}</span>
                    ) : (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed text-blue-600 hover:underline flex items-center gap-1">
                        {item.name} <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              {idx === 0 && (
                <div className="mt-8 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <p className="text-xs text-indigo-700 font-semibold italic flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
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
  <section id="guidance" className="py-24 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Guidance & Preparation</h2>
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
                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-blue-600 rounded-[40px] rotate-3 absolute inset-0 opacity-10" />
          <div className="aspect-square bg-white rounded-[40px] shadow-2xl relative overflow-hidden p-12 flex flex-col justify-center items-center text-center">
            <Sparkles className="w-16 h-16 text-blue-600 mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to start your journey?</h3>
            <p className="text-gray-600 mb-8">Join our community of over 50+ students navigating their path to Europe.</p>
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
  <section id="testimonials" className="py-24 px-4 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
        <p className="text-gray-600">Hear from those who've successfully navigated their path to Europe.</p>
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
            className="bg-gray-50 p-8 rounded-3xl relative"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
            <div>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-blue-600">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

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
    const baseClass = "w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all";
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-red-300 focus:ring-red-500 bg-red-50`;
    }
    if (touched[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-200 focus:ring-green-500`;
    }
    return `${baseClass} border-gray-200 focus:ring-blue-500`;
  };

  return (
    <div id="contact-form" className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100">
      <h3 className="text-3xl font-bold text-gray-900 mb-2">Book a Free Consultation - 15 Min</h3>
      <p className="text-gray-600 mb-8 text-lg">Send your details to schedule a call with Sudhir Kumar Thanna.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
            <input 
              name="name"
              required
              type="text" 
              placeholder="John Doe"
              className={getInputClass("name")}
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
            <input 
              name="email"
              required
              type="email" 
              placeholder="john@example.com"
              className={getInputClass("email")}
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
            <input 
              name="phone"
              required
              type="tel" 
              placeholder="+91 98765 43210"
              className={getInputClass("phone")}
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Experience Type</label>
            <select 
              name="experienceType"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
              value={formData.experienceType}
              onChange={handleInputChange}
            >
              <option value="fresh-graduate">Fresh Graduate</option>
              <option value="experienced">Experienced Professional</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Your Message / Requirements</label>
          <textarea 
            name="message"
            required
            rows={4}
            placeholder="Tell us about your goals..."
            className={getInputClass("message")}
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && <p className="text-xs text-red-500 ml-1">{errors.message}</p>}
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100"
        >
          <Send className="w-5 h-5" />
          Book a Free Consultation - 15 Min
        </button>
      </form>
    </div>
  );
};

const About = () => (
  <section id="about" className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="mb-12">
            <div className="w-24 h-24 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet the Founders</h2>
            
            <div className="mb-12 p-8 bg-blue-600 rounded-[32px] text-white shadow-xl relative overflow-hidden group">
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
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                <p className="text-blue-600 font-bold text-lg mb-2">Sudhir Kumar Thanna</p>
                <a 
                  href="https://www.linkedin.com/in/thanna-sudhir-kumar-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 text-sm font-semibold hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                <p className="text-blue-600 font-bold text-lg mb-2">Sai Lakshmi Harisha</p>
                <a 
                  href="https://www.linkedin.com/in/harisha-vantaku-872299a1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 text-sm font-semibold hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed italic mb-8">
              "Our mission is to bridge the gap between ambition and reality. By combining 
              technical Salesforce training with modern AI tools and deep cultural insights, 
              we empower the next generation of global professionals."
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/919110368346"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold">WhatsApp us: +91-9110368346</span>
              </a>
              <div className="flex items-center gap-3 text-gray-700">
                <Send className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">pathtoeurope.eu@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
);

const FooterBanner = () => (
  <section className="px-4 pb-12">
    <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your career?</h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
          Join hundreds of successful candidates who have already made their move to Europe.
        </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Start Your Journey Today
            </button>
            <a 
              href="https://wa.me/919110368346"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/90 font-semibold hover:text-white transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-green-400" />
              <span>WhatsApp us: +91-9110368346</span>
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
              href="https://wa.me/919110368346"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold">+91-9110368346</span>
            </a>
            <div className="flex items-center gap-3 text-blue-400">
              <Send className="w-5 h-5" />
              <span className="font-semibold text-sm">pathtoeurope.eu@gmail.com</span>
            </div>
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
        <p className="flex items-center justify-center gap-2 text-gray-400 font-medium">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> from Sudhir Kumar Thanna to everyone
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Docs />
        <Guidance />
        <Testimonials />
        <About />
        <FooterBanner />
      </main>
      <Footer />
    </div>
  );
}
