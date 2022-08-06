    const robotArea = document.getElementById("generated-robot")
    const robotLink = document.createElement("a");
    const loadingRobot = document.querySelector(".loading-robot");
    robotLink.classList.add("btn");
    robotLink.classList.add("btn-success");
    robotLink.text = "Baixar"

async function generateRobot () {
    const text = document.getElementById("robot-seed");
    let seed = text.value.replaceAll(" ", "");
    seed === "" || seed === undefined ? seed = "default" : "";

    const Url =`https://robohash.org/${seed}`;
    const generatedRobot = document.getElementById("generatedRobot");


    try{
        loadingRobot.style.display = "flex"

        axios.get(Url, {
            responseType: "blob"
        })
        .then(response =>{
    
            const newRobot = URL.createObjectURL(response.data)
            
            generatedRobot.src = newRobot
            robotLink.href = newRobot
            robotLink.download = `${seed}.png`
            robotArea.append(robotLink)
            loadingRobot.style.display = "none";
        } )
    
    }
    catch(error){
        console.log(error)
    }
   
        
    


    
    
}