import logo from './assets/광운멋사로고.png'

const NAV_LINKS = [
  { href: '#about', label: '소개' },
  { href: '#tracks', label: '트랙' },
  { href: '#journey', label: '연간 여정' },
  { href: '#faq', label: 'FAQ' },
  { href: '#apply', label: '지원하기' },
]

const STATS = [
  { value: '2013', label: '멋쟁이사자처럼 시작' },
  { value: '80+', label: '전국 참여 대학' },
  { value: '2,300+', label: '함께하는 아기사자' },
  { value: '14기', label: '현재 활동 기수' },
]

const TRACKS = [
  {
    name: '기획 · 디자인',
    en: 'Product & Design',
    desc: '아이디어를 발굴하고 사용자 경험을 설계합니다. 서비스 기획, UX 리서치, UI 디자인을 배우며 팀 프로젝트의 방향을 잡는 역할을 맡습니다.',
    points: ['서비스 기획 · 린 스타트업', 'UX 리서치 · 와이어프레임', 'Figma 기반 UI 디자인'],
  },
  {
    name: '프론트엔드',
    en: 'Frontend',
    desc: '사용자가 마주하는 화면을 직접 만듭니다. HTML/CSS/JavaScript 기초부터 React까지, 눈에 보이는 결과물로 성장을 확인할 수 있는 트랙입니다.',
    points: ['HTML · CSS · JavaScript', 'React 컴포넌트 설계', '반응형 웹 · 배포 실습'],
  },
  {
    name: '백엔드',
    en: 'Backend',
    desc: '서비스 뒤편의 서버와 데이터를 책임집니다. 데이터베이스 설계부터 API 개발, 배포까지 서비스가 실제로 동작하게 만드는 힘을 기릅니다.',
    points: ['Python · Django / Spring', 'REST API · 데이터베이스', '서버 배포 · 클라우드'],
  },
]

const JOURNEY = [
  {
    period: '2월 – 3월',
    title: '아기사자 모집',
    desc: '서류와 인터뷰를 통해 새로운 아기사자를 모집합니다. 실력보다 열정을 봅니다. 비전공자도 환영해요.',
  },
  {
    period: '3월 – 6월',
    title: '트랙별 스터디 & 세션',
    desc: '기획·디자인, 프론트엔드, 백엔드 트랙으로 나뉘어 매주 정기 세션과 스터디를 진행하며 기초 체력을 다집니다.',
  },
  {
    period: '5월',
    title: '중앙 아이디어톤',
    desc: '전국의 멋사 대학이 모여 창의적인 아이디어를 기획하고 프로토타입으로 검증하는 상반기 최대 행사입니다.',
  },
  {
    period: '8월',
    title: '중앙 해커톤',
    desc: '1,600명 이상이 참여하는 무박 2일 해커톤. 한 학기 동안 갈고닦은 실력으로 하룻밤 만에 서비스를 완성합니다.',
  },
  {
    period: '9월 – 12월',
    title: '연합 프로젝트 & 데모데이',
    desc: '팀을 이루어 실제 서비스를 만들고, 한 해의 결과물을 세상에 공개하며 한 기수를 마무리합니다.',
  },
]

