# Appuntini

- il file index.js dentro a src deve stare l' perchè è l'entry point di tutto, il resto può essere spostato secondo le nostre preferenze

- script e dependencies dentro a package.json come in angular alla fine
- il file lock invece è uno snapshot di tutto il dependency tree

- togliamo un po di boilerplate code
- puoi usare jsx per scrivere elemnti del dom html, altrimenti puoi usae createElement
- le funzioni possono ritornare un singolo componente html, quindi si wrappa tutto introrno ad un div se serve che vengano ritorante piu componenti
- fragment per unire piu elementi da ritornare e non vuoi wrapparli in altri nodi (div, section etc) usare altri nodi
- immagini meglio mettere dentro src e non dentro publc (qui sono meno performanti ma non so perchè, io ascolto il tipoi del tutorial)
    - ricorda che / esterno .... ./ interno
- destrutturazione di una variabile, dentro i parametri di una funzione oppure nel corpo della funzione. il risultato è il medesimo
- children per usare quello che viene renderizzato tra tag componenti
    Nell'esempio metto del codice dentro il tag componente book, per farlo apparire serve necessariamente children
    ```javascript
    const BookList = () => {
        return (
            <section className='booklist'>
                <Book title={firstBook.title} author={firstBook.author} img={firstBook.img}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                <button>Click me</button>
                </p>
                </Book>
                
                <Book title={secondBook.title} author={secondBook.author} img={secondBook.img} />
            </section>
        )
    }
    ```

    ```javascript
    const Book = (props) => {
        const { img, title, author, children } = props; //destrutturazione di una variabile
        console.log(props);
        return (
            <article className='book'>
                <img src={img} alt="Book cover" />
                <h2>{title}</h2>
                <h4>{author.toUpperCase()}</h4>
                    {children}
            </article>
        )
    }
    ```
    ciao linor metti a posto sta merda
    ```
    {title: 'Il signore degli anelli', author: 'J.R.R. Tolkin', img: 'https://images-eu.ssl-images-amazon.com/images/I/61yLMlzSNOL._AC_UL900_SR900,600_.jpg', children: {…}}
    children author: "J.R.R. Tolkin"
    : {$$typeof: Symbol(react.transitional.element), type: 'p', key: null, props: {…}, _owner: FiberNode…}
    img
    : 
    "https://images-eu.ssl-images-amazon.com/images/I/61yLMlzSNOL._AC_UL900_SR900,600_.jpg"
    title
    : 
    "Il signore degli anelli"
    [[Prototype]]
    : 
    Object
    ```
    per gestire i form si può usare onSubmit oppure il pulsante sbmit con onClick e la funzione
    ```javascript
            <form onSubmit={handleFormSubmission}>
            <h2>Form tipico</h2>
            <input onChange={handleFormChange} type="text" name="example" style={{margin: '1rem 0'}} />
        </form>
        <button type="button" onClick={handleButtonClick}>click me</button>
        <button type="submit">submit</button>
        ```
- in react possiamo passare dati solo verso il basso
    ```javascript
    const BookList = () => {
        const someValue = 'Ciao sono una variabile bellissimaaa';
        const displayValue = () => {
            console.log(someValue);
        }
        return (
            <section className='booklist'>
                {books.map((book) => {
                    return <Book {...book} key={book.id} displayValue={displayValue} />;
                })}
            </section>
        )
    }

    const Book = ({ img, title, author, displayValue}) => {
        // const { img, title, author } = book; //destrutturazione di una variabile
        return (
            <article className='book'>
                <img src={img} alt="Book cover" />
                <h2>{title}</h2>
                <h4>{author.toUpperCase()}</h4>
                <button type="button" onClick={displayValue}>Cliccami</button>
            </article>
        )
    }
    ```


- nota una cosa, è stupido ma in realtà se ci pensi potresti incappare nello stesso errore in poco tempo
    ```<button type="button" onClick={getBook(id)}>Ottieni libro</button>```
    e
    ```<button type="button" onClick={()=>getBook(id)}>Ottieni libro</button>```
    sono completamente diversi. Al momento del render del componente, viene assegnata alla variabile onClick il valore dentro {}. Se questa è semplicemente la chiamata ad una funzione, essa viene chiamata. getBook viene chiamato durante il rendering del componente non al click del pulsante.
    Perchè funzioni come si vuole veramente, bisogna definire la funzione dentro le parentesi, non la chiamata. quind si usa la lambda