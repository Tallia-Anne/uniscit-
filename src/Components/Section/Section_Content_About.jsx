import contentCSS from './Section_Content_About.module.css'


function Section_Content_About () {

return (
    <div  className={contentCSS.wrapperContent} >

    <hr  className={contentCSS.contentLigne } />
  
    <div className={contentCSS.content } >

<div className={contentCSS.content_leght } >

    <h4>Notre Mission et Nos Valeurs : <br/> Inclusion, Sécurité, Responsabilité</h4>

</div>
<div className={contentCSS.content_right } >
    <p>Notre mission est simple mais ambitieuse : rendre le numérique accessible à tous tout en sensibilisant aux enjeux d’une utilisation éthique et sécurisée. Nous nous engageons à réduire les inégalités numériques, à promouvoir une navigation en ligne respectueuse et à encourager l’apprentissage des compétences technologiques dès le plus jeune âge.

Nos valeurs fondamentales guident toutes nos actions :

Inclusion : Chaque individu mérite d’avoir accès aux outils et aux connaissances numériques, sans exception.
Sécurité : Nous travaillons à créer un environnement en ligne où chacun peut évoluer sans crainte.
Responsabilité : Nous croyons en un usage conscient et respectueux des technologies pour le bien de tous.
</p>

</div>
    </div>



    </div>

)

}

export default Section_Content_About;