window.addEventListener("load", function() {     
 fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { return response.json();
       })
       .then(function(json) {
         console.log(json);
        const container = document.querySelector('#missionTarget');
         let planet= ''; 
         for (planet of json) { 
           planet =  ` 
            <h2>Mission Destination</h2>
              <ol>
              <li>Name: ${planet.name}</li>
              <li>Diameter: ${planet.diameter}</li>
              <li>Star: ${planet.name}</li>
              <li>Distance from Earth: ${planet.distance} </li>
              <li>Number of Moons: ${planet.moons} </li>
               </ol>
                 <img src=" ${planet.image}">`;
             }
            container.innerHTML = planet; 
             });
     
  let form = document.querySelector("form"); 
  form.addEventListener("submit", function() {
    event.preventDefault();

   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let pilot = pilotNameInput.value;
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let copilot = copilotNameInput.value;
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = fuelLevelInput.value;
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   let cargo = cargoMassInput.value;
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let pilotReady = document.getElementById("pilotStatus")
   let copilotReady = document.getElementById("copilotStatus");
   let cargoStatus = document.getElementById("cargoStatus");   
                 
       if (pilot === "" || copilot === "" || fuelLevel === "" || cargo === "") {
         alert("All fields are required!")
         } else if (!isNaN(pilot) || !isNaN(copilot)|| isNaN(fuelLevel) || isNaN(cargo)) {
           alert("Please enter valid info for each section")
         } else {  
           faultyItems.style.visibility = "visible";
           pilotReady.innerHTML = `Pilot ${pilot} Ready`;
           copilotReady.innerHTML = `Pilot ${copilot} Ready`;
          if (fuelLevel < 10000 && cargo <= 10000) {
            fuelStatus.innerHTML = "Not enough fuel for the journey!"; 
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = 'red';
         } else if (fuelLevel >= 10000 && cargo > 10000) {
            cargoStatus.innerHTML = "Cargo Mass is too large!"; 
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = 'red';
           } else if (fuelLevel < 10000 && cargo > 10000) {
              fuelStatus.innerHTML = "Not enough fuel for the journey!"; 
              cargoStatus.innerHTML = "Cargo Mass is too large!"; 
              launchStatus.innerHTML = "Shuttle not ready for launch";
              launchStatus.style.color = 'red';
          } else {
          launchStatus.innerHTML = "Shuttle ready for launch!";
          launchStatus.style.color = 'green';
          faultyItems.style.visibility = "hidden";
         }
  
   };
 });
  });
