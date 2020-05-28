// Write your JavaScript code here!

window.addEventListener("load", function() {
     let form = document.querySelector("form"); 

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
     
       if (pilot === "" || copilot === "" || fuelLevel === "" || cargo === "") {
         alert("All fields are required!")
         } else if (!isNaN(pilot) || !isNaN(copilot)) {
           alert("Please make sure to enter valid information for each field!")
         } else if (isNaN(fuelLevel) || isNaN(cargo)) {
           alert("Please make sure to enter valid information for each field!")         
         } else {  document.querySelector("#faultyItems").style.visibility = "visible"}

       let launchStatus = document.getElementById("launchStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let pilotReady = document.getElementById("pilotStatus")
       let copilotReady = document.getElementById("copilotStatus");
       let cargoStatus = document.getElementById("cargoStatus");
         if (cargo > 10000 && fuelLevel < 10000) {
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = 'red';
          cargoStatus.innerHTML = "Cargo Mass is too large!"; 
          fuelStatus.innerHTML = "Not enough fuel for the journey!";
          pilotReady.innerHTML = `Pilot ${pilot} Ready`;
          copilotReady.innerHTML = `Pilot ${copilot} Ready`; 
          } else if (fuelLevel < 10000) {
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = 'red';
          fuelStatus.innerHTML = "Not enough fuel for the journey!";pilotReady.innerHTML = `Pilot ${pilot} Ready`;
          copilotReady.innerHTML = `Pilot ${copilot} Ready`;
          } else if (cargo > 10000) {
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = 'red';
          cargoStatus.innerHTML = "Cargo Mass is too large!"; 
          fuelStatus.innerHTML = "Fuel level high enough for launch"; 
          pilotReady.innerHTML = `Pilot ${pilot} Ready`;
          copilotReady.innerHTML = `Pilot ${copilot} Ready`;   
          } else {
          launchStatus.innerHTML = "Shuttle ready for launch!";
          launchStatus.style.color = 'green';
          document.querySelector("#faultyItems").style.visibility = "hidden"}
    
          });
      });
   

