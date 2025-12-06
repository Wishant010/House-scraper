import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components/Navbar';
import { TransitionProvider } from './components/TransitionProvider';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: 'WoningScout - Vind jouw droomwoning',
  description: 'Doorzoek alle Nederlandse woningsites in één keer. Vind je droomwoning op Funda, Pararius en meer. Slim, snel en overzichtelijk.',
  keywords: ['woning', 'huis', 'kopen', 'huren', 'funda', 'nederland', 'vastgoed', 'makelaars'],
  authors: [{ name: 'WoningScout' }],
  openGraph: {
    title: 'WoningScout - Vind jouw droomwoning',
    description: 'Doorzoek alle Nederlandse woningsites in één keer.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        <AuthProvider>
          {/* Background decorations - fixed, no animation */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-[#e94560]/15 rounded-full blur-[80px]" />
            <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]" />
            <div className="absolute top-[50%] left-[50%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Fixed Navbar - blijft staan tijdens page transitions */}
          <Navbar />

          {/* Main content met page transitions */}
          <main className="relative z-10 pt-14 overflow-x-hidden">
            <TransitionProvider>
              {children}
            </TransitionProvider>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
