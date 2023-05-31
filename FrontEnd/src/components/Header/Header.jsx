import React from "react";
import style from './Header.module.css';

import addIcon from '../../assets/add.svg';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import searchIcon from '../../assets/search.svg';

export function Header () {
    return(
        <div className={style.container}>
            <div className={style.topRow}>
                <text className={style.title}>Meus Contatos</text>

                <div className={style.buttons}>
                    <button>
                        <img src={addIcon} alt="Add"/>
                    </button>
                    <button>
                        <img src={editIcon} alt="Edit"/>
                    </button>
                    <button>
                        <img src={deleteIcon} alt="Delete"/>
                    </button>
                </div>
            </div>

            <div className={style.searchBox}>

                <img src={searchIcon} alt="Search Icon"/>
                <input type="text" name="Search" placeholder="Busque por um nome ou por dados de contato..."/>

            </div>
        </div>
    )
}