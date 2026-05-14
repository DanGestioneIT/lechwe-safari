# Lechwe Safari — Static Website

## Struttura del progetto

```
/
├── index.html              # Home page
├── about.html              # About Us
├── contact.html            # Book Now / Contact
├── uganda-safaris.html     # Listing Uganda (4 tour)
├── rwanda-safaris.html     # Listing Rwanda (3 tour)
├── kenya-safaris.html      # Listing Kenya (3 tour)
├── tanzania-safaris.html   # Listing Tanzania (3 tour)
├── tour.html               # Template tour (legge ?id= dall'URL)
├── blog.html               # Blog listing (10 articoli, con filtri)
├── post.html               # Template articolo blog
├── css/
│   └── style.css           # Design system completo
└── js/
    ├── components.js       # Header, footer, WhatsApp, nav scroll
    ├── tours-data.js       # Contenuto di tutti e 16 i tour
    └── blog-data.js        # Contenuto di tutti i 10 articoli blog
```

## Architettura data-driven

Ogni tour viene servito da `tour.html?id=TOUR_ID`.  
Ogni articolo blog da `post.html?id=POST_ID`.  
Nessun framework: HTML + CSS + JS vanilla puro.

## Configurazione prima del deploy

### 1. Numero WhatsApp reale
In `js/components.js`, riga 5:
```js
const WA_NUMBER = '+256780000000'; // ← sostituire con il numero reale
```

### 2. Form contatti (Formspree)
1. Andare su https://formspree.io e creare un account gratuito
2. Creare un nuovo form → copiare il Form ID
3. In `contact.html`, trovare la riga:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Sostituire `YOUR_FORM_ID` con il vero ID.
4. Il piano gratuito di Formspree gestisce 50 invii/mese.

### 3. Telefono
Il numero `+256 780 000` nel footer è incompleto (preso dal WP).
Aggiornarlo in `js/components.js` nel template del footer.

## Deploy su GitHub Pages

### Primo deploy
1. Creare account su https://github.com (gratuito)
2. Creare un nuovo repository — es. `lechwe-safari`
3. Caricare tutti i file (trascinare nella UI di GitHub)
4. Andare su **Settings → Pages**
5. Source: **Deploy from a branch**
6. Branch: `main` / `root`
7. Salvare → il sito sarà live su `https://USERNAME.github.io/lechwe-safari/`

### Con dominio personalizzato (es. lechwesafari.com)
1. Comprare il dominio su Namecheap, Cloudflare, GoDaddy ecc.
2. In GitHub Pages Settings → aggiungere il dominio custom
3. Configurare i DNS del dominio:
   - Record A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - OPPURE CNAME: `USERNAME.github.io`
4. Spuntare "Enforce HTTPS"

### Aggiornamenti futuri
Per aggiornare un tour, modificare il file `js/tours-data.js`.  
Per aggiornare un articolo, modificare `js/blog-data.js`.  
Poi fare upload del file aggiornato su GitHub.

## Note per la cliente

- Le **immagini** sono caricate direttamente dal sito WordPress esistente.
  Quando il WordPress sarà offline o spostato, aggiornare i URL delle immagini in
  `js/tours-data.js`, `js/blog-data.js`, `js/components.js` e nelle pagine HTML.
- Il **numero di telefono** nel WP originale era incompleto (`+256 780 000`).
  Da aggiornare con il numero completo.
- I **prezzi** dei tour non sono stati inseriti — da aggiungere in `js/tours-data.js`
  per ogni tour (campo `price` da aggiungere e mostrare nella sidebar).
