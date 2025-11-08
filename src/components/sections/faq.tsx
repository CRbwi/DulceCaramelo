import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const faqItems = [
  {
    question: '¿Qué tipo de ingredientes utilizáis?',
    answer:
      'Utilizamos solo ingredientes naturales de la más alta calidad. Creemos que la base de un buen caramelo es una materia prima excelente, por eso evitamos colorantes y conservantes artificiales siempre que es posible.',
  },
  {
    question: '¿Tenéis opciones para personas con alergias o dietas especiales?',
    answer:
      '¡Sí! Contamos con una línea de productos sin azúcar y estamos trabajando para ampliar nuestra oferta sin gluten. Para alergias específicas, te recomendamos revisar la etiqueta de cada producto o contactarnos directamente.',
  },
  {
    question: '¿Hacéis envíos a toda España?',
    answer:
      'Por ahora, nos centramos en la distribución a tiendas y negocios. Si eres un particular, puedes encontrar nuestros productos en comercios asociados. Si eres un negocio, contacta con nosotros para conocer nuestras condiciones de distribución.',
  },
  {
    question: '¿Se pueden personalizar los caramelos para eventos?',
    answer:
      'Ofrecemos algunas opciones de personalización para pedidos grandes, como bodas o eventos de empresa. Ponte en contacto con nuestro equipo comercial a través del formulario y te informaremos de las posibilidades.',
  },
];

export default function Faq() {
  const faqImage = PlaceHolderImages.find((img) => img.id === 'faq');
  return (
    <section id="faq" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-center justify-center">
            {faqImage && (
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full shadow-2xl lg:h-[400px] lg:w-[400px]">
                <Image
                  src={faqImage.imageUrl}
                  alt={faqImage.description}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={faqImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-foreground/80">
                Resolvemos tus dudas más habituales sobre nuestros caramelos.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
