import minecraftImage from '../assets/images/Minecraft-style.webp';
import scratchImage from '../assets/images/_82cfd2ed-1e37-490b-9afc-2782db4754c3.jpeg';
import lambImage from '../assets/images/_86284232-81c0-4c6a-855b-4b6160287324.jpeg';
import cyberImage from '../assets/images/diversite.webp';
import plateauImage from '../assets/images/Plateau.jpg'
import DiscordImage from '../assets/images/d73f9c4f0f6d91a72ac2d2ffacbf9cab.jpg';
import DiscriImage from '../assets/images/_38c56c74-91b2-4cfc-94f7-19222ea3b6c4.jpeg';
import Photopea from '../assets/images/téléchargement (2).png'
import infinite from '../assets/images/téléchargement (7).jpeg'
import ordi from '../assets/images/_11acec20-7d4b-4238-9118-e08ddf77ac8b.jpeg'
import SuperHero from '../assets/images/Visuel-ALL-SH-1.png'

const ateliers = [
  {
    id: 1,
    title: "Jeu de Plateau",
    image: plateauImage,  
    introduction: "Le jeu de plateau interactif est un outil ludique et éducatif qui plonge les participants dans une expérience immersive. Il est conçu pour encourager l’engagement, stimuler la réflexion stratégique, et promouvoir le travail en équipe à travers des défis captivants et des scénarios dynamiques.",
    objectifs: [
      "Développer les compétences de collaboration et de communication entre les participants.",
      "Stimuler la réflexion stratégique et la prise de décision en équipe.",
      "Encourager la créativité et la résolution de problèmes dans des contextes interactifs.",
      "Favoriser une approche ludique de l’apprentissage, tout en renforçant des valeurs comme l’entraide et le respect."
    ],
    description: "Cet atelier propose un jeu de plateau interactif, conçu pour stimuler la réflexion stratégique et la collaboration entre les participants.",
    year: 2024,
    lien : 'https://docs.google.com/forms/d/e/1FAIpQLSev588dN8p3aqpyxgl0xFsoJgp-vniot_yFOTy8gqeC3aufsA/viewform?usp=header '
  },
  {
    id: 2,
    title: "Minecraft Adventurer",
    image: minecraftImage,  
    introduction: "Cet atelier est un jeu inspiré de Minecraft Adventurer, conçu pour initier les participants aux bases de la programmation de manière ludique.",
    description: "Cet atelier est un jeu inspiré de Minecraft Adventurer, conçu pour initiation au code.",
    objectifs: [
      "Introduire les bases de la programmation à travers un environnement ludique.",
      "Encourager la logique de résolution de problèmes en utilisant des outils de programmation.",
      "Favoriser la créativité en permettant aux participants de créer des éléments dans un monde virtuel."
    ],
    year: 2024
  },
  {
    id: 3,
    title: "Découverte de Scratch",
    image: scratchImage,  
    introduction: "Cet atelier permet aux participants de découvrir Scratch, une plateforme de codage visuel, et de s'initier à la création d'animations et de jeux interactifs.",
    description: "Organisation et animation d'ateliers pour Unis Cité, abordant des thèmes comme le cyberharcèlement et le codage avec Scratch.",
    objectifs: [
      "Apprendre les bases du codage à travers la plateforme Scratch.",
      "Encourager la créativité en permettant aux participants de créer leurs propres animations et jeux.",
      "Sensibiliser aux problématiques liées au cyberharcèlement à travers des projets interactifs."
    ],
    Categories: ["Scratch", "Pédagogie numérique"],
    year: 2024
  },
  {
    id: 4,
    title: "Lamb: Jam Session Intro",
    image: lambImage,  
    introduction: "Cet atelier est dédié à la création musicale à travers des sessions de jam, où les participants peuvent explorer la musique numérique et l'intégrer à des projets de codage.",
    description: "Création de musique",
    objectifs: [
      "Développer des compétences de création musicale en utilisant des outils numériques.",
      "Encourager l'expression artistique à travers la musique et le codage.",
      "Stimuler la collaboration et la créativité lors des sessions de jam."
    ],
    Categories: ["HTML", "CSS", "JavaScript"],
    year: 2024
  },
  {
    id: 5,
    title: "Atelier sur la cyberharcèlement et la discrimination",
    image: cyberImage,  
    introduction: "Cet atelier explore la prévention du cyberharcèlement et de la discrimination en ligne, en sensibilisant les participants à ces enjeux importants du numérique.",
    description: "Cette prévention permet de définir le cyberharcèlement, notamment en ce qui concerne la discrimination en identifiant les comportements discriminatoires en ligne.",
    objectifs: [
      "Sensibiliser aux comportements discriminatoires en ligne et au cyberharcèlement.",
      "Apprendre à reconnaître les signes de discrimination sur les réseaux sociaux.",
      "Développer des compétences pour réagir face à des situations de cyberharcèlement."
    ],
    Categories: ["Scratch"],
    year: 2024
  },
  {
    id: 6,
    title: "Prévention numérique: Discord en toute sérénité",
    image: DiscordImage,  
    introduction: "Cet atelier est dédié à l'apprentissage des bonnes pratiques de sécurité sur Discord, afin de protéger les utilisateurs contre les dangers du web.",
    description: "Cette prévention permet d'apprendre à travers l'application Discord, en observant et en analysant les comportements en ligne. Elle aide à identifier les signes.",
    objectifs: [
      "Comprendre les risques : Identifier les principaux dangers (cyberharcèlement, arnaques, atteinte à la confidentialité) associés à l'utilisation de Discord.",
      "Apprendre à configurer la sécurité : Savoir configurer les paramètres de confidentialité et de sécurité pour protéger son compte Discord.",
      "Savoir comment réagir en cas de problème sur la plateforme Discord."
    ],
    niveau: 'CM2, CM1',
    date: 2024
  },
  {
    id: 7,
    title: "D’où vient l’ordinateur et comment fonctionne-t-il ?",
    image: ordi,  
    introduction: "Cet atelier explique les origines et le fonctionnement des ordinateurs, tout en permettant aux participants de réaliser des exercices pratiques pour mieux comprendre le numérique.",
    description: "Expliquer et créer des exercices jouables sur les débuts du numérique, utiliser l’ordinateur.",
    objectifs: [
      "Comprendre l'évolution des ordinateurs et leur fonctionnement de base.",
      "Apprendre les premières étapes de l'utilisation d'un ordinateur.",
      "Développer des compétences numériques fondamentales."
    ],
    Categories: ["Scratch"],
    year: 2024
  },
  {
    id: 8,
    title: "Création d'Affiches contre la discrimination",
    image: DiscriImage,  
    introduction: "Cet atelier permet aux participants de concevoir des affiches artistiques contre la discrimination, tout en discutant des valeurs de respect et d'inclusion.",
    description: "Cet atelier manuel sur la création d'affiches contre la discrimination inclut également un temps de discussion.",
    objectifs: [
      "Sensibiliser les participants à la lutte contre la discrimination.",
      "Apprendre à exprimer des idées et des valeurs à travers des supports visuels.",
      "Favoriser l'engagement social et la prise de parole à travers des créations artistiques."
    ],
    Categories: ["Scratch"],
    year: 2024
  },
  {
    id: 9,
    title: "Tutoriel d’utilisation de Photopea et CapCut",
    image: Photopea,  
    introduction: "Cet atelier enseigne les bases du montage photo et vidéo en utilisant des outils gratuits comme Photopea et CapCut, pour une meilleure compréhension de la création de contenu visuel.",
    description: "Apprendre les bases du montage photo ou vidéo, pour mieux comprendre le fonctionnement de ce genre de technologie.",
    objectifs: [
      "Acquérir les compétences de base pour éditer des images et des vidéos.",
      "Comprendre l'importance des outils numériques dans la création de contenu.",
      "Stimuler la créativité des participants en leur permettant de réaliser leurs propres montages."
    ],
    Categories: ["Scratch"],
    year: 2024
  },
  {
    id: 10,
    title: "Infinite Craft",
    image: infinite,  
    introduction: "Cet atelier permet aux participants de développer leur imagination tout en apprenant l'anglais et en créant des éléments à partir de mots dans un jeu interactif.",
    description: "Un jeu pour développer son imagination, apprendre l’anglais et créer des éléments avec des mots.",
    objectifs: [
      "Développer la créativité en construisant des mondes virtuels.",
      "Apprendre l'anglais en associant des mots à des éléments de jeu.",
      "Encourager la réflexion et la résolution de problèmes à travers un jeu interactif."
    ],
    Categories: ["Scratch"],
    year: 2024
  },
  {
    id: 11,
    title: "Super Héros du Net",
    image: SuperHero,  
    introduction: "Cet atelier sensibilise les participants aux bonnes pratiques de sécurité en ligne et à la manière de se protéger des dangers d'Internet.",
    description: "Il s'agit d'une prévention.",
    objectifs: [
      "Sensibiliser les participants à la sécurité en ligne.",
      "Apprendre à se protéger contre les dangers du web.",
      "Encourager un comportement responsable et respectueux sur Internet."
    ],
    Categories: ["Scratch"],
    year: 2024
  }
];


export default ateliers;
