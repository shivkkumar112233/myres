var data="<p>this is a para </p>";
function divClick(){
    document.getElementById("div1").innerHTML=data;
}
function getData(){
    var body_Data=document.body;
    console.log(body_Data);
}
function getDivs(){
    var divs_Data=document.getElementsByTagName("div");
    console.log(divs_Data);
    console.log(divs_Data[0].id);
}
function addNewButton(){
    var body_Data=document.body;
    var myButton=document.createElement("button");
    myButton.innerHTML="i am a new <br><br>";
     myButton.id= "buttonNew";
    myButton.addEventListener("click",function (){
        alert("hey i am added ");

    });
    body_Data.append(myButton);
}
// array function 
//  myButtonClick()=>
//     alert("hey i am added ");
// anonyoums function
// function (){
//     alert("hey i am added ");

// }