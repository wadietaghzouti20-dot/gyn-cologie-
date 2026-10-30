/* Configuration du cabinet — à personnaliser avant mise en ligne. */
window.RENDEVO_CONFIG = {
  product: "RENDEVO",
  specialty: "gynecologie",
  clinicName: "Cabinet Gynécologie-obstétrique",
  subtitle: "Votre santé féminine mérite une attention sereine.",
  phone: "",
  email: "",
  city: "Oran",
  timezone: "Africa/Algiers",
  locale: "fr-DZ",
  currency: "DZD",
  /* Paste the deployed Apps Script /exec URL here when the backend is ready. */
  apiUrl: "https://script.google.com/macros/s/AKfycbzUye9G5_wsdUm5ZpCbeNs4B-dAB8zI7bXN9kltH2oaEqsyQQPC0RP-KffUpEF1mPTY-Q/exec",
  /* Keep false until the backend is deployed and tested. */
  bookingEnabled: true,
  /* Public clinic schedule is informational until the backend confirms availability. */
  schedule: { days: ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Samedi"], note: "Les horaires sont confirmés par le cabinet." },
  services: [["Première consultation gynécologique","Première visite ou nouveau motif"],["Suivi gynécologique","Consultation de suivi"],["Suivi de grossesse","Rendez-vous de suivi prénatal"],["Échographie gynécologique ou obstétricale","Demande de rendez-vous pour échographie"],["Contraception et planification familiale","Conseil et suivi"],["Dépistage et prévention","Consultation préventive"],["Troubles du cycle menstruel","Consultation pour un motif lié au cycle"],["Résultats d'examens","Discussion des résultats avec le praticien"],["Consultation de contrôle","Suivi après une consultation précédente"],["Autre motif","À préciser brièvement au secrétariat"]]
};