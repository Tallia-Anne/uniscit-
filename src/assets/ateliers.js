import minecraftImage from '../assets/images/Minecraft-style.webp';
import scratchImage from '../assets/images/_82cfd2ed-1e37-490b-9afc-2782db4754c3.jpeg';
import lambImage from '../assets/images/_86284232-81c0-4c6a-855b-4b6160287324.jpeg';
import cyberImage from '../assets/images/diversite.webp';
import plateauImage from '../assets/images/Plateau.jpg'
import DiscordImage from '../assets/images/d73f9c4f0f6d91a72ac2d2ffacbf9cab.jpg';
import DiscriImage from '../assets/images/_38c56c74-91b2-4cfc-94f7-19222ea3b6c4.jpeg';
import Photopea from '../assets/images/téléchargement (2).png'

const ateliers = [
{
    id: 1,
    title: "Jeu de Plateau",
    image: plateauImage,  // Utilisation de l'importation d'image "Plateau"
    description: "Cet atelier propose un jeu de plateau interactif, conçu pour stimuler la réflexion stratégique et la collaboration entre les participants.",
    year: 2024,
    lien : 'https://docs.google.com/forms/d/e/1FAIpQLSev588dN8p3aqpyxgl0xFsoJgp-vniot_yFOTy8gqeC3aufsA/viewform?usp=header '
  },
  {
    id: 2,
    title: "Minecraft Adventurer",
    image: minecraftImage,  // Utilisation de l'importation d'image
    description: "Cet atelier est un jeu inspiré de Minecraft Adventurer, conçu pour initiation au code.",
    year: 2024
  },
  {
    id: 3,
    title: "Découverte de Scratch",
    image: scratchImage,  // Utilisation de l'importation d'image
    description: "Organisation et animation d'ateliers pour Unis Cité, abordant des thèmes comme le cyberharcèlement et le codage avec Scratch.",
    technologies: ["Scratch", "Pédagogie numérique"],
    year: 2024
  },
  {
    id: 4,
    title: "Lamb: Jam Session Intro",
    image: lambImage,  // Utilisation de l'importation d'image
    description: "Création du musique",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: 2024
  },
  {
    id: 5,
    title: "Atelier sur la cyberharcelement sur la discrimination",
    image: cyberImage,  // Utilisation de l'importation d'image
    description: "Cette prévention permet de définir le cyberharcelement notamment  en ce qui concerne la discrimination en identifiant les comportements discriminatoires en ligne.",
    introduction: "Ce projet permet d'explorer la création musicale de manière ludique et interactive, en associant art et numérique. Les participants pourront stimuler leur créativité, s'amuser et développer des compétences, tout en découvrant le codage et la composition musicale.",
    Objectifs :"",
    technologies: ["Scratch"],
    year: 2024
  },  {
    id: 6,
    title: "Prévention numérique: Discord en tout sérénité ",
    image: DiscordImage,  // Utilisation de l'importation d'image
    description: "Cette prévention  permet d'apprendre à travers l'application Discord , en observant et en analysant les comportements en ligne. Elle aide à identifier les signes.",
    technologies: ["Scratch"],
    year: 2024
  }, {
      id : 7,
      title: "Création Affiche contre la discrimination ",
      image: DiscriImage,  // Utilisation de l'importation d'image
    description: "Cet atelier manuel sur la création d'affiches contre la discrimination inclut également un temps de discussion.",
    technologies: ["Scratch"],
    year: 2024

},  {
      id : 8,
      title: "Création Affiche contre la discrimination ",
      image: DiscriImage,  // Utilisation de l'importation d'image
    description: "Cet atelier manuel sur la création d'affiches contre la discrimination inclut également un temps de discussion.",
    technologies: ["Scratch"],
    year: 2024

},
{
      id : 9,
      title: "Tutoriel d’utilisation de photopea et capcut ",
      image: Photopea,  // Utilisation de l'importation d'image
    description: "Apprendre les bases du montage photo ou vidéo, pour mieux comprendre le fonctionnement de ce genre de technologie",
    technologies: ["Scratch"],
    year: 2024

}

];

export default ateliers;
