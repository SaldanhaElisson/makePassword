
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const Creatmaisculas = () => String.fromCharCode(rand(64, 91));
const  creatMinus = () => String.fromCharCode(rand(97, 123))
const  creatNumber = () => String.fromCharCode(rand(48, 58))
const  Simbol = ')(*&¨%$#@!?:><.,}{][^~'


export default function creatPassword(qtd, maisculas, minus, simbol, numeros){
    const creatSimbol = Simbol[rand(0, Simbol.length)]
    console.log(creatSimbol)
    const password = [];
    qtd = Number(qtd)
    console.log(qtd)
    for(let i = 0; i <qtd; i++){
        maisculas && password.push(Creatmaisculas()) 
        minus && password.push(creatMinus()) 
        simbol && password.push(creatSimbol) 
        numeros  && password.push(creatNumber()) 
    }

    return password.join('').slice(0, qtd);

}



