import minecraftImage from '../assets/images/Minecraft-style.webp';
import scratchImage from '../assets/images/_82cfd2ed-1e37-490b-9afc-2782db4754c3.jpeg';
import lambImage from '../assets/images/_86284232-81c0-4c6a-855b-4b6160287324.jpeg';
import cyberImage from '../assets/images/diversite.webp';
import plateauImage from '../assets/images/Plateau.jpg'

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
    description: "Création de maquettes et de sites web adaptatifs pour ordinateurs, tablettes et mobiles.",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: 2024
  },
  {
    id: 5,
    title: "Atelier sur la cyberharcelement sur la discrimination",
    image: cyberImage,  // Utilisation de l'importation d'image
    description: "Développement d'un jeu interactif sur la plateforme Scratch.",
    technologies: ["Scratch"],
    year: 2024
  }
];

export default ateliers;
