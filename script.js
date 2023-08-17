let skills=document.getElementsByClassName("skills");
let contents=document.getElementsByClassName("contents");

function linkopen(tabname){
    for(skill of skills)
    {
        skill.classList.remove("active-part")
    }
    for(content of contents){
        content.classList.remove("active-part1")
    }
    event.currentTarget.classList.add("active-part");
    document.getElementById(tabname).classList.add("active-part1");
    

}
let menubar=document.getElementById("menubar");
let bar=document.getElementsByClassName("fa-bars")
let x=document.getElementsByClassName("fa-xmark")
    function openmenu(){
        menubar.style.right="0";
       
        bar[0].style.visibility='hidden';
    }
    function closemenu(){
        menubar.style.right="-200px";
        bar[0].style.visibility='visible';
       
    }