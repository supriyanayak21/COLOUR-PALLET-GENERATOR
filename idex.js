const generatebtn=document.getElementById("generatebtn");

const singleHexColorGenerator=() => {
    const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexcolor="#";
    for(let i=0;i<6;i++)
    {
       let random=Math.floor(Math.random()*hex.length);
       hexcolor=hexcolor+hex[random];
       console.log({random});
    }
    return hexcolor;
};
const colorPallateGenerator=()=>{
    const colorpallet=[];
    for(let i=0;i<4;i++){
        colorpallet.push(singleHexColorGenerator());
    }
    return colorpallet;
};
const rendercolorpalatte = () =>{
    const colorcontainer=document.querySelector(".colors_container");
    colorcontainer.innerHTML ="";

    const colorpallet = colorPallateGenerator();
    colorpallet.forEach((color,i)=>{
    const colorDiv=document.createElement("div");
      colorDiv.id='color${i+1}';
      colorDiv.style.background=color;
      colorDiv.className="colorbox";


      const colorTag=document.createElement("p");
      colorTag.id='color${i+1}Tag';
      colorTag.className="colortag";
      colorTag.innerHTML=color;
      colorDiv.appendChild(colorTag);
      colorcontainer.appendChild(colorDiv);
    });
    
    console.log({colorpallet});
    console.log("btn pressed");
};
generatebtn.addEventListener("click",rendercolorpalatte);