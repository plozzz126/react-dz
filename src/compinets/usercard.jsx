function Usercard (props){

    return (
        <div style={{display: "flex" ,flexDirection: "column", alignItems: "center", border: "2px solid black", padding: "10px", margin: "10px"}}>
            <h2>{props.name}</h2>
            <p>Возраст: {props.age}</p>
            <p>Город: {props.city}</p>
            <p>Кто?: {props.tf}</p>
        </div>
    )
}

export default Usercard;