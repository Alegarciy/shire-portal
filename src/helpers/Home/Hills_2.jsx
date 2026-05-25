// === Hand-drawn hills behind the hero ===
// Green is fixed (not bound to accent) so it stays a "field" no matter the theme accent.
const Hills2 = () => (
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
      className="hill-stroke cloud"
    />

    {/* Far hill — top right (small) */}
    <path
      d="M 720 200 Q 760 152 820 176 Q 860 208 940 194 Q 1020 198 1080 216"
      className="hill-stroke hill-far"
    />

    {/* Middle hill (largest, behind text) */}
    <path
      d="M 280 460 Q 380 280 540 280 Q 700 296 820 440 Q 880 520 980 580"
      className="hill-stroke hill-mid"
    />

    {/* Front hill — left */}
    <path
      d="M -40 540 Q 80 380 220 420 Q 340 460 420 580"
      className="hill-stroke hill-front"
    />

    {/* Windmill — on the middle hill. */}
    <g className="windmill-1">
      {/* tower */}
      <line x1="718" y1="432" x2="722" y2="340" className="wm-stroke" />
      {/* hub + blades */}
      <g className="wm-rotor" style={{ transformOrigin: "722px 340px" }}>
        <line x1="722" y1="340" x2="723" y2="306" className="wm-blade" />
        <line x1="722" y1="340" x2="752" y2="352" className="wm-blade" />
        <line x1="722" y1="340" x2="695" y2="359" className="wm-blade" />
      </g>
    </g>

    {/* Windmill — on the front hill (left). */}
    <g className="windmill-3">
      {/* tower */}
      <line x1="281" y1="448" x2="279" y2="398" className="wm-stroke" />
      {/* hub + blades */}
      <g className="wm-rotor wm-rotor-fast" style={{ transformOrigin: "280px 398px" }}>
        <line x1="280" y1="398" x2="281" y2="380" className="wm-blade" />
        <line x1="280" y1="398" x2="296" y2="408" className="wm-blade" />
        <line x1="280" y1="398" x2="264" y2="412" className="wm-blade" />
      </g>
    </g>

    <style>{`
      .hero-hills {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
        --field: #4a7a3a;
      }
      [data-theme="dark"] .hero-hills {
        --field: #7fb066;
      }

      .hill-stroke {
        stroke: var(--field);
        stroke-width: 1.5;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        stroke-dasharray: 2000;
        stroke-dashoffset: 2000;
        /* Found a nice middle-ground speed (3.2s) */
        animation: drawPath 3.2s ease-in-out forwards;
      }
      
      .hill-stroke.cloud      { animation-delay: 200ms; stroke-width: 1.4; }
      .hill-stroke.hill-mid   { animation-delay: 400ms; }
      .hill-stroke.hill-far   { animation-delay: 700ms; stroke-width: 1.4; }
      .hill-stroke.hill-front { animation-delay: 900ms; }

      /* Windmills — Now they sketch themselves instead of just fading in */
      .wm-stroke, .wm-blade {
        stroke: var(--field);
        stroke-width: 1.5;
        stroke-linecap: round;
        fill: none;
        stroke-dasharray: 150;
        stroke-dashoffset: 150;
        animation: drawPath 1.2s ease-out forwards;
      }
      
      /* Time the windmills to draw right as their respective hills finish */
      .windmill-1 .wm-stroke, .windmill-1 .wm-blade { animation-delay: 1600ms; }
      .windmill-3 .wm-stroke, .windmill-3 .wm-blade { animation-delay: 2000ms; }
      
      /* Pleasant, breezy rotation speeds */
      .wm-rotor {
        animation: spin 14s linear infinite; 
      }
      .wm-rotor-fast { 
        animation-duration: 9s; 
      }

      @keyframes drawPath {
        to { stroke-dashoffset: 0; }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      
      @media (prefers-reduced-motion: reduce) {
        .wm-rotor, .wm-rotor-fast { animation: none; }
      }
      @media (max-width: 720px) {
        .hero-hills { opacity: 0.9; }
      }
    `}</style>
  </svg>
);

export default Hills2;
