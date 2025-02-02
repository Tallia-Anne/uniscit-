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
import Dactylographie from '../assets/images/images.jpeg'
import Cybercitoyens from '../assets/images/la fresque des cybercitoyens.png'
import FakeNews from '../assets/images/Fakesnews.jpg'
import JeuxCyber from '../assets/images/jeuximage-cyber.jpg'
import AI from '../assets/images/AI.webp'

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
  },

 {
  id: 12,
  title: "Dactylographie",
  image: Dactylographie,  
  introduction: "Atelier ludique et éducatif visant à initier les participants à la maîtrise du clavier tout en améliorant leur vitesse et leur précision de frappe.",
  description: "Cet atelier propose une approche interactive pour apprendre les bases de la dactylographie. Grâce à des exercices pratiques et des jeux développés sur Scratch, les participants découvriront les bonnes positions des doigts sur le clavier, amélioreront leur vitesse de frappe et développeront des compétences utiles pour leurs études ou leur carrière professionnelle.",
  objectifs: [
    "Apprendre les bases de la dactylographie et les bonnes pratiques.",
    "Améliorer la vitesse et la précision de frappe au clavier.",
    "Favoriser l'autonomie numérique des participants.",
    "Utiliser Scratch pour rendre l'apprentissage plus interactif et amusant."
  ],
  Categories: ["Scratch"],
  year: 2024
}, {
  id: 13,
  title: "Image produite par L'IA",
  image: AI,  
  introduction: "Avec les avancées de l’intelligence artificielle, il devient de plus en plus difficile de distinguer une image réelle d’une image générée artificiellement. Les deepfakes, les images retouchées et les créations d’IA peuvent être utilisées pour manipuler l’opinion publique, diffuser des Fake News ou même créer des arnaques en ligne. Cet atelier a pour but d’aider les participants à développer un regard critique sur les images qu’ils voient en ligne. Grâce à un jeu interactif, ils apprendront à identifier les signes qui permettent de différencier une image authentique d’une image créée par l’IA ",
  description: "Observation d’images – Les participants doivent deviner si une image est vraie ou générée par IA. Analyse et indices – Explication des détails permettant de repérer les images artificielles. Révélation et discussion – Retour sur chaque image et explication des manipulations possibles. Quiz interactif – Test des connaissances des participants sur la reconnaissance des images IA. L’atelier permet ainsi de mieux comprendre le phénomène des deepfakes et des fake news visuelles, afin de ne pas tomber dans le piège des images trompeuses.",
  objectifs: [
    "Sensibiliser les participants aux images générées par l’IA et à leur impact.",
"Apprendre à repérer les indices d’une image artificielle.",
"Développer un esprit critique face aux contenus visuels circulant sur internet.",
"Favoriser l’échange et la réflexion sur la désinformation par l’image."
  ],
  Categories: ["Pédagogie"],
  year: 2024
}, {
       id: 14,
  title: "la fresque des cybercitoyens",
  image:  Cybercitoyens,  
  introduction: "Cet atelier ",
  description: "Le projet Advens for People and Planet, réalisé grâce à l’expertise en cybersécurité d’Advens et le partenariat avec l’académie de Paris, a pour but de sensibiliser les adolescents de 11 à 14 ans à la sécurité numérique. La Fresque est fondée sur une démarche de prévention et d’éducation. ",
  objectifs: [
    "Jeu d’équipes, fonctionnant sur l’intelligence collective des élèves",
"Ludique",
"Basé sur des sources publiques et fiables",
"Modulable",
"Adaptable de la 6e à la 3e",
"Peut être animé par un néophyte en cybersécurité."
  ], 
Categories: ["Scratch"],
  year: 2024
}, {
       id: 15,
  title: "Fake News",
  image: FakeNews,  
  introduction: "Dans un monde où l’information circule en continu sur internet et les réseaux sociaux, il devient de plus en plus difficile de distinguer le vrai du faux. Les Fake News, ou fausses informations, sont créées dans le but de manipuler l’opinion publique, influencer des décisions ou simplement générer du buzz.",
  description: "Cette présentation traite des Fake News, en expliquant leur définition, leurs objectifs, et les moyens de les identifier. Elle inclut également un quiz interactif pour tester les connaissances des participants sur la vérification des informations. ",
  objectifs: [
    "Définir ce qu’est une Fake News.",
"Expliquer pourquoi elles sont créées.",
"Fournir des outils et des techniques pour différencier une fausse information d’une vraie.",
"Encourager la vérification des sources avant de partager une information.",
"Tester les connaissances du public à travers un quiz interactif."
  ], 
Categories: ["Scratch"],
  year: 2024
}, {
       id: 15,
  title: "Jeux pour reconnaitre le harcelement",
  image: JeuxCyber,  
  introduction: "Le harcèlement, qu'il soit scolaire, en ligne ou dans la vie quotidienne, est un problème majeur qui peut avoir des conséquences graves sur les victimes. Il est parfois difficile de l’identifier, surtout lorsqu’il prend des formes subtiles. Cet atelier propose un jeu interactif où les participants devront relier des images à des mots-clés représentant différentes formes de harcèlement. L’objectif est de sensibiliser les joueurs aux situations de harcèlement et de leur apprendre à mieux les repérer pour mieux réagir..",
  description: "Cette présentation traite des Fake News, en expliquant leur définition, leurs objectifs, et les moyens de les identifier. Elle inclut également un quiz interactif pour tester les connaissances des participants sur la vérification des informations. ",
  objectifs: [
    "Sensibiliser les participants aux différentes formes de harcèlement.",
"Aider à reconnaître les signes du harcèlement à travers des mises en situation.",
"Développer un esprit critique face aux comportements toxiques.",
"Encourager la discussion et la réflexion sur la manière de réagir face au harcèlement.",
"Donner des outils aux participants pour prévenir et lutter contre le harcèlement."
  ], 
Categories: ["Scratch"],
  year: 2024
}

];


export default ateliers;
