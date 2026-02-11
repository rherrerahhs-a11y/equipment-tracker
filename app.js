let equipment = [];

document.getElementById("equipForm").onsubmit = function(e){
  e.preventDefault();

  let name = e.target.nickname.value;
  let type = e.target.type.value;
  let miles = e.target.miles.value;
  let hours = e.target.hours.value;

  equipment.push({
    name,
    type,
    miles,
    hours
  });

  render();
};

function render(){
  let list = document.getElementById("equipmentList");
  list.innerHTML = "";

  equipment.forEach(e => {
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="card">
        <b>${e.name}</b><br>
        Type: ${e.type}<br>
        Miles: ${e.miles}<br>
        Hours: ${e.hours}
      </div>
    `;
    list.appendChild(div);
  });
}
