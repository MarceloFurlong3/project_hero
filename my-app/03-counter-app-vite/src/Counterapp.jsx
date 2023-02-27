import PropTypes from 'prop-types';

export const Counterapp = ({
value
}) => {

    function handleadd (event) {
        console.log(event)
    }


   return (

    <>
    
    <h1>CounterApp</h1>
    
    <h2> { value } </h2>

    <button onClick={ handleadd } > 
        +1
    </button>
    </>
);
}

Counterapp.protoTypes = {
    value:PropTypes.number.isRequired
}


//rafc tab creamos un funcional component