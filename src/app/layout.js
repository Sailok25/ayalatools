import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'AyalaTools',
  description: 'Herramientas rápidas en línea',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}