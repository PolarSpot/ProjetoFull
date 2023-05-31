import './global.css';
import style from './App.module.css';
import { CardPerson } from './components/CardPerson/CardPerson';
import { Contato } from './components/Contatos/Contatos';
import { Header } from './components/Header/Header'

export function App() {
  const listStack = ["JavaScript", "HTML", "CSS", "TypeScript", "React"];

  return (
    <div className={style.container}>
      <CardPerson
        cover="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=50"
        avatar="https://github.com/PolarSpot.png"
        name="Thomas E Z de Almeida"
        office="Estudante"
        stacks={listStack}
      />

      <div className={style.contactList}>
        <Header/>

        <div className={style.contacts}>
          <h1 className={style.letter} style={{ backgroundColor: "#07847E" }}> M </h1>
            <Contato
              avatar="https://randomuser.me/api/portraits/men/73.jpg"
              name="Marcus Stephens"
              phone="(489) 330-2385"
            />

            <Contato
              avatar="https://randomuser.me/api/portraits/women/84.jpg"
              name="Melissa Williams"
              phone="(945) 804-6390"
            />

          <h1 className={style.letter} style={{ backgroundColor: "#0088B3" }}> R </h1>
            <Contato
              avatar="https://randomuser.me/api/portraits/men/6.jpg"
              name="Roland Howard"
              phone="(797) 346-1781"
            />

          <h1 className={style.letter} style={{ backgroundColor: "#9A00B3" }}> S </h1>
            <Contato
              avatar="https://randomuser.me/api/portraits/women/2.jpg"
              name="Shelly Hopkins"
              phone="(915) 909-2168"
            />
        </div>
      </div>
    </div>

  )
}
