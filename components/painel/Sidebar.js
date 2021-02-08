import React from 'react';
import style from './Sidebar.module.css';
import CreditCardIcon from '@material-ui/icons/CreditCard';

export default function Sidebar(){
    return (
        <div className ={style.estilo}>            
            <div>
                <div className ={style.icone}><CreditCardIcon /></div>                
                <p>Orçamentos</p>
            </div>
            <div>
                <div className ={style.icone}><CreditCardIcon /></div> 
                <p>Receitas</p>
            </div>
            <div>
                <div className ={style.icone}><CreditCardIcon /></div> 
                <p>Despesas</p>
            </div>
            <div>
                <div className ={style.icone}><CreditCardIcon /></div> 
                <p>Objetivos financeiros</p>
            </div>
        </div>
    );
}