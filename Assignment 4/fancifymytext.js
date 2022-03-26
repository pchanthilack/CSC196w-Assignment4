
function callfunction(){
      alert("hello world :)");
};


var textarea = document.getElementById("user_input");
function makeTextBig(){
      textarea.style.fontSize="24pt";
}


document.getElementsByName("fancify")[0].addEventListener("change",function(){
      textarea.style.fontWeight="bold";
      textarea.style.color="green";
      textarea.style.textDecoration="underline"
      textarea.style.textDecorationColor="red";
      alert("Text has been made fancy");
  })

  document.getElementsByName("fancify")[1].addEventListener("change",function(){
      textarea.style.fontWeight="normal";
      textarea.style.color="black";
      textarea.style.textDecoration="none"
      alert("Text has been made boring");
  })

  function mooFunc(){
        textarea.style.textTransform="uppercase";
        let str=textarea.value.split(".");
        let str2=str.join("-Moo");
        textarea.value=str2;
        alert("MOO!")
  }