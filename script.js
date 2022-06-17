//Declaração de variáveis que representam as Checkbox;
let upperCb = document.getElementById('upper');
let lowerCb = document.getElementById('lower');
let numbersCb = document.getElementById('numbers');
let specialsCb = document.getElementById('specials');

// Função chamada quando o botão "GENERATE" é clicado -> html(44);
function generatePassword(){
    let possibilities = ''
    //Condicionais para acrescentar caracteres na variável "possibilities" de acordo com as checkbox marcadas;
    if(upperCb.checked){
        possibilities += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(lowerCb.checked){
        possibilities += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(numbersCb.checked){
        possibilities += '0123456789';
    }
    if(specialsCb.checked){
        possibilities += '!@#$%&*{}+=-';
    }

    let passwordLength = document.getElementById('sliderNumber').value;
    
    let newPassword = '';

    //Se nenhuma checkbox estiver marcada -> Impossível gerar senha (Retornar à função);
    if(possibilities == ''){
        document.getElementById('showPassword').innerHTML = possibilities;
        return;
    }
    //Loop para pegar aleatoriamente uma posição da variável "possibilities" e acrescentar na "newPassword";
    for(var i = 0; i < passwordLength; i++){
        var r = Math.floor(Math.random() * possibilities.length)
        newPassword += possibilities[r];
    }
    document.getElementById('showPassword').innerHTML = newPassword;
}

//Função chamada com a mudança de valor do "slider" -> HTML(21);
function changeSlider(){
    document.getElementById('numberLength').innerHTML = document.getElementById('sliderNumber').value;
}

//Função chamada quando o botão "Copy" é clicado -> HTML(17);
function copyClipboard(){
    const cb = navigator.clipboard;
    const paragraph = document.getElementById('showPassword');
    cb.writeText(paragraph.innerText).then(() => alert('Password copied!'));
}