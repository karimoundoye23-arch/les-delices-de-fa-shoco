import { Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import heroFood from "@/assets/hero-food.jpg";

const menuSections = [
  {
    id: "pizzas",
    title: "🍕 Pizzas",
    items: [
      { name: "Pizza Reine", desc: "Base tomate, jambon, champignons, olive", price: "PM 3 500F / GM 4 500F" },
      { name: "Pizza Shawarma", desc: "Base tomate, viande shawarma, fromage, poivrons, oignons", price: "PM 4 000F / GM 5 000F" },
      { name: "Pizza Poulet", desc: "Base tomate, fromage, poulet, poivrons, oignons", price: "PM 4 000F / GM 5 000F" },
      { name: "Pizza Margherita", desc: "Base tomate, fromage, olive, oignons", price: "PM 3 500F / GM 4 500F" },
    ],
  },
  {
    id: "tacos",
    title: "🌮 Tacos",
    items: [
      { name: "Tacos Bowl", desc: "Garniture au choix", price: "" },
      { name: "Tacos Poulet", desc: "Poulet grillé, sauce maison", price: "" },
      { name: "Tacos Viande", desc: "Viande hachée assaisonnée", price: "" },
      { name: "Tacos Mix", desc: "Poulet et viande combinés", price: "" },
    ],
  },
  {
    id: "burgers",
    title: "🍔 Burgers & Tortillas",
    items: [
      { name: "Tortilla Poulet", desc: "Base mayo, poulet, steak, frite, œuf, sauce, oignons, poivrons, ketchup", price: "3 000F" },
      { name: "Tortilla Viande", desc: "Base mayo, viande, frites, oignon, sauce burger, poivrons, ketchup", price: "3 000F" },
      { name: "Hamburger", desc: "Poulet, frite, œuf, sauce burger, ketchup", price: "1 500F" },
      { name: "Chicken Burger", desc: "Poulet, frite, œuf, sauce, poivrons, ketchup", price: "2 000F" },
    ],
  },
  {
    id: "sweets",
    title: "🍩 Beignets & Crêpes",
    items: [
      { name: "Beignets Nutella (Box de 4)", desc: "Beignets fourrés au Nutella", price: "2 000F" },
      { name: "Beignets Nutella (Box de 6)", desc: "Beignets fourrés au Nutella", price: "3 000F" },
      { name: "Beignets Nutella (Box de 10)", desc: "Beignets fourrés au Nutella", price: "5 000F" },
      { name: "Mini Beignets 3 façons (Box de 6)", desc: "Assortiment de mini beignets", price: "1 500F" },
      { name: "Crêpe Sucrée (4 pièces)", desc: "Crêpes sucrées maison", price: "2 000F" },
      { name: "Crêpe Salée (2 pièces)", desc: "Crêpes garnies salées", price: "2 000F" },
    ],
  },
  {
    id: "salee",
    title: "🥟 Salée",
    items: [
      { name: "Box Salée (9 pièces)", desc: "Assortiment de pièces salées", price: "2 000F" },
      { name: "Plateau (15 pièces)", desc: "Grand plateau de pièces salées", price: "4 000F" },
      { name: "Box Salée (30 pièces)", desc: "Grande box de pièces salées", price: "7 000F" },
    ],
  },
  {
    id: "cakes",
    title: "🎂 Gâteaux",
    items: [
      { name: "Gâteau Classique", desc: "Gâteau personnalisé", price: "8 000F" },
      { name: "Gâteau 3 Chocolats", desc: "Triple couche de chocolat", price: "10 000F" },
      { name: "Gâteau Thème", desc: "Gâteau thème Boy / Girl / Photo", price: "12 000F" },
      { name: "Layer Cake", desc: "Gâteau en couches décoré", price: "15 000F" },
      { name: "Number Cake", desc: "Gâteau en forme de chiffre", price: "15 000F" },
      { name: "Gâteau Mariage", desc: "Gâteau de mariage sur mesure", price: "18 000F" },
    ],
  },
];

const Index = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-card border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Les Délices De Fah Shoco" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
            <a href="#menu" className="text-foreground/70 hover:text-primary transition-colors">Menu</a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
            <a href="tel:+221778167500" className="bg-gradient-warm text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Commander
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroFood} alt="Nos délices" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(20,20%,8%,0.6) 0%, hsla(24,95%,53%,0.4) 50%, hsla(20,20%,8%,0.8) 100%)" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src={logo} alt="Les Délices De Fah Shoco" className="h-32 md:h-44 w-auto mx-auto mb-8 drop-shadow-2xl animate-fade-in rounded-xl bg-card/90 p-4" />
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Les Délices De Fah Shoco
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-body font-light mb-8 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            Pizzas · Tacos · Burgers · Pâtisseries · Gâteaux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <button onClick={scrollToMenu} className="bg-gradient-warm text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-warm hover:scale-105 transition-transform">
              Voir le Menu
            </button>
            <a href="tel:+221778167500" className="bg-card/20 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-card/30 transition-colors">
              📞 Commander
            </a>
          </div>
        </div>
        <button onClick={scrollToMenu} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 animate-bounce">
          <ChevronDown size={36} />
        </button>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Notre <span className="text-gradient">Menu</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full" />
          </div>

          {menuSections.map((section, sIdx) => (
            <div key={section.id} className="mb-16">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-warm hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                      </div>
                      {item.price && (
                        <span className="bg-secondary text-primary font-bold text-sm px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contactez-<span className="text-gradient">nous</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="tel:+221778167500" className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-warm transition-all group">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Téléphone</h3>
              <p className="text-muted-foreground text-sm">+221 77 816 75 00</p>
              <p className="text-muted-foreground text-sm">+221 78 735 26 58</p>
            </a>

            <div className="bg-card rounded-xl p-8 text-center shadow-card">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Adresse</h3>
              <p className="text-muted-foreground text-sm">Thiès, Marché Cité Ouvrière</p>
              <p className="text-muted-foreground text-sm">Sénégal</p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center shadow-card">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Horaires</h3>
              <p className="text-muted-foreground text-sm">Ouvert tous les jours</p>
              <p className="text-muted-foreground text-sm">Commandes par téléphone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-10">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Les Délices De Fah Shoco" className="h-16 w-auto mx-auto mb-4 rounded-lg bg-card/90 p-2" />
          <p className="text-background/70 font-body text-sm mb-2">
            Thiès, Marché Cité Ouvrière · Sénégal
          </p>
          <p className="text-background/50 font-body text-xs">
            © {new Date().getFullYear()} Les Délices De Fah Shoco. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
