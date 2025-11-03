import { Award, Leaf, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Más de 25 años de experiencia',
    description:
      'Una trayectoria que garantiza calidad, confianza y un profundo conocimiento del mundo del dulce artesanal.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Ingredientes naturales',
    description:
      'Usamos materias primas seleccionadas y procesos que respetan el sabor original sin aditivos artificiales.',
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: 'Compromiso con lo local',
    description:
      'Producimos en España, apoyando a proveedores nacionales y cuidando cada detalle de nuestro proceso.',
  },
];

export default function WhyUs() {
  return (
    <section id="porque-elegirnos" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            ¿Por qué confiar en DulceCaramelo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Detrás de cada dulce hay una historia, y detrás de DulceCaramelo hay
            un equipo que ama lo que hace. Te contamos por qué somos diferentes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg">
              <CardHeader className="items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/50 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-2xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
