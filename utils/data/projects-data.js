import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "DECATHLON",
    description:
      "Création d'une application pour les collaborateurs afin d'interagir avec le compte client. Déployé dans 70 pays et 330 magasins. Mise en place de la CI/CD automatisé",
    tools: [
      "VueJS 3",
      "Node JS",
      "Express",
      "TypeScript",
      "ViteJS",
      "Jest",
      "Vitest",
      "Github Actions",
      "GCP",
      "Docker",
      "TailwindCSS",
    ],
    role: "Software Engineer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "SOCIÉTÉ GÉNÉRALE",
    description:
      "Avec l’équipe de développement, j’ai participé à la création d’une application Web (NuxtJs) permettant aux collaborateurs de renseigner des incidents, de les lister, de les qualifier et de générer des statistiques en temps réel. J’ai participé à l’élaboration et la création de l’API Rest (Nodejs) et de sa base de données pour supporter l’application front-end.",
    tools: ["NuxtJS", "Tailwind CSS", "Vue JS", "Node JS", "Express", "MySQL"],
    role: "DÉVELOPPEUR FULL-STACK",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "LES FOURCHETTES ROSES",
    description:
      "J’ai mis en place la partie Front-End NuxtJs (VueJs) en mode PWA et intégré l’interface permettant aux utilisateurs de créer des comptes, gérer leurs communautés et leurs calendriers. J’ai également aider au développement des différentes routes et controllers dans le Back-End de notre projet.",
    tools: ["VueJS", "NuxtJS", "NestJS", "Mysql", "Docker", "TypeScript"],
    code: "",
    role: "DÉVELOPPEUR WEB FULL-STACK",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "FORMATEUR VUEJS",
    description:
      " Découvrir VueJs, Principe de fonctionnement du framework, Utilisation de Vuetify, Utilisation de vue Router, Apprendre a consommer une API, Création d’une application Front-End",
    tools: ["VueJS", "Vue CLI", "Vuetify", "Axios", "Fetch"],
    code: "",
    demo: "",
    image: ayla,
    role: "Formateur VueJS",
  },
];
