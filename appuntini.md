# Appuntini

- il file index.js dentro a src deve stare l' perchè è l'entry point di tutto, il resto può essere spostato secondo le nostre preferenze

- script e dependencies dentro a package.json come in angular alla fine
- il file lock invece è uno snapshot di tutto il dependency tree

- togliamo un po di boilerplate code
- puoi usare jsx per scrivere elemnti del dom html, altrimenti puoi usae createElement
- le funzioni possono ritornare un singolo componente html, quindi si wrappa tutto introrno ad un div se serve che vengano ritorante piu componenti
- fragment per unire piu elementi da ritornare e non vuoi wrapparli in altri nodi (div, section etc) usare altri nodi
- immagini meglio mettere dentro src e non dentro publc (qui sono meno performanti ma non so perchè, io ascolto il tipoi del tutorial)