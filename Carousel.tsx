import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselSlide {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="order-2 md:order-1 flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full max-w-md h-auto object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="order-1 md:order-2 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="rounded-full"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
