

/* let name = document.getElementById('name').value;
let prenom = document.getElementById("prenom").value;
let email = document.getElementById("email").value;
let motDePasse = document.getElementById("motDePasse").value;
let confirmeMotDePasse = document.getElementById("confirmeMotDePasse").value */


let message = document.querySelector('.messagesDinscription');
let formulaire = document.querySelector('.formulaire');
formulaire.addEventListener('submit', event=>{
    event.preventDefault()

    let name = event.target.name;
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

    if (motDePasse.value !== confirmeMotDePasse.value) {
        message.textContent ='Les mots de passe ne correspondent pas.';
        return
    }
    
    fetch('https://travelx-0le0.onrender.com/api/user/',{
        method:"POST",
        body: new URLSearchParams(formData)
    }).then(res => res.json())
    .then(succes =>{
        if(succes.statut){


          
            message.textContent ='Inscription reuissi !';
            message.style.color = 'green';
            message.style.fontSize = "1.5rem";
            setTimeout(window.location.href = './connexion.html',5000);
        }else{
                        switch(succes.erreur){
                            case 'nom deja utilise':
                            message.textContent = "Ce nom d'utilisateur est déjà utilisé."
                            message.style.color = 'red';
                            message.style.fontSize = "1rem";
                            break;
                            case 'email deja utilise':
                            message.textContent = "Cette adresse e-mail est déjà utilisée."
                            message.style.color = 'red';
                            message.style.fontSize = "1rem";
                            break;
                            default:
                            message.textContent = "Une erreur s'est produite. Veuillez réessayer."
                            message.style.color = 'red';
                            message.style.fontSize = "1rem";
                        }
            }
    })
});


/* 
let formulaire = document.querySelector('.formulaire');
let name = document.querySelector('input[name="name"]').value;
let prenom = document.querySelector('input[name="prenom"]').value;
let email = document.querySelector('input[name="email"]').value;
let motDePasse = document.querySelector('input[name="motDePasse"]').value;
let confirmeMotDePasse = document.querySelector('input[name="confirmeMotDePasse"]').value;
formulaire.addEventListener('submit', event=>{
    event.preventDefault()
    
    let name = event.target.nom;
    let prenom = event.target.prenom;
    let email = event.target.email;
    let motDePasse = event.target.motDePasse;
    let confirmeMotDePasse = event.target.confirmeMotDePasse; */

    // Vérifier la validité des données du formulaire
/*     if (!name.value || name.value.length < 3) {
        alert('Le nom doit contenir au moins 3 caractères.')
        return
    }

    if (!prenom.value || prenom.value.length < 3) {
        alert('Le prénom doit contenir au moins 3 caractères.')
        return
    } 
    
    if (!email.value || !email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/)) {
        alert('L\'adresse e-mail est invalide.')
        return
    }
    
    if (!motDePasse.value || motDePasse.length < 8) {
        alert('Le mot de passe doit contenir au moins 8 caractères.')
        return
    }
    
    if (motDePasse.value !== confirmeMotDePasse.value) {
        alert('Les mots de passe ne correspondent pas.')
        return
    }

    // Préparer les données de la requête


let formData = new FormData();

formData.append("name", name);
formData.append("prenom", prenom);
formData.append("email", email);
formData.append("motDePasse", motDePasse);
formData.append("confirmeMotDePasse", confirmeMotDePasse);

    // Envoyer la requête HTTP POST
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
            setTimeout(window.location.href = './connexion.html',5000);
        }else{
            switch(succes.erreur){
                case 'nom deja utilise':
                    alert('Ce nom d\'utilisateur est déjà utilisé.');
                    break;
                    case 'email deja utilise':
                        alert('Cette adresse e-mail est déjà utilisée.');
                        break;
                        default:
                            alert('Une erreur s\'est produite. Veuillez réessayer.');
                        }
                    }
                })
            });

            */