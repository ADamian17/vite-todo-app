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
