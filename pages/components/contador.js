import { useState } from 'react';

function Contador(props)
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
            <p>{props.staticDateString}</p>
        </div>
    );
}

export async function getStaticProps()
{
    console.log('> Passando pelo getStaticProps();');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 3
    }
}

export default Contador;