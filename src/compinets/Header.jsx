import Button from "./Button";
import Nav from "./Nav";

function Header() {

    return(
        <>
            <header style={{display: "flex", gap: "20px", justifyContent: "center", fontSize: "40px"}}>
                <img src="" alt="типо лого" />
                <Nav home="home" about="about" alo="info"/>
                <Button text="egeng "/>
            </header>
        </>
    );
};

export default Header;