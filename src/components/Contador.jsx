import React, {useState} from 'react';

const Contador = () => {
    
    const [contador, setContador] = useState(0);

    function modificar (operacion) {
       if (operacion == '+') {
        setContador(contador + 1)
       } else {
            if (contador > 0)  {   
                setContador(contador - 1)
            }
        }
    }
    
    return (
        <>
          <button onClick={() => modificar('+')} className='btn btn-dark'> + </button>
           <h2> {contador} </h2> 
          <button onClick={() => modificar('-')} className='btn btn-light'> - </button>
        </>
    );
}

export default Contador;
