import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', path: '/' },
  { label: 'Возможности', path: '/features' },
  { label: 'О нас', path: '/about' },
];

const categories = [
  {
    icon: 'UserPlus',
    title: 'Создание аккаунтов',
    desc: 'Автоматически создаёт и управляет аккаунтами на любых платформах — от соцсетей до корпоративных сервисов.',
    tags: ['VK', 'Telegram', 'Gmail', 'Instagram', 'LinkedIn'],
  },
  {
    icon: 'ShoppingCart',
    title: 'Маркетплейсы и магазины',
    desc: 'Регистрация на Wildberries, Ozon, Amazon — заполняет профили, загружает товары, настраивает витрины.',
    tags: ['Wildberries', 'Ozon', 'Amazon', 'Avito'],
  },
  {
    icon: 'Briefcase',
    title: 'Бизнес и финансы',
    desc: 'Открывает счета, регистрирует компании, работает с банковскими и платёжными сервисами.',
    tags: ['Тинькофф', 'СберБизнес', 'ЮMoney', 'Stripe'],
  },
  {
    icon: 'Code2',
    title: 'IT и разработка',
    desc: 'Создаёт аккаунты разработчика, настраивает API-ключи, деплоит проекты автоматически.',
    tags: ['GitHub', 'Vercel', 'AWS', 'Cloudflare'],
  },
  {
    icon: 'GraduationCap',
    title: 'Образование',
    desc: 'Регистрируется на курсах, заполняет профили студента, отслеживает прогресс обучения.',
    tags: ['Coursera', 'Stepik', 'Skillbox', 'Udemy'],
  },
  {
    icon: 'Gamepad2',
    title: 'Игры и развлечения',
    desc: 'Аккаунты в игровых платформах, стриминге и развлекательных сервисах любой сложности.',
    tags: ['Steam', 'Epic Games', 'Netflix', 'Spotify'],
  },
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

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
                  item.path === '/features' ? 'font-medium text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {item.path === '/features' && (
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

        {/* Hero */}
        <section className="py-16 text-center animate-fade-in">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
            <Icon name="Zap" size={14} className="text-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Возможности
            </span>
          </div>
          <h1 className="font-sora text-5xl font-extrabold leading-tight md:text-6xl">
            Всё что нужно —<br />
            <span className="text-primary neon-text">ИИ сделает сам</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            zantem4 AI умеет работать в любой сфере: регистрирует аккаунты, заполняет данные,
            настраивает профили и автоматизирует рутину — за секунды.
          </p>
        </section>

        {/* Cards */}
        <section className="grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 transition-all group-hover:bg-primary/25">
                <Icon name={cat.icon} size={22} className="text-primary" />
              </div>
              <h3 className="font-sora text-lg font-bold">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          © 2026 zantem4.AI. Все права защищены.
        </footer>
      </div>
    </div>
  );
};

export default Features;
