import CartWidget from "./CartWidget";
import logoArtMatuiz from "../assets/logo-transparente2.png";
import "./NavBar.css";


export default function NavBar(props){

/*     const stylesTitle = {
        color: "#ff086b",
        fontSize: "x-large"
    }

    const stylesItems = {
        display: "inline-block",
        fontSize: "x-large",
        fontWeight: "bold",
        marginRight: "25px",
        marginLeft: "25px",
        marginTop: "5px",
        marginBottom: "5px",
        justifyContent: "flex-end",
        color: "#ff086b",
        textDecoration: "none"
    }
 */

    
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark" id="navbar">
                <div className="container-fluid header-centrado">
                    <section class="logo-principal">
                    <a class="navbar-brand" href="#">
                        <a href="./index.html"><img src={logoArtMatuiz} alt="Logo"/></a>
                    </a>
                    </section>
                    <section>
                        <h1>{props.title}</h1>
                    </section>
                    <div className="navbar-collapse lista-pages" id="navbarSupportedContent">
                    <ul className="navDerecha navbar-nav text-center">
                        <li className="escalar"><a href="">{props.link1}</a></li>
                        <li className="escalar"><a href="">{props.link2}</a></li>
                        <li className="escalar"><a href="">{props.link3}</a></li>
                        <li className="escalar"><a href="">{props.link4}</a></li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}


