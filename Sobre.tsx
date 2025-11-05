import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sobre() {
  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre o Projeto
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Conheça a iniciativa e quem está por trás do OuveNup
            </p>
          </div>

          {/* Creator Profile */}
          <Card className="mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
                {/* Photo Area */}
                <div className="mx-auto md:mx-0">
                  <div className="w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="/gabriel.jpg" 
                      alt="Gabriel de Souza Silva" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Biography */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Gabriel de Souza Silva
                  </h2>
                  <p className="text-primary font-semibold mb-6">
                    Criador do OuveNup e Como anda Nuporanga?
                  </p>
                  
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Gabriel de Souza Silva é natural de Nuporanga/SP, tem 25 anos e é o criador 
                      dos projetos <strong>OuveNup</strong> e <strong>Como anda Nuporanga?</strong>
                    </p>
                    
                    <p>
                      Bacharel em Direito pela Faculdade de Direito de Franca, aluno da Academia 
                      Valete do Movimento Brasil Livre (MBL) e pós-graduando em Gestão Pública 
                      pela Pontifícia Universidade Católica do Paraná (PUCPR), também é técnico 
                      em Informática para Web e atua há mais de dez anos como escrevente extrajudicial.
                    </p>
                    
                    <p>
                      Com dedicação à transparência pública, à política local e ao desenvolvimento 
                      urbano, Gabriel idealizou iniciativas que visam aproximar a população das 
                      decisões municipais, incentivando a participação cidadã e o debate qualificado 
                      sobre o futuro de Nuporanga.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    <a
                      href="https://www.instagram.com/gabrielssilva21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default" className="gap-2">
                        <Instagram className="w-4 h-4" />
                        @gabrielssilva21
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Mission */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Missão do Projeto
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O OuveNup nasceu da necessidade de criar um canal direto entre a população 
                  de Nuporanga e as questões municipais. A plataforma busca promover transparência, 
                  participação cidadã e o fortalecimento da democracia local através da tecnologia 
                  e do engajamento cívico.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Visão de Futuro
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Construir uma Nuporanga mais participativa, onde cada cidadão tenha voz ativa 
                  nas decisões que afetam sua comunidade. Através do OuveNup, buscamos criar 
                  um ambiente de diálogo construtivo e colaboração entre população e gestão pública.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Quer saber mais ou contribuir?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Entre em contato através das redes sociais ou participe registrando suas demandas 
              e acompanhando as estatísticas do projeto.
            </p>
            <a
              href="https://www.instagram.com/gabrielssilva21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 border-white gap-2"
              >
                <Instagram className="w-5 h-5" />
                Seguir no Instagram
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
