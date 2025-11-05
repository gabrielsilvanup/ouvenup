import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ExternalLink, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Dados() {
  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Transparência e Estatísticas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Acompanhe em tempo real os dados sobre as demandas registradas pela comunidade
            </p>
          </div>

          {/* Dashboard Embed Area */}
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Painel de Dados Interativo</CardTitle>
                  <CardDescription>
                    Visualize estatísticas detalhadas sobre as demandas da comunidade
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Instruções de Acesso */}
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Como visualizar o dashboard</AlertTitle>
                <AlertDescription>
                  Se o painel não carregar abaixo, clique no botão "Abrir Dashboard em Nova Aba" 
                  para visualizar os dados diretamente no Google Looker Studio. Você precisará 
                  estar logado em uma conta Google para acessar o relatório.
                </AlertDescription>
              </Alert>

              {/* Botão para abrir em nova aba */}
              <div className="flex justify-center mb-6">
                <a
                  href="https://lookerstudio.google.com/reporting/94d66c28-ae4f-4220-ab4f-65bdd7693cc9/page/ihGeF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Abrir Dashboard em Nova Aba
                  </Button>
                </a>
              </div>

              {/* Iframe do Dashboard */}
              <div className="w-full bg-muted/30 rounded-lg overflow-hidden border-2">
                <iframe
                  width="100%"
                  height="600"
                  src="https://lookerstudio.google.com/embed/reporting/94d66c28-ae4f-4220-ab4f-65bdd7693cc9/page/ihGeF"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  title="Dashboard de Estatísticas OuveNup"
                />
              </div>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sobre os Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Os dados apresentados no painel são atualizados automaticamente 
                  conforme novas demandas são registradas pela comunidade. 
                  Todas as informações são tratadas com confidencialidade e 
                  respeito à privacidade dos participantes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interpretação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O painel permite visualizar tendências, categorias mais demandadas 
                  e a distribuição geográfica das solicitações. Use essas informações 
                  para entender melhor as necessidades da nossa cidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
