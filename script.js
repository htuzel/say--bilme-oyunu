let randomNumber = Math.floor(Math.random() * 10) + 1;
let hak = 3;
let btnGues = document.querySelector('.btn_gues');
let btnagain = document.querySelector('.btn_again')
let lucky = document.querySelector('.lucky')
let btninput = document.querySelector('.btn_input');
let predictedNumber = document.querySelector('.predicted_number');
let random = document.querySelector('.random');



btnGues.addEventListener('click', oynat);
btnagain.addEventListener('click', resetBtn);

function oynat() {

    if (hak > 0) {
        hak--;

        sayı = Number(btninput.value);

        console.log(randomNumber);

        if (randomNumber == sayı) {
            predictedNumber.innerText = 'tebrikler bildiniz';
            predictedNumber.style.backgroundColor = 'green';
            predictedNumber.style.color = 'black';
            stopGame();

        } else {
            predictedNumber.innerText = 'yanlış bildiniz'
            predictedNumber.style.backgroundColor = 'red';
            predictedNumber.style.color = 'black';
        }
        if (hak === 0) {
            lucky.innerText = 'hakkınız bitti'
            btnGues.classList.add('btn_hide');
            btnagain.classList.remove('btn_hide');
            random.textContent = ('bilmeniz gereken sayı :' + randomNumber)
        }
    }
}

function stopGame() {
    btnGues.remove();
}

function resetBtn() {
    hak = 3;
    btnagain.classList.add('btn_hide');
    btnGues.classList.add('btn_show');
    predictedNumber.innerText = '';
    btninput.textContent.value = '';
    lucky.innerText = '';
    random.innerText = '';

    alert('tekrar başlayın')
    randomNumber = Math.floor(Math.random() * 10) + 1;
}

//let heart = document.querySelectorAll('.gamebox_head > i')[hak - 1];
