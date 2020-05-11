
/*
let creer = document.getElementById("signup");
console.log("ctreate!!!!");
creer.addEventListener("click", function(){
    
    let create = document.getElementById('create');
    create.innerHTML=" ";
    let form = document.createElement('form');
    form.setAttribute("action","/api/auth/signup");
    form.setAttribute("method","post");
    create.appendChild(form);
    let label = document.createElement('label');
    label.textContent = "email : ";
    form.appendChild(label);
    let input = document.createElement('input');
    input.id= "email";
    input.name="email";
    input.type="email";
    label.appendChild(input);
    let label1 = document.createElement('label');
    label1.textContent = "Mot de passe : ";
    form.append(label1);
    let input1 = document.createElement('input');
    input1.id= "mdp";
    input1.name="mdp";
    input1.type="password";
    form.appendChild(input1);
    let button = document.createElement('button');
    button.setAttribute("type","submit");
    button.textContent="Créer un compte";
    form.appendChild(button);

});
*/
let loguer = document.getElementById("login");
/*

loguer.addEventListener("click", function(){
    let create = document.getElementById('create');
    create.innerHTML=" ";
    let form = document.createElement('form');
    form.setAttribute("action","/api/auth/login");
    form.setAttribute("method","post");
    create.appendChild(form);
    let label = document.createElement('label');
    label.textContent = "email : ";
    form.appendChild(label);
    let input = document.createElement('input');
    input.id= "email";
    input.name="email";
    input.type="email";
    label.appendChild(input);
    let label1 = document.createElement('label');
    label1.textContent = "Mot de passe : ";
    form.append(label1);
    let input1 = document.createElement('input');
    input1.id= "mdp";
    input1.name="mdp";
    input1.type="password";
    form.appendChild(input1);
    let button = document.createElement('button');
    button.setAttribute("type","submit");
    button.textContent="Se connecter";
    form.appendChild(button);

});
*/


let connexionUser = (method, url)=>{

    let email = document.getElementById('email').value;
    let mdp = document.getElementById('mdp').value;

    let adduser = {
        email: email,
        mdp: mdp
    };
    let newUser = JSON.stringify(adduser);
    console.log("adduser = ", adduser);
    let request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState == 4) {
          console.log("connexion a la bdd");
          let response = JSON.parse(this.responseText);
          console.log(response);

            document.getElementById('confMessage').innerHTML = response.message;
          
          console.log(response);
        }
    }
request.open(method,url);
request.setRequestHeader("Content-Type", "application/json");
request.send(newUser);
}

let signup = document.getElementById('btn-signup');
signup.addEventListener("click", function(e){
    e.preventDefault();
    connexionUser("post","/api/auth/signup");
});

let connection = document.getElementById('btn-cnt');
connection.addEventListener("click", function(e){
    e.preventDefault();
    connexionUser("post","/api/auth/login")
});