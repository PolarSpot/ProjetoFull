import React from "react";
import { useEffect, useState } from "react";
import { api, server } from "../../api/axios";
import { Contato, Delete, Update } from '../Contatos/Contatos';

import style from './Header.module.css';

import addIcon from '../../assets/add.svg';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import searchIcon from '../../assets/search.svg';

export function Header () {

    const [list, setList] = useState ([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        Load();
      }, []);

    async function Load(){
        const temp = await server.get("user/");

        setList(temp.data);
        console.log(list);
    }

    function refreshPage(){
        window.location.reload();
    } 

    async function Adicionar(){

        const resultAPI = await api.get("/");
        const contact = resultAPI.data.results[0];

        const fullName = `${contact.name.first} ${contact.name.last}`;
        const avatar = contact.picture.large;
        const cell = contact.cell;

        await server.post("user/", {
            name: fullName,
            avatar: avatar,
            celular: cell,
        });

        Load();
    };

    async function Deletar() {
        Delete();
        Load();
        refreshPage();
    }

    async function Editar() {
    
        const resultAPI = await api.get("/");
    
        const user = resultAPI.data.results[0];
    
        Update(user);
        Load();
        refreshPage();
    }

    function Pesquisar(event) {
        event.preventDefault();

        if( value === '') {
            Load();
        }else{
            let results = [];

            list.map((person => {
                if(person.name.toLowerCase().includes(value.toLowerCase())) {
                    results.push(person);
                    return
                };
            }));

            setList(results);
        };
    };

    return(
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.topRow}>
                    <text className={style.title}>Meus Contatos</text>

                    <div className={style.buttons}>
                        <button onClick={Adicionar}>
                            <img src={addIcon} alt="Add"/>
                        </button>
                        <button onClick={Editar}>
                            <img src={editIcon} alt="Edit"/>
                        </button>
                        <button onClick={Deletar}>
                            <img src={deleteIcon} alt="Delete"/>
                        </button>
                    </div>
                </div>

                <div className={style.searchBox}>

                    <img src={searchIcon} alt="Search Icon" onClick={Pesquisar}/>
                    <input type="text" name="Search" placeholder="Busque por um nome ou por dados de contato..." 
                            value={value} onChange={() => { setValue(event.target.value) }}/>

                </div>
            </div>


            <div className={style.contactList}>
            {
                list.map((person, index) => (
                    <Contato key={index}
                        avatar={person.avatar}
                        name={person.name}
                        phone={person.celular}

                        id={person.id}
                    />
                ))
            }
            </div>

        </div>
    )
}
