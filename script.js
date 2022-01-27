let usrInput=document.getElementById("chatInput");

let usrInputTxt=usrInput.value;

let userName = document.getElementById("userSelect").value;

let logMsg={
    date:new Date(),
    user:userName,
    message:usrInputTxt
}

for(let i=0;i<=logMsg.length;i++){

}

let logBox=document.getElementById("chatLog");

console.log(logMsg);

sendBtn=document.getElementById("send")

//usrInput.addEventListener("click",function(){alert(usrInputTxt)});

sendBtn.addEventListener("click",function(){
    
    let msgStr=JSON.stringify(logMsg);
    console.log(msgStr);
    logBox.innerHTML+=msgStr+"<br>";
    
  

});

function updateLogMsg(){
    
    logMsg.date=new Date();
    console.log(logMsg.date);

     logMsg.user = document.getElementById("userSelect").value;
    
     logMsg.usrInputTxt=usrInput.value; 
};

setInterval(updateLogMsg,1000);