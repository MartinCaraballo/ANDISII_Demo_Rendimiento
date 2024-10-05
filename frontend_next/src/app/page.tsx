import { Button } from '@/components/Button';
import { Card, CardContent } from '@/components/Card';
import { Carousel, CarouselItem } from '@/components/Carousel';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Bienvenido a nuestro sitio de streaming</h1>
      
      {/* Carousel de películas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tendencias</h2>
        <Carousel>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent>
                  <img
                    src={`https://via.placeholder.com/300x400?text=Película+${index + 1}`}
                    alt={`Película ${index + 1}`}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </Carousel>
      </section>

      {/* Sección de botones */}
      <section className="flex justify-center space-x-4 mb-16">
        <Button href="#" label="Reproducir" />
        <Button href="#" label="Agregar a Mi Lista" variant="outline" />
      </section>

      {/* Tarjetas con información */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Película destacada 1</h3>
            <p>Descripción corta de la película.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Película destacada 2</h3>
            <p>Descripción corta de la película.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Película destacada 3</h3>
            <p>Descripción corta de la película.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
