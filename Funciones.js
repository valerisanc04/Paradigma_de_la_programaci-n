function Suma(x) {
    let accion = x + 5;
    return accion;
};

console.log(Suma(7));


function Division(x) {
    let dividir = x / 2
    return dividir;
};

console.log(Division(10));

let resultado = 0;
function Sumarprecios(a, b) {
    return resultado = resultado + a * b ;
};

console.log(Sumarprecios(4, 6));
console.log(Sumarprecios(2, 3));
console.log(Sumarprecios(5, 8));

let palabra = "";
function Hola (c) {
    return palabra = palabra + c;
}

console.log(Hola("chicos "));
console.log(Hola("cansones "));
console.log(Hola("chao "));

function Multiplicar(a) {
    return a * a;
};
function SumaDeLaMultiplicacion(num1, num2) {
    return Multiplicar (num1) + Multiplicar(num2);

};
console.log(SumaDeLaMultiplicacion(3,4));