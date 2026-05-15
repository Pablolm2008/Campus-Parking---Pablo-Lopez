const vehicleType =
document.getElementById("vehicleType");

const parkingTable =
document.getElementById("parkingTable");

let vehicleTypes =
JSON.parse(localStorage.getItem("vehicleTypes")) || [];

let parkingServices =
JSON.parse(localStorage.getItem("parkingServices")) || [];

vehicleTypes.forEach(vehicle => {

    vehicleType.innerHTML += `
        <option value="${vehicle.name}">
            ${vehicle.name}
        </option>
    `;
});

function renderParking(){

    parkingTable.innerHTML = "";

    parkingServices.forEach(service => {

        parkingTable.innerHTML += `
            <tr>
                <td>${service.plate}</td>
                <td>${service.vehicleType}</td>
                <td>${service.slot}</td>
                <td>Q${service.total}</td>
            </tr>
        `;
    });
}

document.getElementById("parkingForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    const plate =
    document.getElementById("plate").value;

    const selectedVehicle =
    vehicleTypes.find(v =>
        v.name === vehicleType.value
    );

    const entryHour =
    document.getElementById("entryHour").value;

    const exitHour =
    document.getElementById("exitHour").value;

    const slot =
    document.getElementById("slot").value;

    const regex = /^[A-Z]{3}[0-9]{3}$/;

    if(!regex.test(plate)){

        alert("Placa inválida");
        return;
    }

    const plateExist =
    parkingServices.some(p =>
        p.plate === plate
    );

    if(plateExist){

        alert("La placa ya existe");
        return;
    }

    const slotExist =
    parkingServices.some(p =>
        p.slot === slot
    );

    if(slotExist){

        alert("Slot ocupado");
        return;
    }

    const hours =
    parseInt(exitHour) -
    parseInt(entryHour);

    const total =
    hours * selectedVehicle.price;

    parkingServices.push({
        plate,
        vehicleType: vehicleType.value,
        slot,
        total,
        entryHour
    });

    localStorage.setItem(
        "parkingServices",
        JSON.stringify(parkingServices)
    );

    renderParking();

});

renderParking();

function goBack(){
    window.history.back();
}