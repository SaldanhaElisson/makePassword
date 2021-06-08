import createPassword from './creatPassword'

const senhaGerada = document.querySelector('.senha-gerada')
const qntCaracteres = document.querySelector('.qtd-caracteres')
const chkMaisculas = document.querySelector('.chk-maisculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')

console.log(chkMaisculas)

    
export default () => {
    gerarSenha.addEventListener('click', () => {
        console.log('oi')
        senhaGerada.innerHTML = gera()
    })
}

function gera(){
    console.log('oi')
    const senha = createPassword(
        qntCaracteres.value,
        chkMaisculas.checked,
        chkMinusculas.checked,
        chkSimbolos.checked,
        chkNumeros.checked
        
        );

        return senha || 'Nada selecionado';


}