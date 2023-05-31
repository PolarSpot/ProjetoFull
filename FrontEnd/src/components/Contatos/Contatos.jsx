import React from "react";
import style from './Contatos.module.css';

export function Contato ({avatar, name, phone}) {
    return(
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.cadastro}>
              <img  className={style.avatar} src={avatar} alt="Avatar"/>
              <div className={style.info}>
                <p className={style.nome}>{name}</p>
                <p className={style.phone}>{phone}</p>
              </div>
            </div>
          </div>
        </div>
    )
}
