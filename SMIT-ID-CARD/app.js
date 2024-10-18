let name = prompt ("Enter Your Name");
let course = prompt("Enter Your Course name \n Web & Mobile Application \n Graphics Design \n Modern WMA \n 3D Animation \n Video Animation")
let campus = prompt ("Numaish \n Paposh \n Gulshan \n Malir")
let roll = prompt (" Enter Your Roll no")
document.write( name , "<br>", course , "<br>" , campus , "<br>", roll , "<br>")
if( course == "Web & Mobile Application" ||course== "WMA" || course== "Modern WMA"|| course=="3D Animation" || course =="Video Animation"){
    document.write("Congratulation!! You're Enrolled in SMIT")
 if( campus == "Numaish" || campus== "Paposh" || campus=="Gulshan"  || campus=="Malir"){
    document.write("Congratulation!! You're Enrolled in SMIT")
}
else{
    document.write("sorry!! You're not Enrolled in SMIT")
}
}