const FAQ = [
  {
    q: '비전공자도 지원할 수 있나요?',
    a: '물론입니다. 멋쟁이사자처럼은 개발 실력보다 열정을 봅니다. 아이디어를 현실로 만들고 싶은 의지가 있다면 전공과 관계없이 아기사자로 함께할 수 있습니다.',
  },
  {
    q: '코딩을 전혀 몰라도 괜찮나요?',
    a: '괜찮습니다. 트랙별 커리큘럼이 기초부터 시작하며, 운영진과 동료 아기사자들이 함께 스터디하며 성장합니다. 중요한 것은 꾸준히 참여하려는 마음입니다.',
  },
  {
    q: '활동 기간은 어떻게 되나요?',
    a: '매년 3월부터 12월까지 한 기수로 활동합니다. 1학기에는 트랙별 스터디, 여름에는 중앙 해커톤, 2학기에는 팀 프로젝트를 중심으로 진행됩니다.',
  },
  {
    q: '언제 지원할 수 있나요?',
    a: '아기사자는 보통 매년 2~3월에 모집하며, 다음 기수를 이끌 운영진은 1월에 모집합니다. 정확한 일정은 멋쟁이사자처럼 대학 공식 채널을 통해 공지됩니다.',
  },
]

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="mb-2 text-sm font-bold tracking-widest text-lion uppercase">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-bold text-kw-deep sm:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      {/* 상단 내비게이션 */}
      <header className="sticky top-0 z-50 border-b border-kw/10 bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="광운대학교 멋쟁이사자처럼 로고" className="h-9 w-9" />
            <span className="font-serif text-lg font-bold text-kw-deep">광운대 멋쟁이사자처럼</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm font-medium text-ink/70 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-lion">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* 히어로 */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-lion/10 via-transparent to-transparent"
          />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-20 text-center">
            <img
              src={logo}
              alt=""
              className="mb-8 h-28 w-28 drop-shadow-lg sm:h-36 sm:w-36"
            />
            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-lion uppercase">
              Likelion Univ. Kwangwoon
            </p>
            <h1 className="font-serif text-4xl leading-tight font-bold text-kw-deep sm:text-6xl">
              모험의 시작,
              <br />네 멋대로 해
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              광운대학교 멋쟁이사자처럼은 테크 기반의 아이디어를 현실로 만드는
              IT 창업 동아리입니다. 전공도, 실력도 상관없습니다. 필요한 건
              가능성을 현실로 만들고 싶은 열정뿐.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#apply"
                className="rounded-full bg-lion px-8 py-3 font-bold text-white shadow-lg shadow-lion/30 transition-colors hover:bg-lion-deep"
              >
                아기사자 지원하기
              </a>
              <a
                href="#about"
                className="rounded-full border border-kw/30 px-8 py-3 font-bold text-kw transition-colors hover:border-kw hover:bg-kw/5"
              >
                더 알아보기
              </a>
            </div>
          </div>
        </section>

        {/* 핵심 수치 */}
        <section className="border-y border-kw/10 bg-white">
          <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 text-center sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="font-serif text-3xl font-bold text-lion sm:text-4xl">{stat.value}</dd>
                <dt className="mt-2 text-sm text-ink/60">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* 소개 */}
        <Section id="about" eyebrow="About" title="멋쟁이사자처럼, 그리고 광운대">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-ink/80">
              <p>
                <strong className="text-kw-deep">멋쟁이사자처럼 대학</strong>은 2013년 시작되어
                전국 80여 개 대학, 2,300여 명의 AI·IT 메이커가 함께하는 국내 최대 규모의
                대학 연합 IT 창업 동아리입니다. 자소설닷컴, 탈잉 같은 서비스들이
                이곳에서 출발했습니다.
              </p>
              <p>
                <strong className="text-kw-deep">광운대학교 멋쟁이사자처럼</strong>은 그 여정에
                함께하는 광운대 캠퍼스 지부로, 교내에서 트랙별 스터디와 팀 프로젝트를
                운영하며 전국 단위 아이디어톤·해커톤에 참가합니다.
              </p>
              <p>
                코드를 한 줄도 몰랐던 아기사자가 한 해가 끝날 무렵 자신의 서비스를
                세상에 내놓는 것 — 그것이 우리가 매년 반복하는 성장의 경험입니다.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                ['함께 배우는 스터디', '트랙별 정기 세션과 자율 스터디로 기초부터 실전까지 단계적으로 성장합니다.'],
                ['만들면서 배우는 프로젝트', '배운 것을 곧바로 팀 프로젝트에 적용하며 살아있는 포트폴리오를 만듭니다.'],
                ['전국 단위 네트워크', '아이디어톤과 해커톤에서 전국 80여 개 대학의 아기사자들과 연결됩니다.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-kw/10 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-kw-deep">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 트랙 */}
        <div className="bg-white">
          <Section id="tracks" eyebrow="Tracks" title="세 갈래의 성장 트랙">
            <div className="grid gap-6 md:grid-cols-3">
              {TRACKS.map((track) => (
                <article
                  key={track.name}
                  className="flex flex-col rounded-2xl border border-kw/10 bg-paper p-8 transition-shadow hover:shadow-lg"
                >
                  <p className="text-xs font-bold tracking-widest text-lion uppercase">{track.en}</p>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-kw-deep">{track.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">{track.desc}</p>
                  <ul className="mt-6 space-y-2 border-t border-kw/10 pt-5 text-sm text-ink/80">
                    {track.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span aria-hidden className="mt-0.5 text-lion">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>
        </div>

        {/* 연간 여정 */}
        <Section id="journey" eyebrow="Journey" title="아기사자의 1년">
          <ol className="relative space-y-10 border-l-2 border-lion/30 pl-8">
            {JOURNEY.map((step) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[39px] h-3.5 w-3.5 rounded-full border-2 border-lion bg-paper"
                />
                <p className="text-sm font-bold text-lion">{step.period}</p>
                <h3 className="mt-1 font-serif text-xl font-bold text-kw-deep">{step.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink/70">{step.desc}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* FAQ */}
        <div className="bg-white">
          <Section id="faq" eyebrow="FAQ" title="자주 묻는 질문">
            <div className="space-y-4">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-kw/10 bg-paper p-6 open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-kw-deep">
                    {item.q}
                    <span aria-hidden className="text-lion transition-transform group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-ink/70">{item.a}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>

        {/* 지원 CTA */}
        <section id="apply" className="scroll-mt-20 px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl bg-kw-deep px-8 py-16 text-center text-white shadow-xl">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              다음 모험의 주인공은 당신입니다
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/80">
              아기사자 모집은 매년 2~3월에 진행됩니다. 모집 일정과 상세 안내는
              멋쟁이사자처럼 대학 공식 채널에서 확인하세요.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://apply.likelion.org/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lion px-8 py-3 font-bold text-white transition-colors hover:bg-lion-deep"
              >
                지원 페이지 바로가기
              </a>
              <a
                href="https://likelion.university/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-8 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                멋사 대학 공식 홈페이지
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-kw/10 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center text-sm text-ink/60 sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8" />
            <div>
              <p className="font-bold text-kw-deep">광운대학교 멋쟁이사자처럼</p>
              <p>LIKELION UNIV. KWANGWOON</p>
            </div>
          </div>
          <div className="flex gap-5">
            <a
              href="https://likelion.university/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-lion"
            >
              멋사 대학
            </a>
            <a
              href="https://www.instagram.com/likelion.univ/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-lion"
            >
              Instagram
            </a>
            <a
              href="https://apply.likelion.org/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-lion"
            >
              지원하기
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
