import { ArrowRight, Code, Zap, Globe } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-1/4 left-1/6 w-8 h-8 text-primary/30 animate-float" />
        <Zap className="absolute top-1/3 right-1/6 w-6 h-6 text-accent/30 animate-float-delay" />
        <Globe className="absolute bottom-1/3 left-1/5 w-10 h-10 text-primary/20 animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Desenvolvimento
            <br />
            <span className="text-4xl md:text-6xl">Web Futurista</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            Transformamos suas ideias em experiências digitais extraordinárias. 
            Sites modernos, interativos e otimizados para o futuro.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Código Limpo</h3>
              <p className="text-sm text-muted-foreground text-center">Desenvolvimento com as melhores práticas e tecnologias modernas</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground text-center">Sites rápidos e otimizados para todos os dispositivos</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Inovação</h3>
              <p className="text-sm text-muted-foreground text-center">Soluções criativas que se destacam no mercado digital</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver Projetos
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
