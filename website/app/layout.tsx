import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Footer from '@/src/components/ui/Footer';
import MobileBottomNav from '@/src/components/ui/MobileBottomNav';
import { CartProvider } from '@/src/context/CartContext';
import Navbar from '@/src/components/ui/Navbar';
import { AuthProvider } from '@/src/context/AuthContext';
import { ToastProvider } from '@/src/components/ui/Toast';
import SmoothScroll from '@/src/components/ui/SmoothScroll';
import LoadingScreen from '@/src/components/ui/LoadingScreen';
import PageTransition from '@/src/components/ui/PageTransition';
import CartDrawer from '@/src/components/ui/CartDrawer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RAZEVÉL',
    template: '%s | RAZEVÉL',
  },
  description: 'Crafted for Forever.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
    shortcut: '/icon.png',
  },
  keywords: [
    'luxury Indian ethnic wear', 'bespoke lehenga', 'handcrafted couture India',
    'zardozi embroidery', 'RAZEVÉL', 'made to order Indian fashion',
    'bridal lehenga Patna', 'Indian luxury fashion house', 'bespoke sherwani',
  ],
  openGraph: {
    title: 'RAZEVÉL',
    description: 'Crafted for Forever.',
    type: 'website', locale: 'en_IN', siteName: 'RAZEVÉL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAZEVÉL',
    description: 'Crafted for Forever.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <meta name="theme-color" content="#080808" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RAZEVÉL",
              "url": "https://www.razevel.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 6207506369",
                "contactType": "customer service",
                "email": "atelier@razevel.com",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rajendra Nagar Road No. 11",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800016",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://instagram.com/razevel"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <AuthProvider>
          <ToastProvider>
            <CartProvider>
              <SmoothScroll>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <LoadingScreen />
                  <Navbar />
                  <CartDrawer />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <PageTransition>
                      {children}
                    </PageTransition>
                  </div>
                  <Footer />
                  <MobileBottomNav />
                </div>
              </SmoothScroll>
            </CartProvider>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

