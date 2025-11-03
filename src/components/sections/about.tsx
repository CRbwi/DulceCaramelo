import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about');

  return (
    <section id="historia" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Nuestra historia
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                En DulceCaramelo llevamos más de 25 años dedicándonos al arte de
                hacer caramelos artesanales. Nacimos en Valencia en 1998, con
                una ilusión clara: recuperar el sabor auténtico de los dulces
                de toda la vida, elaborados con ingredientes naturales y el mimo
                de las recetas tradicionales.
              </p>
              <p>
                Hoy seguimos fieles a esa filosofía. Cada caramelo, toffee o
                bombón que producimos pasa por las manos expertas de nuestro
                obrador, combinando técnicas artesanales con la innovación
                necesaria para ofrecer productos deliciosos, sin colorantes
                artificiales y con opciones para todos los gustos.
              </p>
              <p>
                Creemos que la dulzura es un arte, y cada pieza que elaboramos
                cuenta una historia de tradición, alegría y dedicación.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <div className="relative h-[400px] w-[300px] lg:h-[500px] lg:w-[400px] overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
