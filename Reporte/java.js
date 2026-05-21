/* REPORTE DE SERVICIOS CONECTADO A parkingServices*/

function generateReport(){

    /* OBTENER FECHAS */
    const startDate =
    document.getElementById(
    "start-date"
    ).value;

    const endDate =
    document.getElementById(
    "end-date"
    ).value;

    /* VALIDACIONES*/

    if(!startDate || !endDate){

        alert(
        "Seleccione ambas fechas"
        );

        return;
    }

    if(startDate > endDate){

        alert(
        "La fecha inicial no puede ser mayor"
        );

        return;
    }

    /*OBTENER DATOS DEL PARKING */

    const parkingServices =

    JSON.parse(
    localStorage.getItem(
    "parkingServices"
    )) || [];

    /* FILTRAR POR FECHAS*/

    const filteredServices =

    parkingServices.filter(service => {

        return service.date >= startDate &&
               service.date <= endDate;
    });

    /*  REFERENCIAS HTML*/

    const reportBody =

    document.getElementById(
    "report-body"
    );

    const totalVehicles =

    document.getElementById(
    "total-vehicles"
    );

    const totalIncome =

    document.getElementById(
    "total-income"
    );

    /* LIMPIAR TABLA*/

    reportBody.innerHTML = "";

    /* VARIABLES ACUMULADORAS*/

    let totalMoney = 0;

    /* SI NO EXISTEN DATOS*/

    if(filteredServices.length === 0){

        reportBody.innerHTML = `

            <tr>

                <td colspan="4"
                class="empty-row">

                    No existen registros
                    para este rango
                    de fechas

                </td>

            </tr>
        `;

        totalVehicles.textContent = 0;

        totalIncome.textContent =
        "Q0.00";

        return;
    }

    /*  RECORRER SERVICIOS*/

    filteredServices.forEach(service => {

        totalMoney +=
        Number(service.total);

        reportBody.innerHTML += `

            <tr>

                <td>
                ${service.plate}
                </td>

                <td>
                ${service.vehicleType}
                </td>

                <td>
                ${service.hours} hrs
                </td>

                <td>

                    Q${Number(service.total)
                    .toFixed(2)}

                </td>

            </tr>
        `;
    });

    /* ACTUALIZAR TOTALES */

    totalVehicles.textContent =

    filteredServices.length;

    totalIncome.textContent =

    `Q${totalMoney.toFixed(2)}`;
}