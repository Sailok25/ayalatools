import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AyalaTools - Herramientas Rápidas Online',
  description: 'Colección de herramientas rápidas para transformar textos, generar contenido, convertir formatos y más.',
  keywords: 'herramientas online, generador contraseñas, conversor monedas, cifrado texto, utilidades web',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon básico */}
        <link rel="icon" href="/logo_ay.ico" type="image/x-icon" />
        
        {/* Para Apple */}
        <link rel="apple-touch-icon" href="/logo_ay.ico" />
        
        {/* Para Android */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}