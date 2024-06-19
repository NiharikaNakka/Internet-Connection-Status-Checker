

window.addEventListener("load",checkInternetConnection);

function checkInternetConnection(){
    const statusText=document.getElementById('statusText');
    const ipAdressText=document.getElementById('ipAdressText');
    const networkStrengthText=document.getElementById('networkStrengthText');
    statusText.textContent='Checking....';
    if(navigator.onLine){
        fetch('https://api.ipify.org/?format=json')
        .then((response)=>response.json())
        .then((data)=>{
            ipAdressText.textContent=data.ip;
            statusText.textContent='Connected';
            const connection=navigator.connection;
            const networkStrength=connection?connection.downlink
            +'Mbps':'Unknown';
            networkStrengthText.textContent=networkStrength;
        })
        .catch(()=>{
            statusText.textContent='Disconnected';
            ipAdressText.textContent='-';
            networkStrengthText.textContent='-';
        })
    }else{
        statusText.textContent='Disconnected';
        ipAdressText.textContent='-';
        networkStrengthText.textContent='-';
    }
}