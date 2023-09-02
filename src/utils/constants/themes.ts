export const themeOptions = {
  false: 'light',
  true: 'dark',
} as const;

export type ThemeOpts = (typeof themeOptions)[keyof typeof themeOptions];

export const darkTheme = {
  heroImage: {
    mobile: 'bg-mobile-dark.jpg',
    desktop: 'bg-desktop-dark.jpg',
  },
  icon: 'sun',
  isDarkTheme: true,
} as const;

export type DarkTheme = typeof darkTheme;

export const lightTheme = {
  heroImage: {
    mobile: 'bg-mobile-light.jpg',
    desktop: 'bg-desktop-light.jpg',
  },
  icon: 'moon',
  isDarkTheme: false,
} as const;

export type LightTheme = typeof lightTheme;
