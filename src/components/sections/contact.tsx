import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            ¿Quieres ofrecer nuestros productos?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
            Si tienes una tienda, un obrador o un negocio y quieres incorporar
            nuestros dulces, estaremos encantados de colaborar contigo.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-lg bg-card p-8 shadow-xl">
            <h3 className="mb-2 font-headline text-2xl">
              Formulario de contacto
            </h3>
            <p className="mb-6 text-muted-foreground">
              Cuéntanos cómo podemos ayudarte y nos pondremos en contacto
              contigo lo antes posible.
            </p>
            <ContactForm />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-headline text-2xl">
              Nuestros datos de contacto
            </h3>
            <p className="text-foreground/80">
              Trabajamos con distribuidores y comercios de toda España,
              ofreciendo atención personalizada, calidad constante y un catálogo
              adaptado a tus necesidades.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
                <span>
                  <span className="font-semibold">DulceCaramelo S.L.</span>
                  <br />
                  Calle de la Dulzura, 12 — 46002 Valencia
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 flex-shrink-0 text-primary" />
                <a
                  href="mailto:contacto@dulcecaramelo.es"
                  className="hover:text-primary"
                >
                  contacto@dulcecaramelo.es
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 text-primary" />
                <a href="tel:+34963456789" className="hover:text-primary">
                  963 456 789
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-16 text-center font-headline text-2xl text-foreground">
          Endulzamos momentos, construimos sonrisas.
        </p>
      </div>
    </section>
  );
}
