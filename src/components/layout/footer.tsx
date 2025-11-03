import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import Logo from '@/components/logo';

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.52.02c1.31-.02 2.61.16 3.86.66a8.37 8.37 0 0 1 4.21 4.21c.5 1.25.68 2.55.66 3.86-.02 1.31-.16 2.61-.66 3.86a8.37 8.37 0 0 1-4.21 4.21c-1.25.5-2.55.68-3.86.66-1.31.02-2.61-.16-3.86-.66a8.37 8.37 0 0 1-4.21-4.21c-.5-1.25-.68-2.55-.66-3.86.02-1.31.16-2.61.66-3.86a8.37 8.37 0 0 1 4.21-4.21c1.25-.5 2.55-.68 3.86-.66z" />
    <path d="M15.54 8.78a2.76 2.76 0 0 0-2.82 2.82v4.4h-2.1v-8.8h2.1v1.17c.6-1.05 1.7-1.4 2.82-1.17v2.46h-.01z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-foreground">
              DulceCaramelo
            </span>
          </div>
          <div className="text-center">
            <p className="font-semibold">
              Síguenos en redes y descubre todas nuestras novedades:
            </p>
            <div className="mt-2 flex justify-center gap-4">
              <Link
                href="#"
                className="text-foreground/70 hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-foreground"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <span>
              © {new Date().getFullYear()} DulceCaramelo — Todos los derechos
              reservados
            </span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-foreground">
                Aviso legal
              </Link>
              <Link href="#" className="hover:text-foreground">
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
