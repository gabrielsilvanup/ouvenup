import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageSquare, BarChart3, Users } from "lucide-react";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              O seu canal direto de participação em Nuporanga/SP
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              O <strong>OuveNup</strong> é uma plataforma cívica que conecta você às decisões municipais. 
              Registre suas demandas, acompanhe estatísticas e participe ativamente do desenvolvimento 
              da nossa cidade.
            </p>
            <Link href="/registro">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Registre Sua Demanda Aqui
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Carousel
              slides={[
                {
                  title: "Sua Ideia Vira Ação",
                  description: "Registre problemas como buracos na rua, lâmpadas queimadas ou descarte irregular de lixo.",
                  image: "/slide1-map-pointer.png",
                  imageAlt: "Mão apontando para localização no mapa"
                },
                {
                  title: "Seja Específico e Eficaz",
                  description: "Use a descrição detalhada para a demanda. Se o problema for físico, inclua a rua exata e o bairro.",
                  image: "/slide2-form-checklist.png",
                  imageAlt: "Formulário com checklist"
                },
                {
                  title: "Seu Registro Gera Ação",
                  description: "As demandas são consolidadas, transformadas em relatório e encaminhadas pela nossa organização diretamente aos setores competentes para que o problema seja resolvido.",
                  image: "/slide3-delivery-report.png",
                  imageAlt: "Mão entregando relatório ao setor público"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Registre sua Voz</h3>
              <p className="text-muted-foreground">
                Envie suas demandas, sugestões e preocupações diretamente. 
                O anonimato é uma opção disponível.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparência Total</h3>
              <p className="text-muted-foreground">
                Acompanhe estatísticas e dados em tempo real sobre as demandas 
                registradas pela comunidade.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Participação Cidadã</h3>
              <p className="text-muted-foreground">
                Faça parte do debate qualificado sobre o futuro de Nuporanga 
                e contribua para o desenvolvimento local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Sua participação faz a diferença
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Juntos podemos construir uma Nuporanga mais transparente, 
              participativa e atenta às necessidades da população.
            </p>
            <Link href="/registro">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-blue-50 border-white text-lg px-8 py-6"
              >
                Comece Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
