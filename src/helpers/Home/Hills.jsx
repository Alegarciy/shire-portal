
// === Hand-drawn hills behind the hero ===
const Hills = () => (
  <svg
    className="hero-hills"
    viewBox="0 0 1080 600"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    aria-hidden="true"
  >
    {/* Cloud — top left */}
    <path
      d="M 90 110 Q 100 96 124 100 Q 138 84 168 96 Q 200 86 224 102 Q 246 100 246 116 Q 248 130 224 132 Q 200 136 168 130 Q 138 132 124 126 Q 102 132 90 110 Z"
      stroke="var(--accent)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hill-stroke cloud"
    />

    {/* Far hill — top right (small) */}
    <path
      d="M 720 180 Q 760 132 820 156 Q 860 188 940 174 Q 1020 178 1080 196"
      stroke="var(--accent)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hill-stroke hill-far"
    />

    {/* Middle hill (largest, behind text) */}
    <path
      d="M 280 460 Q 380 280 540 280 Q 700 296 820 440 Q 880 520 980 580"
      stroke="var(--accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hill-stroke hill-mid"
    />

    {/* Front hill — left */}
    <path
      d="M -40 540 Q 80 380 220 420 Q 340 460 420 580"
      stroke="var(--accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hill-stroke hill-front"
    />

    {/* Tiny round door dot on front hill */}
    <circle cx="120" cy="478" r="3" fill="var(--accent)" className="hill-stroke door" />

    <style>{`
      .hero-hills {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
      }
      .hill-stroke {
        stroke-dasharray: 2000;
        stroke-dashoffset: 2000;
        animation: drawHill 2.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      .hill-stroke.cloud   { animation-delay: 200ms; }
      .hill-stroke.hill-far    { animation-delay: 600ms; }
      .hill-stroke.hill-mid    { animation-delay: 350ms; }
      .hill-stroke.hill-front  { animation-delay: 750ms; }
      .hill-stroke.door {
        opacity: 0;
        animation: doorFade 600ms ease 2400ms forwards;
        stroke-dasharray: none;
      }
      @keyframes drawHill {
        to { stroke-dashoffset: 0; }
      }
      @keyframes doorFade {
        to { opacity: 1; }
      }
      @media (max-width: 720px) {
        .hero-hills { opacity: 0.85; }
      }
    `}</style>
  </svg>
);

export default Hills;
