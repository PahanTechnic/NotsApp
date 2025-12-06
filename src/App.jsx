import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/next";
import 'bootstrap-icons/font/bootstrap-icons.css';



// Bootstrap Icons CSS import
const BootstrapIconsLink = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return null;
};

const StreamData = {
  "Science Stream": {
    color: "from-violet-600 to-indigo-600",
    lightColor: "from-violet-50 to-indigo-50",
    icon: <i class="bi bi-flask-fill text-slate-100"></i>,
    subjects: [
      { name: "Combined Maths", sinhala: "සංයුක්ත ගණිතය", url: "https://drive.google.com/drive/folders/1thNP5yPkj41cuoqpT5ZSLahoOyEtFzlN" },
      { name: "Chemistry", sinhala: "රසායන විද්‍යාව", url: "https://drive.google.com/drive/folders/1nKJuHzG72amxmWn5w2TczngWf_Pe9hjA" },
      { name: "Physics", sinhala: "භෞතික විද්‍යාව", url: "https://drive.google.com/drive/folders/1SKJINm56SaiC44cP61R0UHsFYbYGUiIJ" },
      { name: "Biology", sinhala: "ජීව විද්‍යාව", url: "https://drive.google.com/drive/folders/19Xm4LNUzzcRrQYrOSivNUlSgEdM2u9k1" },
      { name: "ICT", sinhala: "තොරතුරු තාක්ෂණය", url: "https://drive.google.com/drive/folders/1m_3dsC5VFmrSo__eIISGWSeJaLorqIos" }
    ]
  },
  "Commerce Stream": {
    color: "from-emerald-600 to-teal-600",
    lightColor: "from-emerald-50 to-teal-50",
    icon: <i class="bi bi-briefcase-fill text-slate-100"></i>,
    subjects: [
      { name: "Business Studies", sinhala: "ව්‍යාපාර අධ්‍යයනය", url: "https://drive.google.com/drive/folders/1i5eJ7MC3ORgJYEg01rlAtn_uXB0LS2Yn" },
      { name: "Accounting", sinhala: "ගිණුම්කරණය", url: "https://drive.google.com/drive/folders/1-DlF3jpeA3UaBWx043SxyzjNp0lPUjO1" },
      { name: "Economics", sinhala: "ආර්ථික විද්‍යාව", url: "https://drive.google.com/drive/folders/1a-cktJiilT44z0kRR8ZBacaYHo9PFIXw" },
      { name: "ICT", sinhala: "තොරතුරු තාක්ෂණය", url: "https://drive.google.com/drive/folders/1m_3dsC5VFmrSo__eIISGWSeJaLorqIos" }
    ]
  },
  "Technology Stream": {
    color: "from-orange-500 to-amber-500",
    lightColor: "from-orange-50 to-amber-50",
    icon: <i class="bi bi-gear-fill text-slate-100"></i>,
    subjects: [
      { name: "Engineering Technology", sinhala: "ඉංජිනේරු තාක්ෂණය", url: "https://drive.google.com/drive/folders/1BmEtP0xbdP9NrojrmhiJpl6cEaD65cTR" },
      { name: "Bio Systems Technology", sinhala: "ජෛව පද්ධති තාක්ෂණය", url: "https://drive.google.com/drive/folders/1aqpJDHaxgR8bUZH5qTWZ8YhigdCWTIga" },
      { name: "Science For Technology", sinhala: "තාක්ෂණය සඳහා විද්‍යාව", url: "https://drive.google.com/drive/folders/1Fgj9leBQbKYxP_TKQKwdFO5XHpaxlPLd" },
      { name: "ICT", sinhala: "තොරතුරු තාක්ෂණය", url: "https://drive.google.com/drive/folders/1m_3dsC5VFmrSo__eIISGWSeJaLorqIos" }
    ]
  },
  "Languages": {
    color: "from-pink-600 to-rose-600",
    lightColor: "from-pink-50 to-rose-50",
    icon: <i class="bi bi-translate text-slate-100"></i>,
    subjects: [
      { name: "Japanese", sinhala: "ජපන්", url: "https://drive.google.com/drive/folders/1H0ntGuFG4lv9NdXfN847eTf4yPOQXJsh" },
      { name: "Hindi", sinhala: "හින්දි", url: "https://drive.google.com/drive/folders/1v8jTnAaO2RCieQ33u5BV921LID3lgUpA" },
      { name: "Sinhala", sinhala: "සිංහල", url: "https://drive.google.com/drive/folders/1WXxU1V2EZhx-P8tpJ6TGe1TsCid1Fkpl" },
      { name: "ICT", sinhala: "තොරතුරු තාක්ෂණය", url: "https://drive.google.com/drive/folders/1m_3dsC5VFmrSo__eIISGWSeJaLorqIos" }
    ]
  },
  "Arts Stream": {
    color: "from-red-600 to-orange-600",
    lightColor: "from-red-50 to-orange-50",
    icon: <><i class="bi bi-palette text-slate-100"></i></>,
    subjects: [
      { name: "History", sinhala: "ඉතිහාසය", url: "https://drive.google.com/drive/folders/1P5TBD-N91TuIY0NL4bLFFit0alyaJqBN" },
      { name: "Geography", sinhala: "භූගෝල විද්‍යාව", url: "https://drive.google.com/drive/folders/1wZdsbW0jQOnj_MNE4QNqZzWneW0soifz" },
      { name: "Buddhism", sinhala: "බුද්ධ ධර්මය", url: "https://drive.google.com/drive/folders/1N2xtR1BEkX-jwEep-8OHfLmZLR-4rBgw" },
      { name: "ICT", sinhala: "තොරතුරු තාක්ෂණය", url: "https://drive.google.com/drive/folders/1m_3dsC5VFmrSo__eIISGWSeJaLorqIos" }
    ]
  },
  "Arts Stream II": {
    color: "from-purple-600 to-violet-600",
    lightColor: "from-purple-50 to-violet-50",
    icon: <i class="bi bi-book text-slate-100"></i>,
    subjects: [
      { name: "Media", sinhala: "මාධ්‍ය", url: "https://drive.google.com/drive/folders/1imLy6StVojTDX17tfWV8x2T4e3BbFdx-" },
      { name: "Logic", sinhala: "තර්ක ශාස්ත්‍රය", url: "https://drive.google.com/drive/folders/1L_9vrapS9DAMv9G5PFEkyo6dlHC-5Mrq" },
      { name: "Statistics", sinhala: "සංඛ්‍යායන", url: "https://drive.google.com/drive/folders/1vJcewaWW-vhO7t7IICEl6QxYvkD-kfXS" },
      { name: "Music", sinhala: "සංගීතය", url: "https://drive.google.com/drive/folders/1yE81i5BRPY72qcVOZzyoTHsCNrbrwao-" },
      { name: "ICT", sinhala: "තොරතුරු තාක්ෂණය", url: "https://drive.google.com/drive/folders/1m_3dsC5VFmrSo__eIISGWSeJaLorqIos" }
    ]
  },
  "Arts Stream III": {
    color: "from-teal-600 to-green-600",
    lightColor: "from-teal-50 to-green-50",
    icon: <i class="bi bi-feather text-slate-100"></i>,
    subjects: [
      { name: "Dancing", sinhala: "නර්තනය", url: "https://drive.google.com/drive/folders/1pWnjJrP-JsDXNPB4XqvmXoDtfx4n0tes" },
      { name: "Agriculture", sinhala: "කෘෂිකර්මය", url: "https://drive.google.com/drive/folders/1-1pxKAvUt7I0XKYijpnAtR-lW_c4FfOy" },
      { name: "English ", sinhala: "ඉංග්‍රීසි", url: "https://drive.google.com/drive/folders/1J8Pg7BqrMOdmq_LzbwtgO8GE-BSjpU7N" },
      { name: "Tamil", sinhala: "දෙමළ", url: "https://drive.google.com/drive/folders/1fwJl_kGhM3f2djitGehw1rXOBghytf9X" },
      { name: "Home Science", sinhala: "ගෘහ විද්‍යාව", url: "https://drive.google.com/drive/folders/1iEDiJo_E46q-t4ptwiXGB5jiJfymqdj5" },
      { name: "ICT", sinhala: "තොරතුරු තාක්ෂණය", url: "https://drive.google.com/drive/folders/1m_3dsC5VFmrSo__eIISGWSeJaLorqIos" }
    ]
  }
};

