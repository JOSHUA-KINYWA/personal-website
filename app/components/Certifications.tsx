'use client';

import Carousel from './Carousel';
import Image from 'next/image';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  logo?: string;
  courseraUrl?: string;
  credlyUrl?: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      name: "Applied Data Science",
      issuer: "WorldQuant University",
      date: "2024",
      description: "Comprehensive program covering data analysis, machine learning, and statistical modeling",
      logo: "/images/applied.png",
      credentialUrl: "https://www.credly.com/badges/8fd76329-b657-4b50-bd56-2bd9a52dd111/linked_in_profile"
    },
    {
      name: "IBM Full Stack Professional Certificate",
      issuer: "IBM via Coursera",
      date: "November 2025",
      description: "Comprehensive 12-course program covering JavaScript, Node.js, MongoDB, Docker, Kubernetes, DevOps, microservices, security, and cloud-native development",
      logo: "/images/ibm.png",
      courseraUrl: "https://www.coursera.org/user/4b70b5d9cf480a49c1c656eb36328970"
    },
    {
      name: "Data Science Path",
      issuer: "Dataquest",
      date: "2023",
      description: "Complete data science curriculum including Python, SQL, and data visualization",
      logo: "/images/dataquest.jpeg",
      credentialUrl: "https://app.dataquest.io/view_cert/XATO76Z0EOHX0QR0S7HZ"
    },
    {
      name: "Data Science Certificate",
      issuer: "Dataquest",
      date: "2023",
      description: "Advanced data science certification covering machine learning, statistical analysis, and data engineering",
      logo: "/images/dataquest.jpeg",
      credentialUrl: "https://app.dataquest.io/view_cert/GBT0B5R1PP0JAL4NGFYL"
    },
    {
      name: "Data Analysis/Data Science Track",
      issuer: "DataCamp",
      date: "2023",
      description: "Advanced courses in data analysis, statistical methods, and data science techniques",
      logo: "/images/datacamp.png",
      credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/32c76cbd5b42e7a72e58a2af4c88959d1b0471f6"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/20">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <Carousel itemsPerView={3} autoPlay={true} autoPlayInterval={4000}>
            {certifications.map((cert) => (
              <div 
                key={`${cert.name}-${cert.issuer}`}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm card-hover group h-full"
              >
                {/* Certification Logo/Badge */}
                <div className="mb-6 flex items-center justify-center">
                  {cert.logo ? (
                    <div className="w-20 h-20 rounded-lg bg-white p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-slate-200 relative">
                      <Image src={cert.logo} alt={cert.issuer} fill className="object-contain" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Certification Content */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 text-lg">
                    {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        View Certificate
                      </a>
                    )}
                    {cert.courseraUrl && (
                      <a
                        href={cert.courseraUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        View on Coursera
                      </a>
                    )}
                    {cert.credlyUrl && (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 10.04c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.12-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                        </svg>
                        View on Credly
                      </a>
                    )}
                    <a
                      href="https://www.linkedin.com/in/joshua-kinywa-37181922b/details/certifications/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      View on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

