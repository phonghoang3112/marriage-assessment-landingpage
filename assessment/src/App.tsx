import { useState, useEffect } from "react";
import { 
  Heart, 
  HelpCircle, 
  User, 
  Users, 
  Award, 
  Menu, 
  X, 
  Mail, 
  Facebook,
  ShieldAlert,
  Home,
  Languages,
  HeartCrack
} from "lucide-react";
import { translations } from "./translations";

function FamilyIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left person (Adult) */}
      <circle cx="6.5" cy="8" r="2" />
      <path d="M3.5 15.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5V17H3.5v-1.5z" />
      
      {/* Right person (Adult) */}
      <circle cx="17.5" cy="8" r="2" />
      <path d="M14.5 15.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5V17h-6v-1.5z" />
      
      {/* Middle person (Child) */}
      <circle cx="12" cy="11.5" r="1.3" />
      <path d="M10 16.5c0-1 1-1.5 2-1.5s2 .5 2 1.5V17h-4v-.5z" />
    </svg>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"vi" | "en">(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "en" || saved === "vi") ? saved : "vi";
  });

  const toggleLang = () => {
    const nextLang = lang === "vi" ? "en" : "vi";
    setLang(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  const t = translations[lang];

  // Scroll effect to add glassmorphism to top bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-surface font-sans overflow-x-hidden min-h-screen selection:bg-secondary/20 selection:text-secondary">
      
      {/* TopAppBar */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled ? "glass-header shadow-sm" : "bg-transparent"}`} id="main-header">
        <div className="flex justify-between items-center w-full px-6 max-w-[1140px] mx-auto">
          <a className="flex items-center gap-2.5" href="https://toanven.vn" target="_blank" rel="noopener noreferrer">
            <img 
              alt="Toàn Vẹn Logo" 
              className="h-8 w-8 shrink-0" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ONz_RmmG8l634XfhMFQSXfW_xmR4HNUzN8O6n9E1fgA8seSXOqpawqphvv3759GrxUEPnr-wJPgnbjKrVu8Ww_WxcPJOetRnlE-BR_Z8e3lyzA66XncE7th_slcJMxrHH4bewEwXeuI5UtQXgTTx-jMaWyDs97tDR4qsZGc8gWMCqghKdfvzS2mXjJ7MfZr8yo41oOwHUVRL3NrGuadRYcWNEQjmmSes1-AdidVYweRVtuFFWtZC-mcPbdzuzt-X1QyVQA3rFBQ" 
              style={{ backgroundColor: "transparent" }}
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="font-sans text-lg md:text-xl text-primary font-bold">
                Toàn Vẹn <span className="font-normal">International</span>
              </span>
              <span className="font-sans text-[8px] md:text-[9px] text-on-surface-variant/80 tracking-wide">
                <span className="block md:inline">Save Your Marriage Assessment |</span>{" "}
                <span className="block md:inline">Đánh giá Hôn Nhân</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a className="font-sans text-sm font-semibold text-on-surface-variant hover:text-emotional-accent transition-colors" href="#quy-trinh">{t.header.process}</a>
            <a className="font-sans text-sm font-semibold text-on-surface-variant hover:text-emotional-accent transition-colors" href="#chuyen-gia">{t.header.experts}</a>
            <a className="font-sans text-sm font-semibold text-on-surface-variant hover:text-emotional-accent transition-colors" href="#so-sanh">{t.header.difference}</a>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant/30 text-xs font-semibold text-on-surface-variant hover:border-emotional-accent hover:text-emotional-accent transition-all cursor-pointer bg-white/50"
              title={lang === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
            >
              <Languages className="w-4 h-4 text-emotional-accent" />
              <span>{lang === "vi" ? "EN" : "VI"}</span>
            </button>

            <a className="vibrant-btn px-6 py-2.5 rounded-full text-[12px] tracking-widest text-center" href="https://toitoanven.fillout.com/assessment" target="_blank" rel="noopener noreferrer">{t.header.registerNow}</a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-outline-variant/30 text-xs font-semibold text-on-surface-variant bg-white/50"
            >
              <Languages className="w-3.5 h-3.5 text-emotional-accent" />
              <span>{lang === "vi" ? "EN" : "VI"}</span>
            </button>
            <button className="text-primary p-2" onClick={() => setMobileMenuOpen(true)} id="menu-toggle">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-[60] md:hidden flex flex-col p-8 space-y-8" id="mobile-menu">
            <div className="flex justify-between items-center">
              <span className="font-serif text-2xl font-semibold text-primary">{t.header.menu}</span>
              <button className="text-primary" onClick={() => setMobileMenuOpen(false)} id="menu-close">
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <a className="mobile-nav-link text-2xl font-serif text-text-deep" href="#quy-trinh" onClick={() => setMobileMenuOpen(false)}>{t.header.process}</a>
              <a className="mobile-nav-link text-2xl font-serif text-text-deep" href="#chuyen-gia" onClick={() => setMobileMenuOpen(false)}>{t.header.experts}</a>
              <a className="mobile-nav-link text-2xl font-serif text-text-deep" href="#so-sanh" onClick={() => setMobileMenuOpen(false)}>{t.header.difference}</a>
              
              {/* Language Switcher inside Mobile Drawer */}
              <button 
                onClick={() => {
                  toggleLang();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-outline-variant/30 text-lg font-serif text-text-deep bg-surface-warm/40"
              >
                <span className="flex items-center gap-3">
                  <Languages className="w-5 h-5 text-emotional-accent" />
                  {lang === "vi" ? "English version" : "Phiên bản tiếng Việt"}
                </span>
                <span className="text-sm font-semibold font-sans bg-white px-2.5 py-1 rounded-full text-emotional-accent border border-outline-variant/20">
                  {lang === "vi" ? "EN" : "VI"}
                </span>
              </button>

              <a className="mobile-nav-link vibrant-btn w-full py-4 text-center rounded-lg mt-4 text-[14px] tracking-widest" href="https://toitoanven.fillout.com/assessment" target="_blank" rel="noopener noreferrer">{t.header.registerNow}</a>
            </nav>
          </div>
        )}
      </header>

      <main className="mt-[72px]">
        {/* Hero Section with Beautiful Background Image Overlay */}
        <section 
          className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-16 md:py-24"
          style={{
            backgroundImage: `linear-gradient(rgba(43, 1, 90, 0.75), rgba(43, 1, 90, 0.75)), url("https://lh3.googleusercontent.com/aida/AP1WRLv2fhar43AtCxst6V4D3GqD5C2S4Iu7-mxAucOe4CZVk56fKHAGxJrwmcWXbhVHCpwrjc3H6BRd1E8qJc2nJtil8ycTk35-vbsfE4-XH1IrcGjl7YMdW3Jv_r4SprY1ESaYViAfBy0Vkkb651oCLH0ay3wHs7PoDfa6Dx5jnCgTZQxG569TJntDoSpFMZmw89X-I0dTbQ5e7dF2jwagK5IFsQJeq0r8UKZA8uWydq44-6inQQK1Nmmx7A0")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-white flex flex-col items-center">
            <span className="font-sans text-xs md:text-sm text-on-secondary-container bg-secondary-container px-4 py-2 rounded-full inline-block font-semibold uppercase tracking-wider">
              {t.hero.subtitle}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-bold">
              {t.hero.titleFirstLine} <br className="hidden md:inline" />
              {t.hero.titleSecondLine} <br className="hidden md:inline" />
              <span className="text-emotional-accent font-serif">{t.hero.titleAccent}</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed mt-4">
              {t.hero.descriptionLine1} <br />
              {t.hero.descriptionLine2}
            </p>
            <div className="pt-6">
              <a className="vibrant-btn px-8 py-4 rounded-full inline-block text-sm" href="https://toitoanven.fillout.com/assessment" target="_blank" rel="noopener noreferrer">
                {t.hero.button}
              </a>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-surface-warm px-6 py-20 border-y border-outline-variant/10">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12 font-bold">{t.painPoints.heading}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {t.painPoints.cards.map((card, idx) => {
                let icon = <HelpCircle className="w-10 h-10 text-emotional-accent" />;
                if (idx === 1) icon = <HeartCrack className="w-10 h-10 text-emotional-accent" />;
                if (idx === 2) icon = <FamilyIcon className="w-10 h-10 text-emotional-accent" />;
                if (idx === 3) icon = <Users className="w-10 h-10 text-emotional-accent" />;
                
                return (
                  <div key={idx} className="bg-white p-8 rounded-xl flex flex-col items-center text-center space-y-4 shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                    <div className="h-12 flex items-center justify-center">
                      {icon}
                    </div>
                    <p className="font-sans text-base md:text-lg text-text-deep font-semibold">{card.title}</p>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Value Prop */}
        <section className="px-6 py-20 overflow-hidden bg-background">
          <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-left">
              <h2 className="font-serif text-3xl md:text-4xl text-text-deep font-bold">{t.valueProp.title}</h2>
              <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
                {t.valueProp.desc1} <strong>{t.valueProp.desc2}</strong>
              </p>
              <div className="flex items-start gap-4 p-5 bg-primary-fixed/20 rounded-lg">
                <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="font-sans text-sm md:text-base text-primary font-medium italic leading-relaxed">
                  {t.valueProp.note}
                </p>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img 
                  className="w-full h-full object-cover" 
                  alt={t.valueProp.imageAlt}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIQ6p0mUNLaWrW3N7xDzZ7_97kRoN7yvvEYkrD2_i2eNeoFsFECCQ9eXwGp--eUK4EqJzsrMLVnrTM4iZw33-d-BSNOpWDtMqqcRC8BcW8xkQ_FUq-KHtppI4tgaBWR6DRFrj4vzX4U5FDwCzlD-p5YuW_YyDoCbt5eA5-PVGXqkqHDFC0PyCB4feJdDfP-8I8Y5oUWtHGqDwO6zk8WcrNUh5bvqlXP4RhQjEGeAz9gPu1cQ0M-2CD1zE0tOuKpzRDZdAIsiRZQw8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-primary-container text-on-primary px-6 py-20">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">{t.results.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {t.results.cards.map((card, idx) => (
                <div key={idx} className="p-6 border rounded-xl transition-colors border-outline-variant/30 hover:bg-white/10 text-left">
                  <span className="font-sans font-bold text-action-vibrant text-lg mb-2 block">{card.num}</span>
                  <h4 className="font-sans font-bold text-sm md:text-base text-white mb-2">{card.title}</h4>
                  <p className="text-xs text-white/85 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-20 bg-background" id="quy-trinh">
          <div className="max-w-2xl mx-auto text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-text-deep mb-12 font-bold">{t.process.heading}</h2>
            <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-outline-variant">
              {t.process.steps.map((step, idx) => {
                let bgColor = "bg-[#ffb74d]";
                if (idx === 1) bgColor = "bg-[#fb8c00]";
                if (idx === 2) bgColor = "bg-[#e65100]";
                
                return (
                  <div key={idx} className="relative pl-16 flex flex-col space-y-2">
                    <div className={`absolute left-8 w-4 h-4 rounded-full ${bgColor} -translate-x-1/2`}></div>
                    <h4 className="font-serif text-lg md:text-xl font-bold text-text-deep">{step.title}</h4>
                    <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-surface-container-low px-6 py-20" id="so-sanh">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-text-deep mb-6 font-bold">{t.comparison.heading}</h2>
            
            <div className="font-sans text-sm md:text-base text-on-surface-variant mb-12 max-w-3xl mx-auto leading-relaxed space-y-4">
              {t.comparison.subheading.split("\n\n").map((para, i) => (
                <p key={i} className={para.startsWith('"') ? "font-semibold text-text-deep italic" : ""}>
                  {para}
                </p>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-outline-variant/20">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 md:p-6 text-left font-sans text-xs md:text-sm font-semibold uppercase tracking-wider">{t.comparison.colCriteria}</th>
                    <th className="p-4 md:p-6 text-center font-sans text-xs md:text-sm font-semibold uppercase tracking-wider bg-primary/95">{t.comparison.colToanVen}</th>
                    <th className="p-4 md:p-6 text-center font-sans text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80">{t.comparison.colNormal}</th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm text-on-surface text-left">
                  {t.comparison.rows.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-outline-variant/20 hover:bg-surface-warm/20 transition-colors ${idx % 2 === 1 ? "bg-surface-container-lowest" : ""} ${idx === t.comparison.rows.length - 1 ? "border-b-0" : ""}`}
                    >
                      <td className="p-6 font-bold text-text-deep align-top">{row.criteria}</td>
                      <td className="p-6 text-[#b6086d] font-bold align-top">
                        {row.toanVen.split("\n").map((line, i) => (
                          <div key={i} className={line.startsWith("•") ? "pl-2" : ""}>{line}</div>
                        ))}
                      </td>
                      <td className="p-6 text-on-surface-variant font-medium align-top">
                        {row.normal.split("\n").map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom note of comparison */}
            <div className="mt-8 text-left bg-surface-container/30 p-6 rounded-2xl border border-outline-variant/10 text-on-surface-variant text-xs md:text-sm leading-relaxed max-w-4xl mx-auto">
              <p className="italic">{t.comparison.postNote}</p>
            </div>
          </div>
        </section>

        {/* Experts */}
        <section className="px-6 py-20 bg-background" id="chuyen-gia">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-text-deep mb-12 font-bold">{t.experts.heading}</h2>
            <div className="grid gap-12 grid-cols-1">
              
              {/* Expert 1 */}
              <div className="ambient-card rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center w-full">
                <img 
                  alt={t.experts.expert1.name} 
                  className="w-full md:w-1/2 h-[350px] md:h-[500px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVknrIL5RgHItR__JVj0qy4r0kXpxavwBm8WybMfJ-ZNleLziOo1HN7kfMWuGMiGaeB7YoXxDU7Bnn9-Jj42N64z7BP5AWk2j4UuCyQ1HewkW3H_zN6FHSEQPmPcX9wBjkQPmORdkX_A4rvoKYEsWaTI9F7F_lZhf_6eAMsroK-Ns7nFrhZt-6Ei2EzyoEcTB_qTl33XGAZIBAbJuFpfSdTFnKgOx159iMmTPmMY-atDAEjZ3DC2Vnzt7olo0OW-aZqsc17KIjWmI"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 md:p-10 md:w-1/2 text-left space-y-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">{t.experts.expert1.name}</h3>
                  <span className="text-emotional-accent font-bold uppercase tracking-tighter text-xs block leading-relaxed">
                    {t.experts.expert1.title}
                  </span>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    {t.experts.expert1.bio}
                  </p>
                </div>
              </div>

              {/* Expert 2 */}
              <div className="ambient-card rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center w-full">
                <img 
                  alt={t.experts.expert2.name} 
                  className="w-full md:w-1/2 h-[350px] md:h-[500px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGJi1fOdA243IZ5Sh9AHMLt4pzQFP2nVhs2bpYIdbln8s2IMP7Noh_P9ECrLBc4y_RQJT75PGuWHoVNjuoQDSrhtWTXbszMzZ99pIt2Oj0IEasHWM6P_kjqVJLBcXfs2Nkkz69wxWEwgm2prOg4yiz1Px37o3CEEwuDzr9Mu-Hvo2v3Tbr2htOmdsvzqBsp-FTPtf4PRzYbcqwt7msZnIAI1Q60D-CtWkQ-rXsRQPUkIr79oRhlI0SKuL1GnaxZvRdXuoq3e1gvw2yeg" 
                  style={{ objectPosition: "center 80%" }}
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 md:p-10 md:w-1/2 text-left space-y-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">{t.experts.expert2.name}</h3>
                  <span className="text-emotional-accent font-bold uppercase tracking-tighter text-xs block leading-relaxed">
                    {t.experts.expert2.title}
                  </span>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    {t.experts.expert2.bio}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-surface-warm px-6 py-20">
          <div className="max-w-[800px] mx-auto text-center space-y-10">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">{t.pricing.heading}</h2>
              <p className="font-sans text-base md:text-lg text-on-surface-variant">{t.pricing.subheading}</p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-4 border-action-vibrant/20 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-2 pricing-border-gradient"></div>
              <div className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">{t.pricing.badge}</div>
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">{t.pricing.price} <span className="text-xl md:text-2xl font-normal text-on-surface-variant">{t.pricing.priceUnit}</span></div>
              <p className="text-on-surface-variant font-medium mb-10 text-sm md:text-base">{t.pricing.vatLabel}</p>
              <a className="inline-block w-full vibrant-btn text-white py-5 rounded-full text-xs tracking-[0.2em] font-bold text-center" href="https://toitoanven.fillout.com/assessment" target="_blank" rel="noopener noreferrer">{t.pricing.button}</a>
              <p className="mt-6 text-xs text-on-surface-variant italic leading-relaxed">{t.pricing.note}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container text-on-surface px-6 py-12 border-t border-outline-variant/10">
        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a className="flex items-center gap-2.5" href="https://toanven.vn" target="_blank" rel="noopener noreferrer">
              <img 
                alt="Toàn Vẹn Logo" 
                className="h-8 w-8 shrink-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU1ebUauadM--pMhIl7rQCCvS3GPqZMwcXlTzgeCKFqtjoRMwVyol_oOl-p9OMkIrQtnvRcKcVNybZZNgakZVHRMNCIJEYOxMIVnIYT4DFEmPV3b_zhFymPEcB26imaXdTYgSDfBcbByv4H7W5qTnAgjFHU6aeruKlFCwMbUTnOsAdOrzhoDMQBKyt8GiqCqwcaVnHFItx7mmGUL9_AqYJQCQ0A1HDrh43X6o4o2-iPICMjIsRPSX5WonQPHMVV2I8vQtYtoB3Xuo" 
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col text-left leading-tight">
                <span className="font-sans text-lg md:text-xl text-primary font-bold">
                  Toàn Vẹn <span className="font-normal">International</span>
                </span>
                <span className="font-sans text-[8px] md:text-[9px] text-on-surface-variant/80 tracking-wide">
                  Save Your Marriage Assessment | Đánh giá Hôn Nhân
                </span>
              </div>
            </a>
            <p className="font-sans text-xs text-on-surface-variant text-center md:text-left">{t.footer.copyright}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm">
            <a className="text-on-surface-variant hover:text-emotional-accent transition-colors flex items-center gap-2 font-medium" href="mailto:toanveninstitute@gmail.com">
              <Mail className="w-4 h-4" />
              <span>Email: toanveninstitute@gmail.com</span>
            </a>
            <a className="text-on-surface-variant hover:text-emotional-accent transition-colors flex items-center gap-2 font-medium" href="https://facebook.com/toitoanven" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4" />
              <span>facebook.com/toitoanven</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
