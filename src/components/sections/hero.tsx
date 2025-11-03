import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[calc(100vh-5rem)] min-h-[500px] w-full overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-4 font-headline text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            DulceCaramelo — El sabor de lo artesanal
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/80 md:text-xl">
            Caramelos elaborados con pasión, tradición y los mejores
            ingredientes para endulzar cada momento.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold">
            <Link href="#productos">Descubre nuestros sabores</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
