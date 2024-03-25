if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(
        registration => {
            console.log("SW Registered!");
        }
    ).catch(error => {
        console.log("SW Failed");
    })
}