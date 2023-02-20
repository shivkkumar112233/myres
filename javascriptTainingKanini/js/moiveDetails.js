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
function printDetails(){
    console.log(moives)

}
