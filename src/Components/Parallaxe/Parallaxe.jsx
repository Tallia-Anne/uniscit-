import parallaxeCSS from './Parallaxe.module.css'

function Parallaxe () {

return (
    <div className={parallaxeCSS.Parallaxe_wrapper}>
    <div className={parallaxeCSS.Parallaxe_content}>
    <h3>Partenariat</h3>
    <p>Si vous êtes intéressé(e), hésitez pas à nous contacter. </p>
    <a href="mailto:unisciteouest@gmail.com">
    <button>Rejoindre </button>
    </a>
</div>
    </div>

)

}

export default Parallaxe;