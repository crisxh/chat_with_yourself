let usrInput=document.getElementById("chatInput");
let chatLog=[];


let usrInputTxt=usrInput.value;

let userName = document.getElementById("userSelect");

class chatMeta {
    constructor(date,user,message){
        this.date=new Date();
        this.user=userName.value;
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

console.log("logMsg test: "+JSON.stringify(logMsg));

sendBtn=document.getElementById("send")

//usrInput.addEventListener("click",function(){alert(usrInputTxt)});

sendBtn.addEventListener("click",function(){
    logBox.innerHTML="";

},{once:true});

sendBtn.addEventListener("click",function(){
 
    let msgStr=JSON.stringify(logMsg);
    console.log(msgStr);
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

function exportJSON(){
    const data=chatLog;
    const fileName="download";
    const exportType="csv";
    window.exportFromJSON({data,download,exportType});

}

/* function createCsv(){
    var csv= 'Date, User, Message\n';
    chatLog.forEach(function(row){
        csv+=row.join(',');
        csv+="\n"
    });
    var hiddenElement=document.createElement("a");
    hiddenElement.href="data:text/csv;charset=utf-8," +encodeURI(csv);
    hiddenElement.target="_blank";
    hiddenElement.download="data.csv";
    hiddenElement.click();
} */