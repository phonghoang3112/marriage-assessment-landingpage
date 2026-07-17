export interface TranslationSet {
  header: {
    process: string;
    experts: string;
    difference: string;
    registerNow: string;
    menu: string;
  };
  hero: {
    subtitle: string;
    titleFirstLine: string;
    titleSecondLine: string;
    titleThirdLine: string;
    titleAccent: string;
    descriptionLine1: string;
    descriptionLine2: string;
    button: string;
  };
  painPoints: {
    heading: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
  };
  valueProp: {
    title: string;
    desc1: string;
    desc2: string;
    note: string;
    imageAlt: string;
  };
  results: {
    heading: string;
    cards: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  process: {
    heading: string;
    steps: Array<{
      title: string;
      desc: string;
    }>;
  };
  comparison: {
    heading: string;
    subheading: string;
    colCriteria: string;
    colToanVen: string;
    colNormal: string;
    rows: Array<{
      criteria: string;
      toanVen: string;
      normal: string;
    }>;
    postNote: string;
  };
  experts: {
    heading: string;
    expert1: {
      name: string;
      title: string;
      bio: string;
    };
    expert2: {
      name: string;
      title: string;
      bio: string;
    };
  };
  pricing: {
    heading: string;
    subheading: string;
    badge: string;
    price: string;
    priceUnit: string;
    vatLabel: string;
    button: string;
    note: string;
  };
  form: {
    heading: string;
    subheading: string;
    cardTitle: string;
    cardDesc: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<"vi" | "en", TranslationSet> = {
  vi: {
    header: {
      process: "Quy trình",
      experts: "Chuyên gia",
      difference: "Sự khác biệt",
      registerNow: "ĐĂNG KÝ NGAY",
      menu: "Menu"
    },
    hero: {
      subtitle: "DÀNH CHO NHỮNG AI ĐANG TRÊN BỜ VỰC TAN VỠ CỦA HÔN NHÂN",
      titleFirstLine: "Trước khi dành thêm tình cảm, thời gian và sức lực cho cuộc hôn nhân này,",
      titleSecondLine: "hay trước khi quyết định buông tay,",
      titleThirdLine: "",
      titleAccent: "bạn xứng đáng có sự rõ ràng.",
      descriptionLine1: "Bạn cần một đánh giá trung thực để bạn nhìn thấy sự thật và liệu có một con đường nào khả thi phía trước hay không.",
      descriptionLine2: "Dành cho những ai thực sự nghiêm túc trong việc tìm ra sự thật, ngay cả khi sự thật đó không dễ để đón nhận.",
      button: "ĐĂNG KÝ ĐÁNH GIÁ HÔN NHÂN"
    },
    painPoints: {
      heading: "Có phải bạn đang...",
      cards: [
        {
          title: "...Hoang mang tự hỏi liệu cuộc hôn nhân này có thực sự đã đi đến hồi kết?",
          desc: "Liệu mối quan hệ này còn cứu vãn được không? Hay bạn đang cố bấu víu vào một điều không còn thuộc về mình. Hai người chỉ tạm lạc hướng, hay đây thực sự là kết thúc?"
        },
        {
          title: "...Cảm thấy mình đơn độc trong nỗ lực cứu vãn hôn nhân?",
          desc: "Bạn cảm thấy mình là người duy nhất nỗ lực để kết nối và hàn gắn bằng nhiều cách trong khi người kia đã âm thầm buông xuôi. Bạn hoang mang không biết mình đang nỗ lực vì điều gì."
        },
        {
          title: "...Lo sợ con cái bị tổn thương nếu cha mẹ chia tay?",
          desc: "Bạn sợ con mình bị tổn thương và thiệt thòi khi cha mẹ ly hôn, nhưng cũng thấy được rằng hạnh phúc của con bị bào mòn bởi sự lạnh nhạt và tranh cãi."
        },
        {
          title: "...Gánh chịu áp lực nặng nề từ thể diện và hai bên gia đình?",
          desc: "Những câu hỏi \"Ly hôn rồi biết ăn nói sao với bố mẹ, họ hàng?\"... đè nặng lên bạn. Trong văn hóa Á Đông, hình ảnh một gia đình hạnh phúc gắn liền với thể diện, khiến quyết định đi hay ở trở nên thêm nặng nề."
        }
      ]
    },
    valueProp: {
      title: "\"Đánh Giá Hôn Nhân\" - Nhìn Thấu Sự Thật Về Mối Quan Hệ Của Bạn",
      desc1: "Không phải trị liệu tâm lý hay những buổi nói chuyện kéo dài không hồi kết. Đây là 03 buổi đánh giá với quy trình tập trung giúp bạn trả lời một câu hỏi duy nhất:",
      desc2: "Liệu cuộc hôn nhân này còn có thể cứu vãn, hay bạn đang cố giữ lấy một điều không còn thuộc về mình?",
      note: "Chúng tôi tin rằng bạn không cần thêm lời khuyên xoa dịu — bạn cần sự rõ ràng. Một đánh giá trung thực về việc hôn nhân đang ở đâu, điều gì thực sự xảy ra, và con đường khả thi nào phía trước dành cho bạn.",
      imageAlt: "Sự thấu hiểu và gắn kết"
    },
    results: {
      heading: "Sau Buổi Đánh Giá, Bạn Sẽ Biết Được:",
      cards: [
        {
          num: "01",
          title: "Hôn Nhân Có Còn Cứu Được Không?",
          desc: "Nhận kết luận chuyên môn, trung thực về khả năng hàn gắn thực tế của mối quan hệ."
        },
        {
          num: "02",
          title: "Nguyên Nhân Thực Sự Đang Phá Vỡ Hôn Nhân",
          desc: "Nhìn rõ những khuôn mẫu hành vi, oán giận âm ỉ và động lực ngầm đang đẩy hai người ra xa."
        },
        {
          num: "03",
          title: "Lộ Trình Cụ Thể Để Hàn Gắn",
          desc: "Nếu còn cứu vãn được, bạn sẽ biết rõ điều gì cần thay đổi, trách nhiệm cụ thể của mỗi người và các trở ngại cần vượt qua."
        },
        {
          num: "04",
          title: "Tác Động Thực Tế Lên Con Cái",
          desc: "Thấy rõ cuộc hôn nhân hiện tại đang thực sự ảnh hưởng như thế nào đến tâm lý và tinh thần của con bạn."
        },
        {
          num: "05",
          title: "Đề Xuất Con Đường Phù Hợp Nhất",
          desc: "Nhận đề xuất lộ trình rõ ràng (hàn gắn, trị liệu bài bản, phát triển bản thân, hoặc chia tay lành mạnh) để bạn rời đi với sự rõ ràng tuyệt đối thay vì đoán mò."
        }
      ]
    },
    process: {
      heading: "Lộ trình 3 buổi chuyên sâu",
      steps: [
        {
          title: "Buổi 1: Làm việc riêng người bạn đời thứ nhất",
          desc: "Lắng nghe góc nhìn cá nhân, những tổn thương và kỳ vọng thầm kín."
        },
        {
          title: "Buổi 2: Làm việc riêng người bạn đời thứ hai",
          desc: "Hoàn thiện bức tranh đa chiều từ phía đối phương, đảm bảo tính khách quan tuyệt đối."
        },
        {
          title: "Buổi 3: Buổi làm việc chung đúc kết",
          desc: "Phân tích các chỉ số hôn nhân và đưa ra khuyến nghị chuyên môn"
        }
      ]
    },
    comparison: {
      heading: "Làm sao chọn đúng chuyên gia cho hôn nhân của bạn",
      subheading: "Khi tìm kiếm chuyên gia cho hôn nhân của mình, nhiều cặp đôi sẽ không khỏi đứng trước cân nhắc nên lựa chọn làm việc với chuyên gia nào, lo lắng rằng chi phí cho việc khai vấn có thể sẽ rất cao, hay thậm chí không biết chi phí bao nhiêu mới là hợp lý. Chúng tôi nghĩ rằng câu hỏi sáng suốt hơn lúc này nên là:\n\n\"Để có sự rõ ràng mình cần trong cuộc hôn nhân này, mức đầu tư cần thiết là bao nhiêu?\"\n\n\"Sự bế tắc này, nếu tiếp tục kéo dài, sẽ tiêu tốn tôi bao nhiêu tiền, thời gian & sức lực nữa?\"\n\nVà cùng nhìn vào bảng sau để tìm câu trả lời cho bạn:",
      colCriteria: "Tiêu chí so sánh",
      colToanVen: "ĐỘI NGŨ TOÀN VẸN",
      colNormal: "CÁC CHUYÊN GIA KHAI VẤN ĐỘC LẬP KHÁC",
      rows: [
        {
          criteria: "Mô hình & Cách làm việc",
          toanVen: "Làm việc như một đội ngũ gắn kết (2 chuyên gia), có cấu trúc rõ ràng để cùng \"đỡ lấy\" cặp đôi trong giai đoạn khó khăn nhất.",
          normal: "Một chuyên gia, làm việc cùng lúc với hai người và một cuộc hôn nhân, khiến việc cùng lúc nâng đỡ hai người khó khăn hơn."
        },
        {
          criteria: "Kinh nghiệm & Trải nghiệm sống",
          toanVen: "• Chị Mai Khôi: Gần 30 năm kinh nghiệm tham vấn quốc tế, trưởng thành và chữa lành sau khi đi qua hai lần ly hôn một cách lành mạnh; am hiểu sâu sắc văn hoá Việt Nam và Mỹ.\n• Minh Ngọc: 5 năm kinh nghiệm tham vấn, đang trực tiếp sống cùng các vấn đề khách hàng đang đối mặt trong cuộc hôn nhân của mình với chồng và con nhỏ.",
          normal: "Một chuyên gia, một cuộc đời, với trải nghiệm sống cá nhân"
        },
        {
          criteria: "Góc nhìn đa chiều",
          toanVen: "Hơn 30 năm kinh nghiệm trực tiếp giúp thấu hiểu sâu sắc khía cạnh và tâm lý của người đàn ông trong hôn nhân, không chỉ riêng góc nhìn của người vợ.",
          normal: "Thường chỉ có một góc nhìn cá nhân duy nhất từ một chuyên gia, dễ bị giới hạn hoặc thiên vị vô thức."
        },
        {
          criteria: "Phương pháp kiểm chứng",
          toanVen: "Sở hữu mô hình và phương pháp được kiểm chứng toàn cầu và liên tục tinh chỉnh thực tế qua hàng trăm trường hợp khó.",
          normal: "Phương pháp giới hạn trong kinh nghiệm cá nhân và bối cảnh làm việc hạn chế"
        },
        {
          criteria: "Chi phí mỗi buổi",
          toanVen: "Lộ trình 10 triệu VNĐ cho 3 buổi chuyên sâu, tương đương 3,3tr VNĐ/buổi",
          normal: "Dao động 1 - 2 triệu VNĐ."
        },
        {
          criteria: "Số lượng buổi",
          toanVen: "Gói gọn trong 3 buổi chuyên sâu có cấu trúc rõ ràng.",
          normal: "Có thể không cố định, kéo dài liên tục qua nhiều buổi mà không rõ điểm dừng"
        },
        {
          criteria: "Tổng đầu tư ban đầu",
          toanVen: "Chí phí rõ ràng: 10.000.000 VNĐ (đã bao gồm VAT).",
          normal: "Chưa biết trước, phụ thuộc vào số lượng buổi phát sinh thực tế."
        },
        {
          criteria: "Thời gian đạt sự rõ ràng",
          toanVen: "Cam kết giúp cặp đôi có câu trả lời và sự rõ ràng tối đa sau đúng 3 buổi.",
          normal: "Có thể mơ hồ, phụ thuộc vào tiến trình dài hạn mà không có thời hạn cam kết cụ thể."
        },
        {
          criteria: "Tiến độ & Thời gian cam kết",
          toanVen: "Hoàn thành nhanh chóng trong khoảng 1 tuần.",
          normal: "Kéo dài nhiều tuần hoặc nhiều tháng."
        },
        {
          criteria: "Tiêu chí lựa chọn",
          toanVen: "Chọn sự rõ ràng, hiệu quả, tối ưu thời gian và giảm thiểu tổn thất cho cuộc sống.",
          normal: "Thường chọn dựa trên giá của từng buổi đơn lẻ thấp nhất."
        }
      ],
      postNote: "Chúng tôi không có ý định so sánh hơn thua hay phán xét các chuyên gia làm việc độc lập. Đơn giản là, chúng tôi hiểu rằng để đồng hành một cặp đôi đang trong cuộc hôn nhân khủng hoảng là một nhiệm vụ vô cùng phức tập, với nhiều tầng cảm xúc và đông lực. Ở đó, một chuyên gia, dù chuyên môn ra sao, cũng có thể khó bao quát hết và giữ công tâm trọn vẹn cho cả cặp đôi cùng lúc. Đó đơn giản là giới hạn tự nhiên của việc làm việc một mình. Chúng tôi chọn vượt qua giới hạn đó bằng cách vận hành như một đội ngũ để mang đến sự hỗ trợ toàn diện và kết quả tốt nhất cho bạn."
    },
    experts: {
      heading: "Đội Ngũ Chuyên Gia Đồng Hành Cùng Bạn",
      expert1: {
        name: "Chị Mai Khôi",
        title: "Chuyên gia Khai Vấn quốc tế với 30 năm kinh nghiệm & Tác Giả Sách về Hôn Nhân & Mối Quan Hệ.",
        bio: "Chị Mai Khôi có gần 30 năm kinh nghiệm tham tham vấn tại Mỹ và nhiều quốc gia. Chị là người phụ nữ châu Á đầu tiên đạt chứng chỉ Certified Professional Co-Active Coach (CPCC) tại Mỹ, và là Trainer đã đào tạo hơn 2.000 coach toàn cầu. Chị là tác giả của 2 cuốn sách xuất bản tại Mỹ và cuốn 'Người Phụ Nữ Toàn Vẹn' tại Việt Nam. Trải nghiệm thấu cảm lớn nhất của chị đến từ việc chính mình đi qua hai lần ly hôn lành mạnh, giúp chị nhận ra kết thúc không phải thất bại mà là một hành trình trọn vẹn theo cách riêng. Chị đồng hành giúp khách hàng tìm lại sự thật và nền tảng của riêng họ thay vì đi theo một khuôn mẫu có sẵn."
      },
      expert2: {
        name: "Chị Minh Ngọc",
        title: "Chuyên gia Khai vấn về Mối quan hệ và Tình dục - Certified Relationship & Sex Coach (ICF PCC)",
        bio: "Chị Minh Ngọc thấu hiểu sâu sắc nỗi đau từ chính hành trình dùng coaching tự cứu mình qua chuỗi biến cố dồn dập (sinh con, mất mẹ, dịch bệnh, kinh doanh đổ vỡ) khi đang cố gánh vác mọi thứ bên ngoài trong khi bên trong đã rạn nứt. Chị không đi lên từ lý thuyết sách vở mà từ trải nghiệm thực tế của người đứng giữa lanh giới giữ và buông. Là Certified Relationship & Sex Coach, chị đồng hành cùng các cặp đôi tháo gỡ những nút thắt khó nói nhất: sự lạnh nhạt chăn gối và mất kết nối thân mật kéo dài nhiều năm."
      }
    },
    pricing: {
      heading: "Sẵn sàng để tìm lại sự rõ ràng?",
      subheading: "Một lộ trình toàn diện cho cuộc hôn nhân của bạn",
      badge: "GIỚI HẠN 5 CẶP ĐÔI/THÁNG",
      price: "10.000.000",
      priceUnit: "VNĐ",
      vatLabel: "Đã bao gồm VAT cho lộ trình 3 buổi chuyên sâu",
      button: "ĐĂNG KÝ ĐÁNH GIÁ HÔN NHÂN",
      note: "Vì tính chất chuyên sâu và bảo mật, chúng tôi chỉ nhận đồng hành cùng một số lượng rất nhỏ khách hàng mỗi tháng để đảm bảo chất lượng cao nhất."
    },
    form: {
      heading: "Bắt đầu hành trình của bạn",
      subheading: "Vui lòng điền thông tin bên dưới để chúng tôi liên hệ tư vấn sơ bộ.",
      cardTitle: "Form Đăng Ký Đánh Giá",
      cardDesc: "Điền thông tin để nhận tư vấn sơ bộ: Họ tên, Số điện thoại Zalo. Chuyên gia sẽ liên hệ với bạn trong vòng 24h."
    },
    footer: {
      copyright: "© 2026 Toàn Vẹn International. All rights reserved"
    }
  },
  en: {
    header: {
      process: "Process",
      experts: "Experts",
      difference: "Difference",
      registerNow: "REGISTER NOW",
      menu: "Menu"
    },
    hero: {
      subtitle: "FOR THOSE ON THE BRINK OF MARITAL BREAKDOWN",
      titleFirstLine: "Before investing more emotion, time, and energy into this marriage,",
      titleSecondLine: "or before deciding to let go,",
      titleThirdLine: "",
      titleAccent: "you deserve clarity.",
      descriptionLine1: "You need an honest assessment to see the truth and whether there is a viable path forward.",
      descriptionLine2: "For those who are truly serious about finding the truth, even if that truth is not easy to accept.",
      button: "REGISTER FOR MARRIAGE ASSESSMENT"
    },
    painPoints: {
      heading: "Are you currently...",
      cards: [
        {
          title: "...Confusedly wondering if this marriage has truly come to an end?",
          desc: "Can this relationship still be saved? Or are you trying to cling to something that is no longer yours. Are you two just temporarily lost, or is this truly the end?"
        },
        {
          title: "...Feeling alone in your efforts to save the marriage?",
          desc: "You feel like you are the only one making efforts to connect and heal in various ways while the other person has silently given up. You are confused about what you are striving for."
        },
        {
          title: "...Fearing that your children will be hurt if you separate?",
          desc: "You fear your children will be hurt and disadvantaged when their parents divorce, but you also see that their happiness is being eroded by coldness and arguments."
        },
        {
          title: "...Bearing heavy pressure from public face and both families?",
          desc: "Questions like \"If we divorce, how will I face my parents and relatives?\"... weigh heavily on you. In East Asian culture, the image of a happy family is tied to status, making the decision to stay or go even harder."
        }
      ]
    },
    valueProp: {
      title: "\"Marriage Assessment\" - Seeing Through the Truth of Your Relationship",
      desc1: "Not psychotherapy or endless talks that lead nowhere. This is a 3-session structured assessment designed to help you answer a single question:",
      desc2: "Can this marriage still be saved, or are you trying to hold onto something that is no longer there?",
      note: "We believe you don't need comforting advice — you need clarity. An honest assessment of where your marriage stands, what is truly happening, and what viable paths lie ahead for you.",
      imageAlt: "Understanding and connection"
    },
    results: {
      heading: "After the Assessment, You Will Know:",
      cards: [
        {
          num: "01",
          title: "Can the Marriage Still Be Saved?",
          desc: "Receive an honest, professional conclusion about the realistic possibility of healing the relationship."
        },
        {
          num: "02",
          title: "The Real Cause Breaking Your Marriage",
          desc: "See clearly the behavioral patterns, simmering resentments, and underlying dynamics driving you apart."
        },
        {
          num: "03",
          title: "A Concrete Roadmap to Heal",
          desc: "If saveable, you will know exactly what needs to change, each person's specific responsibilities, and the obstacles to overcome."
        },
        {
          num: "04",
          title: "The Realistic Impact on Your Children",
          desc: "Clearly see how the current state of your marriage is genuinely affecting your children's psychology and spirit."
        },
        {
          num: "05",
          title: "The Most Suitable Recommended Path",
          desc: "Get a clear recommended roadmap (healing, structured therapy, personal growth, or healthy separation) so you can proceed with absolute clarity instead of guessing."
        }
      ]
    },
    process: {
      heading: "Comprehensive 3-Session Roadmap",
      steps: [
        {
          title: "Session 1: Private meeting with the first partner",
          desc: "Listening to personal perspectives, silent hurts, and hidden expectations."
        },
        {
          title: "Session 2: Private meeting with the second partner",
          desc: "Completing the multi-dimensional picture from the partner's side, ensuring absolute objectivity."
        },
        {
          title: "Session 3: Joint synthesis and wrap-up meeting",
          desc: "Analyzing marital metrics and providing expert recommendations."
        }
      ]
    },
    comparison: {
      heading: "How to Choose the Right Expert for Your Marriage?",
      subheading: "When searching for a marriage expert, many couples inevitably wonder which expert to choose, worrying that coaching fees might be too high, or not knowing what a reasonable investment is. We believe the wiser questions should be:\n\n\"How much is the necessary investment to gain the clarity I need in this marriage?\"\n\n\"If this deadlock continues to drag on, how much more money, time, and energy will it cost me?\"\n\nLet's look at the table below to find your answer:",
      colCriteria: "Comparison Criteria",
      colToanVen: "THE TOAN VEN TEAM",
      colNormal: "OTHER INDEPENDENT COACHES",
      rows: [
        {
          criteria: "Model & Approach",
          toanVen: "Working as a cohesive team (2 experts), with a clear structure to support the couple during their most difficult phase.",
          normal: "A single expert, working with two individuals and one marriage simultaneously, making it harder to support both at once."
        },
        {
          criteria: "Experience & Life Journey",
          toanVen: "• Ms. Mai Khoi: Nearly 30 years of international counseling experience, grown and healed through two healthy divorces; deeply understands Vietnamese and US cultures.\n• Minh Ngoc: 5 years of counseling experience, directly living through the same marital challenges as clients with her husband and young child.",
          normal: "A single expert, a single life, with limited personal life experiences."
        },
        {
          criteria: "Multi-dimensional Perspective",
          toanVen: "Over 30 years of direct experience deeply understanding the husband's psychology and perspective in marriage, not just the wife's.",
          normal: "Often just a single personal perspective from one expert, prone to limitations or subconscious bias."
        },
        {
          criteria: "Proven Methodology",
          toanVen: "Possesses a globally proven model and methodology, continuously refined through hundreds of difficult cases.",
          normal: "Methodology limited to personal experience and restricted working contexts."
        },
        {
          criteria: "Cost per Session",
          toanVen: "10 million VND package for 3 intensive sessions, equivalent to 3.3 million VND/session",
          normal: "Ranging from 1 - 2 million VND."
        },
        {
          criteria: "Number of Sessions",
          toanVen: "Condensed within 3 highly structured, intensive sessions.",
          normal: "Unfixed, dragging on continuously across multiple sessions without a clear ending point."
        },
        {
          criteria: "Total Upfront Investment",
          toanVen: "Clear upfront cost: 10,000,000 VND (VAT included).",
          normal: "Unknown beforehand, depending on the actual number of sessions."
        },
        {
          criteria: "Time to Reach Clarity",
          toanVen: "Committed to helping couples reach maximum clarity and answers in exactly 3 sessions.",
          normal: "Can be vague, depending on long-term progress without any clear commitment."
        },
        {
          criteria: "Progress & Committed Timeline",
          toanVen: "Completed rapidly within approximately 1 week.",
          normal: "Can stretch over many weeks or months."
        },
        {
          criteria: "Selection Criteria",
          toanVen: "Choosing clarity, effectiveness, optimized time, and minimizing emotional/life losses.",
          normal: "Usually chosen based on the lowest individual session rate."
        }
      ],
      postNote: "We do not intend to compare or judge independent experts. We understand that accompanying a couple in a marital crisis is an extremely complex task with many layers of emotions and dynamics. There, a single expert, regardless of their expertise, may find it difficult to fully oversee and maintain complete impartiality for both partners simultaneously. That is simply a natural limitation of working alone. We choose to transcend that limitation by operating as a cohesive team to deliver the most comprehensive support and best results for you."
    },
    experts: {
      heading: "The Expert Team Accompanying You",
      expert1: {
        name: "Ms. Mai Khoi",
        title: "International Executive & Life Coach with 30 years of experience & Book Author on Marriage & Relationships.",
        bio: "Ms. Mai Khoi has nearly 30 years of counseling experience in the US and many other countries. She is the first Asian woman to earn the Certified Professional Co-Active Coach (CPCC) credential in the US, and is a Trainer who has trained over 2,000 coaches globally. She is the author of 2 books published in the US and the book 'The Whole Woman' (Nguoi Phu Nu Toan Ven) in Vietnam. Her greatest empathetic experience comes from walking through two healthy divorces of her own, helping her realize that ending is not a failure but a complete journey in its own right. She accompanies clients in finding their own truth and foundation rather than following a pre-made template."
      },
      expert2: {
        name: "Ms. Minh Ngọc",
        title: "Certified Relationship & Sex Coach (ICF PCC)",
        bio: "Ms. Minh Ngọc understands deeply the pain from her own journey of using coaching to save herself through a cascade of overwhelming events (giving birth, losing her mother, pandemic, business collapse) while trying to carry everything on the outside as the inside fractured. She does not speak from textbook theory but from the raw experience of someone standing between staying and letting go. As a Certified Relationship & Sex Coach, she accompanies couples to resolve the most unspoken knots: sexual coldness and prolonged intimacy disconnect spanning several years."
      }
    },
    pricing: {
      heading: "Ready to find your clarity?",
      subheading: "A comprehensive roadmap for your marriage",
      badge: "LIMITED TO 5 COUPLES/MONTH",
      price: "10,000,000",
      priceUnit: "VND",
      vatLabel: "Including VAT for the 3-session intensive roadmap",
      button: "REGISTER FOR MARRIAGE ASSESSMENT",
      note: "Due to the intensive and confidential nature, we only accept a very small number of clients each month to guarantee the highest quality."
    },
    form: {
      heading: "Start Your Journey",
      subheading: "Please fill in the information below for an initial consultation.",
      cardTitle: "Assessment Registration Form",
      cardDesc: "Fill in the details to receive an initial consultation: Full Name, Zalo Phone Number. An expert will contact you within 24 hours."
    },
    footer: {
      copyright: "© 2026 Toan Ven International. All rights reserved"
    }
  }
};
