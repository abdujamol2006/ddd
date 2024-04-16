const machineForm = document.getElementById("machineForm");
const machineList = document.getElementById("machineList");

machineForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const speed = document.getElementById("speed").value;
  const imgLink = document.getElementById("imgLink").value;
  const color = document.getElementById("color").value;

  const machine = { imgLink, name, speed, price, color };
  saveToLocalStorage(machine);
  displayMachines();
  machineForm.reset();
});

function saveToLocalStorage(machine) {
  let machines = JSON.parse(localStorage.getItem("machines")) || [];
  machines.push(machine);
  localStorage.setItem("machines", JSON.stringify(machines));
}

function displayMachines() {
  machineList.innerHTML = "";
  const machines = JSON.parse(localStorage.getItem("machines")) || [];

  machines.forEach((machine) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${machine.imgLink}" alt="${machine.name}" style="max-width: 300px;padding:20px;margin-bottom:10px">
    <h3>${machine.name}</h3> 
    <p>Speed: ${machine.speed}</p>
    <p>Price: ${machine.price}</p>
 <div style="background-color: ${machine.color}; width: 30px; height: 30px; border: 2px solid #000;margin-bottom:10px"></div>
        `;
    machineList.appendChild(div);
  });
}

displayMachines();
