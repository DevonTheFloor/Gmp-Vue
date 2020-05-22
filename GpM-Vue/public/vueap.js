

let form = new Vue({

    el: "#appform",
    data:{
        errors: [],
        email: null,
        mdp: null
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
    let logUser = JSON.stringify(adduser);
    console.log("adduser = ", adduser);
    let request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState == 4) {
          console.log("recherche des identifiants");
          /**
           * extraction et mise en storage du token
           */
          let response = JSON.parse(this.responseText);
          console.log("responseText =",this.responseText);
          //valeur du token
          let token = response;
          localStorage.setItem("token",token);
            /**
             * Récuperation du token dans le storage, redirection vers l'api
             */
            let conken = localStorage.getItem("token");
            console.log("conken = ",conken);
            let request = new XMLHttpRequest();
            console.log('envoi XHR');
            request.onload = function (){
              if(this.readyState == 4){
                window.location="/api/";
                //console.log('page pour voir')
              }
            }
            request.open("get","/api/");
            request.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QiLCJpYXQiOjE1ODk5MDE4NjIsImV4cCI6MTU4OTk4ODI2Mn0.Lw29oaUHV3q31JABmk3AMqE6Dx_91D65eQEw7Xlzwmk"
            );
            request.setRequestHeader("Content-Type", "application/json");
            request.send();
        }
    }
request.open("post","/api/auth/login");
request.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QiLCJpYXQiOjE1ODk5MDE4NjIsImV4cCI6MTU4OTk4ODI2Mn0.Lw29oaUHV3q31JABmk3AMqE6Dx_91D65eQEw7Xlzwmk");

request.setRequestHeader("Content-Type", "application/json");
request.send(logUser);
    }
  }
})