// Icons
const DownloadIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

// Subject Card Component
const SubjectCard = ({ subject, onDownload, streamColor, onPasswordProtected }) => (
  <button
    onClick={() => {
      if (subject.name === "ICT" || subject.sinhala === "තොරතුරු තාක්ෂණය") {
        onPasswordProtected(subject);
      } else {
        onDownload(subject.url, subject.sinhala);
      }
    }}
    className="group w-full bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl p-4 transition-all duration-200 flex items-center justify-between hover:shadow-md"
  >
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${streamColor} flex items-center justify-center`}>
        {(subject.name === "ICT" || subject.sinhala === "තොරතුරු තාක්ෂණය") ? (
          <i className="bi bi-lock-fill text-white text-lg"></i>
        ) : (
          <DownloadIcon className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="text-left">
        <p className="font-semibold text-gray-900 text-sm">{subject.name}</p>
        <p className="text-xs text-gray-500">{subject.sinhala}</p>
      </div>
    </div>
    <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
  </button>
);

// Stream Card Component
const StreamCard = ({ title, subjects, onDownload, color, lightColor, icon, isExpanded, onToggle, onPasswordProtected }) => (
  <div className={`bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-300 ${isExpanded ? 'shadow-xl' : 'shadow-sm'}`}>
    <button
      onClick={onToggle}
      className={`w-full p-5 bg-gradient-to-r ${lightColor} flex items-center justify-between transition-all duration-200`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="text-left">
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{subjects.length} subjects available</p>
        </div>
      </div>
      <div className={`w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
        <ChevronDownIcon className="w-5 h-5 text-gray-600" />
      </div>
    </button>

    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="p-4 space-y-2 bg-gray-50/50">
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            subject={subject}
            onDownload={onDownload}
            streamColor={color}
            onPasswordProtected={onPasswordProtected}
          />
        ))}
      </div>
    </div>
  </div>
);

