import React, { useState } from "react";
import style from './style.module.css';
import api from "../../api";

export default function Login(){
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    async function EfetuarLogin(evento){
        evento.preventDefault();

        const autenticar = {
            email,
            senha
        }

        const response = await api.post('autenticacao/autenticar',
            autenticar
        );
        
        console.log(response.data.accessToken);

        if (response.data.accessToken) {
            return window.location.pathname = "/app";
        }      
        
    }

    function AtualizarEmail(evento){
        setEmail(evento.target.value);
    }

    function AtualizarSenha(evento){
        setSenha(evento.target.value);    
    }

    return (
        <div className={style.loginContainer}>
            <div>
                <strong>Organizei.me</strong>
                <h1>Faça seu login na plataforma</h1>
            </div>
            <form onSubmit={EfetuarLogin}>
                <section>
                    <input type="email" name="email" placeholder="E-mail" onChange={AtualizarEmail}/>
                    <input type="password" name="senha" placeholder="Senha" onChange={AtualizarSenha} />
                </section>                

                <button 
                    type="submit"
                    onClick={EfetuarLogin}
                >
                    ENTRAR
                </button>

                <div>
                    Não tem uma conta? &nbsp;<a href="#">Registre-se</a>
                </div>
            </form>
        </div>
    );

}