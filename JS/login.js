// ===== ADMIN INICIAL =====

const defaultUser = {

    nombre: "admin",
    email: "admin@campusparking.com",
    password: "Admin123"
};

if(!localStorage.getItem("users")){

    localStorage.setItem(
        "users",
        JSON.stringify([defaultUser])
    );
}

// ===== CAMBIO FORM =====

const loginContainer =
document.getElementById("login");

const registerContainer =
document.getElementById("register");

function register(){

    loginContainer.style.left = "-450px";
    registerContainer.style.right = "40px";
}

function login(){

    loginContainer.style.left = "40px";
    registerContainer.style.right = "-450px";
}

// ===== REGISTRO =====

const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const users =
    JSON.parse(localStorage.getItem("users"));

    const newUser = {

        nombre:
        document.getElementById("registerName").value,

        email:
        document.getElementById("registerEmail").value,

        password:
        document.getElementById("registerPassword").value
    };

    users.push(newUser);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Usuario registrado");

    registerForm.reset();

    login();
});

// ===== LOGIN =====

const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    const users =
    JSON.parse(localStorage.getItem("users"));

    const validUser =
    users.find(user =>

        user.email === email &&
        user.password === password
    );

    if(validUser){

        localStorage.setItem(
            "currentUser",
            JSON.stringify(validUser)
        );

        window.location.href =
        "dashboard.html";

    }else{

        alert("Datos incorrectos");
    }

});