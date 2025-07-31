import { Github, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">F</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Foordev
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Transformamos ideias em experiências digitais extraordinárias. 
                Especializados em desenvolvimento web moderno, criamos soluções 
                que impulsionam o sucesso dos nossos clientes.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="https://wa.me/5511920075704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600/20 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Navegação
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projetos")}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Projetos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Contato
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <MessageCircle className="w-4 h-4 mr-3 text-green-600" />
                  <a
                    href="https://wa.me/5511920075704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    +55 (11) 92007-5704
                  </a>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-3 text-primary" />
                  <a 
                    href="mailto:contato@foordev.com"
                    className="hover:text-primary transition-colors"
                  >
                    contato@foordev.com
                  </a>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-3 text-accent" />
                  <span>+55 (11) 92007-5704</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Quick Access */}
          <div className="border-t border-border/50 pt-8 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Nossos Serviços
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-1">Landing Pages</h4>
                <p className="text-sm text-muted-foreground">Páginas de alta conversão</p>
              </div>
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-1">Sites Institucionais</h4>
                <p className="text-sm text-muted-foreground">Presença digital profissional</p>
              </div>
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-1">E-commerces</h4>
                <p className="text-sm text-muted-foreground">Lojas virtuais completas</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                <p>&copy; {currentYear} Foordev. Todos os direitos reservados.</p>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
