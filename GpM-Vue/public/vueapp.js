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
				
          axios.post('http://localhost:3030/api/auth/login',
          {
            email: this.email,
            mdp: this.mdp
          })
          .then(function(response) {
            console.log(response),
            localStorage.setItem("email",response.data.email),
            localStorage.setItem("token",response.data.token)
          
             })
            .then(()=>{
              let conken = localStorage.getItem('token');
              axios.get('/api/',
              { headers: 
                {'Aunthorisation': 'Bearer '+conken}},
              )
              .then( window.location.assign('/api/'))
              .catch( errpr => {console.log("erreur redirection")});
              })
              .catch(function (error) {
                 // handle error
                console.log(error);
                });
        }
    }
  })