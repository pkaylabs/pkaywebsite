import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Code2,
  Compass,
  ExternalLink,
  Globe2,
  Layers3,
  Menu,
  MessageCircleMore,
  MoveRight,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const navigation = [
  ["Expertise", "#expertise"],
  ["Work", "#work"],
  ["Approach", "#approach"],
  ["About", "#about"],
] as const;

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Custom web applications",
    copy: "Scalable, maintainable products shaped around the way your business actually works.",
    tags: ["Product design", "Full-stack", "Platforms"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Websites & landing pages",
    copy: "Fast, expressive digital experiences designed to turn attention into action.",
    tags: ["Web design", "Development", "Launch"],
  },
  {
    number: "03",
    icon: Compass,
    title: "Consulting & strategy",
    copy: "Technical audits, architecture, and launch planning that replace uncertainty with a clear path forward.",
    tags: ["Audits", "Architecture", "Roadmaps"],
  },
];

const projects = [
  {
    index: "01",
    title: "Manu Home Care",
    category: "Website & content management system",
    copy: "A trusted digital front door for home care services, paired with a flexible content management system.",
    visual: "homecare",
    size: "wide",
  },
  {
    index: "02",
    title: "BirthNon",
    category: "E-commerce platform",
    copy: "A focused commerce experience that makes browsing, choosing, and buying feel effortless.",
    url: "https://www.birthnon.com/",
    visual: "birthnon",
    size: "half",
  },
  {
    index: "03",
    title: "Padlupp",
    category: "Web application",
    copy: "A purpose-built web application that turns a complex workflow into a focused, intuitive product experience.",
    visual: "padlupp",
    size: "half",
  },
  {
    index: "04",
    title: "Nano ERP",
    category: "Enterprise resource planning",
    copy: "A modular business platform designed to keep everyday operations connected, organised, and visible.",
    visual: "nano",
    size: "wide",
  },
  {
    index: "05",
    title: "AfriCare OS",
    category: "Care operations platform",
    copy: "A unified digital workspace created around clearer, more coordinated care operations.",
    visual: "africare",
    size: "half",
  },
  {
    index: "06",
    title: "CourtOS",
    category: "Court operations platform",
    copy: "An organised digital system for bringing court workflows and information into one focused workspace.",
    visual: "courtos",
    size: "half",
  },
  {
    index: "07",
    title: "Admitra",
    category: "Web application",
    copy: "A streamlined digital experience that makes complex application journeys feel clear and manageable.",
    visual: "admitra",
    size: "wide",
  },
  {
    index: "08",
    title: "ToAba",
    category: "Digital platform",
    copy: "A focused digital experience built to connect people, information, and action in one place.",
    visual: "toaba",
    size: "half",
  },
  {
    index: "09",
    title: "PKay M&E System",
    category: "Monitoring & evaluation web app",
    copy: "A purpose-built system for organising, tracking, and reviewing programme information.",
    visual: "monitoring",
    size: "half",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Discover the signal",
    copy: "We align on the problem, the audience, and the outcome worth pursuing.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Shape the experience",
    copy: "Flows, interfaces, and architecture become one clear, testable blueprint.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Build in the open",
    copy: "Frequent demos keep progress visible and decisions close to the work.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Evolve with confidence",
    copy: "We launch, learn, and strengthen what matters as the product grows.",
  },
];

