document.getElementById("bu").addEventListener("submit", function(event){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    if(!email || !password){
        event.preventDefault();
        alert("both the email and password must have to be entered!");
    }
    else{
        window.location.href="https://www.youtube.com";
    }

});