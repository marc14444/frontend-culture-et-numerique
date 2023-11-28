
const formulaire = document.querySelector('form');

formulaire.addEventListener('submit', event=>{
    event.preventDefault()

    let email = event.target.email;
    let motDePasse = event.target.motDePasse;

    const formData = new FormData()

    formData.append("email", email.value);
    formData.append("motDePasse", motDePasse.value);

    fetch('http://localhost:3000/api/user/login',{
        method:"POST",
        body: new URLSearchParams(formData)
    }).then(res => res.json())
    .then(succes =>{
        if(succes.statut == true ){


          let message = document.querySelector('.messagesDeConnexion');
            message.textContent ='connexion reuissi !';
            message.style.color = 'green';
            message.style.fontSize = "1.5rem";
            setTimeout(window.location.href = './connecter.html',5000);
        }else{
            message.textContent ='email ou mot de passe incorrecte!';
            message.style.color = 'red';
            message.style.fontSize = "1rem";
        }
    }) 
});