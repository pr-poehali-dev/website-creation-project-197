import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const floatingTags = [
  { icon: 'Database', label: 'Обработка данных', pos: 'top-[8%] left-0' },
  { icon: 'Cpu', label: 'Глубокое обучение', pos: 'top-[8%] right-0' },
  { icon: 'AudioLines', label: 'Анализ и понимание', pos: 'bottom-[10%] left-0' },
];

interface Message {
  author: 'user' | 'bot';
  text: string;
  time: string;
}

const nowTime = () =>
  new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

const Index = () => {
  const navigate = useNavigate();
  const [nick, setNick] = useState('');
  const [nickInput, setNickInput] = useState('');
  const [nickSaved, setNickSaved] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const saveNick = () => {
    const n = nickInput.trim();
    if (!n) return;
    setNick(n);
    setNickSaved(true);
    toast(`Привет, ${n}!`);
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { author: 'user', text, time: nowTime() }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { author: 'bot', text: 'Серверы временно недоступны', time: nowTime() },
      ]);
      setTyping(false);
    }, 900);
  };

  const navLinks = [
    { label: 'Главная', action: () => navigate('/') },
    { label: 'Возможности', action: () => navigate('/features') },
    { label: 'О нас', action: () => navigate('/about') },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Bg effects */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute -top-60 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/2 right-[-100px] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* ── Header ── */}
        <header className="flex items-center justify-between py-5 sm:py-7">
          <button onClick={() => navigate('/')} className="font-sora text-xl sm:text-2xl font-extrabold tracking-tight">
            zantem4<span className="text-primary">.AI</span>
          </button>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 lg:flex">
            <Icon name="Lock" size={13} className="text-primary" />
            <span className="text-xs text-muted-foreground">Ограниченный круг лиц</span>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((item, i) => (
              <button
                key={item.label}
                onClick={item.action}
                className={`relative text-sm transition-colors hover:text-foreground ${
                  i === 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {i === 0 && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-primary" />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => toast('Доступ ограничен. Заявка отправлена!')}
            className="rounded-xl bg-primary px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
          >
            Попробовать
          </button>
        </header>

        {/* ── Hero ── */}
        <section className="grid items-center gap-8 py-8 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:py-20">

          {/* Left */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2">
              <Icon name="Sparkles" size={13} className="text-primary" />
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-primary">
                ИИ нового поколения
              </span>
            </div>

            <h1 className="font-sora text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              zantem4 <span className="text-primary neon-text">AI</span>
            </h1>
            <p className="mt-3 font-sora text-base sm:text-xl font-medium text-muted-foreground">
              высокотехнологичный ИИ
            </p>

            <p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">
              Передовые технологии искусственного интеллекта для решения сложных задач
              и создания будущего уже сегодня.
            </p>

            {/* Nick input */}
            <div className="mt-7 flex max-w-xs items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2.5 backdrop-blur-sm">
              <Icon name="AtSign" size={16} className="shrink-0 text-primary" />
              {nickSaved ? (
                <div className="flex flex-1 items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground truncate">{nick}</span>
                  <button
                    onClick={() => { setNickSaved(false); setNickInput(nick); }}
                    className="shrink-0 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    изменить
                  </button>
                </div>
              ) : (
                <>
                  <input
                    value={nickInput}
                    onChange={(e) => setNickInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && saveNick()}
                    placeholder="Ваш ник..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    onClick={saveNick}
                    className="shrink-0 rounded-lg bg-primary/20 px-2.5 py-1 text-xs font-medium text-primary hover:bg-primary/30 transition-colors"
                  >
                    OK
                  </button>
                </>
              )}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                onClick={() =>
                  document.getElementById('demo-chat')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="rounded-xl bg-primary px-6 py-3 sm:px-8 sm:py-3.5 font-semibold text-sm text-primary-foreground transition-all hover:scale-105 hover:neon-glow"
              >
                Начать работу
              </button>
              <button
                onClick={() => navigate('/features')}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Узнать больше
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>
          </div>

          {/* Right — sphere */}
          <div className="relative order-1 flex justify-center lg:order-2">
            <div className="relative animate-float w-full max-w-[240px] sm:max-w-[340px] lg:max-w-[420px]">
              <div className="absolute inset-0 rounded-full bg-primary/25 blur-[100px] animate-pulse-glow" />
              <img
                src="https://cdn.poehali.dev/projects/e9193b96-6382-4624-bf3f-e414ccb40d7e/files/df9dab08-e5b6-47a2-b72b-50d3a090d66b.jpg"
                alt="AI sphere"
                className="relative w-full mix-blend-screen drop-shadow-[0_0_60px_rgba(139,92,246,0.5)]"
              />
            </div>

            {floatingTags.map((tag) => (
              <div
                key={tag.label}
                className={`absolute ${tag.pos} hidden items-center gap-2.5 rounded-xl border border-border bg-card/80 px-3 py-2.5 backdrop-blur-sm xl:flex`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                  <Icon name={tag.icon} size={15} className="text-primary" />
                </div>
                <span className="text-xs leading-tight">{tag.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Chat ── */}
        <section id="demo-chat" className="pb-16 sm:pb-24">
          <div className="flex flex-col rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">

            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-border px-4 sm:px-5 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                <Icon name="Bot" size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">zantem4 AI</p>
                <p className="text-[11px] text-yellow-500/80">Серверы временно недоступны</p>
              </div>
              <div className="ml-auto flex h-2 w-2 rounded-full bg-yellow-500/80" />
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1"
              style={{ minHeight: 200, maxHeight: 340 }}
            >
              {messages.length === 0 && !typing && (
                <div className="flex h-36 flex-col items-center justify-center text-muted-foreground">
                  <Icon name="MessagesSquare" size={28} className="mb-2 opacity-30" />
                  <p className="text-sm">Задайте любой вопрос</p>
                </div>
              )}

              {messages.map((msg, i) =>
                msg.author === 'user' ? (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-3 sm:p-4 animate-fade-in">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold uppercase text-foreground">
                      {nick ? nick[0] : <Icon name="User" size={15} className="text-muted-foreground" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{nick || 'Пользователь'}</p>
                      <p className="mt-1 text-sm break-words">{msg.text}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-secondary/30 p-3 sm:p-4 animate-fade-in">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Icon name="Bot" size={15} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-primary">zantem4 AI</p>
                      <p className="mt-1 text-sm break-words">{msg.text}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                )
              )}

              {typing && (
                <div className="flex items-center gap-3 rounded-xl bg-secondary/30 p-3 sm:p-4">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Icon name="Bot" size={15} className="text-primary" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-3 border-t border-border bg-background/40 px-4 py-3 sm:px-5 sm:py-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Введите ваш запрос..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={sendMessage}
                className="shrink-0 rounded-xl bg-primary/20 p-2.5 text-primary transition-all hover:bg-primary/30 hover:scale-105"
              >
                <Icon name="Send" size={18} />
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-border py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground">
          © 2026 zantem4.AI. Все права защищены.
        </footer>
      </div>
    </div>
  );
};

export default Index;
