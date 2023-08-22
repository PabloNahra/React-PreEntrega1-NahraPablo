import CartWidget from "./CartWidget";


export default function NavBar(props){

    const stylesTitle = {
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


    
    return(
        <nav>
            <h1 style={stylesTitle}>{props.title}</h1>
            <div className="div-lista-nav-bar">
            <ul className="lista-nav-bar">
                <li className="lista-nav-bar-items" style={stylesItems}><a href="">{props.link1}</a></li>
                <li className="lista-nav-bar-items" style={stylesItems}><a href="">{props.link2}</a></li>
                <li className="lista-nav-bar-items" style={stylesItems}><a href="">{props.link3}</a></li>
                <li className="lista-nav-bar-items" style={stylesItems}><a href="">{props.link4}</a></li>
            </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}


