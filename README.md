# Boolfolio
Progetto frontend di applicazione Vue per un sito portfolio personale.  
Sono previste varie pagine tra cui una sezione dedicata alla gallerie progetti.  
L'elenco e i dettagli dei progetti vengono reperiti tramite API.  

## Tecnologie
- HTML + CSS
- Vue.js
- Vue Router
- Vite
- Axios
- Scss
- Bootstrap
### Istruzioni
Configurare nel file store.js  
- apiBaseUrl: String - indirizzo bare API ad esempio *http://127.0.0.1:8000/api*  
- projectsApi: String - percorso elenco progetti  
- projectApi: String - percorso singolo progetto  

Per inizializzare l'ambiente di sviluppo:
- npm install
- npm run dev

### TODO
- utilizzare slug per singolo progetto al posto dell'id
- realizzare grafica uniforme
- aggiungeri galleria immagine per singolo progetto
- aggiungere footer