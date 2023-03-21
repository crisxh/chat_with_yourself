/* window.onbeforeunload = function(){
    return "";
}; */



//global variables 
let users=[];
let lSUsers=JSON.parse(localStorage.getItem("users"));
let lSChatLog=JSON.parse(localStorage.getItem("chatLog"));
let addUserBtn=document.getElementById("addUser");
let online=document.getElementById("online");
let userList=document.getElementById("userList");
let list=document.getElementById("list");

if (lSUsers===null){
    users=[];
}else{
    window.onload=restoreUserData();

}


// if (lSUsers=null){
//     users=[];
// }else{
//     users=lSUsers;
// }

let metaUsers={};


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
    let userListColor=document.getElementById("userSelect");
    console.log(userListColor);
    console.log(logMsg.user);
    output=document.createElement("div");
    output.className="msg";
    output.style.color=userListColor;
    console.log(userListColor);
    
    output.innerHTML=`<em>${logMsg.date}</em>   <b>${logMsg.user}</b>: ${logMsg.message}<br>`;
    logBox.append(output);
    //adds chatLog to localStorage
    let chatLogJSON=JSON.stringify(chatLog);
    localStorage.setItem("chatLog",chatLogJSON);
}

function exportJSON(){
    const data=chatLog;
    const fileName="download";
    const exportType=prompt("file type?");
    window.exportFromJSON({data,download,exportType});

}
let exportUsers=document.getElementById("exportUsers");

exportUsers.addEventListener("click",exportUsersFun);

function exportUsersFun(){
    const data=users;
    const fileName=new Date() + "user list";
    const exportType="json";
    window.exportFromJSON({data,fileName,exportType});
    
}

importUsers=document.getElementById("importUsers");
importUsers.addEventListener("click",importUsersFunLS);

function importUsersFunLS(){

addUserImport()
   
}
    
function restoreUserData(){
    for(let i=0;i<lSUsers.length;i++){
        importedUser=document.createElement("li");
        importedUser.className="importedLS"
        importedUser.innerHTML=lSUsers[i].userName;
        importedUser.style.color=lSUsers[i].color;
         users.push(lSUsers[i]);
        console.log(users);
        userList.append(importedUser);
        // list.append(user);
    
        
        let userOption=document.createElement("option");
        userOption.innerHTML=lSUsers[i].userName;
        userSelect.append(userOption);

}
};

// function restoreChatData(){
//     for(let i=0;i<lSChatLog.length;i++){

//     }
//     let restoredChat=document.createElement("div");
//     restoredChat.className="restoredMessage";
//     chatLog.append(restoredChat);

// }


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

// function isTyping(){
   
//     usrInput.addEventListener("click",function(){
//     typing.innerHTML=`${userName.value} is typing...`

//     })
// }

// isTyping();



addUserBtn.addEventListener("click",addUser);



function addUser(){
    
    let userObj={
        userName:"",
        color:"",
    }
    let addUserSelect=document.createElement("option");
   
    userObj.userName=prompt("what is user name?");
    userObj.color=prompt("what color do you want?")
    user=document.createElement("li");
    user.id=userObj.userName+"Opt";
    user.style.color=userObj.color;
    user.innerHTML=userObj.userName;
   userList.append(user);

   addUserSelect.id=userObj.userName;
   addUserSelect.innerHTML=userObj.userName;
   addUserSelect.dataset.color=userObj.color;

   
   userSelect.append(addUserSelect);
   users.push(userObj);
   usersJSON=JSON.stringify(users);
   localStorage.setItem("users",usersJSON);
   console.log(localStorage);
   
    logMsg.color=userObj.color;
    
}

function addUserImport(userName,Color){
    let userObj={
        userName:"",
        color:"",
    }
    userObj.userName=userName;
    userObj.color=Color;
    let addUserSelect=document.createElement("option");
    user=document.createElement("li");
    user.id=userObj.userName+"Opt";
    user.style.color=userObj.color;
    user.innerHTML=userObj.userName;
   userList.append(user);

   addUserSelect.id=userObj.userName;
   addUserSelect.innerHTML=userObj.userName;
   addUserSelect.dataset.color=userObj.color;

   
   userSelect.append(addUserSelect);
   users.push(userObj);
   usersJSON=JSON.stringify(users);
   localStorage.setItem("users",usersJSON);
   console.log(localStorage);
   
    logMsg.color=userObj.color;

}



function clearLocal(){
    var retVal=confirm("Are you sure you want to clear the local storage? all unsaved data will be lost ")
    if(retVal){
        localStorage.clear();
        window.location.reload();

    }
    else{
        return;
    }
}