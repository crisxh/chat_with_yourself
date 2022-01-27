let usrInput=document.getElementById("chatInput");
let chatLog=[];


let usrInputTxt=usrInput.value;

let userName = document.getElementById("userSelect").value;

class chatMeta {
    constructor(date,user,message){
        this.date=new Date();
        this.user=userName;
        this.message=usrInput.value;
    } 
}



let logMsg={
    date:new Date(),
    user:userName,
    message:usrInputTxt
}

let logMsg2= new chatMeta();
JSON.stringify(logMsg2);
console.log("json test: "+JSON.stringify(logMsg2));

for(let i=0;i<=logMsg.length;i++){

}

let logBox=document.getElementById("chatLog");

console.log(logMsg);

sendBtn=document.getElementById("send")

//usrInput.addEventListener("click",function(){alert(usrInputTxt)});

sendBtn.addEventListener("click",function(){
    
    let msgStr=JSON.stringify(logMsg);
    console.log(msgStr);
    msg=document.createElement("p");
    msg.id=""
    logBox.innerHTML+=msgStr+"<br>";
    
    jsonLogger();
  

});

function updateLogMsg(){
    
    logMsg.date=new Date();
   // console.log(logMsg.date);
    logMsg.user = document.getElementById("userSelect").value;

    logMsg.message=usrInput.value;
    
     

     
};

setInterval(updateLogMsg,100);

/* function updateMsgTxt(){
    logMsg.message=usrInputTxt; 
    console.log(logMsg.message);
    console.log(usrInputTxt)
    
}

usrInput.addEventListener("click",updateMsgTxt); */

function usrColor(){
    let usrColor=document.getElementById(userName.id);
    console.log(usrColor);
}

function jsonLogger(){
    
    chatLog.push(new chatMeta());
    console.log(chatLog);
}