const principles = [
  {
    icon: Zap,
    title: "Fast, not rushed",
    copy: "Tighter feedback loops, never thinner thinking.",
  },
  {
    icon: ShieldCheck,
    title: "Built to scale",
    copy: "Reliable foundations for life beyond launch.",
  },
  {
    icon: MessageCircleMore,
    title: "Progress you can see",
    copy: "Clear trade-offs and working software, often.",
  },
  {
    icon: Sparkles,
    title: "Details earn trust",
    copy: "Every interaction is part of the product promise.",
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark--light" : ""}`} aria-hidden="true">
      <i />
      <i />
      <b />
    </span>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "logo--light" : ""}`} href="#top" aria-label="PKay Software Consultancy, home">
      <BrandMark light={light} />
      <span className="logo-copy">
        <strong>PKay</strong>
        <small>Software Consultancy</small>
      </span>
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 44,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.82, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.6 });
  const smoothY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.6 });

  return (
    <motion.a
      className={className}
      href={href}
      style={{ x: smoothX, y: smoothY }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 190, damping: 23 });
  const smoothY = useSpring(rotateY, { stiffness: 190, damping: 23 });

  return (
    <motion.article
      className={className}
      style={{ rotateX: smoothX, rotateY: smoothY, transformPerspective: 1000 }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const localX = event.clientX - bounds.left;
        const localY = event.clientY - bounds.top;
        event.currentTarget.style.setProperty("--spot-x", `${localX}px`);
        event.currentTarget.style.setProperty("--spot-y", `${localY}px`);
        if (reduceMotion || event.pointerType !== "mouse") return;
        rotateY.set(((localX / bounds.width) - 0.5) * 8);
        rotateX.set(((localY / bounds.height) - 0.5) * -8);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      {children}
    </motion.article>
  );
}

function KineticCore({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`kinetic-core ${compact ? "kinetic-core--compact" : ""}`} aria-hidden="true">
      <div className="core-aura" />
      <div className="orbit orbit--alpha">
        <i className="particle particle--one" />
        <i className="particle particle--two" />
      </div>
      <div className="orbit orbit--beta">
        <i className="particle particle--three" />
        <i className="particle particle--four" />
        <i className="particle particle--five" />
      </div>
      <div className="orbit orbit--gamma">
        <i className="particle particle--six" />
      </div>
      <div className="signal-sphere">
        <div className="sphere-grid" />
        <div className="sphere-glint" />
        <div className="sphere-mark"><BrandMark light /></div>
      </div>
      <div className="core-axis core-axis--x" />
      <div className="core-axis core-axis--y" />
      {!compact && (
        <>
          <div className="signal-tag signal-tag--one"><span />Strategy in sync</div>
          <div className="signal-tag signal-tag--two"><span />Built for scale</div>
          <div className="signal-tag signal-tag--three"><span />Accra → worldwide</div>
        </>
      )}
    </div>
  );
}

const systemVisuals: Record<string, {
  brand: string;
  eyebrow: string;
  title: [string, string];
  token: string;
  modules: [string, string, string];
}> = {
  homecare: {
    brand: "MANU",
    eyebrow: "HOME CARE / CMS",
    title: ["Care, closer", "to home."],
    token: "M",
    modules: ["Services", "Content", "Team"],
  },
  padlupp: {
    brand: "PADLUPP",
    eyebrow: "WEB APPLICATION",
    title: ["Move with", "momentum."],
    token: "P",
    modules: ["Workspace", "Flow", "Insights"],
  },
  nano: {
    brand: "NANO",
    eyebrow: "ENTERPRISE RESOURCE PLANNING",
    title: ["One view.", "Every operation."],
    token: "N",
    modules: ["Finance", "People", "Stock"],
  },
  africare: {
    brand: "AFRICARE",
    eyebrow: "CARE OPERATIONS / OS",
    title: ["Care, clearly", "coordinated."],
    token: "A",
    modules: ["Care", "Teams", "Operations"],
  },
  courtos: {
    brand: "COURTOS",
    eyebrow: "COURT OPERATIONS PLATFORM",
    title: ["Order for", "every case."],
    token: "C",
    modules: ["Cases", "Calendar", "Records"],
  },
  admitra: {
    brand: "ADMITRA",
    eyebrow: "APPLICATION EXPERIENCE",
    title: ["Clear paths.", "Better journeys."],
    token: "A",
    modules: ["Apply", "Review", "Decide"],
  },
  toaba: {
    brand: "TOABA",
    eyebrow: "DIGITAL PLATFORM",
    title: ["Connected", "by design."],
    token: "T",
    modules: ["Discover", "Connect", "Move"],
  },
};

function ProjectVisual({ type }: { type: string }) {
  const systemVisual = systemVisuals[type];
  if (systemVisual) {
    return (
      <div className={`project-ui ui-system ui-${type}`} aria-hidden="true">
        <div className="system-grid" />
        <div className="system-top">
          <span>{systemVisual.brand}</span>
          <small>{systemVisual.eyebrow}</small>
          <i />
        </div>
        <div className="system-copy">
          <small>{systemVisual.eyebrow}</small>
          <strong>{systemVisual.title[0]}<br />{systemVisual.title[1]}</strong>
          <span>Purpose-built digital product</span>
        </div>
        <div className="system-orbit"><i /><i /><b>{systemVisual.token}</b></div>
        <div className="system-modules">
          {systemVisual.modules.map((module, index) => (
            <div key={module}>
              <span>0{index + 1}</span>
              <strong>{module}</strong>
              <i />
            </div>
          ))}
        </div>
        <div className="system-status"><i /> Product system</div>
      </div>
    );
  }

  if (type === "birthnon") {
    return (
      <div className="project-ui ui-birthnon" aria-hidden="true">
        <div className="shop-top"><BrandMark /><span>BIRTHNON</span><i /><i /></div>
        <div className="shop-copy"><small>CURATED COMMERCE</small><strong>Find your<br />next favourite.</strong><i /></div>
        <div className="product-stack"><span /><span /><span /></div>
        <div className="shop-pill">Explore collection <ArrowUpRight size={12} /></div>
      </div>
    );
  }

  return (
    <div className="project-ui ui-monitoring" aria-hidden="true">
      <div className="monitor-orb"><i /><i /><i /></div>
      <div className="monitor-panel monitor-panel--one"><span>PROGRAMME VIEW</span><b /><b /><b /></div>
      <div className="monitor-panel monitor-panel--two"><span>REPORTING</span><div><i /><i /><i /><i /></div></div>
      <div className="monitor-panel monitor-panel--three"><span>ONE CLEAR PICTURE</span><strong>M&E</strong></div>
      <div className="monitor-grid" />
    </div>
  );
}

function Preloader({ progress }: { progress: number }) {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader-grid" />
      <motion.div
        className="preloader-mark"
        initial={{ scale: 0.65, rotate: -24, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <BrandMark light />
      </motion.div>
      <div className="preloader-bottom">
        <span>PKAY / DIGITAL ATELIER</span>
        <div><i style={{ transform: `scaleX(${progress / 100})` }} /></div>
        <strong>{progress.toString().padStart(3, "0")}</strong>
      </div>
    </motion.div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorHover, setCursorHover] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const pageProgress = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 });
  const heroCopyY = useTransform(scrollY, [0, 760], [0, 110]);
  const heroCopyOpacity = useTransform(scrollY, [0, 680], [1, 0.28]);
  const heroVisualY = useTransform(scrollY, [0, 760], [0, -72]);

  const pointerX = useMotionValue(-80);
  const pointerY = useMotionValue(-80);
  const cursorX = useSpring(pointerX, { stiffness: 850, damping: 48, mass: 0.16 });
  const cursorY = useSpring(pointerY, { stiffness: 850, damping: 48, mass: 0.16 });
  const auraX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.8 });
  const auraY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.8 });

  const sceneRotateX = useMotionValue(0);
  const sceneRotateY = useMotionValue(0);
  const smoothSceneX = useSpring(sceneRotateX, { stiffness: 90, damping: 18 });
  const smoothSceneY = useSpring(sceneRotateY, { stiffness: 90, damping: 18 });

  useEffect(() => {
    if (reduceMotion) {
      const timeout = window.setTimeout(() => {
        setProgress(100);
        setLoading(false);
      }, 180);
      return () => window.clearTimeout(timeout);
    }

    const duration = 1550;
    const started = performance.now();
    let frame = 0;
    let closeTimer = 0;
    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - started) / duration) * 100));
      setProgress(next);
      if (next < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        closeTimer = window.setTimeout(() => setLoading(false), 180);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(closeTimer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setCursorVisible(true);
    };
    const over = (event: PointerEvent) => {
      const target = event.target as Element | null;
      setCursorHover(Boolean(target?.closest("a, button, [data-cursor='large']")));
    };
    const leave = () => setCursorVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [pointerX, pointerY]);

  useEffect(() => {
    document.body.style.overflow = loading || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    menuCloseRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuTriggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    window.setTimeout(() => menuTriggerRef.current?.focus(), 50);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell" id="top">
        <AnimatePresence>{loading && <Preloader progress={progress} />}</AnimatePresence>

        <motion.div className="scroll-progress" style={{ scaleX: pageProgress }} />
        <motion.div className="pointer-aura" style={{ x: auraX, y: auraY }} aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <motion.div
          className="cursor-ring"
          style={{ x: cursorX, y: cursorY }}
          animate={{ scale: cursorHover ? 1.75 : 1, opacity: cursorVisible ? 1 : 0 }}
          aria-hidden="true"
        />
        <motion.div
          className="cursor-dot"
          style={{ x: pointerX, y: pointerY }}
          animate={{ opacity: cursorVisible ? 1 : 0 }}
          aria-hidden="true"
        />

        <header className="nav-shell">
          <motion.nav
            className="nav container"
            aria-label="Primary navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? -20 : 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            <Logo light />
            <div className="nav-links">
              {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            </div>
            <MagneticLink className="nav-cta" href="#contact">
              Start a project <ArrowUpRight size={15} strokeWidth={2.4} />
            </MagneticLink>
            <button
              ref={menuTriggerRef}
              className="menu-trigger"
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={22} />
            </button>
          </motion.nav>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ clipPath: "circle(0% at 92% 5%)" }}
              animate={{ clipPath: "circle(150% at 92% 5%)" }}
              exit={{ clipPath: "circle(0% at 92% 5%)" }}
              transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="mobile-menu-top">
                <Logo light />
                <button ref={menuCloseRef} type="button" onClick={closeMenu} aria-label="Close navigation"><X /></button>
              </div>
              <div className="mobile-menu-links">
                {[...navigation, ["Contact", "#contact"] as const].map(([label, href], index) => (
                  <motion.a
                    href={href}
                    key={label}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -38 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.07, ease: EASE }}
                  >
                    <span>0{index + 1}</span>
                    {label}
                    <ArrowUpRight />
                  </motion.a>
                ))}
              </div>
              <div className="mobile-menu-foot">
                <span>Accra, Ghana</span>
                <span>Available worldwide</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-grid-overlay" aria-hidden="true" />
            <div className="container hero-layout">
              <motion.div
                className="hero-copy"
                style={{
                  y: reduceMotion ? 0 : heroCopyY,
                  opacity: reduceMotion ? 1 : heroCopyOpacity,
                }}
              >
                <motion.div
                  className="eyebrow hero-eyebrow"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: loading ? 0 : 1, y: loading ? 16 : 0 }}
                  transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
                >
                  <span className="status-dot" />
                  Accra-born <i /> Building worldwide
                </motion.div>
                <h1 id="hero-title">
                  <span className="hero-line"><motion.span initial={{ y: "115%" }} animate={{ y: loading ? "115%" : 0 }} transition={{ duration: 0.9, delay: 0.18, ease: EASE }}>Software that</motion.span></span>
                  <span className="hero-line hero-line--accent"><motion.span initial={{ y: "115%" }} animate={{ y: loading ? "115%" : 0 }} transition={{ duration: 0.9, delay: 0.28, ease: EASE }}>earns attention—</motion.span></span>
                  <span className="hero-line"><motion.span initial={{ y: "115%" }} animate={{ y: loading ? "115%" : 0 }} transition={{ duration: 0.9, delay: 0.38, ease: EASE }}>and keeps it.</motion.span></span>
                </h1>
                <motion.div
                  className="hero-support"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: loading ? 0 : 1, y: loading ? 28 : 0 }}
                  transition={{ duration: 0.8, delay: 0.58, ease: EASE }}
                >
                  <p>
                    PKay Software Consultancy designs and engineers high-performance web products for startups and growing teams—from first idea to production.
                  </p>
                  <div className="hero-actions">
                    <MagneticLink className="button button--primary" href="#contact">
                      <span>Start a project</span><ArrowUpRight size={18} />
                    </MagneticLink>
                    <a className="button-link" href="#work">Explore our work <ArrowDownRight size={16} /></a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="hero-visual-wrap"
                style={{
                  y: reduceMotion ? 0 : heroVisualY,
                  rotateX: smoothSceneX,
                  rotateY: smoothSceneY,
                  transformPerspective: 1200,
                }}
                initial={{ opacity: 0, scale: 0.72, rotate: -8 }}
                animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.72 : 1, rotate: loading ? -8 : 0 }}
                transition={{ duration: 1.25, delay: 0.32, ease: EASE }}
                onPointerMove={(event) => {
                  if (reduceMotion || event.pointerType !== "mouse") return;
                  const bounds = event.currentTarget.getBoundingClientRect();
                  sceneRotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
                  sceneRotateX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -10);
                }}
                onPointerLeave={() => {
                  sceneRotateX.set(0);
                  sceneRotateY.set(0);
                }}
                data-cursor="large"
              >
                <div className="visual-coordinate visual-coordinate--top"><span>05.6037° N</span><span>00.1870° W</span></div>
                <KineticCore />
                <div className="visual-index"><span>DIGITAL CRAFT</span><strong>PK / 01</strong></div>
              </motion.div>
            </div>
            <motion.a
              className="scroll-cue"
              href="#expertise"
              initial={{ opacity: 0 }}
              animate={{ opacity: loading ? 0 : 1 }}
              transition={{ delay: 0.95, duration: 0.7 }}
            >
              <span>Scroll to explore</span><i><ArrowDownRight size={16} /></i>
            </motion.a>
          </section>

          <section className="capability-ticker" aria-label="PKay capabilities">
            <div className="ticker-track">
              {[0, 1].map((group) => (
                <div className="ticker-group" key={group} aria-hidden={group === 1}>
                  <span>Product strategy</span><Asterisk />
                  <span>Experience design</span><Asterisk />
                  <span>Software engineering</span><Asterisk />
                  <span>Web applications</span><Asterisk />
                  <span>Worldwide delivery</span><Asterisk />
                </div>
              ))}
            </div>
          </section>

          <section className="expertise section-light section-pad" id="expertise">
            <div className="container">
              <Reveal className="section-heading">
                <div>
                  <span className="section-kicker">01 / What we build</span>
                  <h2>One focused team.<br /><em>Every critical layer.</em></h2>
                </div>
                <p>Strategy, experience, and engineering move together—so good ideas reach production without losing their edge.</p>
              </Reveal>

              <div className="service-grid">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Reveal key={service.title} delay={index * 0.07}>
                      <TiltCard className={`service-card service-card--${index + 1}`}>
                        <div className="service-spotlight" />
                        <div className="service-top"><span>{service.number}</span><i><Icon size={24} /></i></div>
                        <div className="service-content"><h3>{service.title}</h3><p>{service.copy}</p></div>
                        <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        <ArrowUpRight className="service-arrow" />
                      </TiltCard>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal className="expertise-note">
                <span><Sparkles size={17} /> One connected practice</span>
                <p>Less hand-off. More momentum. Better software.</p>
              </Reveal>
            </div>
          </section>

          <section className="work section-dark section-pad" id="work">
            <div className="container">
              <Reveal className="section-heading section-heading--dark">
                <div>
                  <span className="section-kicker">02 / Selected work</span>
                  <h2>Built for real business.<br /><em>Designed to move.</em></h2>
                </div>
                <p>A selection of websites, operational systems, and purpose-built platforms created for real organisations.</p>
              </Reveal>

              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.article
                    className={`project-card project-card--${project.size} project-card--${project.visual}`}
                    key={project.title}
                    initial={{ opacity: 0, y: 56, scale: 0.975 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.14 }}
                    transition={{ duration: 0.9, delay: index % 2 === 0 ? 0 : 0.08, ease: EASE }}
                  >
                    <div className="project-copy">
                      <div className="project-meta"><span>{project.index}</span><span>{project.category}</span></div>
                      <h3>{project.title}</h3>
                      <p>{project.copy}</p>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">Visit project <ExternalLink size={15} /></a>
                      ) : (
                        <a href="#contact">Project details on request <ArrowRight size={15} /></a>
                      )}
                    </div>
                    <div className="project-stage"><ProjectVisual type={project.visual} /></div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="manifesto" aria-labelledby="manifesto-title">
            <div className="manifesto-grid" aria-hidden="true" />
            <motion.div
              className="manifesto-orb"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.3, ease: EASE }}
              aria-hidden="true"
            />
            <div className="container manifesto-inner">
              <Reveal className="manifesto-label"><Sparkles size={18} /> Our point of view</Reveal>
              <Reveal className="manifesto-copy" y={64}>
                <h2 id="manifesto-title">Great software is not assembled. It is <em>orchestrated.</em></h2>
              </Reveal>
              <Reveal className="manifesto-aside">
                <span>Every interaction.</span>
                <span>Every system decision.</span>
                <span>Every line of code.</span>
                <p>All pulling in the same direction.</p>
              </Reveal>
            </div>
          </section>

          <section className="approach section-light section-pad" id="approach">
            <div className="container">
              <Reveal className="section-heading">
                <div>
                  <span className="section-kicker">03 / How we move</span>
                  <h2>Clarity at speed.<br /><em>Quality by design.</em></h2>
                </div>
                <p>A low-ceremony, high-trust process that keeps decisions close to the work and progress visible.</p>
              </Reveal>
              <div className="process-list">
                {process.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      className="process-row"
                      key={item.number}
                      initial={{ opacity: 0, x: -48 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.75, delay: index * 0.08, ease: EASE }}
                    >
                      <div className="process-wipe" />
                      <span className="process-number">{item.number}</span>
                      <i className="process-icon"><Icon size={21} /></i>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                      <i className="process-arrow"><ArrowUpRight /></i>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="about section-pad" id="about">
            <div className="about-glow" aria-hidden="true" />
            <div className="container">
              <Reveal className="about-layout">
                <div className="about-copy">
                  <span className="section-kicker">04 / Why PKay</span>
                  <h2>Close collaboration.<br /><em>Serious craft.</em></h2>
                  <p>Work directly with the people designing and building your product. Expect clear trade-offs, thoughtful execution, and software made for life beyond launch.</p>
                  <MagneticLink href="#contact" className="button button--light">Meet your build partner <MoveRight size={18} /></MagneticLink>
                </div>
                <div className="principle-grid">
                  {principles.map((principle, index) => {
                    const Icon = principle.icon;
                    return (
                      <motion.article
                        className={`principle principle--${index + 1}`}
                        key={principle.title}
                        whileHover={reduceMotion ? undefined : { y: -8, rotate: index % 2 ? 1 : -1 }}
                        transition={{ type: "spring", stiffness: 250, damping: 20 }}
                      >
                        <i><Icon size={22} /></i>
                        <strong>{principle.title}</strong>
                        <span>{principle.copy}</span>
                      </motion.article>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            <div className="discipline-ticker" aria-label="PKay disciplines">
              <div className="discipline-track">
                {[0, 1].map((group) => (
                  <div key={group} aria-hidden={group === 1}>
                    <span>Strategy</span><i>×</i><span>Experience</span><i>×</i><span>Engineering</span><i>×</i><span>Delivery</span><i>×</i>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="contact section-pad" id="contact">
            <div className="contact-grid-overlay" aria-hidden="true" />
            <div className="container contact-layout">
              <div className="contact-copy">
                <Reveal><span className="section-kicker">Have something ambitious in mind?</span></Reveal>
                <h2>
                  {["Let’s", "make", "it", "real."].map((word, index) => (
                    <span className="contact-mask" key={word}>
                      <motion.span
                        initial={{ y: "112%", rotate: 3 }}
                        whileInView={{ y: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.82, delay: index * 0.09, ease: EASE }}
                        className={word === "real." ? "contact-accent" : ""}
                      >{word}</motion.span>
                    </span>
                  ))}
                </h2>
                <Reveal className="contact-support">
                  <p>Tell us what you’re building, what is stuck, or what needs to happen next. We’ll reply with substance.</p>
                  <MagneticLink
                    className="contact-email"
                    href="mailto:pkaysoftwareconsultancy@gmail.com?subject=Project%20enquiry%20for%20PKay"
                  >
                    <span>pkaysoftwareconsultancy@gmail.com</span><ArrowUpRight />
                  </MagneticLink>
                  <div className="contact-location"><span className="status-dot" />Accra, Ghana <i /> Available remotely worldwide</div>
                </Reveal>
              </div>
              <motion.div
                className="contact-core"
                initial={{ opacity: 0, scale: 0.68, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 1.15, ease: EASE }}
                data-cursor="large"
              >
                <KineticCore compact />
                <div className="contact-stamp"><span>AVAILABLE FOR</span><strong>SELECT<br />PROJECTS</strong><i>2026 / WORLDWIDE</i></div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container footer-main">
            <Logo light />
            <p>High-performance web products<br />built with care in Ghana.</p>
            <div className="footer-nav">{navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
            <a className="footer-contact" href="mailto:pkaysoftwareconsultancy@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} PKay Software Consultancy</span>
            <span>Accra <i /> Worldwide</span>
            <a href="#top">Back to top <ArrowUpRight size={14} /></a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
