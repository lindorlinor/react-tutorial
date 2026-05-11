import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; //il css si importa dentro i file js lol che strano

        
const BookList = () => {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    const title = 'Titolo del libro';
    const author = 'Luciana Littizzetto';
    const img = "https://images-eu.ssl-images-amazon.com/images/I/61yLMlzSNOL._AC_UL900_SR900,600_.jpg";
    return (
        <article className='book'>
            <img src={img} alt="Book cover" />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
            
        </article>
    )
}


// function Gretting() {
//     return React.createElement('h2',{}, 'Ciao sono un componente carino carino')
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />); //ricorda di chiudere sempre il componente
