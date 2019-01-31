function calculateTip(){
  var price=document.getElementById("amount").value;
  var dis=document.getElementById("discount").value;
  var tax=document.getElementById("gst").value;
  var disamt=dis*price/100;
  var taxamt=tax*(price-disamt)/100;
  var netamt=price-disamt+taxamt;
  document.getElementById("payamount").style.display="block";
  document.getElementById("net").style.display="block";
  document.getElementById("net").innerHTML="&#x20b9;"+netamt;
}
document.getElementById("submit").onclick=function(e){
  e.preventDefault();
  calculateTip();
};

document.getElementById("net").style.display="none";
document.getElementById("payamount").style.display="none";