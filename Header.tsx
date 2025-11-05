import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white border-b border-border">
      {/* Logo Area - Simplified */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 md:py-8">
        <div className="container">
          <Link href="/" className="block">
            <div className="flex items-center justify-center">
              {/* Logo Only - No Text */}
              <img 
                src="/header-logo.png" 
                alt="OuveNup" 
                className="h-24 md:h-32 lg:h-36 w-auto object-contain max-w-full"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white shadow-sm">
        <div className="container">
          <ul className="flex flex-wrap items-center justify-center gap-1 py-4">
            <li>
              <Link 
                href="/"
                className="px-4 py-2 text-sm md:text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors inline-block"
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                href="/registro"
                className="px-4 py-2 text-sm md:text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors inline-block"
              >
                Fazer Registro
              </Link>
            </li>
            <li>
              <Link 
                href="/dados"
                className="px-4 py-2 text-sm md:text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors inline-block"
              >
                Painel de Dados
              </Link>
            </li>
            <li>
              <Link 
                href="/sobre"
                className="px-4 py-2 text-sm md:text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors inline-block"
              >
                Sobre o Projeto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
