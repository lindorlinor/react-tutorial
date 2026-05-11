import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; //il css si importa dentro i file js lol che strano

    
const books = [
    {
        id: 1,
        author: "J.R.R. Tolkin",
        title: "Il signore degli anelli",
        img: "https://images-eu.ssl-images-amazon.com/images/I/61yLMlzSNOL._AC_UL900_SR900,600_.jpg"

    },
    {
        id: 2,
        author: "George Orwell",
        title: "1984",
        img: "https://images-eu.ssl-images-amazon.com/images/I/61yLMlzSNOL._AC_UL900_SR900,600_.jpg"
    }
];

const BookList = () => {
    const someValue = 'Ciao sono una variabile bellissimaaa';

    const getBook = (id) => {
       const book = books.find((book) => book.id === id);
       console.log(book);
    }
    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id} getBook={getBook} />;
            })}
        </section>
    )
}
const Book = ({ img, title, author, getBook, id }) => {
    // const { img, title, author } = book; //destrutturazione di una variabile
    return (
        <article className='book'>
            <img src={img} alt="Book cover" />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
            <button type="button" onClick={() => getBook(id)}>Ottieni libro</button>
        </article>
    )
}
const EventExample = (e)  => {
    
    return <section>
        <form >
            <h2>Form tipico</h2>
            <input onChange={(e)=>{console.log(e.target.value)}} type="text" name="example" style={{margin: '1rem 0'}} />
        </form>
        <button type="button" onClick={() => console.log('Button cliccato!')}>cliccamiii</button>
    </section>
}


// function Gretting() {
//     return React.createElement('h2',{}, 'Ciao sono un componente carino carino')
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />); //ricorda di chiudere sempre il componente
