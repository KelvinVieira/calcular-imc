
//buscando formulario
const form = document.querySelector('#formulario');
//quando houver um evento no botão, executa esta função
form.addEventListener('submit', function(event) {
    //formulario não será recaregado
    event.preventDefault();
    //buscando as tags e seus valores para uma variavel
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    // console.log('Evento Prevenido!')
    // setResultado('Olá Mundo!');
    //buscando somente os valores que contém dentro das tags
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //caso não seja o tipo, retorna false
    if(!peso){
        setResultado('peso invalido',false);
        return
    }
    if(!altura){
        setResultado('Altura invalida',false);
        return;
    }
    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é: ${imc} (${nivelImc})`;
    setResultado(msg, true);
});
/**
Menos do que 18,5 Abaixo do peso
Entre 18,5 e 24,9 Peso normal
Entre 25 e 29,9 Sobrepeso
Entre 30 e 34,9 Obesidade grau 1
Entre 35 e 39,9 Obesidade grau 2
Mais do que 40 Obsidade grau 3
 */
//função filtra em qual categoria o resultado de imc se encaixa
function getNivelImc(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
    if(imc >= 39.9){
        return nivel[5];
    }else if(imc >=34.9){
        return nivel[4];
    }else if(imc >=29.9){
        return nivel[3];
    }else if(imc >=24.9){
        return nivel[2];
    }else if(imc >=18.5){
        return nivel[1];
    }else if(imc < 18.5){
        return nivel[0];
        
    }
}
//calculo do imc
function getImc(peso,altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2)
}
//função para criação automatica de paragrafo.
function criaP(){
    //criando um elemento HTML
    const p = document.createElement('p');
    //definindo uma class HTML
    //  p.classList.add('paragrafo-resultado');
    //  //Enviando uma msg para tag HTML p
    //  p.innerHTML = 'Qualquer Coisa!'
    return p;
}
//atualização de dados no HTML
function setResultado (msg,isValid){
    const resultado = document.querySelector('.resultado');
    //manter vazio quando iniciado a função
    resultado.innerHTML = '';
    //buscando um novo paragrafo para trabalhar
    const p = criaP();
    //adiciona classe para executar mudanças no CSS
    if(isValid){
        console.log(`Aqui tem: ${isValid}`)
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad');
    }
    //inserindo valor dentro do paragrafo.
    p.innerHTML = msg;
    resultado.appendChild(p);
}