const reservationForm =
document.getElementById("reservationForm");

const reservationTable =
document.getElementById("reservationTable");

let reservations =
JSON.parse(localStorage.getItem("reservations")) || [];

function renderReservations(){

    reservationTable.innerHTML = "";

    reservations.forEach(reservation => {

        reservationTable.innerHTML += `
            <tr>
                <td>${reservation.plate}</td>
                <td>${reservation.vehicle}</td>
                <td>${reservation.date}</td>
                <td>${reservation.hour}</td>
            </tr>
        `;
    });
}

reservationForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const plate =
    document.getElementById("plate").value;

    const regex =
    /^[A-Z]{3}[0-9]{3}$/;

    if(!regex.test(plate)){

        alert("Placa inválida");
        return;
    }

    const reservation = {

        plate,

        vehicle:
        document.getElementById("vehicleType").value,

        date:
        document.getElementById("date").value,

        hour:
        document.getElementById("hour").value
    };

    reservations.push(reservation);

    localStorage.setItem(
        "reservations",
        JSON.stringify(reservations)
    );

    renderReservations();

    reservationForm.reset();

    alert("Reserva realizada");
});

renderReservations();

document.getElementById("logoutBtn")
.addEventListener("click",()=>{

    const confirmLogout = confirm(
        "¿Estás seguro que quieres cerrar sesión?"
    );

    if(confirmLogout){

        localStorage.removeItem("isLoggedIn");

        window.location.href = "index-login.html";
    }

});