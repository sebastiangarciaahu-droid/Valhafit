const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

let currentDate = new Date();

function renderCalendar(){

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const monthNames = [
        "Enero","Febrero","Marzo","Abril",
        "Mayo","Junio","Julio","Agosto",
        "Septiembre","Octubre","Noviembre","Diciembre"
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;

    calendarDays.innerHTML = "";

    let startDay = firstDay === 0 ? 6 : firstDay - 1;

    for(let i=0; i<startDay; i++){

        const empty = document.createElement("div");

        calendarDays.appendChild(empty);

    }

    const today = new Date();

    for(let day=1; day<=lastDate; day++){

        const dayElement = document.createElement("div");

        dayElement.classList.add("day");

        dayElement.textContent = day;

        if(
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ){

            dayElement.classList.add("today");

        }

        calendarDays.appendChild(dayElement);

    }

}

document.getElementById("prevMonth").addEventListener("click", ()=>{

    currentDate.setMonth(currentDate.getMonth()-1);

    renderCalendar();

});

document.getElementById("nextMonth").addEventListener("click", ()=>{

    currentDate.setMonth(currentDate.getMonth()+1);

    renderCalendar();

});

renderCalendar();