// Main Component
const EducationalPlatform = () => {
  const [notification, setNotification] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [expandedStreams, setExpandedStreams] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [, setPasswordInput] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [, setPasswordError] = useState('');
  const [copied, setCopied] = useState(false);

  const ICT_PASSWORD = "sub@kavidx";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = (url, subjectName) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setNotification(`Opening ${subjectName}...`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handlePasswordProtected = (subject) => {
    setSelectedSubject(subject);
    setShowPasswordModal(true);
    setPasswordInput('');
    setPasswordError('');
    setCopied(false);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(ICT_PASSWORD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

 

  const toggleStream = (streamName) => {
    setExpandedStreams(prev =>
      prev.includes(streamName)
        ? prev.filter(s => s !== streamName)
        : [...prev, streamName]
    );
  };

  const filteredStreams = Object.entries(StreamData).filter(([streamName, data]) => {
    if (!searchInput) return true;
    const searchLower = searchInput.toLowerCase();
    return (
      streamName.toLowerCase().includes(searchLower) ||
      data.subjects.some(s =>
        s.name.toLowerCase().includes(searchLower) ||
        s.sinhala.includes(searchInput)
      )
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <BootstrapIconsLink />
      {/* Navigation */}
      <nav className={`fixed left-0 top-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-xl">📚</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900">Let's Rise</span>
                <span className="text-xl font-bold text-indigo-600"> Together</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {['Home', 'Subjects', 'Resources', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </button>
              <button className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5">
                Get Started Free
              </button>
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <i className="bi bi-list text-gray-700 text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[200] transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <div className={`absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <i className="bi bi-x-lg text-gray-700 text-xl"></i>
              </button>
            </div>
            <div className="space-y-2">
              {['Home', 'Subjects', 'Resources', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <button className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors font-medium">
                Sign In
              </button>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200/40 to-orange-200/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">100% Free for all Sri Lankan students</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your gateway to
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                academic excellence
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              ගංවතුර නිසා ආපදාවට ලක් වූ O/L සහ A/L සිසුන්ට අවශ්‍ය නෝට්ස් පහතින් ලබා ගත හැකිය. පහත සදහන් සියලු නෝට්ස් ලබා දුන් අයට සහ මෙම LINK සකස් කළ NoteKokka ට ස්තුතියි.
            </p>

            {/* Search Box */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search for subjects, streams, or topics..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-lg shadow-gray-200/50"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <span>Browse All Subjects</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-all hover:shadow-md flex items-center justify-center gap-2">
                <span>Watch Demo</span>
                <span><i class="bi bi-play-circle-fill"></i></span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-500 text-lg"></i>
                <span>No registration required</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-500 text-lg"></i>
                <span>Updated regularly</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-500 text-lg"></i>
                <span>Trusted by 10,000+ students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-indigo-600">📖 All Streams</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Browse by stream
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your stream to access comprehensive study materials and past papers
            </p>
          </div>

          {/* Streams Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredStreams.map(([streamName, streamData]) => (
              <StreamCard
                key={streamName}
                title={streamName}
                subjects={streamData.subjects}
                onDownload={handleDownload}
                onPasswordProtected={handlePasswordProtected}
                color={streamData.color}
                lightColor={streamData.lightColor}
                icon={streamData.icon}
                isExpanded={expandedStreams.includes(streamName)}
                onToggle={() => toggleStream(streamName)}
              />
            ))}
          </div>

          {filteredStreams.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No subjects found matching "{searchInput}"</p>
              <button
                onClick={() => setSearchInput('')}
                className="mt-4 text-indigo-600 font-medium hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to start learning?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using our platform to achieve their academic goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <span className="text-xl font-bold">Let's Rise Together</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                ගංවතුර නිසා ආපදාවට ලක් වූ O/L සහ A/L සිසුන්ට අවශ්‍ය නෝට්ස් පහතින් ලබා ගත හැකිය. පහත සදහන් සියලු නෝට්ස් ලබා දුන් අයට සහ මෙම LINK සකස් කළ NoteKokka ට ස්තුතියි.
              </p>
              <h3 className='text-stone-100 font-bold '>👉 "All credits Goes to Respective Owners."</h3>
              <h4 className='text-stone-100 font-serif text-sm mb-6'>👉 "සියලු ගෞරවය සහ පිළිගැනීම මුල් හිමියන්ට අදාල වේ."</h4>
              <div className="flex gap-4">
                {[
                  { icon: "bi-facebook", label: 'Facebook' , url: "https://www.facebook.com/share/1B6gCAsHSe/?mibextid=LQQJ4d" },
                  { icon: "bi-whatsapp", label: 'WhatsApp' , url: "https://whatsapp.com/channel/0029VatscuuGZNCmGBXvEh2Z"},
                  { icon: "bi-tiktok", label: 'Tiktok' , url:'https://www.tiktok.com/@notekokka?_t=...'},
                  { icon: "bi-telegram", label: 'Telegram', url: 'https://t.me/notekokka' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors"
                    title={social.label}
                  >
                    <i className={`bi ${social.icon} text-white text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'Subjects', 'About', 'Contact'].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Streams</h4>
              <div className="space-y-3">
                {['Science', 'Commerce', 'Arts', 'Technology'].map((stream) => (
                  <a key={stream} href="#" className="block text-gray-400 hover:text-white transition-colors">
                    {stream}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Let's Rise Together. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with ❤️ by</span>
              <a href='https://wa.me/94703664329?text=Let%27s%20Rise%20Together'>
              <span className="text-white font-semibold">Pahan Chethana</span>
              </a>
              <span>& Developed by</span>
              <span className="text-indigo-400 font-semibold">Pahan Chethana</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-slide-up">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <i className="bi bi-check-lg text-white text-lg font-bold"></i>
          </div>
          <span className="font-medium">{notification}</span>
        </div>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPasswordModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slide-up">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="bi bi-lock-fill text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Protected Content 🔒</h3>
              <p className="text-gray-600 mb-3">ICT නෝට්ස් වෙත පිවිසීමට රහස්‍ය පදය පහතින්</p>
              <p className="text-sm text-gray-500">Enter the password shown below to access ICT materials</p>
            </div>

            <div className="mb-6">
              {/* Password Display Box */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-600 mb-2 text-center">Password / රහස්‍ය පදය:</p>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-3xl font-bold text-indigo-600 tracking-wider font-mono">
                    {ICT_PASSWORD}
                  </p>
                  <button
                    onClick={handleCopyPassword}
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-indigo-50 border-2 border-indigo-300 rounded-lg transition-all hover:scale-105"
                    title="Copy password"
                  >
                    {copied ? (
                      <>
                        <i className="bi bi-check-circle-fill text-green-500 text-xl"></i>
                        <span className="text-sm font-semibold text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <i className="bi bi-clipboard text-indigo-600 text-xl"></i>
                        <span className="text-sm font-semibold text-indigo-600">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  handleDownload(selectedSubject.url, selectedSubject.sinhala);
                  setShowPasswordModal(false);
                }}
                className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Access ICT Materials / ICT නෝට්ස් වෙත යන්න
              </button>
            </div>

            <button
              onClick={() => {
                setShowPasswordModal(false);
                setPasswordInput('');
                setPasswordError('');
              }}
              className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
            >
              Cancel / වසන්න
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EducationalPlatform;
