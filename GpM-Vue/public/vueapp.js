

let form = new Vue({

    el: "#appform",
    data:{
        errors: [],
        email: 0,
        mdp: 0
      },

    methods: {
  
        createUser (e){
          e.preventDefault();
          console.log("form submit");
       
        let adduser = {
            email: this.email,
            mdp: this.mdp
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
    request.open("post","/api/auth/signup");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(newUser);
    },
        loginuser (e){
      e.preventDefault();
      console.log("form submit");
   
    let adduser = {
        email: this.email,
        mdp: this.mdp
    };
    let newUser = JSON.stringify(adduser);
    console.log("adduser = ", adduser);
    let request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState == 4) {
          console.log("recherche des identifiants");
          let response = JSON.parse(this.responseText);
          let token = response.token;
          localStorage.setItem("token",token);
          console.log(this.responseText);

            let conken = localStorage.getItem("token");
            console.log("token = ",conken);
            let request =new XMLHttpRequest();
            console.log('envoi XHR');
            request.onload = function (){
              if(this.readyState == 4){
                window.location="/api/";
              }
            }
            request.open("get","/api/");
            request.setRequestHeader("Authorization","Bearer "+conken);
            request.setRequestHeader("Content-Type", "application/json");

            request.send();
        }
    }
request.open("post","/api/auth/login");
request.setRequestHeader("Content-Type", "application/json");
request.send(newUser);
    }
  }
})



