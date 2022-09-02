import  React from 'react';

class Botao  extends React.Component{
    render () {
        const backgroundColor ='red';
        const style= {
            backgroundColor
        }
        return(
        <button style={style}>
            Botão
        </button>
        )
}
}

export default Botao;