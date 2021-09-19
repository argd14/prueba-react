import React,{ Fragment, useState } from 'react';

const Contador = () => {
    
    const [ numero, setNumero] = useState(0);

    const aumentar = () => numero + 1 ;
    
    return(
        <Fragment>
        <h3>Mi primer componente {numero}</h3>
        <button onClick={ ()=> setNumero( aumentar) }> Aumentar </button>
        <h3>Mi primer componente {numero}</h3>
        </Fragment>
    );
}

export default Contador;