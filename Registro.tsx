import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Send } from "lucide-react";

export default function Registro() {
  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Registre Sua Voz
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Sua participação é fundamental para o desenvolvimento de Nuporanga
            </p>
          </div>

          {/* Explanation Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Preencha o Formulário</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compartilhe suas demandas, sugestões ou preocupações sobre questões 
                  municipais de forma simples e direta.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Anonimato Opcional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Você pode escolher se identificar ou manter o anonimato. 
                  Respeitamos sua privacidade e garantimos a confidencialidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Envie sua Demanda</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Após o envio, sua contribuição será registrada e poderá ser 
                  acompanhada através do painel de dados.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA */}
          <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-primary/20">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl">
                Pronto para participar?
              </CardTitle>
              <CardDescription className="text-base">
                Clique no botão abaixo para acessar o formulário de registro de demandas
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <a
                href="https://forms.gle/kFCpcFREYqEM9rU6A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all">
                  Acessar Formulário de Registro
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                O formulário será aberto em uma nova aba
              </p>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Como funciona o processo?</h3>
            <ol className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold text-primary">1.</span>
                <span>Acesse o formulário clicando no botão acima</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary">2.</span>
                <span>Preencha os campos com suas informações e demanda</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary">3.</span>
                <span>Escolha se deseja se identificar ou permanecer anônimo</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary">4.</span>
                <span>Envie o formulário e acompanhe as estatísticas no painel de dados</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
