'use client';

import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import TypingAnimation from "./components/TypingAnimation";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['about', 'projects', 'experience', 'certifications', 'education', 'skills', 'contact']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254758036936?text=Hi%20Joshua,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-12 right-0 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* Navigation */}
      <nav className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg border-b border-slate-200' 
          : 'bg-white/98 backdrop-blur-xl shadow-md border-b border-slate-200'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <a 
              href="#about" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Joshua Kinywa
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-600 font-semibold'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                    )}
                    <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200 -z-10"></span>
                  </a>
                );
              })}
              <a 
                href="#contact" 
                className="ml-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Hire Me
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 font-semibold bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with About - Two Column Layout */}
      <section id="about" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container-custom relative z-10 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Introduction */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-medium">
                👋 Available for Hire
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Joshua</span>
                <br />
                <span className="text-white">Kinywa</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-4 leading-relaxed font-medium">
                I&apos;m a <TypingAnimation words={["Software Engineer", "Data Scientist", "Full Stack Developer", "Machine Learning Engineer"]} />
              </p>
              <p className="text-base md:text-lg text-slate-400 mb-8">
                Building intelligent solutions that transform data into actionable insights
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                <a 
                  href="#contact"
                  className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 text-base md:text-lg"
                >
                  Hire Me
                </a>
                <a 
                  href="https://wa.me/254758036936?text=Hi%20Joshua,%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 md:px-8 md:py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 text-base md:text-lg"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start text-xs md:text-sm">
                <a href="mailto:joshuakinywa96@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">joshuakinywa96@gmail.com</span>
                  <span className="sm:hidden">Email</span>
                </a>
                <a href="tel:+254758036936" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +254-758-036-936
                </a>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="hidden sm:inline">Available for projects</span>
                  <span className="sm:hidden">Available</span>
                </div>
              </div>
            </div>

            {/* Right Side - About Me */}
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">About</span> Me
                </h2>
                <div className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed">
                  <p>
                    I&apos;m a passionate Software Engineer with a strong foundation in data analytics, machine learning, and software development. 
                    My journey combines technical expertise with a deep understanding of how data can drive meaningful business decisions.
                  </p>
                  <p>
                    Currently, I&apos;m pursuing a Master&apos;s in Financial Engineering while working as a Software Engineer, where I guide clients 
                    through complex software development and data science projects. I thrive on solving challenging problems and transforming 
                    raw data into actionable insights.
                  </p>
                  <p>
                    My goal is to leverage my knowledge and skills to make a significant impact as a Data Scientist, combining my software 
                    engineering background with advanced analytics to create innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
          aria-label="Scroll to projects"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        </button>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Certifications Section */}
      <Certifications />

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/20">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient">Work</span> Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            {/* Software Engineer Intern - i3 Technologies */}
            <div className="bg-white rounded-2xl p-6 md:p-8 card-hover border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white p-2 flex-shrink-0 border border-slate-200 relative">
                    <Image src="/images/i3.jpeg" alt="i3 Technologies logo" fill className="object-contain" sizes="64px" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Software Engineer Intern
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1 text-lg">
                      i3 Technologies
                    </p>
                    <p className="text-slate-500">Nairobi, Kenya</p>
                  </div>
                </div>
                <span className="mt-2 md:mt-0 px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                  October 2024 – Present
                </span>
              </div>
              <ul className="space-y-3 text-slate-600 list-none">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developing and maintaining software solutions using modern technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborating with team members on innovative projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contributing to code reviews and software development best practices</span>
                </li>
              </ul>
            </div>

            {/* Data Science Google Developer Club Lead */}
            <div className="bg-white rounded-2xl p-6 md:p-8 card-hover border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white p-2 flex-shrink-0 border border-slate-200 relative">
                    <Image src="/images/ueab.jpeg" alt="University of Eastern Africa, Baraton logo" fill className="object-contain" sizes="64px" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Data Science Google Developer Club Lead
                    </h3>
                    <p className="text-purple-600 font-semibold mb-1 text-lg">
                      University of Eastern Africa, Baraton
                    </p>
                    <p className="text-slate-500">Eldoret, Kenya</p>
                  </div>
                </div>
                <span className="mt-2 md:mt-0 px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200">
                  2023 – 2024
                </span>
              </div>
              <ul className="space-y-3 text-slate-600 list-none">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led and managed the Data Science Google Developer Club with active membership</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Organized workshops, hackathons, and webinars to foster learning and innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentored members and collaborated with industry experts to provide real-world insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expanded reach through inter-club networking and maintained active status via reporting</span>
                </li>
              </ul>
            </div>

            {/* Software Engineer Intern */}
            <div className="bg-white rounded-2xl p-6 md:p-8 card-hover border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white p-2 flex-shrink-0 border border-slate-200 relative">
                    <Image src="/images/compweb.png" alt="CompWeb Software Solutions logo" fill className="object-contain" sizes="64px" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Software Engineer Intern
                    </h3>
                    <p className="text-green-600 font-semibold mb-1 text-lg">
                      CompWeb Software Solutions EA Ltd
                    </p>
                    <p className="text-slate-500">Nairobi, Kenya</p>
                  </div>
                </div>
                <span className="mt-2 md:mt-0 px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                  2024
                </span>
              </div>
              <ul className="space-y-3 text-slate-600 list-none">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contributed to the development of EzzyBooks management systems for SACCOs, microfinance institutions, and hotels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Assisted in software testing, user support, and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Improved business operations and client experience through technical solutions</span>
                </li>
              </ul>
            </div>

            {/* Data Science Mentee */}
            <div className="bg-white rounded-2xl p-6 md:p-8 card-hover border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white p-2 flex-shrink-0 border border-slate-200 relative">
                    <Image src="/images/techup.jpeg" alt="TechUp Africa logo" fill className="object-contain" sizes="64px" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Data Science Mentee
                    </h3>
                    <p className="text-orange-600 font-semibold mb-1 text-lg">
                      TechUp Africa
                    </p>
                    <p className="text-slate-500">Virtual Program</p>
                  </div>
                </div>
                <span className="mt-2 md:mt-0 px-5 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-semibold border border-orange-200">
                  2023 – 2024
                </span>
              </div>
              <ul className="space-y-3 text-slate-600 list-none">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collected, cleaned, and analyzed datasets to extract meaningful insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Applied machine learning algorithms to real-world problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Improved data visualizations for better stakeholder understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduced data cleaning time by 20% and enhanced collaboration through presentations and workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 card-hover shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-white p-2 flex-shrink-0 border border-slate-200 relative">
                  <Image src="/images/ms fianial.jpeg" alt="WorldQuant University logo" fill className="object-contain" sizes="64px" />
                </div>
                <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-bold mb-4">
                  Ongoing
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Master of Science in Financial Engineering
                </h3>
                <p className="text-blue-600 font-semibold text-lg">WorldQuant University</p>
                </div>
              </div>
              <p className="text-slate-600 font-medium">2025 – Ongoing</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100 card-hover shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-white p-2 flex-shrink-0 border border-slate-200 relative">
                  <Image src="/images/ueab.jpeg" alt="University of Eastern Africa, Baraton logo" fill className="object-contain" sizes="64px" />
                </div>
                <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-xs font-bold mb-4">
                  Completed
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-indigo-600 font-semibold text-lg">University of Eastern Africa, Baraton</p>
                </div>
              </div>
              <p className="text-slate-600 font-medium">2020 – 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 to-purple-50/20">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient">Skills</span> & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Programming Languages */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Programming Languages
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Python", level: 90 },
                  { name: "JavaScript/TypeScript", level: 85 },
                  { name: "SQL", level: 80 },
                  { name: "R", level: 65 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Frameworks */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Technologies & Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase", "Docker", "Kubernetes", "Git", "Tailwind CSS", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg text-sm font-semibold border border-purple-200 hover:border-purple-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Data Analytics", "Machine Learning", "Data Science", "Web Development", "Full Stack Development", "DevOps", "Cloud Computing", "Leadership", "Project Management"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-200 hover:border-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/References Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient">Get</span> In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send me a message</h3>
              <ContactForm />
            </div>
            
            {/* References */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 shadow-sm card-hover">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Eng. Kelvin Mayaka
                </h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm">Lecturer, Baraton University</p>
                <div className="space-y-2 text-slate-700 text-sm">
                  <a href="tel:+254717420317" className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +254 717 420317
                  </a>
                  <a href="mailto:mayaka@ueab.ac.ke" className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mayaka@ueab.ac.ke
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 border border-slate-200 shadow-sm card-hover">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Dr. Roseline Nyamwamu
                </h3>
                <p className="text-purple-600 font-semibold mb-4 text-sm">Senior Lecturer, Baraton University</p>
                <div className="space-y-2 text-slate-700 text-sm">
                  <a href="tel:+254720621741" className="flex items-center gap-2 hover:text-purple-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +254 720 621741
                  </a>
                  <a href="mailto:rose@ueab.ac.ke" className="flex items-center gap-2 hover:text-purple-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    rose@ueab.ac.ke
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center space-y-4">
            <a 
              href="mailto:joshuakinywa96@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg mr-4"
            >
              Send Me an Email
            </a>
            <a 
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg border border-slate-300"
              aria-label="View and download Joshua Kinywa Resume"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Go to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-[90] w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="absolute -top-12 right-0 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Back to Top
          </span>
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Joshua Kinywa
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Software Engineer & Data Scientist passionate about building intelligent solutions and transforming data into actionable insights.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/joshua-kinywa-37181922b"
            target="_blank"
            rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn"
              >
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
          </a>
          <a
                href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'JOSHUA-KINYWA'}`}
            target="_blank"
            rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:joshuakinywa96@gmail.com"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/254758036936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{' '}
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />{' '}
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{' '}
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#certifications" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />{' '}
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{' '}
                    Education
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />{' '}
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{' '}
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href="mailto:joshuakinywa96@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors justify-center md:justify-start"
                >
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>joshuakinywa96@gmail.com</span>
                </a>
                <a
                  href="tel:+254758036936"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors justify-center md:justify-start"
                >
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+254 758 036 936</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left text-sm text-slate-500">
            © {new Date().getFullYear()} Joshua Kinywa. All rights reserved.
              </div>
              <div className="text-sm text-slate-500 text-center md:text-right">
                Built with <span className="text-red-500">❤</span> using Next.js & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
