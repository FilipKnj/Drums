const crashRide = document.querySelector('#crash-ride');
const hiHatTop = document.querySelector('#hihat-top');
const drumKeys = document.querySelectorAll(".key");


const animateCrashOrRide = () => {
    crashRide.style.transform = `rotate(0deg) scale(1.5)`;
}

const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px';
}

//Na window se dodeljuje event koji hvata keydown dogadjaj
window.addEventListener('keydown', (e) => {
    let code = e.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);

    //Linija koda koja zaustavlja protok ako element ne postoji
    if(!keyElement) return;

    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0;
    audio.play();

    switch (code) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
        case 73:
            animateHiHatClosed();
            break;
    }

    keyElement.classList.add('playing');
})

const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform') return;

    e.target.style.transform = `rotate(-7.2deg) scale(1.5)`;
}

const removeHiHatTopTransition = e => {
    if(e.propertyName !== 'top') return;

    e.target.style.top = `166px`;
}

const removeKeyTransition = e => {
    if(e.propertyName !== 'transition') return;

    e.target.classList.remove('playing')
}

crashRide.addEventListener('transitionend', removeCrashRideTransition);
hiHatTop.addEventListener('transitionend', removeHiHatTopTransition)

drumKeys.forEach(key => {
    key.addEventListener('transitionend', removeKeyTransition)
})





