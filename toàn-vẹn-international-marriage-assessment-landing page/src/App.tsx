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
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Load Fillout embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-background text-on-surface font-sans overflow-x-hidden min-h-screen selection:bg-secondary/20 selection:text-secondary">
      
      {/* TopAppBar */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled ? "glass-header shadow-sm" : "bg-transparent"}`} id="main-header">
        <div className="flex justify-between items-center w-full px-6 max-w-[1140px] mx-auto">
          <a className="flex items-center gap-2" href="#">
            <img 
              alt="Toàn Vẹn Logo" 
              className="h-8 w-8" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ONz_RmmG8l634XfhMFQSXfW_xmR4HNUzN8O6n9E1fgA8seSXOqpawqphvv3759GrxUEPnr-wJPgnbjKrVu8Ww_WxcPJOetRnlE-BR_Z8e3lyzA66XncE7th_slcJMxrHH4bewEwXeuI5UtQXgTTx-jMaWyDs97tDR4qsZGc8gWMCqghKdfvzS2mXjJ7MfZr8yo41oOwHUVRL3NrGuadRYcWNEQjmmSes1-AdidVYweRVtuFFWtZC-mcPbdzuzt-X1QyVQA3rFBQ" 
              style={{ backgroundColor: "transparent" }}
              referrerPolicy="no-referrer"
            />
            <span className="font-sans text-xl md:text-2xl text-primary">
              <span className="font-bold">Toàn Vẹn</span> International
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a className="font-sans text-sm font-semibold text-on-surface-variant hover:text-emotional-accent transition-colors" href="#quy-trinh">Quy trình</a>
            <a className="font-sans text-sm font-semibold text-on-surface-variant hover:text-emotional-accent transition-colors" href="#chuyen-gia">Chuyên gia</a>
            <a className="font-sans text-sm font-semibold text-on-surface-variant hover:text-emotional-accent transition-colors" href="#so-sanh">Sự khác biệt</a>
            <a className="vibrant-btn px-6 py-2.5 rounded-full text-[12px] tracking-widest text-center" href="#dang-ky">ĐĂNG KÝ NGAY</a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-primary p-2" onClick={() => setMobileMenuOpen(true)} id="menu-toggle">
            <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-[60] md:hidden flex flex-col p-8 space-y-8" id="mobile-menu">
            <div className="flex justify-between items-center">
              <span className="font-serif text-2xl font-semibold text-primary">Menu</span>
              <button className="text-primary" onClick={() => setMobileMenuOpen(false)} id="menu-close">
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <a className="mobile-nav-link text-2xl font-serif text-text-deep" href="#quy-trinh" onClick={() => setMobileMenuOpen(false)}>Quy trình</a>
              <a className="mobile-nav-link text-2xl font-serif text-text-deep" href="#chuyen-gia" onClick={() => setMobileMenuOpen(false)}>Chuyên gia</a>
              <a className="mobile-nav-link text-2xl font-serif text-text-deep" href="#so-sanh" onClick={() => setMobileMenuOpen(false)}>Sự khác biệt</a>
              <a className="mobile-nav-link vibrant-btn w-full py-4 text-center rounded-lg mt-4 text-[14px] tracking-widest" href="#dang-ky" onClick={() => setMobileMenuOpen(false)}>ĐĂNG KÝ NGAY</a>
            </nav>
          </div>
        )}
      </header>

      <main className="mt-[72px]">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="font-sans text-xs md:text-sm text-secondary uppercase tracking-[0.2em] font-semibold">
              DÀNH CHO NHỮNG AI ĐANG TRÊN BỜ VỰC TAN VỠ CỦA HÔN NHÂN
            </p>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-text-deep leading-tight font-bold">
              Trước khi dành thêm tình cảm, thời gian và sức lực cho cuộc hôn nhân này,<br />
              hay trước khi quyết định buông tay,<br />
              <span className="text-emotional-accent">bạn xứng đáng có sự rõ ràng.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Bạn cần một đánh giá trung thực để bạn nhìn thấy sự thật và liệu có một con đường nào khả thi phía trước hay không. <br />
              Dành cho những ai thực sự nghiêm túc trong việc tìm ra sự thật, ngay cả khi sự thật đó không dễ để đón nhận.
            </p>
            <div className="pt-4">
              <a className="vibrant-btn px-8 py-4 rounded-full inline-block text-sm" href="#dang-ky">
                ĐĂNG KÝ ĐÁNH GIÁ HÔN NHÂN
              </a>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-surface-warm px-6 py-20 transition-all duration-1000 opacity-100 translate-y-0 border-y border-outline-variant/10">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12 font-bold">Có phải bạn đang...</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="ambient-card p-8 flex flex-col items-center text-center space-y-4">
                <HelpCircle className="w-10 h-10 text-emotional-accent" />
                <p className="font-sans text-base md:text-lg text-text-deep font-semibold">...Hoang mang tự hỏi liệu cuộc hôn nhân này có thực sự đã đi đến hồi kết?</p>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Liệu mối quan hệ này còn cứu vãn được không? Hay bạn đang cố bấu víu vào một điều không còn thuộc về mình. <br />Hai người chỉ tạm lạc hướng, hay đây thực sự là kết thúc?
                </p>
              </div>
              <div className="ambient-card p-8 flex flex-col items-center text-center space-y-4">
                <User className="w-10 h-10 text-emotional-accent" />
                <p className="font-sans text-base md:text-lg text-text-deep font-semibold">...Cảm thấy mình đơn độc trong nỗ lực cứu vãn hôn nhân?</p>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Bạn cảm thấy mình là người duy nhất nỗ lực để kết nối và hàn gắn bằng nhiều cách trong khi người kia đã âm thầm buông xuôi. Bạn hoang mang không biết mình đang nỗ lực vì điều gì.
                </p>
              </div>
              <div className="ambient-card p-8 flex flex-col items-center text-center space-y-4">
                <Heart className="w-10 h-10 text-emotional-accent" />
                <p className="font-sans text-base md:text-lg text-text-deep font-semibold">...Lo sợ con cái bị tổn thương nếu cha mẹ chia tay?</p>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Bạn sợ con mình bị tổn thương và thiệt thòi khi cha mẹ ly hôn, nhưng cũng thấy được rằng hạnh phúc của con bị bào mòn bởi sự lạnh nhạt và tranh cãi.
                </p>
              </div>
              <div className="ambient-card p-8 flex flex-col items-center text-center space-y-4">
                <Users className="w-10 h-10 text-emotional-accent" />
                <p className="font-sans text-base md:text-lg text-text-deep font-semibold">...Gánh chịu áp lực nặng nề từ thể diện và hai bên gia đình?</p>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Những câu hỏi "Ly hôn rồi biết ăn nói sao với bố mẹ, họ hàng?"... đè nặng lên bạn. Trong văn hóa Á Đông, hình ảnh một gia đình hạnh phúc gắn liền với thể diện, khiến quyết định đi hay ở trở nên thêm nặng nề.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop */}
        <section className="px-6 py-20 overflow-hidden bg-background">
          <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-left">
              <h2 className="font-serif text-3xl md:text-4xl text-text-deep font-bold">"Đánh Giá Hôn Nhân" - Nhìn Thấu Sự Thật Về Mối Quan Hệ Của Bạn</h2>
              <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
                Không phải trị liệu tâm lý hay những buổi nói chuyện kéo dài không hồi kết. Đây là <strong>03 buổi đánh giá</strong> với quy trình tập trung giúp bạn trả lời một câu hỏi duy nhất: <strong>Liệu cuộc hôn nhân này còn có thể cứu vãn, hay bạn đang cố giữ lấy một điều không còn thuộc về mình?</strong>
              </p>
              <div className="flex items-start gap-4 p-5 bg-primary-fixed/20 rounded-lg">
                <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="font-sans text-sm md:text-base text-primary font-medium italic leading-relaxed">
                  Chúng tôi tin rằng bạn không cần thêm lời khuyên xoa dịu — bạn cần sự rõ ràng. Một đánh giá trung thực về việc hôn nhân đang ở đâu, điều gì thực sự xảy ra, và con đường khả thi nào phía trước dành cho bạn.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-square bg-gradient-to-br from-secondary-container to-primary rounded-3xl overflow-hidden shadow-2xl rotate-3">
                <img 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80" 
                  alt="Sự thấu hiểu và gắn kết"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv5jaKnidY58l-B8eLqycX6wpux0zzfKXkVy_GljzQo91rPfVPcsx8gyG9VSbVDJDL2GOy3S30HtXCwTSK569U19KQzLpvba2OGBZrdOYw9wiALsrmC_g790U-69tQZK9Ql27MrcbsIceP9GwuFxfKvGZMPbw-2okdd4vSWR0rMcMCwVYajtmoPqzQyoAyw-VRa83DP6yhciq4Ro_UWVzbhH_UEB-oowa4glAKTrVZ044KWiv6-0VZiprQ1c86d5ZKNMl8wckScMA"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white opacity-40" />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-primary text-on-primary px-6 py-20">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Sau Buổi Đánh Giá, Bạn Sẽ Biết Được:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="p-6 border border-on-primary/10 rounded-xl hover:bg-on-primary/5 transition-colors text-left">
                <span className="font-sans font-bold text-action-vibrant text-lg mb-2 block">01</span>
                <h4 className="font-sans font-bold text-sm md:text-base mb-2">Hôn Nhân Có Còn Cứu Được Không?</h4>
                <p className="text-xs text-on-primary/85 leading-relaxed">Nhận kết luận chuyên môn, trung thực về khả năng hàn gắn thực tế của mối quan hệ.</p>
              </div>
              <div className="p-6 border border-on-primary/10 rounded-xl hover:bg-on-primary/5 transition-colors text-left">
                <span className="font-sans font-bold text-action-vibrant text-lg mb-2 block">02</span>
                <h4 className="font-sans font-bold text-sm md:text-base mb-2">Nguyên Nhân Thực Sự Đang Phá Vỡ Hôn Nhân</h4>
                <p className="text-xs text-on-primary/85 leading-relaxed">Nhìn rõ những khuôn mẫu hành vi, oán giận âm ỉ và động lực ngầm đang đẩy hai người ra xa.</p>
              </div>
              <div className="p-6 border border-on-primary/10 rounded-xl hover:bg-on-primary/5 transition-colors text-left">
                <span className="font-sans font-bold text-action-vibrant text-lg mb-2 block">03</span>
                <h4 className="font-sans font-bold text-sm md:text-base mb-2">Lộ Trình Cụ Thể Để Hàn Gắn</h4>
                <p className="text-xs text-on-primary/85 leading-relaxed">Nếu còn cứu vãn được, bạn sẽ biết rõ điều gì cần thay đổi, trách nhiệm cụ thể của mỗi người và các trở ngại cần vượt qua.</p>
              </div>
              <div className="p-6 border border-on-primary/10 rounded-xl hover:bg-on-primary/5 transition-colors text-left">
                <span className="font-sans font-bold text-action-vibrant text-lg mb-2 block">04</span>
                <h4 className="font-sans font-bold text-sm md:text-base mb-2">Tác Động Thực Tế Lên Con Cái</h4>
                <p className="text-xs text-on-primary/85 leading-relaxed">Thấy rõ cuộc hôn nhân hiện tại đang thực sự ảnh hưởng như thế nào đến tâm lý và tinh thần của con bạn.</p>
              </div>
              <div className="p-6 border border-on-primary/10 rounded-xl hover:bg-on-primary/5 transition-colors text-left">
                <span className="font-sans font-bold text-action-vibrant text-lg mb-2 block">05</span>
                <h4 className="font-sans font-bold text-sm md:text-base mb-2">Đề Xuất Con Đường Phù Hợp Nhất</h4>
                <p className="text-xs text-on-primary/85 leading-relaxed">Nhận đề xuất lộ trình rõ ràng (hàn gắn, trị liệu bài bản, phát triển bản thân, hoặc chia tay lành mạnh) để bạn rời đi với sự rõ ràng tuyệt đối thay vì đoán mò.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-20 bg-background" id="quy-trinh">
          <div className="max-w-2xl mx-auto text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-text-deep mb-12 font-bold">Lộ trình 3 buổi chuyên sâu</h2>
            <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-outline-variant">
              <div className="relative pl-16 flex flex-col space-y-2">
                <div className="absolute left-8 w-4 h-4 rounded-full bg-emotional-accent -translate-x-1/2"></div>
                <h4 className="font-serif text-lg md:text-xl font-bold text-text-deep">Buổi 1: Gặp riêng người bạn đời thứ nhất</h4>
                <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">Lắng nghe góc nhìn cá nhân, những tổn thương và kỳ vọng thầm kín.</p>
              </div>
              <div className="relative pl-16 flex flex-col space-y-2">
                <div className="absolute left-8 w-4 h-4 rounded-full bg-secondary -translate-x-1/2"></div>
                <h4 className="font-serif text-lg md:text-xl font-bold text-text-deep">Buổi 2: Gặp riêng người bạn đời thứ hai</h4>
                <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">Hoàn thiện bức tranh đa chiều từ phía đối phương, đảm bảo tính khách quan tuyệt đối.</p>
              </div>
              <div className="relative pl-16 flex flex-col space-y-2">
                <div className="absolute left-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
                <h4 className="font-serif text-lg md:text-xl font-bold text-text-deep">Buổi 3: Buổi họp chung đúc kết</h4>
                <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">Phân tích các chỉ số hôn nhân và đưa ra khuyến nghị chuyên môn</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-surface-container-low px-6 py-20" id="so-sanh">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-text-deep mb-4 font-bold">Chọn đúng chuyên gia Hôn nhân của bạn!</h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant mb-12 italic max-w-3xl mx-auto leading-relaxed">
              Lựa chọn ít tốn kém nhất không phải là lựa chọn có giá từng buổi thấp nhất, mà là lựa chọn giúp giải quyết vấn đề hiệu quả nhất với tổn thất thấp nhất cho cuộc sống của bạn.
            </p>
            <div className="overflow-x-auto rounded-xl shadow-lg border border-outline-variant/20">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 md:p-5 text-left font-sans text-xs md:text-sm font-semibold uppercase tracking-wider">Tiêu chí so sánh</th>
                    <th className="p-4 md:p-5 text-center font-sans text-xs md:text-sm font-semibold uppercase tracking-wider bg-primary/95">Lộ trình tại Toàn Vẹn</th>
                    <th className="p-4 md:p-5 text-center font-sans text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80">Khai vấn thông thường</th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm text-on-surface text-left">
                  <tr className="border-b border-outline-variant/20 hover:bg-surface-warm/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-text-deep">Giá mỗi buổi</td>
                    <td className="p-4 md:p-5 text-center text-secondary font-bold bg-surface-warm/40">Khoảng 3,3 triệu VNĐ</td>
                    <td className="p-4 md:p-5 text-center opacity-60 font-medium">Thường 1 - 2 triệu VNĐ</td>
                  </tr>
                  <tr className="border-b border-outline-variant/20 hover:bg-surface-warm/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-text-deep">Số lượng buổi</td>
                    <td className="p-4 md:p-5 text-center text-secondary font-bold bg-surface-warm/40">Gói gọn trong 3 buổi chuyên sâu</td>
                    <td className="p-4 md:p-5 text-center opacity-60 font-medium">Không cố định, có thể kéo dài liên tục</td>
                  </tr>
                  <tr className="border-b border-outline-variant/20 hover:bg-surface-warm/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-text-deep">Tổng chi phí đầu vào</td>
                    <td className="p-4 md:p-5 text-center text-secondary font-bold bg-surface-warm/40">Biết trước rõ ràng: 10 triệu VNĐ</td>
                    <td className="p-4 md:p-5 text-center opacity-60 font-medium">Chưa biết trước (phụ thuộc buổi phát sinh)</td>
                  </tr>
                  <tr className="border-b border-outline-variant/20 hover:bg-surface-warm/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-text-deep">Thời gian đạt sự rõ ràng</td>
                    <td className="p-4 md:p-5 text-center text-secondary font-bold bg-surface-warm/40">Cam kết có câu trả lời sau 3 buổi</td>
                    <td className="p-4 md:p-5 text-center opacity-60 font-medium">Phụ thuộc từng trường hợp</td>
                  </tr>
                  <tr className="hover:bg-surface-warm/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-text-deep">Thời gian cam kết</td>
                    <td className="p-4 md:p-5 text-center text-secondary font-bold bg-surface-warm/40">Hoàn thành trong khoảng 1 tuần</td>
                    <td className="p-4 md:p-5 text-center opacity-60 font-medium">Kéo dài nhiều tuần hoặc nhiều tháng</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Experts */}
        <section className="px-6 py-20 bg-background" id="chuyen-gia">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-text-deep mb-12 font-bold">Đội Ngũ Chuyên Gia Đồng Hành Cùng Bạn</h2>
            <div className="grid gap-12 grid-cols-1">
              
              {/* Expert 1 */}
              <div className="ambient-card rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center w-full">
                <img 
                  alt="Chị Mai Khôi" 
                  className="w-full md:w-1/2 h-[350px] md:h-[500px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVknrIL5RgHItR__JVj0qy4r0kXpxavwBm8WybMfJ-ZNleLziOo1HN7kfMWuGMiGaeB7YoXxDU7Bnn9-Jj42N64z7BP5AWk2j4UuCyQ1HewkW3H_zN6FHSEQPmPcX9wBjkQPmORdkX_A4rvoKYEsWaTI9F7F_lZhf_6eAMsroK-Ns7nFrhZt-6Ei2EzyoEcTB_qTl33XGAZIBAbJuFpfSdTFnKgOx159iMmTPmMY-atDAEjZ3DC2Vnzt7olo0OW-aZqsc17KIjWmI"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 md:p-10 md:w-1/2 text-left space-y-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">Chị Mai Khôi</h3>
                  <span className="text-emotional-accent font-bold uppercase tracking-tighter text-xs block leading-relaxed">
                    Chuyên gia Khai Vấn quốc tế với 30 năm kinh nghiệm &amp; Tác Giả Sách về Hôn Nhân &amp; Mối Quan Hệ.
                  </span>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    Chị Mai Khôi có gần 30 năm kinh nghiệm tham tham vấn tại Mỹ và nhiều quốc gia. Chị là người phụ nữ châu Á đầu tiên đạt chứng chỉ Certified Professional Co-Active Coach (CPCC) tại Mỹ, và là Trainer đã đào tạo hơn 2.000 coach toàn cầu. Chị là tác giả của 2 cuốn sách xuất bản tại Mỹ và cuốn 'Người Phụ Nữ Toàn Vẹn' tại Việt Nam. Trải nghiệm thấu cảm lớn nhất của chị đến từ việc chính mình đi qua hai lần ly hôn lành mạnh, giúp chị nhận ra kết thúc không phải thất bại mà là một hành trình trọn vẹn theo cách riêng. Chị đồng hành giúp khách hàng tìm lại sự thật và nền tảng của riêng họ thay vì đi theo một khuôn mẫu có sẵn.
                  </p>
                </div>
              </div>

              {/* Expert 2 */}
              <div className="ambient-card rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center w-full">
                <img 
                  alt="Chị Minh Ngọc" 
                  className="w-full md:w-1/2 h-[350px] md:h-[500px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc7CExDgGUVGXFBXwKRkCbalgxuUlxeyggGbp32hONyomF8gcgoVtAZ_ITgPhstyqaL98gDCm_6FW9rO0jTB0QvAZMfSy8wlOuQBuilmmBW5xHL8KO9HnFkM5931VbDYcJt0vSCdV2BtF3lj-4v1raGrXlmouFvj8QV1gCKN8X1mvbgzFJwj6jMMx2AK7yEVFcPw36bhJBAlrXw0EJzuOGCO9g2i3gXI4-MTi-zNhXFv-tHhhBK1IUvPSUeobQd9HARki-3G1K-nU" 
                  style={{ objectPosition: "center 10%" }}
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 md:p-10 md:w-1/2 text-left space-y-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold">Chị Minh Ngọc</h3>
                  <span className="text-emotional-accent font-bold uppercase tracking-tighter text-xs block leading-relaxed">
                    Chuyên gia Khai vấn về Mối quan hệ và Tình dục - Certified Relationship &amp; Sex Coach (ICF PCC)
                  </span>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    Chị Minh Ngọc thấu hiểu sâu sắc nỗi đau từ chính hành trình dùng coaching tự cứu mình qua chuỗi biến cố dồn dập (sinh con, mất mẹ, dịch bệnh, kinh doanh đổ vỡ) khi đang cố gánh vác mọi thứ bên ngoài trong khi bên trong đã rạn nứt. Chị không đi lên từ lý thuyết sách vở mà từ trải nghiệm thực tế của người đứng giữa lanh giới giữ và buông. Là Certified Relationship &amp; Sex Coach, chị đồng hành cùng các cặp đôi tháo gỡ những nút thắt khó nói nhất: sự lạnh nhạt chăn gối và mất kết nối thân mật kéo dài nhiều năm.
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
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold">Sẵn sàng để tìm lại sự rõ ràng?</h2>
              <p className="font-sans text-base md:text-lg text-on-surface-variant">Một lộ trình toàn diện cho cuộc hôn nhân của bạn</p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-4 border-action-vibrant/20 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-2 pricing-border-gradient"></div>
              <div className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">GIỚI HẠN 5 CẶP ĐÔI/THÁNG</div>
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">10.000.000 <span className="text-xl md:text-2xl font-normal text-on-surface-variant">VNĐ</span></div>
              <p className="text-on-surface-variant font-medium mb-10 text-sm md:text-base">Đã bao gồm VAT cho lộ trình 3 buổi chuyên sâu</p>
              <a className="inline-block w-full vibrant-btn text-white py-5 rounded-full text-xs tracking-[0.2em] font-bold text-center" href="#dang-ky">ĐĂNG KÝ ĐÁNH GIÁ HÔN NHÂN</a>
              <p className="mt-6 text-xs text-on-surface-variant italic leading-relaxed">Vì tính chất chuyên sâu và bảo mật, chúng tôi chỉ nhận đồng hành cùng một số lượng rất nhỏ khách hàng mỗi tháng để đảm bảo chất lượng cao nhất.</p>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-20 px-6 bg-surface-container-low" id="dang-ky">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 font-bold">Bắt đầu hành trình của bạn</h2>
            <p className="text-on-surface-variant font-sans text-sm md:text-base mb-12">Vui lòng điền thông tin bên dưới để chúng tôi liên hệ tư vấn sơ bộ.</p>
            
            <div className="bg-white rounded-[40px] p-1 h-auto overflow-hidden shadow-sm border border-outline-variant/30">
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 md:p-12 border-4 border-dashed border-outline-variant/20 rounded-[38px] bg-surface-bright/50">
                <Mail className="w-12 h-12 text-outline-variant/80 mb-6" />
                <h3 className="font-serif text-xl md:text-2xl text-primary mb-4 font-bold">Form Đăng Ký Đánh Giá</h3>
                <p className="text-on-surface-variant max-w-md mb-10 text-sm md:text-base leading-relaxed">
                  Điền thông tin để nhận tư vấn sơ bộ: Họ tên, Số điện thoại Zalo. Chuyên gia sẽ liên hệ với bạn trong vòng 24h.
                </p>
                
                <div className="w-full max-w-lg mx-auto overflow-hidden rounded-xl border border-outline-variant/20 bg-white">
                  <div 
                    style={{ width: "100%", height: "500px" }} 
                    data-fillout-id="ku9R4TXMHYus" 
                    data-fillout-embed-type="standard" 
                    data-fillout-inherit-parameters="" 
                    data-fillout-dynamic-resize=""
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container text-on-surface px-6 py-12 border-t border-outline-variant/10">
        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-2">
              <img 
                alt="Toàn Vẹn Logo" 
                className="h-8 w-8" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU1ebUauadM--pMhIl7rQCCvS3GPqZMwcXlTzgeCKFqtjoRMwVyol_oOl-p9OMkIrQtnvRcKcVNybZZNgakZVHRMNCIJEYOxMIVnIYT4DFEmPV3b_zhFymPEcB26imaXdTYgSDfBcbByv4H7W5qTnAgjFHU6aeruKlFCwMbUTnOsAdOrzhoDMQBKyt8GiqCqwcaVnHFItx7mmGUL9_AqYJQCQ0A1HDrh43X6o4o2-iPICMjIsRPSX5WonQPHMVV2I8vQtYtoB3Xuo" 
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl font-bold text-primary">Toàn Vẹn</span>
            </div>
            <p className="font-sans text-xs text-on-surface-variant text-center md:text-left">© 2026 Toàn Vẹn International. All rights reserved</p>
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
