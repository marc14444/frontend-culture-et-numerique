
const formulaire = document.querySelector('form');

formulaire.addEventListener('submit', event=>{
    event.preventDefault()

    let name = event.target.nom;
    let prenom = event.target.prenom;
    let email = event.target.email;
    let motDePasse = event.target.motDePasse;
    let confirmeMotDePasse = event.target.confirmeMotDePasse;

    const formData = new FormData()

    formData.append("name", name.value);
    formData.append("prenom", prenom.value);
    formData.append("email", email.value);
    formData.append("motDePasse", motDePasse.value);
    formData.append("confirmeMotDePasse", confirmeMotDePasse.value);

    fetch('https://travelx-0le0.onrender.com/api/user/',{
        method:"POST",
        body: new URLSearchParams(formData)
    }).then(res => res.json())
    .then(succes =>{
        if(succes.statut){


          let message = document.querySelector('.messagesDinscription');
            message.textContent ='Inscription reuissi !';
            message.style.color = 'green';
            message.style.fontSize = "1.5rem";
            setTimeout(window.location.href = './../HTML/connexion.html',5000);
        }else{
            message.textContent ='Veuillez rempli tous les champs !';
            message.style.color = 'red';
            message.style.fontSize = "1rem";
        }
    }) 
});