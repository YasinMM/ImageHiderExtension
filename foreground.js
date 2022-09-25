//let replaced = false;
document.querySelector("body").dataset.replaced = "0";
const toggle = ()=>{
    let replaced = document.querySelector("body").dataset.replaced === "1";
    document.querySelectorAll("img").forEach((value)=>{
        if(!replaced){
            if((value.dataset.src===null || value.dataset.src===undefined  || value.dataset.src==="") && value.complete && value.naturalHeight !==0){
                const hiderpics = ["https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*","https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80","https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg","https://i.pinimg.com/564x/32/f2/43/32f24381b05fcf53d8088c98963fe326.jpg","https://static.boredpanda.com/blog/wp-content/uploads/2021/02/602be36851a1f_8aevmcfooj551__700.jpg","https://static.boredpanda.com/blog/wp-content/uploads/2021/02/602be4d2ee7bd_gbqyh3cs66x51__700.jpg"];
                let index = Math.floor(Math.random()*hiderpics.length);
                value.dataset.src = value.src;
                value.src = hiderpics[index]
            }
        }else{
            if(!(value.dataset.src===null || value.dataset.src===undefined  || value.dataset.src==="") && value.complete && value.naturalHeight !==0){
                value.src = value.dataset.src;
                value.dataset.src = "";
            }
        }
    })
    if(replaced){
        document.querySelector("body").dataset.replaced = "0"
    }else{
        document.querySelector("body").dataset.replaced = "1"
    }
}
let button = document.createElement("button");
button.innerHTML = "Toggle";
button.id="imageHiderBtn";
button.onclick = toggle;
document.querySelector("body").appendChild(button);
document.addEventListener('keydown', (event)=> {
    if(event.code==="KeyQ"){
        toggle();
    }
});