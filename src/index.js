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
    return (
        <section className='booklist'>
            <EventExample />
            {books.map((book) => {
                return <Book {...book} key={book.id} />;
            })}
        </section>
    )
}

const Book = ({ img, title, author}) => {
    // const { img, title, author } = book; //destrutturazione di una variabile
    return (
        <article className='book'>
            <img src={img} alt="Book cover" />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
        </article>
    )
}
const EventExample = (e)  => {
    const handleButtonClick = () => {
        alert('Hai cliccato il bottone!')
    }
    const handleFormSubmission = (e) => {
        e.preventDefault(); //previene il comportamento di default del form che è quello di ricaricare la pagina
        console.log('Il form è stato inviato!');
    }
    const handleFormChange = (e) => {
        console.log('Il valore del form è cambiato:', e.target.value);
/*         console.log(e.target); //l'elemento del DOM che ha scatenato l'evento
        console.log(e.target.name); //il nome dell'input
        console.log(e.target.type); //il tipo dell'input
        console.log(e.target.value); //il valore dell'input cambiato
 */    }
    return <section>
        <form >
            <h2>Form tipico</h2>
            <input onChange={handleFormChange} type="text" name="example" style={{margin: '1rem 0'}} />
        </form>
        <button type="button" onClick={handleButtonClick}>click me</button>
        <button type="submit" onClick={handleFormSubmission}>submit</button>
        <button type="button" onClick={() => console.log('Button cliccato!')}>cliccamiii</button>
    </section>
}


// function Gretting() {
//     return React.createElement('h2',{}, 'Ciao sono un componente carino carino')
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />); //ricorda di chiudere sempre il componente
