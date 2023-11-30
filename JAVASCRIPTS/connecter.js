const session = localStorage.getItem('session');

//const objet = JSON.parse(session)


let nom = document.querySelector('.afficherNom');

if(session === null){
    window.location.href = './connexion.html'
}
let deconnexion = document.querySelector('.deconnexion');
deconnexion.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.removeItem('session');
    window.location.href = './../index.html'
});