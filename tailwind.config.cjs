const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.ts",
    "!./src/**/*.{stories,styles,test}.*",
  ],
  theme: {
    colors: {
      primary: {
        50: "var(--sd-color-primary-50, hsl(204 100% 97.1%))",
        100: "var(--sd-color-primary-100, hsl(204 93.8% 93.7%))",
        200: "var(--sd-color-primary-200, hsl(200.6 94.4% 86.1%))",
        300: "var(--sd-color-primary-300, hsl(199.4 95.5% 73.9%))",
        400: "var(--sd-color-primary-400, hsl(198.4 93.2% 59.6%))",
        500: "var(--sd-color-primary-500, hsl(198.6 88.7% 48.4%))",
        600: "var(--sd-color-primary-600, hsl(200.4 98% 39.4%))",
        700: "var(--sd-color-primary-700, hsl(201.3 96.3% 32.2%))",
        800: "var(--sd-color-primary-800, hsl(201 90% 27.5%))",
        900: "var(--sd-color-primary-900, hsl(202 80.3% 23.9%))",
        950: "var(--sd-color-primary-950, hsl(202.3 73.8% 16.5%))",
      },
      neutral: {
        50: "var(--sd-color-neutral-50, hsl(0 0% 97.5%))",
        100: "var(--sd-color-neutral-100, hsl(240 4.8% 95.9%))",
        200: "var(--sd-color-neutral-200, hsl(240 5.9% 90%))",
        300: "var(--sd-color-neutral-300, hsl(240 4.9% 83.9%))",
        400: "var(--sd-color-neutral-400, hsl(240 5% 64.9%))",
        500: "var(--sd-color-neutral-500, hsl(240 3.8% 46.1%))",
        600: "var(--sd-color-neutral-600, hsl(240 5.2% 33.9%))",
        700: "var(--sd-color-neutral-700, hsl(240 5.3% 26.1%))",
        800: "var(--sd-color-neutral-800, hsl(240 3.7% 15.9%))",
        900: "var(--sd-color-neutral-900, hsl(240 5.9% 10%))",
        950: "var(--sd-color-neutral-950, hsl(240 7.3% 8%))",
      },
      success: {
        50: "var(--sd-color-success-50, hsl(138.5 76.5% 96.7%))",
        100: "var(--sd-color-success-100, hsl(140.6 84.2% 92.5%))",
        200: "var(--sd-color-success-200, hsl(141 78.9% 85.1%))",
        300: "var(--sd-color-success-300, hsl(141.7 76.6% 73.1%))",
        400: "var(--sd-color-success-400, hsl(141.9 69.2% 58%))",
        500: "var(--sd-color-success-500, hsl(142.1 70.6% 45.3%))",
        600: "var(--sd-color-success-600, hsl(142.1 76.2% 36.3%))",
        700: "var(--sd-color-success-700, hsl(142.4 71.8% 29.2%))",
        800: "var(--sd-color-success-800, hsl(142.8 64.2% 24.1%))",
        900: "var(--sd-color-success-900, hsl(143.8 61.2% 20.2%))",
        950: "var(--sd-color-success-950, hsl(144.3 60.7% 12%))",
      },
      warning: {
        50: "var(--sd-color-warning-50, hsl(48 100% 96.1%))",
        100: "var(--sd-color-warning-100, hsl(48 96.5% 88.8%))",
        200: "var(--sd-color-warning-200, hsl(48 96.6% 76.7%))",
        300: "var(--sd-color-warning-300, hsl(45.9 96.7% 64.5%))",
        400: "var(--sd-color-warning-400, hsl(43.3 96.4% 56.3%))",
        500: "var(--sd-color-warning-500, hsl(37.7 92.1% 50.2%))",
        600: "var(--sd-color-warning-600, hsl(32.1 94.6% 43.7%))",
        700: "var(--sd-color-warning-700, hsl(26 90.5% 37.1%))",
        800: "var(--sd-color-warning-800, hsl(22.7 82.5% 31.4%))",
        900: "var(--sd-color-warning-900, hsl(21.7 77.8% 26.5%))",
        950: "var(--sd-color-warning-950, hsl(22.9 74.1% 16.7%))",
      },
      danger: {
        50: "var(--sd-color-danger-50, hsl(0 85.7% 97.3%))",
        100: "var(--sd-color-danger-100, hsl(0 93.3% 94.1%))",
        200: "var(--sd-color-danger-200, hsl(0 96.3% 89.4%))",
        300: "var(--sd-color-danger-300, hsl(0 93.5% 81.8%))",
        400: "var(--sd-color-danger-400, hsl(0 90.6% 70.8%))",
        500: "var(--sd-color-danger-500, hsl(0 84.2% 60.2%))",
        600: "var(--sd-color-danger-600, hsl(0 72.2% 50.6%))",
        700: "var(--sd-color-danger-700, hsl(0 73.7% 41.8%))",
        800: "var(--sd-color-danger-800, hsl(0 70% 35.3%))",
        900: "var(--sd-color-danger-900, hsl(0 62.8% 30.6%))",
        950: "var(--sd-color-danger-950, hsl(0 60% 19.6%))",
      },
      black: "var(--sd-color-neutral-1000, hsl(0 0% 0%))",
      white: "var(--sd-color-neutral-0, hsl(0 0% 100%))",
      'varcolor': {
        50: 'var(--tw-varcolor-50)',
        100: 'var(--tw-varcolor-100)',
        200: 'var(--tw-varcolor-200)',
        300: 'var(--tw-varcolor-300)',
        400: 'var(--tw-varcolor-400)',
        500: 'var(--tw-varcolor-500)',
        600: 'var(--tw-varcolor-600)',
        700: 'var(--tw-varcolor-700)',
        800: 'var(--tw-varcolor-800)',
        900: 'var(--tw-varcolor-900)',
        950: 'var(--tw-varcolor-950)',
      },
      transparent: "transparent",
      currentColor: "currentColor",
    },
    borderRadius: {
      sm: "var(--sd-border-radius-small, 0.1875rem)",
      md: "var(--sd-border-radius-medium, 0.25rem)",
      lg: "var(--sd-border-radius-large, 0.5rem)",
      xl: "var(--sd-border-radius-x-large, 1rem)",
      circle: "50%",
      full: "9999px",
    },
    boxShadow: {
      xs: "var(--sd-shadow-x-small, 0 1px 2px hsl(240 3.8% 46.1% / 6%))",
      sm: "var(--sd-shadow-small, 0 1px 2px hsl(240 3.8% 46.1% / 12%))",
      md: "var(--sd-shadow-medium, 0 2px 4px hsl(240 3.8% 46.1% / 12%))",
      lg: "var(--sd-shadow-large, 0 2px 8px hsl(240 3.8% 46.1% / 12%))",
      xl: "var(--sd-shadow-x-large, 0 4px 16px hsl(240 3.8% 46.1% / 12%))",
      none: "0 0 #0000;"
    },
    transitionDuration: {
      1000: "var(--sd-transition-x-slow, 1000ms)",
      500: "var(--sd-transition-slow, 500ms)",
      250: "var(--sd-transition-medium, 250ms)",
      150: "var(--sd-transition-fast, 150ms)",
      50: "var(--sd-transition-x-fast, 50ms)",
    },
    fontFamily: {
      mono: "var(--sd-font-mono, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace)",
      sans: "var(--sd-font-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol')",
      serif: "var(--sd-font-serif, Georgia, 'Times New Roman', serif)",
    },
    fontWeight: {
      light: "var(--sd-font-weight-light, 300)",
      normal: "var(--sd-font-weight-normal, 400)",
      semibold: "var(--sd-font-weight-semibold, 500)",
      bold: "var(--sd-font-weight-bold, 700)",
    },
    letterSpacing: {
      denser: "var(--sd-letter-spacing-denser, -0.03em)",
      dense: "var(--sd-letter-spacing-dense, -0.015em)",
      normal: "var(--sd-letter-spacing-normal, normal)",
      loose: "var(--sd-letter-spacing-loose, 0.075em)",
      looser: "var(--sd-letter-spacing-looser, 0.15em)",
    },
    lineHeight: {
      denser: "var(--sd-line-height-denser, 1)",
      dense: "var(--sd-line-height-dense, 1.4)",
      normal: "var(--sd-line-height-normal, 1.8)",
      loose: "var(--sd-line-height-loose, 2.2)",
      looser: "var(--sd-line-height-looser, 2.6)",
    },
    extend: {
      fontSize: {
        "2xs": ["0.625rem", "0.875rem"],
      },
      spacing: {
        "3xs": "var(--sd-spacing-3x-small, 0.125rem)",
        "2xs": "var(--sd-spacing-2x-small, 0.25rem)",
        xs: "var(--sd-spacing-x-small, 0.5rem)",
        sm: "var(--sd-spacing-small, 0.75rem)",
        md: "var(--sd-spacing-medium, 1rem)",
        lg: "var(--sd-spacing-large, 1.25rem)",
        xl: "var(--sd-spacing-x-large, 1.75rem)",
        "2xl": "var(--sd-spacing-2x-large, 2.25rem)",
        "3xl": "var(--sd-spacing-3x-large, 3rem)",
        "4xl": "var(--sd-spacing-4x-large, 4.5rem)",
      },
      rounded: {
        inherit: "inherit",
      }
    },
  },
  plugins: [
    require("@mariohamann/tailwindcss-var"),
    plugin(({ addVariant }) => {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('not-disabled', '&:not([disabled])');
    })
  ],
}
