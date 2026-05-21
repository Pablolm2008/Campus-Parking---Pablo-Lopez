// ===== REGRESAR =====

function goBack(){
    window.history.back();
}

// ===== USER =====

const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

const users =
JSON.parse(localStorage.getItem("users")) || [];

// ===== ELEMENTOS =====

const currentName =
document.getElementById("currentName");

const currentEmail =
document.getElementById("currentEmail");

const modal =
document.getElementById("profileModal");

const openModal =
document.getElementById("openModal");

const closeModal =
document.getElementById("closeModal");

const profileForm =
document.getElementById("profileForm");

// ===== MOSTRAR INFO =====

currentName.textContent =
currentUser.nombre;

currentEmail.textContent =
currentUser.email;

// ===== ABRIR MODAL =====

openModal.addEventListener("click",()=>{

    modal.classList.add("active");

    document.getElementById("name").value =
    currentUser.nombre;

    document.getElementById("email").value =
    currentUser.email;

    document.getElementById("password").value =
    currentUser.password;
});

// ===== CERRAR MODAL =====

closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");
});

// ===== GUARDAR =====

profileForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const confirmChange =
    confirm(
        "¿Estás seguro de modificar tus datos?"
    );

    if(!confirmChange) return;

    const newName =
    document.getElementById("name").value;

    const newEmail =
    document.getElementById("email").value;

    const newPassword =
    document.getElementById("password").value;

    currentUser.nombre = newName;
    currentUser.email = newEmail;
    currentUser.password = newPassword;

    const userIndex =
    users.findIndex(user =>

        user.email === currentUser.email
    );

    users[userIndex] = currentUser;

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );

    currentName.textContent = newName;
    currentEmail.textContent = newEmail;

    alert("Perfil actualizado correctamente");

    modal.classList.remove("active");
});