function Zag(){
    const name = "roman"
    const year = new Date().getFullYear()
    const isstudent = true;


    
    return <div>
        <h1>мой первый react project</h1>
        <p>Пан Роман {year} год</p>
        <p>Статус: {isstudent ? "Студент" : "Не студент"}</p>
    </div>
}

export default Zag;