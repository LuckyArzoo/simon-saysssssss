let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","green","red","purple"];
let h2=document.querySelector("h2");
document.addEventListener("mouseover",()=>{
    if(started==false)
    {
        started=true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },350);
}
function userFlash(btns){
    
    btns.classList.add("userflash");
    setTimeout(function(){
        btns.classList.remove("userflash")
    },500);
}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randomColor}`);
     gameSeq.push(randomColor);
    
    gameFlash(randBtn);   
}
function checkBox(idx)
{
    
    if(userSeq[idx]==gameSeq[idx])
    {
       if(userSeq.length==gameSeq.length)
       {
        setTimeout(levelup,1050);

       }
    }
    else{
        h2.innerHTML=` Wrong ans ! <b>game score:-${level}</b> </br> Press any key to reset the game `;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },250); 

        reset();
    }
}
function btnPress(){
   
    let btn =this;
    userFlash(btn);
      userColor=btn.getAttribute("id");
      userSeq.push(userColor);
    checkBox(userSeq.length -1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false
userSeq=[];
gameSeq=[];
level=0;
}









