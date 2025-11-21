document.addEventListener('DOMContentLoaded', init);

function init() {

    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

}

function setRandomPosition(element, error = null) {
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if (error) {
        throw error;
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function () {
        try {
            setRandomPosition(this, error);
        } catch (e) {
            showAlert(e.message)
            console.log(e.message)
        }

    })
}
function showAlert(message) {
    const alertEl = document.querySelector('.alert');
    const messageEl = document.querySelector('.alert__message');

    messageEl.textContent = message;
    alertEl.classList.remove('alert--hidden');

}
