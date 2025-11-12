import Projects from "./components/Projects";
import ProfilePhoto from "./components/ProfilePhoto";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254758036936?text=Hi%20Joshua,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
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
      <nav className="sticky top-0 z-40 glass-effect shadow-sm border-b border-slate-100">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Joshua Kinywa
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">About</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Projects</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Experience</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Skills</a>
              <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Compact Design */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container-custom relative z-10 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-medium">
                👋 Available for Hire
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Joshua</span>
                <br />
                <span className="text-white">Kinywa</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                Software Engineer & Data Scientist
                <br />
                <span className="text-base md:text-lg text-slate-400">Building intelligent solutions that transform data into actionable insights</span>
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

            {/* Right Side - Profile Photo */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <ProfilePhoto />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                <span className="text-gradient">About</span> Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p className="text-xl text-slate-700">
                I'm a passionate Software Engineer with a strong foundation in data analytics, machine learning, and software development. 
                My journey combines technical expertise with a deep understanding of how data can drive meaningful business decisions.
              </p>
              <p className="text-lg">
                Currently, I'm pursuing a Master's in Financial Engineering while working as a Software Engineer, where I guide clients 
                through complex software development and data science projects. I thrive on solving challenging problems and transforming 
                raw data into actionable insights.
              </p>
              <p className="text-lg">
                My goal is to leverage my knowledge and skills to make a significant impact as a Data Scientist, combining my software 
                engineering background with advanced analytics to create innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/20">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              <span className="text-gradient">Work</span> Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4 md:space-y-6">
            {/* Software Engineer Intern - i3 Technologies */}
            <div className="bg-white rounded-2xl p-6 md:p-8 card-hover border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Software Engineer Intern
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1 text-lg">
                    i3 Technologies
                  </p>
                  <p className="text-slate-500">Nairobi, Kenya</p>
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
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Data Science Google Developer Club Lead
                  </h3>
                  <p className="text-purple-600 font-semibold mb-1 text-lg">
                    University of Eastern Africa, Baraton
                  </p>
                  <p className="text-slate-500">Eldoret, Kenya</p>
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
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Software Engineer Intern
                  </h3>
                  <p className="text-green-600 font-semibold mb-1 text-lg">
                    CompWeb Software Solutions EA Ltd
                  </p>
                  <p className="text-slate-500">Nairobi, Kenya</p>
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
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Data Science Mentee
                  </h3>
                  <p className="text-orange-600 font-semibold mb-1 text-lg">
                    TechUp Africa
                  </p>
                  <p className="text-slate-500">Virtual Program</p>
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
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 card-hover shadow-sm">
              <div className="mb-4">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-bold mb-4">
                  Ongoing
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Master of Science in Financial Engineering
                </h3>
                <p className="text-blue-600 font-semibold text-lg">WorldQuant University</p>
              </div>
              <p className="text-slate-600 font-medium">2025 – Ongoing</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100 card-hover shadow-sm">
              <div className="mb-4">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-xs font-bold mb-4">
                  Completed
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-indigo-600 font-semibold text-lg">University of Eastern Africa, Baraton</p>
              </div>
              <p className="text-slate-600 font-medium">2020 – 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 to-purple-50/20">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              <span className="text-gradient">Skills</span> & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 md:mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Data Analytics", "Machine Learning", "Data Science", "Web Development", "Leadership"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-xl text-sm font-semibold border border-blue-200 hover:border-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 md:mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <span className="font-medium">Applied Data Science - WorldQuant University</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <span className="font-medium">Data Science Path - Dataquest</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="font-medium">Data Analysis/Data Science - DataCamp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/References Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              <span className="text-gradient">Get</span> In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm card-hover">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Eng. Kelvin Mayaka
              </h3>
              <p className="text-blue-600 font-semibold mb-6 text-lg">Lecturer, Baraton University</p>
              <div className="space-y-3 text-slate-700">
                <a href="tel:+254717420317" className="block hover:text-blue-600 transition-colors font-medium">
                  +254 717 420317
                </a>
                <a href="mailto:mayaka@ueab.ac.ke" className="block hover:text-blue-600 transition-colors font-medium">
                  mayaka@ueab.ac.ke
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm card-hover">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Dr. Roseline Nyamwamu
              </h3>
              <p className="text-purple-600 font-semibold mb-6 text-lg">Senior Lecturer, Baraton University</p>
              <div className="space-y-3 text-slate-700">
                <a href="tel:+254720621741" className="block hover:text-purple-600 transition-colors font-medium">
                  +254 720 621741
                </a>
                <a href="mailto:rose@ueab.ac.ke" className="block hover:text-purple-600 transition-colors font-medium">
                  rose@ueab.ac.ke
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="mailto:joshuakinywa96@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <p className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Joshua Kinywa
              </p>
              <p className="text-slate-400">Software Engineer & Data Scientist</p>
            </div>
            <div className="flex gap-8">
              <a 
                href="mailto:joshuakinywa96@gmail.com"
                className="text-slate-400 hover:text-white transition-colors font-medium"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/joshua-kinywa-37181922b"
            target="_blank"
            rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors font-medium"
              >
                LinkedIn
          </a>
          <a
                href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'JOSHUA-KINYWA'}`}
            target="_blank"
            rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors font-medium"
          >
                GitHub
          </a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Joshua Kinywa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
