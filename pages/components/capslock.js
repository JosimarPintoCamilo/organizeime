function CapsLock (props)
{
    const textoRecebido = props.children;
    const textoCapsLock = textoRecebido.toUpperCase();
    return <div>{textoCapsLock}</div>
}

function Pagina()
{
    return (
        <div>
            <CapsLock>Coloquuuuue em maiusculo!</CapsLock>
        </div>        
    );
}

export default Pagina;