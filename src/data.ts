export const v = {
  name: "Eiscafé Venezia",
  inhaber: "Marcello",
  adresse: "Hauptstraße 124, 69168 Wiesloch",
  tel: "06222 50499",
  telHref: "tel:+49622250499",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Eiscaf%C3%A9+Venezia+Hauptstra%C3%9Fe+124+69168+Wiesloch",
  zeiten: [
    ["Mo – Sa", "9 – 23 Uhr"],
    ["Sonntag", "10 – 23 Uhr"],
  ] as [string, string][],
  rating: "4,6",
  reviews: "720",
  spezial: [
    ["Spaghetti-Eis", "Der Klassiker — Vanilleeis, fruchtige Erdbeersauce, weiße Schokoraspeln."],
    ["Hausgemachte Limonade", "Frisch, spritzig, jeden Tag selbst gemacht."],
    ["Tiramisu & Apfelstrudel", "Hausgemachte Dolci — wie bei Nonna."],
    ["Italienischer Kaffee", "Espresso, Cappuccino & Co. wie in Bella Italia."],
  ] as [string, string][],
  eis: ["Eisbecher", "Eisvariationen", "Spaghetti-Eis", "Salate", "Hausgem. Limonade", "Ital. Kaffee"],
};
