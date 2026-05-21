const vehicleForm =
document.getElementById("vehicleForm");

const vehicleTable =
document.getElementById("vehicleTable");

let vehicleTypes =
JSON.parse(localStorage.getItem("vehicleTypes")) || [];

function renderVehicles(){

    vehicleTable.innerHTML = "";

    vehicleTypes.forEach((vehicle,index)=>{

        vehicleTable.innerHTML += `
            <tr>
                <td>${vehicle.code}</td>
                <td>${vehicle.name}</td>
                <td>Q${vehicle.price}</td>

                <td>
                    <button onclick="deleteVehicle(${index})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

vehicleForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const vehicle = {
        code: code.value,
        name: name.value,
        price: price.value
    };

    vehicleTypes.push(vehicle);

    localStorage.setItem(
        "vehicleTypes",
        JSON.stringify(vehicleTypes)
    );

    renderVehicles();

    vehicleForm.reset();
});

function deleteVehicle(index){

    vehicleTypes.splice(index,1);

    localStorage.setItem(
        "vehicleTypes",
        JSON.stringify(vehicleTypes)
    );

    renderVehicles();
}

renderVehicles();

function goBack(){
    window.history.back();
}