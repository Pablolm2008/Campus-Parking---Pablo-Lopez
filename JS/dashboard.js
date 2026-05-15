// ===== USUARIO =====

const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

if(currentUser){

    document.getElementById("welcomeUser")
    .innerText =
    `Hola ${currentUser.nombre}`;

}

// ===== DATOS =====

// Vehículos registrados
const vehicles =
JSON.parse(localStorage.getItem("vehicles")) || [];

// Servicios de parqueo
const parkingServices =
JSON.parse(localStorage.getItem("parkingServices")) || [];

// ===== VEHÍCULOS ACTIVOS =====

document.getElementById("totalVehicles")
.innerText =
parkingServices.length;

// ===== INGRESOS =====

let revenue = 0;

parkingServices.forEach(service => {

    revenue += Number(service.total) || 0;

});

document.getElementById("totalRevenue")
.innerText =
`Q${revenue}`;

// ===== ESPACIOS DISPONIBLES =====

const totalSlots = 50;

const occupiedSlots =
parkingServices.length;

const availableSlots =
totalSlots - occupiedSlots;

document.getElementById("slotsAvailable")
.innerText =
availableSlots;

// ===== TABLA DASHBOARD =====

const dashboardTable =
document.getElementById("dashboardTable");

function renderDashboardTable(){

    dashboardTable.innerHTML = "";

    if(parkingServices.length === 0){

        dashboardTable.innerHTML = `
            <tr>
                <td colspan="4">
                    No hay vehículos registrados
                </td>
            </tr>
        `;

        return;
    }

    parkingServices.forEach(service => {

        dashboardTable.innerHTML += `

            <tr>

                <td>
                    ${service.plate}
                </td>

                <td>
                    ${service.vehicleType}
                </td>

                <td>
                    ${service.slot}
                </td>

                <td>
                    ${service.entryHour}
                </td>

            </tr>

        `;
    });

}

renderDashboardTable();

// ===== LOGOUT =====

document.getElementById("logoutBtn")
.addEventListener("click",()=>{

    const confirmLogout =
    confirm(
        "¿Seguro que deseas cerrar sesión?"
    );

    if(confirmLogout){

        localStorage.removeItem("currentUser");

        window.location.href =
        "index-login.html";
    }

});