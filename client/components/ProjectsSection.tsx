import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "TechStore E-commerce",
      description:
        "Loja virtual completa para produtos eletrônicos com sistema de pagamento integrado e painel administrativo.",
      image: "/api/placeholder/600/400",
      tags: ["E-commerce", "React", "Node.js", "Stripe"],
      category: "E-commerce",
    },
    {
      id: 2,
      title: "AgroTech Landing Page",
      description:
        "Landing page de alta conversão para startup de tecnologia agrícola, resultando em 300% mais leads.",
      image: "/api/placeholder/600/400",
      tags: ["Landing Page", "Next.js", "Tailwind", "Analytics"],
      category: "Landing Page",
    },
    {
      id: 3,
      title: "Medical Center Website",
      description:
        "Site institucional para clínica médica com sistema de agendamento online e integração WhatsApp.",
      image: "/api/placeholder/600/400",
      tags: ["Website", "React", "WordPress", "API"],
      category: "Site Institucional",
    },
    {
      id: 4,
      title: "Fashion Brand Store",
      description:
        "E-commerce de moda com filtros avançados, wishlist e integração com redes sociais.",
      image: "/api/placeholder/600/400",
      tags: ["E-commerce", "Vue.js", "Shopify", "PWA"],
      category: "E-commerce",
    },
    {
      id: 5,
      title: "SaaS Platform Landing",
      description:
        "Landing page para plataforma SaaS B2B com foco em conversão e demonstração do produto.",
      image: "/api/placeholder/600/400",
      tags: ["Landing Page", "React", "Framer Motion", "CRO"],
      category: "Landing Page",
    },
    {
      id: 6,
      title: "Restaurant Website",
      description:
        "Site para restaurante com cardápio online, sistema de reservas e delivery integrado.",
      image: "/api/placeholder/600/400",
      tags: ["Website", "Next.js", "CMS", "PWA"],
      category: "Site Institucional",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projetos"
      className="py-20 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projetos Realizados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos para nossos
              clientes, cada um com soluções únicas e resultados excepcionais.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">
                      {project.category === "E-commerce"
                        ? "🛒"
                        : project.category === "Landing Page"
                          ? "🚀"
                          : "🌐"}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="opacity-90"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Ver Site
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="opacity-90"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-3">
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <Button
                    variant="ghost"
                    className="w-full text-primary hover:bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"
                  >
                    Ver Detalhes
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pronto para o Próximo Projeto?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vamos transformar sua ideia em uma solução digital excepcional.
              Entre em contato e vamos discutir seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Ver Todos os Projetos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
