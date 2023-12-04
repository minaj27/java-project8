function handleCalculate(){
    var yourage = document.getElementById("yourage").value;
    var myage = document.getElementById("myage").value;
    
    var difference=yourage-myage;
    alert(difference);
    handleClear();
}
function handleClear(){
    document.getElementById("yourage").value="";
    document.getElementById("myage").value= "";
}