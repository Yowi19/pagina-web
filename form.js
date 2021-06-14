var firebaseConfig = {
    apiKey: "AIzaSyAMDq_23rf7h5rLvYogNspvCLh-e1EaLhM",
    authDomain: "pagina-w.firebaseapp.com",
    projectId: "pagina-w",
    storageBucket: "pagina-w.appspot.com",
    messagingSenderId: "96530613",
    appId: "1:96530613:web:0ef6a54b286b43dc8ecefc",
    measurementId: "G-94BCRWSNSB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

    //signup function
    function signUp(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
    
        const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
        //
        promise.catch(e=>alert(e.message));
        alert("SignUp Successfully");
      }
    
      //signIN function
      function  signIn(){
        var email = document.getElementById("email");
        var password  = document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value,password.value);
        promise.catch(e=>alert(e.message));
        
        
      }
    
    
      //signOut
    
      function signOut(){
        auth.signOut();
        alert("SignOut Successfully from System");
      }
    
      //active user to homepage
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          var email = user.email;
          alert("Active user "+email);
    
        }else{
          alert("No Active user Found")
        }
      })