import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToWhatsApp = () => {
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const whatsappMessage = `*Nova solicitação do site Foordev*\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Mensagem:* ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "5511920075704";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para transformar sua ideia em realidade. Entre em contato 
              e vamos discutir como podemos ajudar seu negócio a crescer no digital.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-primary mr-3" />
                Envie sua Mensagem
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="w-full bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                    className="w-full bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="button"
                  onClick={sendToWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Outras Formas de Contato
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Prefere falar diretamente conosco? Utilize qualquer um dos canais abaixo 
                  para entrar em contato. Respondemos rapidamente!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">+55 (11) 92007-5704</p>
                    <p className="text-sm text-muted-foreground">Resposta em até 1 hora</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">E-mail</h4>
                    <p className="text-muted-foreground">contato@foordev.com</p>
                    <p className="text-sm text-muted-foreground">Resposta em até 4 horas</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">+55 (11) 3333-4444</p>
                    <p className="text-sm text-muted-foreground">Seg a Sex, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Localização</h4>
                    <p className="text-muted-foreground">São Paulo, SP</p>
                    <p className="text-sm text-muted-foreground">Atendimento remoto disponível</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Orçamento Gratuito
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Receba uma proposta personalizada para seu projeto sem compromisso.
                </p>
                <Button
                  onClick={() => {
                    const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento gratuito para meu projeto.");
                    window.open(`https://wa.me/5511920075704?text=${whatsappMessage}`, "_blank");
                  }}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
