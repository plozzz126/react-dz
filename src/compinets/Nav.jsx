function Nav(props){
    return(
        <nav style={{display: "flex", gap: "20px"}}>
            <a href="">{props.home}</a>
            <a href="">{props.about}</a>
            <a href="">{props.alo}</a>
        </nav>
    )
}
export default Nav;