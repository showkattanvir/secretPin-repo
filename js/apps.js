function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
});
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calsInput = document.getElementById('type-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calsInput.value = '';
        }
    }
    else {
        const previousNumber = calsInput.value;
        const newNumber = previousNumber + number;
        calsInput.value = newNumber;
    }
})
//MATCHING PIN;
document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('type-number').value;
    const notifyCorret = document.getElementById('notify-corret');
    const notifyWrong = document.getElementById('notify-wrong');
    if (displayPin == typeNumber) {

        notifyCorret.style.display = 'block';
        notifyWrong.style.display = 'none';

    }
    else {
        notifyCorret.style.display = 'none';
        notifyWrong.style.display = 'block';
    }
})




