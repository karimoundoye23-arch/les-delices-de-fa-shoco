import { Phone, MapPin, Clock, Mail, Instagram, Facebook, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import heroCollage from "@/assets/hero-collage.png";
import dishTiebouMafe from "@/assets/dish-tiebou-mafe.png";
import dishYassaAttieke from "@/assets/dish-yassa-attieke.png";
import founder from "@/assets/founder-aissata.png";

type Item = { name: string; price?: string; desc?: string };

const joursMenu: { jour: string; items: Item[] }[] = [
  {
    jour: "Mardi",
    items: [
      { name: "Couscous Royal", price: "15,00 €" },
      { name: "Tagliatelles au poulet, sauce curry crème", price: "15,00 €" },
    ],
  },
  {
    jour: "Mercredi",
    items: [
      { name: "Yassa au poulet ou au poisson braisé", price: "15,00 €" },
      { name: "Attiéké avec alloco au poulet ou au poisson braisé", price: "15,00 €" },
    ],
  },
  {
    jour: "Jeudi",
    items: [
      { name: "Mafé", price: "15,00 €" },
      { name: "Papillote de poisson, gratin de chou-fleur et brocolis", price: "15,00 €" },
    ],
  },
  {
    jour: "Vendredi",
    items: [
      { name: "Riz au poisson à la sénégalaise", price: "18,00 €" },
      { name: "Blanquette de veau", desc: "Accompagnement : riz ou pâtes et légumes", price: "18,00 €" },
    ],
  },
  {
    jour: "Samedi",
    items: [
      { name: "Dibi poulet ou viande", price: "15,00 – 18,00 €" },
      { name: "Pilons ou ailes de poulet, sauce mexicaine", desc: "Accompagnement : allocos ou frites et salade verte", price: "15,00 – 18,00 €" },
    ],
  },
];

const carte: { titre: string; items: Item[] }[] = [
  {
    titre: "Entrées",
    items: [
      { name: "Velouté de légumes ou salade composée", price: "5,00 €" },
      { name: "Nems", price: "5,00 €" },
      { name: "Fataye", price: "5,00 €" },
      { name: "Beignets", price: "3,00 €" },
    ],
  },
  {
    titre: "Menu Enfant",
    items: [
      { name: "Nuggets – Frites", price: "5,00 €" },
      { name: "Cheeseburger – Frites", price: "5,00 €" },
    ],
  },
  {
    titre: "Desserts",
    items: [
      { name: "Thiakry", price: "5,00 €" },
      { name: "Salade de fruits", price: "5,00 €" },
      { name: "Fondant au chocolat, crème anglaise", price: "5,00 €" },
    ],
  },
  {
    titre: "Options",
    items: [
      { name: "Mixé" },
      { name: "Mouliné" },
      { name: "Végétarien" },
    ],
  },
];

const boissons: { titre: string; items: Item[] }[] = [
  {
    titre: "Boissons exotiques",
    items: [
      { name: "33 cl — 4,00 € / 50 cl — 6,00 €" },
      { name: "Bissap" },
      { name: "Gingembre" },
      { name: "Fruit de baobab" },
      { name: "Jus de tamarin" },
      { name: "Ditakh" },
    ],
  },
  {
    titre: "Sirops",
    items: [
      { name: "Violette, Menthe, Grenadine, Fruit de la passion", price: "2,00 €" },
      { name: "Pêche, Fraise, Cacao, Cassis", price: "2,00 €" },
    ],
  },
  {
    titre: "Softs",
    items: [
      { name: "Coca-Cola, Sprite, Schweppes agrumes, Oasis, Orangina", price: "Bouteille 3,00 € / Canette 2,00 €" },
    ],
  },
  {
    titre: "Boissons chaudes",
    items: [
      { name: "Expresso" },
      { name: "Attaya" },
      { name: "Thé — assortiment de saveurs" },
    ],
  },
];

const Index = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Resto Koko" className="h-12 w-12 rounded-full" />
            <span className="font-display text-cream text-lg font-bold hidden sm:block">Resto Koko</span>
          </div>
          <div className="flex items-center gap-4 md:gap-8 font-body text-sm font-medium">
            <button onClick={() => scrollTo("histoire")} className="text-cream/80 hover:text-cream transition-colors hidden md:block">Histoire</button>
            <button onClick={() => scrollTo("menu")} className="text-cream/80 hover:text-cream transition-colors hidden md:block">Menu</button>
            <button onClick={() => scrollTo("contact")} className="text-cream/80 hover:text-cream transition-colors hidden md:block">Contact</button>
            <a href="tel:+33351082254" className="bg-cream text-primary px-4 md:px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Réserver
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCollage} alt="Plats Resto Koko" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src={logo} alt="Resto Koko" className="h-32 md:h-44 w-32 md:w-44 mx-auto mb-6 rounded-full shadow-elegant" />
          <p className="text-cream/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Saint-Dié-des-Vosges</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4">
            La cuisine d'ici<br />et d'ailleurs
          </h1>
          <p className="text-base md:text-lg text-cream/85 font-light mb-8 max-w-2xl mx-auto">
            Une cuisine africaine familiale, faits maison, dans une ambiance décontractée au cœur des Vosges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("menu")} className="bg-cream text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-elegant hover:scale-105 transition-transform">
              Découvrir la carte
            </button>
            <a href="tel:+33351082254" className="bg-transparent text-cream border-2 border-cream/60 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cream/10 transition-colors">
              📞 +33 3 51 08 22 54
            </a>
          </div>
        </div>
        <button onClick={() => scrollTo("histoire")} aria-label="Défiler" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/80 animate-bounce">
          <ChevronDown size={36} />
        </button>
      </section>

      {/* Histoire / Founder */}
      <section id="histoire" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <p className="text-primary/60 uppercase tracking-[0.3em] text-xs mb-4">Notre histoire</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Aïssata,<br />une passion familiale
              </h2>
              <div className="w-16 h-1 bg-primary mb-6 rounded-full" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                « Je m'appelle Aïssata, et je vis à Saint-Dié depuis 25 ans. Maman de trois enfants,
                j'ai toujours travaillé dans le domaine culinaire. »
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Après une formation en 2008, Aïssata a travaillé dans des établissements
                comme la Maison du XXIᵉ siècle avant de fonder Resto Koko, un lieu où se rencontrent
                les saveurs de l'Afrique et la chaleur d'une cuisine familiale.
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                « Chaque plat raconte une histoire — celle d'un voyage, d'une mémoire, d'un partage. »
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img src={founder} alt="Aïssata, fondatrice de Resto Koko" className="w-full rounded-2xl shadow-elegant" />
            </div>
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary/60 uppercase tracking-[0.3em] text-xs mb-4">Nos signatures</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Des plats qui voyagent
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-card group">
              <img src={dishTiebouMafe} alt="Tiebou Yapp et Mafé" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="p-6 bg-card">
                <h3 className="font-display text-xl font-semibold mb-1">Tiebou Yapp & Mafé</h3>
                <p className="text-muted-foreground text-sm">Riz à la viande et sauce arachide onctueuse — l'âme du Sénégal.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-card group">
              <img src={dishYassaAttieke} alt="Yassa et Attiéké" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="p-6 bg-card">
                <h3 className="font-display text-xl font-semibold mb-1">Yassa & Attiéké</h3>
                <p className="text-muted-foreground text-sm">Poisson grillé, oignons confits au citron et semoule de manioc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu de la semaine */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary/60 uppercase tracking-[0.3em] text-xs mb-4">La carte</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Le menu de la semaine
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {joursMenu.map((j) => (
              <div key={j.jour} className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elegant transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary text-cream rounded-full flex items-center justify-center font-display font-bold text-sm">
                    {j.jour.charAt(0)}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{j.jour}</h3>
                </div>
                <ul className="space-y-4">
                  {j.items.map((it, i) => (
                    <li key={i} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <div className="flex justify-between gap-3">
                        <span className="font-medium text-foreground text-sm">{it.name}</span>
                        {it.price && <span className="text-primary font-semibold text-sm whitespace-nowrap">{it.price}</span>}
                      </div>
                      {it.desc && <p className="text-muted-foreground text-xs mt-1">{it.desc}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Carte permanente */}
          <div className="mt-20">
            <h3 className="font-display text-3xl font-bold text-center text-foreground mb-12">À la carte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {carte.map((s) => (
                <div key={s.titre} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <h4 className="font-display text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">{s.titre}</h4>
                  <ul className="space-y-3">
                    {s.items.map((it, i) => (
                      <li key={i} className="flex justify-between gap-3 text-sm">
                        <span className="text-foreground">{it.name}</span>
                        {it.price && <span className="text-primary font-semibold whitespace-nowrap">{it.price}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Boissons */}
          <div className="mt-20">
            <h3 className="font-display text-3xl font-bold text-center text-foreground mb-12">Les boissons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {boissons.map((s) => (
                <div key={s.titre} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <h4 className="font-display text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">{s.titre}</h4>
                  <ul className="space-y-3">
                    {s.items.map((it, i) => (
                      <li key={i} className="text-sm">
                        <div className="flex justify-between gap-3">
                          <span className="text-foreground">{it.name}</span>
                        </div>
                        {it.price && <span className="text-primary font-semibold text-xs block mt-1">{it.price}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-primary text-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-cream/60 uppercase tracking-[0.3em] text-xs mb-4">Contact & réservation</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Venez nous rendre visite</h2>
            <div className="w-16 h-1 bg-cream mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-cream/10 border border-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-cream" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-cream/80 text-sm">6 rue Saint Charles</p>
              <p className="text-cream/80 text-sm">88100 Saint-Dié-des-Vosges</p>
            </div>

            <a href="tel:+33351082254" className="text-center group">
              <div className="w-16 h-16 bg-cream/10 border border-cream/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cream group-hover:text-primary transition-colors">
                <Phone size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Téléphone</h3>
              <p className="text-cream/80 text-sm">+33 3 51 08 22 54</p>
              <p className="text-cream/60 text-xs mt-1">Pour vos commandes</p>
            </a>

            <div className="text-center">
              <div className="w-16 h-16 bg-cream/10 border border-cream/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} className="text-cream" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Horaires</h3>
              <p className="text-cream/80 text-sm">Du mardi au samedi</p>
              <p className="text-cream/60 text-xs mt-1">Fermé dimanche & lundi</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a href="mailto:kokoresto_@outlook.fr" className="flex items-center gap-2 text-cream/90 hover:text-cream transition-colors">
              <Mail size={18} />
              <span className="text-sm">kokoresto_@outlook.fr</span>
            </a>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/kokoresto_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-cream/30 flex items-center justify-center hover:bg-cream hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full border border-cream/30 flex items-center justify-center hover:bg-cream hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Snapchat" className="w-11 h-11 rounded-full border border-cream/30 flex items-center justify-center hover:bg-cream hover:text-primary transition-colors text-xs font-bold">
                SNAP
              </a>
            </div>
            <p className="text-cream/50 text-xs">Snapchat : KOKO_RESTO · Facebook : KOKO RESTO</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-cream/70 py-8">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Resto Koko" className="h-14 w-14 mx-auto mb-3 rounded-full" />
          <p className="text-xs">© {new Date().getFullYear()} Resto Koko · La cuisine d'ici et d'ailleurs · Saint-Dié-des-Vosges</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
