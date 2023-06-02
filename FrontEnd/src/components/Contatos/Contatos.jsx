import React from "react";
import { server } from "../../api/axios";
import style from './Contatos.module.css';

let cache = '';

export async function Delete() {
  if(cache === ''){
    alert('Erro! Contato não definido!');
  }else{
    await server.delete(`user/${cache}`)
  }
}

export async function Update(user) {
  if(cache === ''){
    alert('Erro! Contato não definido!');
  }else{
    const fullName = `${user.name.first} ${user.name.last}`;
    const avatar = user.picture.large;
    const cell = user.cell;

    await server.put(`user/${cache}`, {
      name: fullName,
      avatar: avatar,
      celular: cell,
    });
  }
}

export function Contato ({avatar, name, phone, id}) {

    function Cache(id) {
      cache = id;
      console.log("Cache definido para " + cache);
    }

    return(
        <div className={style.container}>
          <div className={style.card} onClick={() => {Cache(id)}}>
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
