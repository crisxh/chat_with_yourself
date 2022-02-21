/* window.onbeforeunload = function(){
    return "";
}; */



//global variables 

let typing=document.getElementById("isTyping");
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
    //logBox.innerHTML+=msgStr+"<br>";
    
    jsonLogger();
    msgOutput();
  

});

usrInput.addEventListener("keyup", function(e){
    e.preventDefault();
    if (e.key==="Enter"){
        console.log("keyup");
        sendBtn.click();
    }

})

function updateLogMsg(){
    
    logMsg.date=getTime();
   // console.log(logMsg.date);
    logMsg.user = document.getElementById("userSelect").value;

    logMsg.message=usrInput.value;

    typing="";
    
     

     
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

function msgOutput(){
    output=document.createElement("div");
    output.className="msg";
    output.innerHTML=`<em>${logMsg.date}</em>   <b>${logMsg.user}</b>: ${logMsg.message}<br>`;
    logBox.append(output);
    //logBox.innerHTML+=logMsg.date+" "+logMsg.user+": "+ logMsg.message+"<br>";

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

function getTime(){
    var today=new Date();
    var d=today.getDate();
    var month=today.getMonth()+1;
    var year=today.getFullYear();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    

    return d+"/"+month+"/"+year+"/" +" "+ h+":"+m+":"+s;
}

console.log("time and date: "+ getTime());

/*typing message */

function isTyping(){
   
    usrInput.addEventListener("click",function(){
    typing.innerHTML=`${userName.value} is typing...`

    })
}

isTyping();


let addUserBtn=document.getElementById("addUser");
let online=document.getElementById("online");
let userList=document.getElementById("userList");
let list=document.getElementById("list");
addUserBtn.addEventListener("click",addUser);



function addUser(){
    
    let userObj={
        userName:"",
        color:"",
    }
   
    userObj.userName=prompt("what is user name?");
    userObj.color=prompt("what color do you want?")
    user=document.createElement("li");
    user.style.color=userObj.color;
    user.innerHTML=userObj.userName;
   // list.innerHTML+="<li>"+userObj.userName+"</li>";
   list.append(user);

    
}

