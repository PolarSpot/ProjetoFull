import React from "react";
import { Stack } from "../Stack";
import style from './CardPerson.module.css';

export function CardPerson ({cover, avatar, name, office, stacks}) {
    return(
        <div className={style.container}>
      <div className={style.card}>
        <img src={cover} alt="Cover"/>
        <img  className={style.avatar} src={avatar} alt="Avatar"/>
        <p className={style.nome}>{name}</p>
        <p className={style.descricao}>{office}</p>
        <div className={style.stack}>
          {stacks.map((stack) => {
              return <Stack key={stack} name={stack}/>;
            })
          }
        </div>
      </div>
    </div>
    )
}


