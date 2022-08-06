const myImage = document.querySelector(".image-generated");
const loading = document.querySelector(".loading")
const ipRobot = document.querySelector("#ipRobot-caption");


async function getRobot (endpoint, ip) {


axios.get(endpoint, {
    responseType: "blob"
})
    .then(response => {
        const link = document.createElement("a");
        link.classList.add("btn");
        link.classList.add("btn-success");
        link.download = `${ip}.png`
        link.innerText = "Baixar"
        const image  = URL.createObjectURL(response.data);
        link.href = image

        ipRobot
        myImage.src= image;
        ipRobot.append(link)


        loading.style.display = "none"
    } )
  
}


async function getIpClient() {
  try {

    loading.style.display = "flex"
    const response = await axios.get('https://api.ipify.org?format=json');


    const endpoint =  `https://robohash.org/${response.data.ip}`;
    getRobot(endpoint, response.data.ip)
    
  } catch (error) {
    console.error(error);
  }
}


getIpClient()

