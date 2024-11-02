import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'], display: 'swap' });
export const geist = localFont({
  src: '../assets/fonts/GeistVariableVF.ttf',
  display: 'swap',
});
