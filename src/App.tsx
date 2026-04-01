import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  MonitorSmartphone, 
  Zap, 
  Star, 
  MessageCircle,
  LayoutTemplate,
  Sparkles
} from "lucide-react";

const BRAND_COLOR = "#72E07B";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-[#72E07B] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder - Mimicking the provided logo */}
            <div className="flex items-start">
              <img src="https://github.com/studio4leaf/STUDIO4LEAF/blob/main/images/studio4leaflogo.png?raw=true" alt="스튜디오 로고" className="h-12 md:h-16 w-auto" />
            </div>
          </div>
          <a 
            href="http://pf.kakao.com/_Jxacxan" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium transition-colors text-sm md:text-base"
          >
            프로젝트 문의하기
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 bg-white overflow-hidden min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full relative">
          
          {/* Floating Elements - Left */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="hidden lg:block absolute -left-10 xl:-left-20 top-10 opacity-30 hover:opacity-100 transition-opacity duration-300 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 w-64 z-10"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-gray-500">검색 엔진 최적화 (SEO)</span>
              <span className="bg-[#72E07B]/20 text-[#4caf54] text-[10px] px-2 py-0.5 rounded-full font-bold">우수</span>
            </div>
            <div className="text-4xl font-black text-gray-900">100<span className="text-lg text-gray-400 font-medium ml-1">점</span></div>
            <div className="w-full bg-gray-100 h-2 rounded-full mt-4">
              <div className="bg-[#72E07B] h-2 rounded-full w-full"></div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="hidden lg:block absolute -left-4 xl:-left-12 bottom-10 opacity-30 hover:opacity-100 transition-opacity duration-300 bg-gray-900 p-5 rounded-2xl shadow-2xl border border-gray-800 w-56 z-10"
          >
            <div className="text-xs font-medium text-gray-400 mb-1">방문자 전환율</div>
            <div className="text-3xl font-bold text-white mb-3">+45.2%</div>
            <div className="flex items-end gap-1.5 h-12">
              <div className="w-1/4 bg-gray-700 h-1/3 rounded-t-sm"></div>
              <div className="w-1/4 bg-gray-700 h-1/2 rounded-t-sm"></div>
              <div className="w-1/4 bg-gray-700 h-2/3 rounded-t-sm"></div>
              <div className="w-1/4 bg-[#72E07B] h-full rounded-t-sm"></div>
            </div>
          </motion.div>

          {/* Floating Elements - Right */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:block absolute -right-10 xl:-right-20 top-0 opacity-30 hover:opacity-100 transition-opacity duration-300 bg-gray-900 p-5 rounded-2xl shadow-2xl border border-gray-800 w-60 z-10"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-gray-400">페이지 로드 속도</span>
              <span className="flex items-center gap-1 text-[#72E07B] text-[10px] font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-[#72E07B] animate-pulse"></div> LIVE
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-4xl font-bold text-white">0.8</div>
              <div className="text-sm text-gray-400">sec</div>
            </div>
            <p className="text-[11px] text-gray-500 mt-3">이탈률 최소화 기준 충족</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.5 }}
            className="hidden lg:block absolute -right-4 xl:-right-12 bottom-20 opacity-30 hover:opacity-100 transition-opacity duration-300 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 w-64 z-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MonitorSmartphone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 mb-0.5">반응형 웹 디자인</div>
                <div className="text-sm font-black text-gray-900">PC & Mobile 완벽 호환</div>
              </div>
            </div>
          </motion.div>

          {/* Center Content */}
          <div className="relative z-20 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#72E07B]/10 text-[#4caf54] font-bold text-sm mb-6 border border-[#72E07B]/20 tracking-wide">
                최신 AI 기술 도입 · 압도적인 제작 속도
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.4] mb-6 break-keep">
                <span className="text-[#72E07B]">스튜디오 포리프</span>와 함께하는<br />
                빠르고 합리적인 가격의<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5bc964] to-[#38a141]">
                  AI 홈페이지 제작
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed font-medium break-keep">
                AI 워크플로우와 AI 이미지 생성 기술을 활용하여 <br className="hidden md:block" />
                고퀄리티 홈페이지를 놀라운 속도와 가격으로 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="http://pf.kakao.com/_Jxacxan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#72E07B] hover:bg-[#5bc964] text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#72E07B]/25 flex items-center justify-center gap-2"
                >
                  무료 상담 신청하기 <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="https://studio4leaf.kr/portfolio" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center"
                >
                  포트폴리오 보기
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="border-y border-gray-100 bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">100<span className="text-[#72E07B]">%</span></p>
              <p className="text-sm text-gray-500 font-medium">고객 만족도</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">35<span className="text-[#72E07B]">+</span></p>
              <p className="text-sm text-gray-500 font-medium">누적 프로젝트</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">A<span className="text-[#72E07B]">I</span></p>
              <p className="text-sm text-gray-500 font-medium">최신 기술 도입</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-gray-900 mb-1">1:1</p>
              <p className="text-sm text-gray-500 font-medium">1인 대표 전담</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-keep">어떤 홈페이지가 필요하신가요?</h2>
            <p className="text-gray-500 text-base sm:text-lg break-keep">상황과 예산에 맞는 최적의 솔루션을 제안합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-[#72E07B]/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#4caf54]" />
              </div>
              <div className="flex items-end gap-2 mb-3">
                <h3 className="text-2xl font-bold">AI 기반 스피드 홈페이지</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#72E07B]/10 text-[#4caf54] px-3 py-1 rounded-full text-sm font-bold">20만원부터 (부가세 별도)</span>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">제작기간 빠르면 1일</span>
              </div>
              <p className="text-sm text-[#F43F5E] font-bold mb-5 break-keep">* 현재 EVENT 특가로 진행 중이며, 추후 가격이 상승할 수 있습니다.</p>
              <p className="text-gray-500 mb-8 leading-relaxed flex-grow">
                빠른 런칭과 가성비가 중요하다면? AI 워크플로우와 AI 이미지 생성 기술을 활용하여 핵심만 담은 깔끔한 랜딩페이지를 신속하게 제작해 드립니다. 회사 소개 및 고객문의용에 적합합니다.
              </p>
              <ul className="space-y-3 mt-auto">
                {['합리적인 제작 비용 (20만원~)', '단기간 내 빠른 오픈 (최소 1일)', '회사 소개 및 고객문의용 최적화', '모바일/PC 반응형 기본'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#72E07B] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900 text-white p-10 rounded-3xl shadow-sm border border-gray-800 hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#72E07B] opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <LayoutTemplate className="w-7 h-7 text-[#72E07B]" />
              </div>
              <div className="flex items-end gap-2 mb-3 relative z-10">
                <h3 className="text-2xl font-bold">맞춤형 아임웹 / 식스샵</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                <span className="bg-[#72E07B]/20 text-[#72E07B] px-3 py-1 rounded-full text-sm font-bold">70만원부터 (부가세 별도)</span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-bold">프리미엄 맞춤 제작</span>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed relative z-10 flex-grow">
                우리 브랜드만의 특별한 디자인과 기능이 필요하다면? 아임웹/식스샵 기반의 고퀄리티 맞춤형 홈페이지를 제작합니다.
              </p>
              <ul className="space-y-3 relative z-10 mt-auto">
                {['브랜드 맞춤 프리미엄 디자인', '쇼핑몰/예약 기능 업종 적합', '관리자 페이지 교육 제공', '제작 후 유지보수 지원'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#72E07B] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-keep">검증된 포트폴리오</h2>
              <p className="text-gray-500 text-base sm:text-lg break-keep">다양한 업종의 성공적인 제작 사례를 확인하세요.</p>
            </div>
            <a href="https://studio4leaf.kr/portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:text-[#5bc964] flex items-center gap-1 transition-colors">
              더 많은 포트폴리오 보기 <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '프리미엄 카페 브랜드', desc: '아임웹 기반 쇼핑몰', img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800' },
              { title: '법률 사무소 랜딩페이지', desc: 'AI 기반 스피드 제작', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800' },
              { title: '인테리어 스튜디오', desc: '아임웹 맞춤형 포트폴리오 사이트', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800' },
              { title: '퍼스널 트레이닝 센터', desc: '예약 기능 탑재 랜딩페이지', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
              { title: '비건 화장품 브랜드', desc: '아임웹 프리미엄 쇼핑몰', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' },
              { title: '세무회계 컨설팅', desc: '기업 소개용 반응형 웹', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gray-100">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Studio Section */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-5/12 lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto bg-gray-200 shadow-xl">
                <img 
                  src="https://github.com/studio4leaf/STUDIO4LEAF/blob/main/images/profile.png?raw=true" 
                  alt="Studio 4leaf Profile" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-7/12 lg:w-1/2 md:pl-6 lg:pl-10"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#72E07B]/10 text-[#4caf54] font-bold text-sm mb-6 border border-[#72E07B]/20 tracking-wide">
                스튜디오 포리프 소개
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-[1.4] break-keep">
                대퇴사의 시대,<br />
                비즈니스의 가벼운 시작을 돕습니다.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed break-keep font-medium">
                자신만의 비즈니스를 시작하시는 수많은 대표님들의 가장 큰 고민은 '초기 비용'과 '시간'입니다. 스튜디오 포리프는 이러한 고민을 해결해 드리고자 AI 기술을 적극 도입했습니다.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#72E07B]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-7 h-7 text-[#4caf54]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1인 스튜디오 전담 마크</h3>
                    <p className="text-gray-500 leading-relaxed break-keep">
                      상담부터 기획, 디자인, 개발까지 1인 대표가 직접 진행합니다. 담당자가 바뀌며 발생하는 소통의 누락 없이, 처음부터 끝까지 매끄럽고 정확하게 소통합니다.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#72E07B]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-7 h-7 text-[#4caf54]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI 기반의 압도적인 효율성</h3>
                    <p className="text-gray-500 leading-relaxed break-keep">
                      최신 AI 워크플로우와 이미지 생성 기술을 활용하여 제작에 소요되는 시간과 리소스를 획기적으로 단축했습니다. 거품을 뺀 합리적인 가격으로 고퀄리티 홈페이지를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-keep">고객 만족도 100%의 이유</h2>
            <p className="text-gray-400 text-base sm:text-lg break-keep">스튜디오 포리프와 함께한 대표님들의 생생한 후기입니다.</p>
          </div>
        </div>

        <div className="relative flex overflow-x-hidden w-full">
          <motion.div 
            className="flex gap-6 whitespace-nowrap py-4 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[
              {
                text: "홈페이지 제작은 처음이라 막막했는데, 기획부터 디자인까지 알아서 척척 해주셔서 너무 편했습니다. 결과물도 대만족입니다!",
                author: "김ㅇㅇ 대표",
                company: "F&B 프랜차이즈"
              },
              {
                text: "합리적인 가격에 이 정도 퀄리티가 나올 줄 몰랐어요. 수정 요청도 빠르고 친절하게 반영해주셔서 감사합니다. 주변에 적극 추천하고 있어요.",
                author: "이ㅇㅇ 원장",
                company: "필라테스 스튜디오"
              },
              {
                text: "아임웹으로 쇼핑몰을 만들고 싶었는데, 저희 브랜드에 딱 맞는 맞춤형 디자인으로 제작해주셨어요. 매출 상승에 큰 도움이 되고 있습니다.",
                author: "박ㅇㅇ 대표",
                company: "라이프스타일 브랜드"
              },
              {
                text: "급하게 랜딩페이지가 필요했는데, 정말 하루 만에 고퀄리티로 뽑아주셔서 놀랐습니다. 덕분에 마케팅 캠페인을 무사히 시작했어요.",
                author: "최ㅇㅇ 마케터",
                company: "IT 스타트업"
              },
              {
                text: "모바일에서 볼 때 글씨가 깨지거나 이미지가 잘리는 현상 없이 완벽하게 반응형으로 구현해주셨습니다. 세심한 디테일에 감동했어요.",
                author: "정ㅇㅇ 대표",
                company: "뷰티 살롱"
              },
              {
                text: "제작 후에도 관리자 페이지 사용법을 친절하게 알려주셔서, 지금은 제가 직접 텍스트나 이미지를 수정하며 잘 관리하고 있습니다.",
                author: "강ㅇㅇ 원장",
                company: "어학원"
              }
            ].concat([
              {
                text: "홈페이지 제작은 처음이라 막막했는데, 기획부터 디자인까지 알아서 척척 해주셔서 너무 편했습니다. 결과물도 대만족입니다!",
                author: "김ㅇㅇ 대표",
                company: "F&B 프랜차이즈"
              },
              {
                text: "합리적인 가격에 이 정도 퀄리티가 나올 줄 몰랐어요. 수정 요청도 빠르고 친절하게 반영해주셔서 감사합니다. 주변에 적극 추천하고 있어요.",
                author: "이ㅇㅇ 원장",
                company: "필라테스 스튜디오"
              },
              {
                text: "아임웹으로 쇼핑몰을 만들고 싶었는데, 저희 브랜드에 딱 맞는 맞춤형 디자인으로 제작해주셨어요. 매출 상승에 큰 도움이 되고 있습니다.",
                author: "박ㅇㅇ 대표",
                company: "라이프스타일 브랜드"
              },
              {
                text: "급하게 랜딩페이지가 필요했는데, 정말 하루 만에 고퀄리티로 뽑아주셔서 놀랐습니다. 덕분에 마케팅 캠페인을 무사히 시작했어요.",
                author: "최ㅇㅇ 마케터",
                company: "IT 스타트업"
              },
              {
                text: "모바일에서 볼 때 글씨가 깨지거나 이미지가 잘리는 현상 없이 완벽하게 반응형으로 구현해주셨습니다. 세심한 디테일에 감동했어요.",
                author: "정ㅇㅇ 대표",
                company: "뷰티 살롱"
              },
              {
                text: "제작 후에도 관리자 페이지 사용법을 친절하게 알려주셔서, 지금은 제가 직접 텍스트나 이미지를 수정하며 잘 관리하고 있습니다.",
                author: "강ㅇㅇ 원장",
                company: "어학원"
              }
            ]).map((review, i) => (
              <div 
                key={i}
                className="w-[320px] md:w-[400px] whitespace-normal flex-shrink-0 bg-gray-800 p-8 rounded-3xl border border-gray-700 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#72E07B] text-[#72E07B]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed flex-grow">"{review.text}"</p>
                <div>
                  <p className="font-bold text-white">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.company}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-keep">자주 묻는 질문</h2>
            <p className="text-gray-500 text-base sm:text-lg break-keep">고객님들이 가장 궁금해하시는 내용들을 모았습니다.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "왜 이렇게 저렴한가요?",
                a: "스튜디오 포리프는 최신 AI 워크플로우와 AI 이미지 생성 기술을 적극적으로 활용하여 기획, 디자인, 개발에 소요되는 시간과 리소스를 획기적으로 단축했습니다. 이를 통해 퀄리티는 높이면서도 고객님들께 합리적인 가격으로 홈페이지를 제공해 드릴 수 있습니다."
              },
              {
                q: "홈페이지 제작 기간은 얼마나 걸리나요?",
                a: "일반적인 기업/브랜드 홍보용 홈페이지의 경우 기획부터 오픈까지 약 2~3주 정도 소요됩니다. 하지만 최신 AI 워크플로우를 활용한 AI 홈페이지 제작을 선택하시면 빠르면 하루 만에도 고퀄리티 홈페이지 제작이 가능합니다. 단, 쇼핑몰이나 맞춤형 기능이 필요한 경우 4주 이상 소요될 수 있습니다."
              },
              {
                q: "제작 비용은 어떻게 되나요?",
                a: "페이지 수, 필요한 기능(예약, 결제, 다국어 등), 디자인 맞춤 정도에 따라 비용이 달라집니다. 모든 제작 가격은 부가세 별도입니다. 무료 상담을 신청해주시면 요구사항을 파악한 후 합리적인 견적을 제안해 드립니다."
              },
              {
                q: "제작 완료 후 유지보수도 해주시나요?",
                a: "네, 물론입니다. 제작 후 1개월간 무상으로 하자 보수를 지원해 드리며, 이후에는 합리적인 비용의 유지보수 계약을 통해 지속적인 관리를 받으실 수 있습니다. 텍스트나 이미지 수정 등은 직접 하실 수 있도록 가이드도 제공해 드립니다."
              },
              {
                q: "도메인과 호스팅은 어떻게 해야 하나요?",
                a: "도메인 구매부터 호스팅 세팅까지 홈페이지 운영에 필요한 모든 초기 설정을 저희가 대행해 드립니다. 고객님은 복잡한 기술적 문제에 신경 쓰실 필요 없이 비즈니스에만 집중하시면 됩니다."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-gray-400">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-gray-900 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#72E07B] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[1.4] break-keep text-transparent bg-clip-text bg-gradient-to-r from-[#72E07B] to-[#bef264]">
            AI 시대, 홈페이지 제작은 맡기시고<br />
            대표님은 비즈니스에만 집중하세요.
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl mb-10 font-medium break-keep">
            간단한 설문 작성 후, 24시간 내에 맞춤 견적과 상담을 도와드립니다.
          </p>
          <a 
            href="http://pf.kakao.com/_Jxacxan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#72E07B] hover:bg-[#5bc964] text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-transform hover:scale-105 shadow-xl shadow-[#72E07B]/20 flex items-center justify-center gap-3 mx-auto w-fit"
          >
            <MessageCircle className="w-6 h-6" />
            무료 견적 문의하기
          </a>
          <p className="mt-6 text-sm text-gray-400 font-medium break-keep">
            * 상담은 100% 무료로 진행되며, 계약을 강요하지 않습니다.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="https://github.com/studio4leaf/STUDIO4LEAF/blob/main/images/studio4leaflogo.png?raw=true" alt="스튜디오 로고" className="h-16 md:h-20 w-auto" />
            <div className="flex gap-3 mt-2">
              <a href="https://blog.naver.com/be_sonder" target="_blank" rel="noopener noreferrer" className="bg-[#03C75A] text-white text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1">
                N 블로그
              </a>
              <a href="http://pf.kakao.com/_Jxacxan" target="_blank" rel="noopener noreferrer" className="bg-[#FEE500] text-[#191919] text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" /> 카카오톡
              </a>
            </div>
          </div>
          <div className="text-center md:text-right text-sm text-gray-500 leading-relaxed">
            <p className="font-bold text-gray-700 mb-2">스튜디오 포리프 (Studio 4leaf)</p>
            <p>대표: 이시현 | 사업자등록번호: 315-05-13154</p>
            <p>이메일: d.studio4leaf@gmail.com</p>
            <p className="mt-4 text-gray-400">© {new Date().getFullYear()} Studio 4leaf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
