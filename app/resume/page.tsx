'use client';

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print {
            display: none;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          @page {
            margin: 0.3in;
            size: letter;
          }
          * {
            page-break-inside: avoid;
          }
          section {
            page-break-inside: avoid;
            margin-bottom: 0.5rem !important;
          }
          .print-compact {
            margin-bottom: 0.25rem !important;
            padding: 0.5rem !important;
          }
          h1, h2, h3 {
            page-break-after: avoid;
          }
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-8 md:p-12 max-w-4xl mx-auto print:bg-white print:p-3 print:max-w-none">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 mb-6 shadow-xl print:bg-slate-800 print:rounded-none print:p-3 print:mb-3">
        <div className="flex items-center gap-6">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white/30 bg-white/10 flex items-center justify-center overflow-hidden print:w-20 print:h-20">
              <img 
                src="/images/profule updattte.jpg" 
                alt="Joshua Kinywa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name and Contact Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 print:text-3xl">Joshua Kinywa</h1>
            <p className="text-xl text-blue-100 mb-4 font-medium print:text-lg print:mb-2">Software Engineer & Data Scientist</p>
            <div className="flex flex-col gap-2 text-sm print:gap-1 print:text-xs">
              <div className="flex flex-wrap gap-4 print:gap-3">
                <span>joshuakinywa96@gmail.com</span>
                <span>+254-758-036-936</span>
                <a href="https://linkedin.com/in/joshua-kinywa-37181922b" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
                <a href="https://github.com/JOSHUA-KINYWA" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </div>
              <div>
                <span>Website:</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-5 bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-600 print:shadow-none print:border-l-2 print:p-4 print:mb-3">
        <div className="flex items-center gap-3 mb-3 print:mb-2">
          <div className="p-2 bg-blue-100 rounded-lg print:p-1">
            <svg className="w-5 h-5 text-blue-600 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 print:text-lg">Professional Summary</h2>
        </div>
        <p className="text-slate-700 leading-relaxed text-sm print:text-xs print:leading-snug">
          Passionate Software Engineer with a strong foundation in data analytics, machine learning, and software development. 
          Currently pursuing a Master&apos;s in Financial Engineering while working as a Software Engineer, guiding clients 
          through complex software development and data science projects. Thrives on solving challenging problems and transforming 
          raw data into actionable insights.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-5 print:mb-3">
        <div className="flex items-center gap-3 mb-4 print:mb-2">
          <div className="p-2 bg-indigo-100 rounded-lg print:p-1">
            <svg className="w-5 h-5 text-indigo-600 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 print:text-lg">Work Experience</h2>
        </div>
        
        <div className="mb-4 bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow print:shadow-none print:p-3 print:mb-2">
          <div className="flex justify-between items-start mb-2 print:mb-1">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full print:w-1 print:h-1"></div>
                <h3 className="text-base font-bold text-slate-900 print:text-sm">Software Engineer Intern</h3>
              </div>
              <p className="text-blue-600 font-semibold mb-1 text-sm print:text-xs">i3 Technologies | Nairobi, Kenya</p>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold whitespace-nowrap print:text-xs print:px-1.5">Oct 2024 – Present</span>
          </div>
          <ul className="list-none text-slate-700 space-y-1 text-sm print:text-xs print:space-y-0.5">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 print:mt-0.5">•</span>
              <span>Developing and maintaining software solutions using modern technologies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 print:mt-0.5">•</span>
              <span>Collaborating with team members on innovative projects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 print:mt-0.5">•</span>
              <span>Contributing to code reviews and software development best practices</span>
            </li>
          </ul>
        </div>

        <div className="mb-4 bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow print:shadow-none print:p-3 print:mb-2">
          <div className="flex justify-between items-start mb-2 print:mb-1">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full print:w-1 print:h-1"></div>
                <h3 className="text-base font-bold text-slate-900 print:text-sm">Data Science Google Developer Club Lead</h3>
              </div>
              <p className="text-purple-600 font-semibold mb-1 text-sm print:text-xs">University of Eastern Africa, Baraton | Eldoret, Kenya</p>
            </div>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold whitespace-nowrap print:text-xs print:px-1.5">2023 – 2024</span>
          </div>
          <ul className="list-none text-slate-700 space-y-1 text-sm print:text-xs print:space-y-0.5">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1 print:mt-0.5">•</span>
              <span>Led and managed the Data Science Google Developer Club with active membership</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1 print:mt-0.5">•</span>
              <span>Organized workshops, hackathons, and webinars to foster learning and innovation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1 print:mt-0.5">•</span>
              <span>Mentored members and collaborated with industry experts</span>
            </li>
          </ul>
        </div>

        <div className="mb-4 bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow print:shadow-none print:p-3 print:mb-2">
          <div className="flex justify-between items-start mb-2 print:mb-1">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full print:w-1 print:h-1"></div>
                <h3 className="text-base font-bold text-slate-900 print:text-sm">Software Engineer Intern</h3>
              </div>
              <p className="text-green-600 font-semibold mb-1 text-sm print:text-xs">CompWeb Software Solutions EA Ltd | Nairobi, Kenya</p>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold whitespace-nowrap print:text-xs print:px-1.5">2024</span>
          </div>
          <ul className="list-none text-slate-700 space-y-1 text-sm print:text-xs print:space-y-0.5">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1 print:mt-0.5">•</span>
              <span>Contributed to EzzyBooks management systems for SACCOs, microfinance institutions, and hotels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1 print:mt-0.5">•</span>
              <span>Assisted in software testing, user support, and documentation</span>
            </li>
          </ul>
        </div>

        <div className="mb-4 bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow print:shadow-none print:p-3 print:mb-2">
          <div className="flex justify-between items-start mb-2 print:mb-1">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full print:w-1 print:h-1"></div>
                <h3 className="text-base font-bold text-slate-900 print:text-sm">Data Science Mentee</h3>
              </div>
              <p className="text-orange-600 font-semibold mb-1 text-sm print:text-xs">TechUp Africa | Virtual Program</p>
            </div>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold whitespace-nowrap print:text-xs print:px-1.5">2023 – 2024</span>
          </div>
          <ul className="list-none text-slate-700 space-y-1 text-sm print:text-xs print:space-y-0.5">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1 print:mt-0.5">•</span>
              <span>Collected, cleaned, and analyzed datasets to extract meaningful insights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1 print:mt-0.5">•</span>
              <span>Applied machine learning algorithms to real-world problems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1 print:mt-0.5">•</span>
              <span>Reduced data cleaning time by 20% through process improvements</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-5 print:mb-3">
        <div className="flex items-center gap-3 mb-4 print:mb-2">
          <div className="p-2 bg-emerald-100 rounded-lg print:p-1">
            <svg className="w-5 h-5 text-emerald-600 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0l-3-3m3 3l3-3" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 print:text-lg">Education</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 print:gap-3">
          <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow print:shadow-none print:p-3">
            <div className="flex justify-between items-start mb-1">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full print:w-1 print:h-1"></div>
                  <h3 className="text-base font-bold text-slate-900 print:text-sm">M.S. Financial Engineering</h3>
                </div>
                <p className="text-blue-600 font-semibold text-sm print:text-xs">WorldQuant University</p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold whitespace-nowrap print:text-xs print:px-1.5">2025 – Ongoing</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow print:shadow-none print:p-3">
            <div className="flex justify-between items-start mb-1">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full print:w-1 print:h-1"></div>
                  <h3 className="text-base font-bold text-slate-900 print:text-sm">B.S. Software Engineering</h3>
                </div>
                <p className="text-indigo-600 font-semibold text-sm print:text-xs">University of Eastern Africa, Baraton</p>
              </div>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold whitespace-nowrap print:text-xs print:px-1.5">2020 – 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-5 print:mb-3">
        <div className="flex items-center gap-3 mb-4 print:mb-2">
          <div className="p-2 bg-amber-100 rounded-lg print:p-1">
            <svg className="w-5 h-5 text-amber-600 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 print:text-lg">Skills & Technologies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 print:gap-3">
          <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 print:shadow-none print:p-3">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-base print:text-sm">
              <svg className="w-4 h-4 text-blue-600 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-1.5 print:gap-1">
              {["Python", "JavaScript/TypeScript", "SQL", "R"].map((lang) => (
                <span key={lang} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-semibold border border-blue-200 print:text-xs">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 print:shadow-none print:p-3">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-base print:text-sm">
              <svg className="w-4 h-4 text-purple-600 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5 print:gap-1">
              {["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Docker"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-semibold border border-purple-200 print:text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 print:shadow-none print:p-3">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-base print:text-sm">
              <svg className="w-4 h-4 text-green-600 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Data Science Tools
            </h3>
            <div className="flex flex-wrap gap-1.5 print:gap-1">
              {["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Jupyter"].map((tool) => (
                <span key={tool} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-semibold border border-green-200 print:text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 print:shadow-none print:p-3">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-base print:text-sm">
              <svg className="w-4 h-4 text-indigo-600 print:w-3 print:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-1.5 print:gap-1">
              {["Data Analytics", "Machine Learning", "Web Development", "Full Stack", "DevOps"].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold border border-indigo-200 print:text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-5 print:mb-3">
        <div className="flex items-center gap-3 mb-4 print:mb-2">
          <div className="p-2 bg-rose-100 rounded-lg print:p-1">
            <svg className="w-5 h-5 text-rose-600 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 print:text-lg">Certifications</h2>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 print:shadow-none print:p-3">
          <ul className="space-y-2 print:space-y-1">
            {[
              { name: "Applied Data Science", issuer: "WorldQuant University", year: "2024" },
              { name: "IBM Full Stack Professional Certificate", issuer: "IBM via Coursera", year: "2025" },
              { name: "Data Science Path", issuer: "Dataquest", year: "2023" },
              { name: "Data Science Certificate", issuer: "Dataquest", year: "2023" },
              { name: "Data Analysis/Data Science Track", issuer: "DataCamp", year: "2023" }
            ].map((cert) => (
              <li key={`${cert.name}-${cert.issuer}`} className="flex items-start gap-2 p-2 bg-slate-50 rounded-lg print:p-1 print:text-xs">
                <span className="text-rose-600 mt-0.5 print:mt-0">•</span>
                <div className="flex-1">
                  <span className="font-semibold text-slate-900">{cert.name}</span>
                  <span className="text-slate-600"> - {cert.issuer}</span>
                  <span className="text-slate-500 text-xs ml-1">({cert.year})</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* References */}
      <section className="mb-5 print:mb-3">
        <div className="flex items-center gap-3 mb-4 print:mb-2">
          <div className="p-2 bg-teal-100 rounded-lg print:p-1">
            <svg className="w-5 h-5 text-teal-600 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 print:text-lg">References</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 print:gap-3">
          <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 print:shadow-none print:p-3">
            <h3 className="font-bold text-slate-900 mb-1 text-base print:text-sm">Eng. Kelvin Mayaka</h3>
            <p className="text-blue-600 font-semibold mb-2 text-sm print:text-xs">Lecturer, Baraton University</p>
            <div className="space-y-1 text-slate-700 text-xs print:text-xs">
              <p>+254 717 420317</p>
              <p>mayaka@ueab.ac.ke</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200 print:shadow-none print:p-3">
            <h3 className="font-bold text-slate-900 mb-1 text-base print:text-sm">Dr. Roseline Nyamwamu</h3>
            <p className="text-purple-600 font-semibold mb-2 text-sm print:text-xs">Senior Lecturer, Baraton University</p>
            <div className="space-y-1 text-slate-700 text-xs print:text-xs">
              <p>+254 720 621741</p>
              <p>rose@ueab.ac.ke</p>
            </div>
          </div>
        </div>
      </section>

      {/* Print Button */}
      <div className="no-print mt-8 text-center">
        <button
          onClick={() => {
            if (globalThis.window !== undefined) {
              globalThis.window.print();
            }
          }}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Print / Save as PDF
        </button>
      </div>
      </div>
    </>
  );
}

