import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Sparkles, ShieldCheck, Star, MapPin, Instagram, Clock } from "lucide-react";
import luana1 from "@/assets/luana-1.jpg.asset.json";
import luana2 from "@/assets/luana-2.jpg.asset.json";
import luana3 from "@/assets/luana-3.jpg.asset.json";

const WHATSAPP_NUMBER = "5519997774010";
const WHATSAPP_DEFAULT_MSG = "Olá vim pelo site e gostaria de saber mais.";
const waLink = (extra?: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(extra ?? WHATSAPP_DEFAULT_MSG)}&type=phone_number&app_absent=0`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luana Almeida — Micropigmentação a Laser" },
      { name: "description", content: "Realce sua beleza natural com micropigmentação a laser. Agende sua avaliação com Luana Almeida pelo WhatsApp." },
      { property: "og:title", content: "Luana Almeida — Micropigmentação a Laser" },
      { property: "og:description", content: "Técnica refinada, resultado natural. Agende sua avaliação." },
      { property: "og:image", content: luana1.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-wide">
            Luana <span className="text-gold">Almeida</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm hover:opacity-90 transition">
            <MessageCircle className="h-4 w-4" /> Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Micropigmentação a Laser
            </p>
            <h1 className="text-5xl md:text-6xl leading-[1.05] mb-6">
              A beleza que <em className="text-gold not-italic">desperta</em> a sua essência.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Técnica avançada de remoção e correção de micropigmentação com tecnologia laser.
              Resultado natural, seguro e elegante — pensado para realçar quem você é.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                style={{ background: "var(--gradient-luxury)", boxShadow: "var(--shadow-soft)" }}>
                <MessageCircle className="h-4 w-4" /> Agendar pelo WhatsApp
              </a>
              <a href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-accent transition">
                Conhecer serviços
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                <span className="ml-2">+500 atendimentos</span>
              </div>
              <span className="h-4 w-px bg-border" />
              <span>Profissional certificada</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-luxury)", opacity: 0.15 }} />
            <img src={luana1.url} alt="Luana Almeida — Especialista em Micropigmentação a Laser"
              className="relative rounded-3xl object-cover w-full aspect-[4/5] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-6 bg-secondary/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={luana3.url} alt="Luana Almeida no espaço de atendimento"
            className="rounded-3xl object-cover w-full aspect-[4/5] shadow-xl order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Sobre Luana</p>
            <h2 className="text-4xl md:text-5xl mb-6">Cuidado, técnica e um olhar atento à sua singularidade.</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Há anos dedicada à arte da micropigmentação, Luana Almeida une conhecimento técnico,
              equipamentos de ponta e sensibilidade estética para entregar resultados naturais e duradouros.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Especialista em remoção a laser, correção e harmonização — cada atendimento é único,
              personalizado e realizado em um ambiente acolhedor e seguro.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { n: "+500", l: "Atendimentos" },
                { n: "5★", l: "Avaliação" },
                { n: "100%", l: "Personalizado" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold">{s.n}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Serviços</p>
            <h2 className="text-4xl md:text-5xl mb-4">Tratamentos exclusivos</h2>
            <p className="text-muted-foreground">Procedimentos com tecnologia laser de última geração, focados em segurança e excelência.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Remoção a Laser", d: "Remoção segura e eficaz de micropigmentação antiga em sobrancelhas, lábios e olhos." },
              { t: "Correção & Clareamento", d: "Clareia tons indesejados e prepara a pele para uma nova micropigmentação harmoniosa." },
              { t: "Avaliação Personalizada", d: "Análise completa da sua pele e do resultado desejado, com plano de tratamento sob medida." },
            ].map((s) => (
              <div key={s.t} className="group rounded-2xl border border-border bg-card p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "var(--gradient-luxury)" }}>
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.d}</p>
                <a href={waLink(`Olá Luana! Quero saber mais sobre: ${s.t}`)} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all">
                  Saber mais <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 px-6 bg-secondary/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Diferenciais</p>
            <h2 className="text-4xl md:text-5xl mb-8">Por que escolher Luana Almeida?</h2>
            <ul className="space-y-6">
              {[
                { i: ShieldCheck, t: "Segurança em primeiro lugar", d: "Equipamentos certificados e protocolos rigorosos de higiene." },
                { i: Sparkles, t: "Tecnologia laser avançada", d: "Resultados eficazes com mínimo desconforto." },
                { i: Star, t: "Atendimento humanizado", d: "Cada cliente é única — escutamos, planejamos e cuidamos." },
              ].map((d) => (
                <li key={d.t} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--gradient-luxury)" }}>
                    <d.i className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">{d.t}</h4>
                    <p className="text-sm text-muted-foreground">{d.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img src={luana2.url} alt="Espaço de atendimento Luana Almeida"
            className="rounded-3xl object-cover w-full aspect-[4/5] shadow-xl" />
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Depoimentos</p>
            <h2 className="text-4xl md:text-5xl">Quem viveu, recomenda</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Marina S.", t: "Profissional impecável! A remoção ficou perfeita e o atendimento é encantador." },
              { n: "Carolina P.", t: "Me senti acolhida do início ao fim. Resultado natural e além das expectativas." },
              { n: "Beatriz L.", t: "Ambiente lindo, técnica de excelência. Já indiquei para todas as amigas." },
            ].map((d) => (
              <div key={d.n} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{d.t}"</p>
                <p className="font-display text-lg">{d.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center text-primary-foreground relative overflow-hidden"
          style={{ background: "var(--gradient-luxury)", boxShadow: "var(--shadow-soft)" }}>
          <Sparkles className="h-10 w-10 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl mb-4">Pronta para o seu novo brilho?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Agende agora sua avaliação personalizada pelo WhatsApp e dê o primeiro passo para um resultado natural e elegante.
          </p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-base font-medium hover:scale-105 transition-transform">
            <MessageCircle className="h-5 w-5" /> Agendar pelo WhatsApp
          </a>
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm opacity-90">
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Seg–Sáb · 9h às 19h</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Alphaville e Atibaia</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Luana Almeida — Micropigmentação a Laser.</p>
          <a href="https://www.instagram.com/luanaalmeida.beauty_/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition">
            <Instagram className="h-4 w-4" /> @luanaalmeida.beauty_
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={waLink()} target="_blank" rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
        style={{ background: "var(--gradient-luxury)", boxShadow: "var(--shadow-soft)" }}>
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
