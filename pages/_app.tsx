import type { AppProps } from 'next/app';
import { Inter as FontSans } from 'next/font/google';
import '../app/globals.css';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { ClientLayout } from '@/components/navigation/ClientLayout';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <div
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ClientLayout>
          <Component {...pageProps} />
        </ClientLayout>
      </div>
    </ThemeProvider>
  );
}
