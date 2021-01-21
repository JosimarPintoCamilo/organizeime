import { useState } from 'react';

export default function Contador()
{
    const [contador, setContador] = useState(1);

    function incrementar()
    {
        setContador(contador + 1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={incrementar}>Clique aqui meu chapa</button>
        </div>
    );
}