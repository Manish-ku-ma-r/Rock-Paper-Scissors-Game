let userscore = 0;
let compscore = 0;

let choices=document.querySelectorAll(".choice");
let msgbx=document.querySelector("#msg");

let usp=document.querySelector("#user-score");
let csp=document.querySelector("#comp-score");


const gencompchoice =() =>{
    const opestion =["stone","paper", "siser"];
   const randidx = Math.floor(Math.random()*3) ;
   return opestion[randidx];
}

let drawgame =()=>{
    // console.log("game was draw");
    msgbx.innerText="Game was Draw";
    msgbx.style.backgroundColor="darkgrey";

}

let showwin= (userwin)=>{
    if(userwin){
        userscore++;
        usp.innerText=userscore;
        usp.style.color="green";
        // console.log("you win");
        msgbx.innerText="You win";
        msgbx.style.backgroundColor="greenyellow";
        
    }
    else{
        compscore++;
        csp.innerText=compscore;
        csp.style.color="red";
        // console.log("you loose");
        msgbx.innerText="You loose";
        msgbx.style.backgroundColor="orange";

    }
} 

const playgames=(userchoice)=>{
        // console.log(userchoice);

        const compchoice = gencompchoice();
        // console.log(compchoice);

    if(userchoice===compchoice){
        drawgame();
    }

    else{
        let userwin =true;
        
        if(userchoice==="stone"){
        userwin=compchoice==="paper"? false:true;
         }
        
         else if(userchoice==="paper"){
            userwin=compchoice==="siser"? false:true;
         }
         else{
            userwin=compchoice==="stone"?false:true;
         }
         showwin(userwin);
}}


choices.forEach((val) =>{
    val.addEventListener("click", () =>{
        const userchoice=val.getAttribute("id");
        // console.log("choice was clicked", userchoice)
        playgames(userchoice);
    })
})
