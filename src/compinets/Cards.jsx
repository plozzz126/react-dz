import Usercard from "./usercard"

function Cards() {
  return (
    <>
      <Usercard name="Роман" age={17} city="Алматы" tf="Студент" />
      <Usercard name="Артём" age={50} city="Алматы" tf="Студент" />
      <Usercard name="Мадияр" age={450} city="Алматы" tf="Преподаватель" />
    </>
  )
}

export default Cards
