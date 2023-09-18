escrever = msg => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if (delta<0) return "não possui raiz real.";
    if (delta == 0)return div(-b,mult(2,a));
    return "x1 = " + div(soma (-b,raiz(delta)), mult(2,a)) + "x2 = " + div(soma (b,raiz(delta)), mult(2,a));
}
let a = 0;
let b = 0;
let resultado = 0;
let executar = "";

calcular = () =>{
    if(executar = "soma") mostrar_resultado (soma(a,b));
    if(executar = "sub") mostrar_resultado (sub(a,b));
    if(executar = "div") mostrar_resultado (div (a,b));
    if(executar = "mult") mostrar_resultado (mult(a,b));
}

//tentando... 1000  x 22/100 + 1000
//escrever(equacao2Grau(3,-2,-1));
