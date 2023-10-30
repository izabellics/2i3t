let a = "";
let b = "";
let c = "";
let sa = "+";
let sb = "+";
let sc = "+";
let valor = "";
let executar = "";
let temPonto = false;
let desligada = false;
soma = (a,b) => Number(a) + Number(b);
sub = (a,b) => Number(a) - Number(b);
mult = (a,b) => Number(a) * Number(b);
div = (a,b) => Number(a) / Number(b);
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    document.getElementById("delta").innerHTML = delta;
    if (delta < 0) return "Não possui raiz Real.";
    if (delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           " x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}
function mostrar_resultado(){
    document.getElementById("resultado").value = valor;
}
function calcular(){
    if(executar != ""){
        b = valor;
        if(executar == "soma") valor = soma(a,b);
        if(executar == "sub") valor = sub(a,b);
        if(executar == "div") valor = div(a,b);
        if(executar == "mult") valor = mult(a,b);
        if(executar == 'porc') valor = 0;
        if(executar == "raiz") valor = raiz(a);
        mostrar_resultado();
        executar = "";
        a = "";
        b = "";
        valor = "";
        temPonto = false;
    }
}
function desliga(){
    if(desligada){
        zerar();
    }else{
        zerar();
        mostrar_resultado();
    }
    return desligada;
}
desliga();
function calcula_raiz(){
    if(valor==""){
        valor=0;
    }
    valor = raiz(valor);
    mostrar_resultado();
}
function porcentagem(){
    if(executar == "mult"){
        b = valor;   
        valor = div (mult(a,b),100);
        mostrar_resultado();
     }
}
function zerar(){
    if(desligada) return;
    a = "";
    b = "";
    valor = "0";
    executar = "";
    mostrar_resultado();
    valor = "";
}
function operacao(op){
    executar = op;
    a = valor;
    valor = "";
}
function digitando(tecla){
   if (tecla == "."){
       if(!temPonto) {
         valor = valor + tecla;
         mostrar_resultado();const set_sinal_a = () =>{
            a = document.getElementById("sinal_a").value;
            calcular_equacao();
        }
         temPonto = true;
       }
       return;
   }
   valor = valor + tecla;
   mostrar_resultado();
}

const calcular_equacao = () =>{
    if(a != "" && a != "0"){
        if(a != "+"){a = -(Number(a))} else {a=Number(a)};
        if(a != "+"){a = -(Number(b))} else {a=Number(b)};
        if(a != "+"){a = -(Number(c))} else {a=Number(c)};
       // alert(sa+a+"x2 " +sb+b + "x " + sc + c + "=0");
       document.getElementById("raiz").innerHTML = equacao2Grau(a,b,c);
    }
}

const set_sinal_a = () =>{
    sa = document.getElementById("sinal_a").value;
    calcular_equacao();
}
const set_sinal_b = () =>{
    sb = document.getElementById("sinal_b").value;
    calcular_equacao();
}
const set_sinal_c= () =>{
    sc = document.getElementById("sinal_c").value;
    calcular_equacao();
}

const set_valor_a = () =>{
    sc = document.getElementById("sinal_a").value;
    calcular_equacao();
}
const set_valor_b = () =>{
    sc = document.getElementById("sinal_b").value;
    calcular_equacao();
}
const set_valor_c = () =>{
    sc = document.getElementById("sinal_c").value;
    calcular_equacao();
}