import React from 'react';
import ReactDOM from 'react-dom/client';

function Gretting() {
    return (<React.Fragment>
                <Componente />
                <P />
                <Input />
            </React.Fragment>)
            
}
        
{/* ricordati di chiudere sempre i tag che sono singoli */}
const Componente = () => <h1 className='io-sono-una-classe'>Ciao sono un componente carino carino</h1> //qui non posso avere logica aggiuntiva, quello che scrivo è quello che ritorno
const P = () => {
    //posso avere logica aggiuntiva perchè ho messo le parentesi graffe e il return
    return <p>io sono qui solo per vedere come raggruppare elementi html senza aggiungere altri nodi (div)</p>
}
const Input = () => <input type="text" placeholder='scrivi qualcosa' />; 




// function Gretting() {
//     return React.createElement('h2',{}, 'Ciao sono un componente carino carino')
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gretting />); //ricorda di chiudere sempre il componente
