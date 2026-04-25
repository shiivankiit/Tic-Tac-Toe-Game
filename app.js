let boxes=document.querySelectorAll(".box");
//Here we are acessing the each button using query selector.
let rst_btn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
//First we write the logic for player turn.
let turnO=true;//playerX,playerO

//This all is a wining pattern.
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]; 
  const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
  }


//We want that when we click on box something goes happen..so for that we use event listener
//we use for each to call a function for every element.
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)//playerO
        {
            box.innerText="O";
            turnO=false;
        }
        else{//playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
         //function to call the pattern
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disableBoxes();
};
//check  winner is used to find the pattern  and using this pattern we found our position
//and then we find the individual pattern no.
const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
       
           let pos1val= boxes[pattern[0]].innerText;
           let pos2val= boxes[pattern[1]].innerText;
           let pos3val= boxes[pattern[2]].innerText;

           if(pos1val!="" && pos2val!="" && pos3val!=" ")
           {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
           }
    }
}
newGameBtn.addEventListener("click",resetGame);
rst_btn.addEventListener("click",resetGame);