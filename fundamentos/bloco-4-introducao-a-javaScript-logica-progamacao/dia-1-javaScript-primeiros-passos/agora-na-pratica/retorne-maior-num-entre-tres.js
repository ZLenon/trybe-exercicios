const num1 = 10;
const num2 = 20;
const num3 = 15;

if (num1 > num2 && num3) {
    console.log(num1,"É o maior numero!");
}else if(num2 > num1 && num3){
    console.log(num2,"É o maior numero");
}else if (num3 > num1 && num2) {
    console.log(num3,"É o maior numeoro");
}else {
    console.log("Os dois numeros são iguais")
}