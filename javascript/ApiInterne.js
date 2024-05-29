document.addEventListener('DOMContentLoaded', caricaArticoli);

async function caricaArticoli() {
    try {
        const response = await fetch('api.php');
        const articoli = await response.json();
        mostraArticoli(articoli);
    } catch (error) {
        mostraErrore(error);
    }
}

function mostraArticoli(articoli) {
    const contenitore = document.getElementById('contenitore-articoli');

    articoli.forEach(articolo => creaArticolo(articolo, contenitore));

    // Controlla i preferiti
    fetch('api.php?preferiti=true')
        .then(response => response.json())
        .then(preferiti => {
            preferiti.forEach(preferito => {
                const bookmark = document.getElementById('bookmark' + preferito.id_articolo);
                if (bookmark) {
                    bookmark.src = '../img/bookmark.png';
                }
            });
        })
        .catch(error => console.error('Errore nel caricamento dei preferiti:', error));

    // Aggiungi l'evento di clic ai segnalibri
    aggiungiEventiSegnalibro();
}

function creaArticolo(articolo, contenitore) {
    const articoloDiv = document.createElement('div');
    articoloDiv.classList.add('largetabitem');

    const articoloContentDiv = document.createElement('div');
    articoloContentDiv.classList.add('largetabcontent');
    articoloDiv.appendChild(articoloContentDiv);

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('imagelargetab');
    const image = document.createElement('img');
    image.src = articolo.immagine_principale;
    image.alt = 'Immagine';
    imageDiv.appendChild(image);
    articoloContentDiv.appendChild(imageDiv);

    const articoloTextDiv = document.createElement('div');
    articoloTextDiv.classList.add('largetabtext');
    articoloContentDiv.appendChild(articoloTextDiv);

    const dataSpan = document.createElement('span');
    dataSpan.innerHTML = `${articolo.data} - <a class="academy-link" href="${articolo.link}">Link</a>`;
    articoloTextDiv.appendChild(dataSpan);

    const titoloH4 = document.createElement('h4');
    titoloH4.innerText = articolo.titolo;
    articoloTextDiv.appendChild(titoloH4);

    const descrizioneP = document.createElement('p');
    descrizioneP.innerText = articolo.descrizione;

    const contenitoreSegnalibro = document.createElement('div');
    contenitoreSegnalibro.classList.add('bookmark-container');

    const immagineSegnalibro = document.createElement('img');
    immagineSegnalibro.id = 'bookmark' + articolo.id;
    immagineSegnalibro.classList.add('bookmark');
    immagineSegnalibro.src = '../img/bookmarkno.png';
    immagineSegnalibro.dataset.articoloId = articolo.id; // Aggiunta dell'ID dell'articolo come dato
    contenitoreSegnalibro.appendChild(immagineSegnalibro);

    descrizioneP.appendChild(contenitoreSegnalibro);
    articoloTextDiv.appendChild(descrizioneP);

    contenitore.appendChild(articoloDiv);
}

function aggiungiEventiSegnalibro() {
    const segnalibri = document.querySelectorAll('.bookmark');
    segnalibri.forEach(segnalibro => {
        segnalibro.addEventListener('click', function() {
            const src = segnalibro.src;
            const articoloId = segnalibro.dataset.articoloId;
            if (src.includes('bookmarkno.png')) {
                segnalibro.src = '../img/bookmark.png';
                salvaPreferito(articoloId);
            } else {
                segnalibro.src = '../img/bookmarkno.png';
                rimuoviPreferito(articoloId);
            }
        });
    });
}

async function salvaPreferito(articoloId) {
    try {
        const response = await fetch('api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_articolo: articoloId })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Errore nel salvataggio del preferito:', error);
    }
}

async function rimuoviPreferito(articoloId) {
    try {
        const response = await fetch('api.php', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_articolo: articoloId })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Errore nella rimozione del preferito:', error);
    }
}

function mostraErrore(error) {
    console.error('Errore nel caricamento degli articoli:', error);
}
