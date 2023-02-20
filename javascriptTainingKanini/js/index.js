var customer={
    id:101,
    name:"ramu",
    age:21
}
function assignCustomerData(){
    customer.id=document.getElementById("txtCID").value ;
    customer.name=document.getElementById("txtCName").value ;
    customer.age=document.getElementById("txtCAge").value ;

    console.log(customer);
}
function showCustomerData(){
    var showData=document.getElementById("mydiv");
    showData.innerHTML=customer.id +""+customer.name+""+customer.age;
}