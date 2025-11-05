import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base text-center md:text-left">
            <strong>OuveNup</strong> é um projeto desenvolvido por{" "}
            <span className="font-semibold">Gabriel de Souza Silva</span>
          </p>
          <a
            href="https://www.instagram.com/gabrielssilva21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@gabrielssilva21</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
