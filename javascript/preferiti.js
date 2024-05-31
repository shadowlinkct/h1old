document.addEventListener('DOMContentLoaded', caricaArticoli);

async function caricaArticoli() {
    try {
        await mostraArticoliPreferiti();
    } catch (error) {
        mostraErrore(error);
    }
}

async function mostraArticoliPreferiti() {
    try {
        const response = await fetch('getPreferiti.php?preferiti=true');
        const articoliPreferiti = await response.json();
        mostraArticoli(articoliPreferiti);
    } catch (error) {
        mostraErrore(error);
    }
}

function mostraArticoli(articoli) {
    const contenitore = document.querySelector('.contenitore-articoli');
    contenitore.innerHTML = ''; // Pulisce il contenitore prima di aggiungere gli articoli

    articoli.forEach(articolo => {
        creaArticolo(articolo, contenitore);
    });

    // Aggiungi l'evento di clic ai segnalibri
    const segnalibri = document.querySelectorAll('.bookmark');
    segnalibri.forEach(segnalibro => {
        segnalibro.addEventListener('click', async function () {
            const src = segnalibro.src;
            const articoloId = segnalibro.dataset.articoloId;

            if (src.includes('bookmark.png')) {
                const successo = await rimuoviPreferito(articoloId);
                if (successo) {
                    segnalibro.src = '../img/bookmarkno.png';
                }
            }
        });
    });
}

function creaArticolo(articolo, contenitore) {
    let classeDimensione;
    switch (articolo.intestazione) {
        case 1:
            classeDimensione = 'largetabitem';
            break;
        case 2:
            classeDimensione = 'mediumtabitem';
            break;
        default:
            classeDimensione = 'smalltabitem';
            break;
    }

    const articoloDiv = document.createElement('div');
    articoloDiv.classList.add(classeDimensione);

    const articoloContentDiv = document.createElement('div');
    articoloContentDiv.classList.add('tabcontent');
    articoloDiv.appendChild(articoloContentDiv);

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('imagetab');
    const image = document.createElement('img');
    image.src = articolo.immagine_principale;
    image.alt = 'Immagine';
    imageDiv.appendChild(image);
    articoloContentDiv.appendChild(imageDiv);

    const articoloTextDiv = document.createElement('div');
    articoloTextDiv.classList.add('tabtext');
    articoloContentDiv.appendChild(articoloTextDiv);

    const dataSpan = document.createElement('span');
    dataSpan.textContent = articolo.data + ' - ';
    articoloTextDiv.appendChild(dataSpan);

    const link = document.createElement('a');
    link.textContent = articolo.categoria || 'Link';
    link.setAttribute('href', articolo.link);
    link.classList.add('academy-link');
    dataSpan.appendChild(link);

    const titoloH4 = document.createElement('h4');
    titoloH4.textContent = articolo.titolo;
    articoloTextDiv.appendChild(titoloH4);

    const descrizioneP = document.createElement('p');
    descrizioneP.textContent = articolo.descrizione;
    articoloTextDiv.appendChild(descrizioneP);

    const contenitoreSegnalibro = document.createElement('div');
    contenitoreSegnalibro.classList.add('bookmark-container');

    const immagineSegnalibro = document.createElement('img');
    immagineSegnalibro.id = 'bookmark' + articolo.id;
    immagineSegnalibro.classList.add('bookmark');
    immagineSegnalibro.setAttribute('src', '../img/closeX.png');
    immagineSegnalibro.setAttribute('data-articolo-id', articolo.id);
    contenitoreSegnalibro.appendChild(immagineSegnalibro);

    descrizioneP.appendChild(contenitoreSegnalibro);
    contenitore.appendChild(articoloDiv);
}

async function rimuoviPreferito(articoloId) {
    try {
        const response = await fetch('getPreferiti.php', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_articolo: articoloId })
        });

        if (response.status === 401) {
            alert('Devi effettuare l\'accesso per rimuovere un preferito');
            return false;
        }

        const data = await response.json();
        console.log(data); // Opzionale: Puoi gestire la risposta se necessario
        return true;
    } catch (error) {
        console.error('Errore nella rimozione del preferito:', error);
        return false;
    }
}

function mostraErrore(error) {
    console.error('Errore nel caricamento degli articoli:', error);
}
