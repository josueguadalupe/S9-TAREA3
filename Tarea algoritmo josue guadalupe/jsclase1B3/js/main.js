class Numeros{
    vuelto(){
        let cant = document.getElementById("cantidad").value
        let preci = document.getElementById("precio").value
        let cost = document.getElementById("costo")
        let pag = document.getElementById("pago").value
        let resp = document.getElementById("resp")
        cost = cant*preci
        if(pag>=cost){
            resp.textContent = `Su cambio es de ${pag-cost}`
        }else{
            resp.textContent =`Su pago es menor al costo`
        }
    }
    multiplo(){
        let num = document.getElementById("num").value
        let mul = document.getElementById("multi").value
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        num = parseInt(num)
        mul = parseInt(mul)
        if (num % mul == 0) {
          resp.textContent = `${mul} Es multiplo de ${num}`  
        }else{
            resp.textContent = `${mul} No es multiplo de ${num}`
        }
    }
    divisores(){
        let num = document.getElementById("numeros").value
        let divisores = document.getElementById("resp")
        let divisor= []
        for (let i=1;i<=num;i++){
            if (num % i ==0) {
                divisor.push(i)
            }
        }
        divisores.textContent= `Los divisores son: ${divisor}`
    }
    sumadivisores(){
        let num= document.getElementById("numeros").value
        let sumaDivisores = document.getElementById("resp")
        num= parseInt(num)
        let ac=0
        for (let i=1;i<num;i++){
            if ( num%i==0){
               ac=ac+i
            }
        }
        sumaDivisores.textContent= `La suma de los divisores es: ${ac}`
    }
    cantidaddivisores(){
        let num= document.getElementById("numeros").value
        let cantidadDivisores= document.getElementById("resp")
        let cd=0
        for(let i=1;i<num;i++){
            if(num%i==0){
                cd= cd+1
            }
        }
        cantidadDivisores.textContent=`la cantidad de divisores es ${cd}`
    }
    perfecto(){
        let num= document.getElementById("numeros").value
        let numperfecto= document.getElementById("resp")
        num= parseInt(num)
        let ac=0
        for(let i=1;i<num;i++){
            if(num%i==0){
                ac=ac+i
            }
        }
        if(ac==num){
            numperfecto.textContent= `el ${num} si es numero perfecto`
        }else{
            numperfecto.textContent=`el ${num} no es numero perfecto`
        }
    }
    amigos(){
        let num1= document.getElementById("num1").value
        let num2= document.getElementById("num2").value
        let numamigos= document.getElementById("resp")
        num1=parseInt(num1)
        num2=parseInt(num2)
        let ac1=0, ac2=0
        for(let i=1;i<num1;i++){
            if(num1%i==0){
                ac1=ac1+i
            }
        }
        for(let i=1;i<num2;i++){
            if(num2%i==0){
                ac2=ac2+i
            }
        }
        if(ac2===ac1){
            numamigos.textContent= ` ${num1} y ${num2} si son amigos`
        }else{
            numamigos.textContent= ` ${num1} y ${num2} no son amigos`
        }
    }
    primo(){
        let num= document.getElementById("numeros").value
        let primo= document.getElementById("resp")
        let acu=0,divisor=2,band=1
        while(divisor<num && band==1){
            if(num%divisor==0){
                band=0
            }else{
                divisor=divisor+1
            }
        }
        if(band==1){
            primo.textContent= `el numero ${num} es primo`
        }else{
            primo.textContent= `el numero ${num} no es primo`
        }
    }
    primosgemelos(){
        let num1= document.getElementById("num1").value
        let num2= document.getElementById("num2").value
        let primosgemelos= document.getElementById("resp")
        let acu=0,divisor=2,divisor2=2,band1=1,band2=1
        while(divisor < num1 && band1==1){
            if(num1 % divisor==0){
                band1=0
            }else{
                divisor=divisor+1
            }
        }
        while(divisor2 < num2 && band2==1 && num1-num2==2){
            if(num2 % divisor2 ==0){
                band2=0
            }else{
                divisor2=divisor2+1
            }
        }
        if ( band1==1 && band2==1 && (Math.abs(num1-num2)==2)){
            primosgemelos.textContent= `el numero ${num1} y ${num2} son primos gemelos`
        }else{
            primosgemelos.textContent= `el numero ${num1} y ${num2} no son primos gemelos`
        }

    }
    numeroinvertido(){
        let numero=document.getElementById("numeros").value
        let numeroinvertido= document.getElementById("resp")
        let ni = 0;
        while (numero > 0) {
            ni = ni * 10 + (numero % 10);
            numero = Math.floor(numero / 10);
        }
        numeroinvertido.textContent= `el numero invertido es ${ni}`
    }
    cantidaddigitos(){
        let numero=document.getElementById("numeros").value
        let numeroinvertido= document.getElementById("resp")
        let ni = 0,contadordigitos=0
        while (numero > 0) {
            ni = ni * 10 + (numero % 10);
            numero = Math.floor(numero / 10);
            contadordigitos=contadordigitos+1
        }
        numeroinvertido.textContent= `la cantidad de digitos es ${contadordigitos}`
    }
    factorial(){
        let num = document.getElementById('numeros').value;
        let resultado = document.getElementById('resp');
        let factorial = 1;
        if (num === '') {
          resultado.textContent = 'Por favor, ingresa un número.';
        } else {
        num = parseInt(num);

        if (num === 0 || num === 1) {
        resultado.textContent = 'El factorial es 1.';
        } else {
          for (let i = 2; i <= num; i++) {
            factorial *= i;
          }
         resultado.textContent = 'El factorial es ' + factorial + '.';
         }
        }
      }
    exponente(){
        let base = parseFloat(document.getElementById("base").value);
        let exp = parseInt(document.getElementById("exp").value);
        let result = document.getElementById("resp");
      
        let acu = 1;
        let c = 1;
      
        while (c <= exp) {
          acu = acu * base;
          c = c + 1;
        }
        result.textContent = "El resultado es: " + acu;
      }
    tablamultiplicar(){
        let numeroIngresado = parseFloat(document.getElementById("num").value)
        let textarea = document.getElementById("resp")
        let tabla = ""
        for (let i = 1; i <= 12; i++) {
            let producto = i * numeroIngresado
            tabla = tabla + numeroIngresado + " * " + i + " = " + producto + "\n"
        }
        textarea.textContent = tabla
    }
    fibonaci(){
        let a = 0, b = 1, c = 0, cont = 2;
        let n = parseInt(document.getElementById("numeros").value);
        let res = document.getElementById("resp");
        let serie = a.toString() + " " + b.toString();
  
        if (n === 1) {
            res.textContent = "La secuencia de Fibonacci es: " + a;
        } else if (n === 2) {
            res.textContent = "La secuencia de Fibonacci es: " + serie;
        } else {
            while (cont < n) {
                c = a + b;
                serie = serie + " " + c.toString();
                a = b;
                b = c;
                cont++;
            }
            res.textContent = "La secuencia de Fibonacci es: " + serie;
        }
    }
}
const numero = new Numeros();

