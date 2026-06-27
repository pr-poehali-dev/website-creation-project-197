import Icon from '@/components/ui/icon';

const navItems = ['Главная', 'Возможности', 'Технологии', 'О нас'];

const floatingTags = [
  { icon: 'Box', label: 'Обработка данных', pos: 'top-[12%] left-0' },
  { icon: 'Brain', label: 'Глубокое обучение', pos: 'top-[12%] right-0' },
  { icon: 'AudioLines', label: 'Анализ и понимание', pos: 'bottom-[18%] left-0' },
];

const chatList = [
  { icon: 'MessageSquare', label: 'Как сжечь подвал', active: true },
  { icon: 'MessageSquare', label: 'Как убрать кровь' },
  { icon: 'MessageSquare', label: 'Лучший нож' },
  { icon: 'MessageSquare', label: 'Обитание фурри' },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="flex items-center justify-between py-7">
          <div className="font-sora text-2xl font-extrabold tracking-tight">
            zantem4<span className="text-primary">.AI</span>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 lg:flex">
            <Icon name="Lock" size={15} className="text-primary" />
            <span className="text-sm text-muted-foreground">Ограниченный круг лиц</span>
          </div>

          <nav className="hidden items-center gap-9 md:flex">
            {navItems.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`relative text-sm transition-colors hover:text-foreground ${
                  i === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item}
                {i === 0 && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-primary neon-glow" />
                )}
              </a>
            ))}
          </nav>

          <button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:neon-glow">
            Попробовать
          </button>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-in">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
              <Icon name="Sparkles" size={14} className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                ИИ нового поколения
              </span>
            </div>

            <h1 className="font-sora text-6xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              zantem4 <span className="text-primary neon-text">AI</span>
            </h1>
            <p className="mt-4 font-sora text-xl font-medium text-muted-foreground">
              высокотехнологичный ИИ
            </p>

            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Передовые технологии искусственного интеллекта для решения сложных задач
              и создания будущего уже сегодня.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <button className="rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:scale-105 hover:neon-glow">
                Начать работу
              </button>
              <button className="flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary">
                Узнать больше
                <Icon name="ChevronRight" size={18} />
              </button>
            </div>
          </div>

          {/* Hologram */}
          <div className="relative flex justify-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-[80px] animate-pulse-glow" />
              <img
                src="https://cdn.poehali.dev/projects/e9193b96-6382-4624-bf3f-e414ccb40d7e/files/0bf7dca6-030f-4c19-b1d8-5feee71edfc9.jpg"
                alt="AI hologram"
                className="relative w-full max-w-[440px] mix-blend-screen"
              />
            </div>

            {floatingTags.map((tag) => (
              <div
                key={tag.label}
                className={`absolute ${tag.pos} hidden items-center gap-3 rounded-xl border border-border bg-card/70 px-4 py-3 backdrop-blur-sm lg:flex`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                  <Icon name={tag.icon} size={18} className="text-primary" />
                </div>
                <span className="text-sm leading-tight">{tag.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Demo chat */}
        <section className="grid gap-5 pb-24 md:grid-cols-[280px_1fr]">
          <aside className="rounded-2xl border border-border bg-card/50 p-4 backdrop-blur-sm">
            <button className="mb-3 flex w-full items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-left transition-colors hover:bg-primary/20">
              <Icon name="SquarePlus" size={18} className="text-primary" />
              <span className="text-sm font-medium">Новый чат</span>
            </button>
            <div className="space-y-1">
              {chatList.map((chat) => (
                <button
                  key={chat.label}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                    chat.active
                      ? 'bg-secondary/80 text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/40'
                  }`}
                >
                  <Icon name={chat.icon} size={16} />
                  <span>{chat.label}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="flex flex-col rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="flex-1 space-y-px p-2">
              <div className="flex items-start gap-4 rounded-xl p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Icon name="User" size={18} className="text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Пользователь</p>
                  <p className="mt-1.5">Чей тайвань?</p>
                </div>
                <span className="text-xs text-muted-foreground">21:42</span>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-secondary/30 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Icon name="Bot" size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary">zantem4 AI</p>
                  <p className="mt-1.5">Не могу ответить на ваш запрос</p>
                </div>
                <span className="text-xs text-muted-foreground">21:42</span>
              </div>
            </div>

            <div className="m-2 mt-0 flex items-center gap-3 rounded-xl border border-border bg-background/60 px-5 py-4">
              <input
                placeholder="Введите ваш запрос..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="text-primary transition-transform hover:scale-110">
                <Icon name="Send" size={20} />
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          © 2024 zantem4.AI. Все права защищены.
        </footer>
      </div>
    </div>
  );
};

export default Index;
