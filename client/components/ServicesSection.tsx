import { Globe, ShoppingCart, Zap, ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Páginas de conversão otimizadas para capturar leads e gerar resultados.",
      features: [
        "Design responsivo e moderno",
        "Otimização para conversões",
        "Integração com analytics",
        "Carregamento ultra-rápido",
        "SEO otimizado"
      ],
      color: "from-primary to-accent"
    },
    {
      icon: Zap,
      title: "Sites Institucionais",
      description: "Websites profissionais que representam sua marca com excelência.",
      features: [
        "Design personalizado",
        "CMS para gestão de conteúdo",
        "Integração com redes sociais",
        "Formulários de contato",
        "Certificado SSL incluso"
      ],
      color: "from-accent to-primary"
    },
    {
      icon: ShoppingCart,
      title: "E-commerces",
      description: "Lojas virtuais completas para maximizar suas vendas online.",
      features: [
        "Carrinho de compras avançado",
        "Gateway de pagamentos",
        "Gestão de produtos",
        "Sistema de cupons",
        "Relatórios de vendas"
      ],
      color: "from-primary via-accent to-primary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-silver to-metallic bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas de desenvolvimento web, desde landing pages 
              de alta conversão até e-commerces robustos e funcionais.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary hover:to-accent text-primary hover:text-primary-foreground border border-primary/50 transition-all duration-300 group-hover:shadow-lg"
                    variant="outline"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nosso Processo
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Análise</h4>
                <p className="text-sm text-muted-foreground">
                  Entendemos suas necessidades e objetivos para criar a estratégia ideal.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Planejamento</h4>
                <p className="text-sm text-muted-foreground">
                  Desenvolvemos um plano detalhado com cronograma e especificações técnicas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Desenvolvimento</h4>
                <p className="text-sm text-muted-foreground">
                  Criamos sua solução com as melhores tecnologias e práticas do mercado.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Entrega</h4>
                <p className="text-sm text-muted-foreground">
                  Realizamos testes finais e entregamos sua solução pronta para o sucesso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
