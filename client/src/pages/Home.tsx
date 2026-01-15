import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronDown, Phone, Mail, MapPin, Heart, Lightbulb, Users, Zap, Star, Shield, Clock, Award } from "lucide-react";
import { useState } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

/**
 * Landing Page - Bruna Sambati
 * Psicóloga especializada em Análise do Comportamento
 * Design Philosophy: Off-white, warm neutrals, elegant typography
 * Focus: Conversion to appointment booking - psicoterapia comum
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Maria S.",
      text: "A terapia com a Bruna mudou minha vida. Finalmente consegui entender meus padrões e hoje me sinto mais leve e confiante.",
      rating: 5,
    },
    {
      name: "João P.",
      text: "Profissional extremamente competente e acolhedora. O espaço que ela oferece é de total confiança e respeito.",
      rating: 5,
    },
    {
      name: "Ana L.",
      text: "Depois de meses de terapia, consigo lidar muito melhor com minha ansiedade. Gratidão por todo suporte!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "O atendimento é online ou presencial?",
      answer:
        "Ofereço ambas as modalidades! Atendo online via videoconferência ou presencialmente em Rolândia, Paraná. Você escolhe a opção que melhor se adequa à sua rotina e preferência.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "Trabalho com pacotes para atendimentos particulares. Entre em contato para conhecer os valores e formas de pagamento disponíveis.",
    },
    {
      question: "Posso remarcar a sessão?",
      answer:
        "Sim, você pode remarcar com até 24 horas de antecedência. Cancelamentos com menos de 24 horas podem estar sujeitos a cobrança. Fale comigo sobre sua situação!",
    },
    {
      question: "As sessões são sigilosas?",
      answer:
        "Absolutamente. O sigilo profissional é um compromisso ético fundamental. Tudo o que você compartilha é confidencial e protegido pela ética profissional e legislação vigente.",
    },
    {
      question: "Qual a duração de cada sessão?",
      answer:
        "Cada sessão dura 50 minutos, um tempo adequado para um atendimento profundo, acolhedor e efetivo.",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Escuta Acolhedora",
      description:
        "Um espaço seguro e sem julgamentos onde você pode ser autêntico(a)",
    },
    {
      icon: Lightbulb,
      title: "Compreensão Profunda",
      description:
        "Análise cuidadosa de seus padrões comportamentais e emocionais",
    },
    {
      icon: Users,
      title: "Abordagem Humanista",
      description:
        "Respeito à sua singularidade e ritmo pessoal de transformação",
    },
    {
      icon: Zap,
      title: "Ferramentas Práticas",
      description:
        "Estratégias concretas para lidar com desafios do dia a dia",
    },
  ];

  const situations = [
    "Ansiedade e preocupações excessivas",
    "Estresse e esgotamento emocional",
    "Dificuldades emocionais e sofrimento psíquico",
    "Relacionamentos e comunicação",
    "Autoconhecimento e desenvolvimento pessoal",
    "Luto e perdas",
    "Transições de vida",
    "Baixa autoestima e insegurança",
  ];

  const handleSchedule = () => {
    window.location.href = "#agendar";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-accent-foreground font-bold text-xs md:text-sm shadow-md">
              BS
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm md:text-base">
                Bruna Sambati
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="hidden sm:inline">Psicóloga •</span> <span className="text-accent">CRP 08/33527</span>
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-3 md:gap-6">
            <a
              href="#sobre"
              className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium hidden lg:inline-block"
            >
              Sobre
            </a>
            <a
              href="#beneficios"
              className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium hidden lg:inline-block"
            >
              Benefícios
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium hidden lg:inline-block"
            >
              FAQ
            </a>
            <Button
              className="btn-primary text-xs md:text-sm px-4 md:px-8 py-2 md:py-3 shadow-md shadow-accent/20"
              onClick={handleSchedule}
            >
              Agendar
            </Button>
          </nav>
        </div>
      </header>

      {/* ============ HERO SECTION ============ */}
      <section
        className="relative min-h-[calc(100vh-64px)] md:min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-6 md:pt-0"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />

        <div className="container relative z-10 py-6 md:py-20">
          {/* Mobile: Photo + Title Section */}
          <div className="md:hidden mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 flex-shrink-0">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-background">
                  <img
                    src={`${import.meta.env.BASE_URL}images/bruna-profile.jpg`}
                    alt="Bruna Sambati - Psicóloga"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-accent mb-1 uppercase tracking-wide">
                  Bem-vindo(a)
                </p>
                <h1 className="text-foreground leading-tight text-2xl font-bold">
                  Bruna Sambati
                </h1>
                <p className="text-sm text-muted-foreground">Psicóloga • CRP 08/33527</p>
              </div>
            </div>
            
            {/* Trust Badges Mobile */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1.5 bg-accent/10 text-accent border-accent/20 text-xs">
                <Shield className="w-3 h-3" />
                CRP 08/33527
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1.5 bg-accent/10 text-accent border-accent/20 text-xs">
                <Award className="w-3 h-3" />
                PUCPR
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1.5 bg-accent/10 text-accent border-accent/20 text-xs">
                <Star className="w-3 h-3" />
                Análise do Comportamento
              </Badge>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Trust Badge - Desktop only */}
              <div className="hidden md:flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent border-accent/20 text-sm">
                  <Shield className="w-3.5 h-3.5" />
                  CRP 08/33527
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent border-accent/20 text-sm">
                  <Award className="w-3.5 h-3.5" />
                  PUCPR
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent border-accent/20 text-sm">
                  <Star className="w-3.5 h-3.5" />
                  Análise do Comportamento
                </Badge>
              </div>

              <div>
                <p className="hidden md:block text-sm font-medium text-accent mb-3 uppercase tracking-wide">
                  Bem-vindo(a)
                </p>
                <h1 className="hidden md:block text-foreground mb-6 leading-tight text-4xl lg:text-5xl xl:text-6xl">
                  Um espaço seguro para você se escutar, se compreender e se cuidar
                </h1>
                <h2 className="md:hidden text-foreground mb-4 leading-tight text-xl font-semibold">
                  Um espaço seguro para você se escutar, se compreender e se cuidar
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Sou <span className="font-semibold text-foreground">Bruna Sambati</span>, psicóloga com formação sólida em Análise do
                  Comportamento. Ofereço atendimento acolhedor e profissional para
                  crianças, adolescentes e adultos que buscam compreender-se melhor
                  e transformar suas vidas.
                </p>
                
                {/* Social Proof Mini */}
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground bg-background/80 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-border/50">
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="font-medium text-foreground">5.0</span>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <span className="whitespace-nowrap">Atendimento humanizado</span>
                  <div className="h-4 w-px bg-border hidden sm:block" />
                  <span className="hidden sm:inline whitespace-nowrap">100% confidencial</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  className="btn-primary shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all text-sm md:text-base"
                  size="lg"
                  onClick={handleSchedule}
                >
                  Agendar primeira sessão
                </Button>
                <Button
                  className="btn-secondary text-sm md:text-base"
                  size="lg"
                  onClick={() => {
                    document.getElementById("sobre")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Conheça meu trabalho
                </Button>
              </div>

              {/* CRP and credentials - Desktop only */}
              <div className="pt-4 border-t border-border/50 space-y-3 hidden md:block">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Bruna Sambati
                  </span>
                  <br />
                  CRP-PR 08/33527
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="tel:+5543996616184"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (43) 99661-6184
                  </a>
                  <a
                    href="mailto:sambatibruna@gmail.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    sambatibruna@gmail.com
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Rolândia, Paraná
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image - Desktop only */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                  <img
                    src={`${import.meta.env.BASE_URL}images/bruna-profile.jpg`}
                    alt="Bruna Sambati - Psicóloga"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-background rounded-xl shadow-xl border border-border p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">50 min</p>
                      <p className="text-xs text-muted-foreground">por sessão</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-accent" />
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section
        id="sobre"
        className="section-spacing relative"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/about-section-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-accent mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Sobre mim</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Conheça minha história, formação e a abordagem que guia meu trabalho
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <Card className="p-6 md:p-8 border-2 border-accent/20 bg-card/50 backdrop-blur-sm">
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  Sou psicóloga formada pela <span className="font-semibold text-accent">Pontifícia Universidade Católica do
                  Paraná (PUCPR)</span>, com formação sólida em Análise do Comportamento
                  e pós-graduação em Análise do Comportamento Aplicada (ABA).
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Card className="p-5 md:p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10">
                        <span className="text-xl md:text-2xl">🎓</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        Formação
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Psicologia pela PUCPR com especialização em Análise do
                      Comportamento. Formação contínua em práticas terapêuticas
                      baseadas em evidências científicas.
                    </p>
                  </div>
                </Card>

                <Card className="p-5 md:p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10">
                        <span className="text-xl md:text-2xl">💼</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        Experiência
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Ampla experiência em atendimento clínico com crianças,
                      adolescentes e adultos. Trabalho com diferentes demandas e
                      contextos de vida.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-xl p-6 md:p-8 border-l-4 border-accent shadow-md">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  Minha Abordagem
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Trabalho com base na Análise do Comportamento, uma abordagem
                  científica que compreende como nossos comportamentos,
                  pensamentos e emoções se conectam. Isso me permite oferecer um
                  atendimento profundo, acolhedor e efetivo. Cada pessoa é única,
                  e cada processo terapêutico é personalizado conforme suas
                  necessidades e objetivos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-foreground/5 via-foreground/3 to-transparent rounded-xl p-6 md:p-8 border-l-4 border-foreground/30 shadow-md">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-foreground/70" />
                  Compromisso Ético
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  O sigilo profissional é inviolável. Tudo o que você compartilha
                  comigo é confidencial e protegido pela ética profissional e
                  legislação vigente. Meu compromisso é com seu bem-estar, seu
                  desenvolvimento e seu direito à privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS SECTION ============ */}
      <section id="beneficios" className="section-spacing bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-accent mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
                O que você encontra aqui
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-6 md:p-8 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-300">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg bg-accent/10">
                            <Icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 md:mt-12 p-6 md:p-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl border-2 border-accent/30 text-center shadow-lg">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/20 mb-4 md:mb-6">
                  <Heart className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed mb-5 md:mb-6 font-medium">
                  A psicoterapia é um processo de autoconhecimento e transformação.
                  Aqui você encontra um espaço onde pode ser autêntico(a), explorar
                  seus sentimentos e desenvolver ferramentas para uma vida mais
                  plena.
                </p>
                <Button
                  className="btn-primary shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all text-sm md:text-base"
                  size="lg"
                  onClick={handleSchedule}
                >
                  Agendar primeira sessão
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground mt-4">
                  ✓ Atendimento online e presencial • ✓ Horários flexíveis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOR WHOM SECTION ============ */}
      <section className="section-spacing bg-gradient-to-b from-secondary/30 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-accent mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
                Para quem é indicado
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                A psicoterapia é para qualquer pessoa que deseje compreender-se
                melhor, resolver conflitos ou simplesmente cuidar de sua saúde
                mental. Aqui estão algumas situações comuns:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-12">
              {situations.map((situation, index) => (
                <Card
                  key={index}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl hover:shadow-lg hover:border-accent/30 transition-all duration-300 border-border/50 group"
                >
                  <div className="flex-shrink-0 mt-0.5 md:mt-1">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-base md:text-lg">✨</span>
                    </div>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed text-sm md:text-base">{situation}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 md:p-10 bg-gradient-to-br from-accent/5 to-transparent border-2 border-accent/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-accent/5 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16" />
              <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-accent/5 rounded-full -ml-10 -mb-10 md:-ml-12 md:-mb-12" />
              <div className="relative">
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground text-base md:text-lg leading-relaxed font-medium italic mb-4">
                      "Não há cura milagrosa. O que oferecemos é um espaço de escuta,
                      compreensão e apoio para que você encontre suas próprias
                      respostas e caminhos para uma vida mais autêntica e satisfatória."
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      — Bruna Sambati, Psicóloga CRP 08/33527
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS SECTION ============ */}
      <section className="section-spacing bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-accent mb-4">
                Como funciona o atendimento
              </h2>
              <p className="text-muted-foreground text-lg">
                Um processo simples e acolhedor para iniciar sua jornada
              </p>
            </div>

            <div className="space-y-8">
              <div className="relative flex gap-8 items-start group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute top-12 left-5 w-0.5 h-full bg-accent/20 -z-10" />
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent/70 text-accent-foreground font-bold shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                    1
                  </div>
                </div>
                <Card className="flex-1 p-6 hover:shadow-lg transition-all duration-300 border-accent/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent" />
                    Agendamento
                  </h3>
                  <p className="text-muted-foreground">
                    Você escolhe o horário que melhor se adequa à sua rotina. Atendo
                    online ou presencialmente em Rolândia.
                  </p>
                </Card>
              </div>

              <div className="relative flex gap-8 items-start group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute top-12 left-5 w-0.5 h-full bg-accent/20 -z-10" />
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent/70 text-accent-foreground font-bold shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                    2
                  </div>
                </div>
                <Card className="flex-1 p-6 hover:shadow-lg transition-all duration-300 border-accent/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    Primeira Sessão
                  </h3>
                  <p className="text-muted-foreground">
                    Conhecemos um ao outro, você compartilha suas demandas e
                    objetivos. Juntos, planejamos o melhor caminho.
                  </p>
                </Card>
              </div>

              <div className="relative flex gap-8 items-start group">
                <div className="flex-shrink-0 relative">
                  <div className="absolute top-12 left-5 w-0.5 h-full bg-accent/20 -z-10" />
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent/70 text-accent-foreground font-bold shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                    3
                  </div>
                </div>
                <Card className="flex-1 p-6 hover:shadow-lg transition-all duration-300 border-accent/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    Processo Terapêutico
                  </h3>
                  <p className="text-muted-foreground">
                    Sessões regulares de 50 minutos onde exploramos seus padrões,
                    emoções e desenvolvemos estratégias práticas.
                  </p>
                </Card>
              </div>

              <div className="relative flex gap-8 items-start group">
                <div className="flex-shrink-0 relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent/70 text-accent-foreground font-bold shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                    4
                  </div>
                </div>
                <Card className="flex-1 p-6 hover:shadow-lg transition-all duration-300 border-accent/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Transformação
                  </h3>
                  <p className="text-muted-foreground">
                    Com o tempo, você desenvolve maior autoconhecimento,
                    compreensão e ferramentas para viver de forma mais plena.
                  </p>
                </Card>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-2xl border-l-4 border-accent shadow-md text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-accent" />
                <p className="text-foreground font-semibold text-lg">Duração das Sessões</p>
              </div>
              <p className="text-2xl font-bold text-accent mb-2">50 minutos</p>
              <p className="text-sm text-muted-foreground">
                Tempo adequado para um atendimento profundo e acolhedor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section
        id="agendar"
        className="section-spacing relative"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/cta-section-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background/80 to-background/90" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 mb-5 md:mb-6 animate-pulse">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
              <h2 className="text-accent mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
                Agende sua primeira sessão
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
                Escolha o melhor horário para você. Atendo online e presencialmente em Rolândia, Paraná.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8 md:mb-10">
              <Card className="flex flex-col items-center gap-2 p-4 md:p-5 bg-card/95 backdrop-blur-md border-accent/20 hover:border-accent/40 transition-colors">
                <Shield className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                <p className="text-sm font-medium text-foreground">100% Sigiloso</p>
                <p className="text-xs text-muted-foreground text-center">Privacidade garantida</p>
              </Card>
              <Card className="flex flex-col items-center gap-2 p-4 md:p-5 bg-card/95 backdrop-blur-md border-accent/20 hover:border-accent/40 transition-colors">
                <Clock className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                <p className="text-sm font-medium text-foreground">Horários Flexíveis</p>
                <p className="text-xs text-muted-foreground text-center">Online ou presencial</p>
              </Card>
              <Card className="flex flex-col items-center gap-2 p-4 md:p-5 bg-card/95 backdrop-blur-md border-accent/20 hover:border-accent/40 transition-colors">
                <Award className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                <p className="text-sm font-medium text-foreground">CRP 08/33527</p>
                <p className="text-xs text-muted-foreground text-center">Profissional registrada</p>
              </Card>
            </div>

            {/* Calendly Widget */}
            <Card className="p-4 md:p-6 lg:p-8 border-2 border-accent/30 bg-card/95 backdrop-blur-md shadow-2xl">
              <CalendlyWidget />
            </Card>

            {/* Alternative Contact Options */}
            <Card className="mt-6 p-6 md:p-8 text-center bg-card/95 backdrop-blur-md border-accent/20">
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Prefere entrar em contato diretamente?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+5543996616184"
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium text-sm md:text-base"
                >
                  <Phone className="w-4 h-4" />
                  (43) 99661-6184
                </a>
                <div className="hidden sm:block w-px h-5 bg-border" />
                <a
                  href="mailto:sambatibruna@gmail.com"
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium text-sm md:text-base"
                >
                  <Mail className="w-4 h-4" />
                  sambatibruna@gmail.com
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section className="section-spacing bg-gradient-to-b from-secondary/20 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-accent mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">O que dizem sobre o atendimento</h2>
              <p className="text-muted-foreground text-sm md:text-base px-4">
                Histórias reais de pessoas que encontraram acolhimento e transformação
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="p-5 md:p-6 hover:shadow-xl transition-all duration-300 bg-card border-border/50 group"
                >
                  <div className="space-y-3 md:space-y-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="pt-3 md:pt-4 border-t border-border/50">
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-10 md:mt-12 text-center p-5 md:p-6 bg-accent/5 rounded-xl border border-accent/20">
              <p className="text-xs md:text-sm text-muted-foreground mb-4">
                <Shield className="w-4 h-4 md:w-5 md:h-5 inline-block mr-2 text-accent" />
                Depoimentos reais de pacientes. Nomes preservados por questões de privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section id="faq" className="section-spacing bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center mb-12 text-accent">
              Perguntas frequentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 hover:bg-secondary/30 transition-colors text-left"
                  >
                    <h3 className="font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-accent transition-transform flex-shrink-0 ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedFaq === index && (
                    <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-gradient-to-b from-foreground/5 to-foreground/10 border-t border-border">
        <div className="container py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-accent-foreground font-bold shadow-md">
                  BS
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">Bruna Sambati</p>
                  <p className="text-xs text-muted-foreground">Psicóloga</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Atendimento psicológico acolhedor e profissional baseado em
                Análise do Comportamento.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 md:mb-5 flex items-center gap-2 text-sm md:text-base">
                <Phone className="w-4 h-4 text-accent" />
                Contato
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a
                  href="tel:+5543996616184"
                  className="flex items-center gap-3 hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-xs md:text-sm">(43) 99661-6184</span>
                </a>
                <a
                  href="mailto:sambatibruna@gmail.com"
                  className="flex items-center gap-3 hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-xs md:text-sm break-all">sambatibruna@gmail.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-xs md:text-sm">Rolândia, Paraná</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 md:mb-5 flex items-center gap-2 text-sm md:text-base">
                <Award className="w-4 h-4 text-accent" />
                Informações Profissionais
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-xs md:text-sm">CRP-PR 08/33527</p>
                    <p className="text-muted-foreground text-xs">Conselho Regional de Psicologia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-xs md:text-sm">PUCPR</p>
                    <p className="text-muted-foreground text-xs">Análise do Comportamento</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-muted-foreground text-xs">
                    💻 Atendimento Online<br />
                    📍 Presencial em Rolândia, PR
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-xs md:text-sm text-muted-foreground">
                © 2024 Bruna Sambati - Psicóloga. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                <span>Atendimento ético e baseado em evidências científicas</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
