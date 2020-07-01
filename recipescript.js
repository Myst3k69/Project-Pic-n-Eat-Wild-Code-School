let list=['one','two','three','four','five'];
list.forEach(function(elem) {
  document.getElementById(elem).addEventListener("click", function(){
    let cls=document.getElementById(elem).className;
    if(cls.includes("unchecked"))
       {
   document.getElementById(elem).classList.remove("unchecked");
  document.getElementById(elem).classList.add("checked");
      }
    else
      {
  document.getElementById(elem).classList.remove("checked");     document.getElementById(elem).classList.add("unchecked");
      }
});
});
