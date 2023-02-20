var moives ={
    name:"sam",
    duration:"2hours",
    rating:1
}
function updateDetails(){
    moives.name=document.getElementById("moiveName").value ;
    moives.duration=document.getElementById("moiveDuration").value;
    moives.rating=document.getElementById("moiveRating").value;
    console.log(moives)
    document.getElementById("moiveName").value="" ;
    document.getElementById("moiveDuration").value="";
    document.getElementById("moiveRating").value="";
    
}
function  printDetails(){
    var x = document.createElement("TR");
    x.setAttribute("id","myTr");
   var d= document.getElementById("mytable").appendChild(x);
    d.innerHTML= "<td>"+ moives.name +"</td>" + "<td>"+ moives.duration +"</td>" +"<td>"+ moives.rating +"</td>" ;
  }