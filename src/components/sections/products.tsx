import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const productCategories = [
  {
    id: 'product-classic',
    title: 'Caramelos clásicos',
    description: 'El corazón de DulceCaramelo. Sabores intensos como limón, menta o fresa, elaborados con azúcar de caña y cocidos lentamente.',
  },
  {
    id: 'product-toffee',
    title: 'Toffees cremosos',
    description: 'Una textura suave que se funde en la boca. Un homenaje a la repostería más delicada con sabores de nata, vainilla o caramelo salado.',
  },
  {
    id: 'product-bonbon',
    title: 'Bombones rellenos',
    description: 'Pequeños bocados de felicidad con centro de avellana, café o crema de cacao, recubiertos con nuestro chocolate artesanal.',
  },
  {
    id: 'product-gum',
    title: 'Gomas y chicles',
    description: 'Divertidos, coloridos y llenos de sabor. Ideales para disfrutar en familia o compartir en cualquier momento especial.',
  },
  {
    id: 'product-sugarfree',
    title: 'Línea sin azúcar',
    description: 'Todo el sabor, sin renunciar al cuidado. Dulces elaborados con edulcorantes naturales, una alternativa más ligera.',
  },
];

export default function Products() {
  return (
    <section id="productos" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Sabores que te hacen sonreír
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
            Nuestra colección de dulces está pensada para todos los paladares:
            desde los amantes de los sabores clásicos hasta quienes buscan
            propuestas nuevas y sin azúcar. Todos elaborados con materias primas
            seleccionadas y una producción cuidada al detalle.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {productCategories.map((category) => {
            const image = PlaceHolderImages.find((img) => img.id === category.id);
            return (
              <Card key={category.id} className="overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardHeader className="p-0">
                  {image && (
                    <div className="relative aspect-square w-full">
                      <Image
                        src={image.imageUrl}
                        alt={category.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-foreground/80">
            Cada producto de DulceCaramelo representa un compromiso: el de
            ofrecer dulzura, calidad y autenticidad en cada bocado.
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-full px-8">
            Descargar catálogo completo
          </Button>
        </div>
      </div>
    </section>
  );
}
