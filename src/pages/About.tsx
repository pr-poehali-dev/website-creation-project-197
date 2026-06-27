import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', path: '/' },
  { label: 'Возможности', path: '/features' },
  { label: 'О нас', path: '/about' },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="flex items-center justify-between py-7">
          <button onClick={() => navigate('/')} className="font-sora text-2xl font-extrabold tracking-tight">
            zantem4<span className="text-primary">.AI</span>
          </button>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 lg:flex">
            <Icon name="Lock" size={15} className="text-primary" />
            <span className="text-sm text-muted-foreground">Ограниченный круг лиц</span>
          </div>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`relative text-sm transition-colors hover:text-foreground ${
                  item.path === '/about' ? 'font-medium text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {item.path === '/about' && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-primary neon-glow" />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => navigate('/')}
            className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:neon-glow"
          >
            Попробовать
          </button>
        </header>

        {/* Content */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
            <Icon name="Info" size={14} className="text-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              О нас
            </span>
          </div>

          <h1 className="font-sora text-5xl font-extrabold leading-tight md:text-6xl">
            Мы строим<br />
            <span className="text-primary neon-text">ИИ будущего</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            zantem4 AI — команда инженеров и исследователей, создающих высокотехнологичные
            решения на основе искусственного интеллекта. Наша цель — автоматизировать рутину
            и дать людям время на важное.
          </p>

          <div className="mt-14 w-full max-w-md rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/15">
              <Icon name="Mail" size={24} className="text-primary" />
            </div>
            <p className="font-sora text-lg font-semibold">Связь с нами</p>
            <p className="mt-2 text-sm text-muted-foreground">
              По всем вопросам пишите на почту:
            </p>
            <a
              href="mailto:zantem4@gmail.com"
              className="mt-4 inline-block font-sora text-xl font-bold text-primary neon-text transition-opacity hover:opacity-80"
            >
              zantem4@gmail.com
            </a>
          </div>
        </section>

        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          © 2026 zantem4.AI. Все права защищены.
        </footer>
      </div>
    </div>
  );
};

export default About;
