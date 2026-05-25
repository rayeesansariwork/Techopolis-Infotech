/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        // Brand & accent — CC-inspired palette
        primary: '#D8FA38',           // electric lime
        'primary-active': '#B8E020',  // deeper lime for hover
        'primary-disabled': '#EEF6CC',
        secondary: '#FFB6D9',          // bubblegum pink
        'secondary-active': '#FF8EC0',
        tertiary: '#E5FF3D',           // bright yellow
        'tertiary-active': '#D4EE2A',
        peach: '#FFD4BC',              // warm salmon — for highlight cards
        'peach-active': '#F5BEA0',
        success: '#5db872',
        warning: '#d4a017',
        error: '#c64545',

        // Text
        ink: '#000000',
        'body-strong': '#1a1a1a',
        body: '#333333',
        muted: '#6b6b6b',
        'muted-soft': '#8c8c8c',
        'on-primary': '#000000',       // black text on lime
        'on-dark': '#ffffff',
        'on-dark-soft': '#a8a8a8',

        // Surfaces
        canvas: '#ffffff',
        'surface-soft': '#f5f5f0',
        'surface-card': '#ebebe5',
        'surface-cream-strong': '#dcdcd2',
        'surface-dark': '#0a0a0a',
        'surface-dark-elevated': '#1a1a1a',
        'surface-dark-soft': '#141414',

        // Lines
        hairline: '#e6e6e0',
        'hairline-soft': '#efefe9',
      },
      fontFamily: {
        // Copernicus / Tiempos Headline substitute
        display: ['"Cormorant Garamond"', '"EB Garamond"', 'Tiempos Headline', 'Garamond', '"Times New Roman"', 'serif'],
        // StyreneB substitute
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Editorial display scale — pair with font-display + tracking utilities
        'display-xl': ['64px', { lineHeight: '1.05', letterSpacing: '-1.5px', fontWeight: '500' }],
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '500' }],
        'display-md': ['36px', { lineHeight: '1.15', letterSpacing: '-0.5px', fontWeight: '500' }],
        'display-sm': ['28px', { lineHeight: '1.2', letterSpacing: '-0.3px', fontWeight: '500' }],
        'title-lg': ['22px', { lineHeight: '1.3', fontWeight: '500' }],
        'title-md': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'title-sm': ['16px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-md': ['16px', { lineHeight: '1.55', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.55', fontWeight: '400' }],
        caption: ['13px', { lineHeight: '1.4', fontWeight: '500' }],
        'caption-up': ['12px', { lineHeight: '1.4', letterSpacing: '1.5px', fontWeight: '500' }],
        code: ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        button: ['14px', { lineHeight: '1', fontWeight: '500' }],
        nav: ['14px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        section: '96px',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        pill: '9999px',
      },
      boxShadow: {
        // Used rarely; depth comes from surface contrast
        soft: '0 1px 3px rgba(20, 20, 19, 0.08)',
        lift: '0 8px 24px -10px rgba(20, 20, 19, 0.18)',
        'focus-coral': '0 0 0 3px rgba(216, 250, 56, 0.45)',
      },
      maxWidth: {
        content: '1600px',
      },
      transitionTimingFunction: {
        // Calm, deliberate
        editorial: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        250: '250ms',
        450: '450ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms cubic-bezier(0.22, 0.61, 0.36, 1) both',
        marquee: 'marquee 48s linear infinite',
      },
    },
  },
  plugins: [],
};
