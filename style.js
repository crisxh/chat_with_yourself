buttons=document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("mousedown",()=>
    button.style.border="1px inset");
    button.addEventListener("mouseup",()=>
    button.style.border="none");

});

themes=document.querySelectorAll(".theme");
themePickerSel=""

function themePicker(){
    let themeOpt=document.getElementById("themePicker").value;
    let headA=document.getElementsByTagName("head")[0];
    theme=document.createElement("link");
    theme.rel="stylesheet";
    theme.href=`${themeOpt.toLowerCase}.css`
    theme.id="style";
    headA.append(theme);
    console.log("themeee")

    
}