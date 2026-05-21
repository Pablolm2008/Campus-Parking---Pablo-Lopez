const vehicleType =
document.getElementById("vehicleType");

const parkingTable =
document.getElementById("parkingTable");

/* LOCAL STORAGE*/

let vehicleTypes =

JSON.parse(
localStorage.getItem("vehicleTypes")
) || [];

let parkingServices =

JSON.parse(
localStorage.getItem("parkingServices")
) || [];

/*CARGAR TIPOS DE VEHICULO*/

vehicleTypes.forEach(vehicle => {

    vehicleType.innerHTML += `

        <option value="${vehicle.name}">

            ${vehicle.name}

        </option>
    `;
});

/* RENDER TABLA*/

function renderParking(){

    parkingTable.innerHTML = "";

    parkingServices.forEach(service => {

        parkingTable.innerHTML += `

            <tr>

                <td>
                    ${service.plate}
                </td>

                <td>
                    ${service.vehicleType}
                </td>

                <td>
                    ${service.date}
                </td>

                <td>
                    ${service.entryHour}
                </td>

                <td>
                    ${service.slot}
                </td>

            </tr>
        `;
    });
}

/* REGISTRAR VEHICULO*/

document.getElementById("parkingForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    /* ===== OBTENER DATOS ===== */

    const plate =

    document.getElementById("plate")
    .value
    .trim()
    .toUpperCase();

    const selectedVehicle =

    vehicleTypes.find(v =>

        v.name === vehicleType.value
    );

    const date =

    document.getElementById("date")
    .value;

    const entryHour =

    document.getElementById("entryHour")
    .value;

    const slot =

    document.getElementById("slot")
    .value
    .trim();

    /* VALIDAR TIPO*/

    if(!selectedVehicle){

        alert(
        "Seleccione un tipo de vehículo"
        );

        return;
    }

    /* VALIDAR FECHA*/

    if(!date){

        alert(
        "Seleccione una fecha"
        );

        return;
    }

    /* ALIDAR PLACA */

    const regex =

    /^(P|M|C|TC|A)[0-9]{3,6}[A-Z]{0,3}$/;

    if(!regex.test(plate)){

        alert(
        "Placa guatemalteca inválida"
        );

        return;
    }

    /*  VALIDAR PLACA REPETIDA*/

    const plateExist =

    parkingServices.some(p =>

        p.plate === plate
    );

    if(plateExist){

        alert(
        "La placa ya está registrada"
        );

        return;
    }

    /*  VALIDAR SLOT */

    const slotExist =

    parkingServices.some(p =>

        p.slot === slot
    );

    if(slotExist){

        alert(
        "El slot ya está ocupado"
        );

        return;
    }

    /*  CREAR REGISTRO*/

    const service = {

        plate,

        vehicleType:
        vehicleType.value,

        date,

        entryHour,

        slot
    };

    /* GUARDAR*/

    parkingServices.push(service);

    localStorage.setItem(

        "parkingServices",

        JSON.stringify(parkingServices)
    );

    /* ACTUALIZAR TABLA*/

    renderParking();

    /* LIMPIAR FORMULARIO */

    document.getElementById(
    "parkingForm"
    ).reset();

});

/* REGRESAR */

function goBack(){

    window.history.back();
}

/*NICIAR TABLA*/

renderParking();