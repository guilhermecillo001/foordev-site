import { Users, Award, Clock, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-silver to-metallic bg-clip-text text-transparent">
              Sobre a Foordev
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa especializada em desenvolvimento web, focada em criar soluções digitais 
              inovadoras que impulsionam o sucesso dos nossos clientes no mundo digital.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Transformando Ideias em Realidade Digital
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na Foordev, acreditamos que cada projeto é único e merece uma abordagem personalizada. 
                Nossa equipe combina criatividade, tecnologia de ponta e estratégia para entregar 
                soluções que não apenas atendem, mas superam as expectativas.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desde startups até grandes empresas, ajudamos nossos clientes a estabelecer uma 
                presença digital forte e eficaz, com foco em usabilidade, performance e resultados mensuráveis.
              </p>

              {/* Mission */}
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <Target className="w-6 h-6 text-primary mr-3" />
                  Nossa Missão
                </h4>
                <p className="text-muted-foreground">
                  Democratizar o acesso a tecnologias web avançadas, criando soluções que 
                  impulsionam o crescimento e a inovação dos nossos clientes.
                </p>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 text-center transform hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-foreground mb-2">50+</h4>
                <p className="text-muted-foreground">Clientes Satisfeitos</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 text-center transform hover:scale-105 transition-all duration-300">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-foreground mb-2">100+</h4>
                <p className="text-muted-foreground">Projetos Entregues</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 text-center transform hover:scale-105 transition-all duration-300">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-foreground mb-2">5+</h4>
                <p className="text-muted-foreground">Anos de Experiência</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 text-center transform hover:scale-105 transition-all duration-300">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-foreground mb-2">98%</h4>
                <p className="text-muted-foreground">Taxa de Sucesso</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Colaboração</h4>
              <p className="text-muted-foreground">
                Trabalhamos em parceria com nossos clientes, garantindo que cada projeto reflita 
                perfeitamente sua visão e objetivos.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Excelência</h4>
              <p className="text-muted-foreground">
                Comprometimento com a qualidade em cada linha de código, cada design e 
                cada interação do usuário.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Resultados</h4>
              <p className="text-muted-foreground">
                Focamos em entregar soluções que geram impacto real e contribuem para o 
                crescimento do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
