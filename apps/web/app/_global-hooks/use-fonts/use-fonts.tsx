import { Rubik, Roboto_Mono } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

export const roboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const useFonts = () => {
  return {
    className: [rubik.variable, roboto.variable, roboto.className].join(' '),
  };
};
