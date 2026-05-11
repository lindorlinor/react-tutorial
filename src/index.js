import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; //il css si importa dentro i file js lol che strano

    

const firstBook = {
    author: "J.R.R. Tolkin",
    title: "Il signore degli anelli",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61yLMlzSNOL._AC_UL900_SR900,600_.jpg"
};

const secondBook = {
    author: "George Orwell",
    title: "1984",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61yLMlzSNOL._AC_UL900_SR900,600_.jpg"
};
const BookList = () => {
    return (
        <section className='booklist'>
            <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} />
            <Book title={secondBook.title} author={secondBook.author} img={secondBook.img} />
        </section>
    )
}

const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <img src={props.img} alt="Book cover" />
            <h2>{props.title}</h2>
            <h4>{props.author.toUpperCase()}</h4>
        </article>
    )
}


// function Gretting() {
//     return React.createElement('h2',{}, 'Ciao sono un componente carino carino')
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />); //ricorda di chiudere sempre il componente
