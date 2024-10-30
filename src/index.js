"use strict";
import "./index.css";
import summerSound from "./assets/sounds/summer.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import winterSound from "./assets/sounds/winter.mp3";

class Sound {
    constructor(sound, soundControl) {
        this.sound = sound;
        this.isOn = false;
        this.soundControl = soundControl;
    }

    togglePlay() {
        if (this.isOn) {
            this.sound.pause();
            this.isOn = false;
            this.soundControl.classList.add("hidden");
        } else {
            this.sound.play();
            this.isOn = true;
            this.soundControl.classList.remove("hidden");
        }
    }

    adjustVolume(value) {
        this.sound.volume = value;
    }
}

// function togglePlay(sound) {
//     let isOn = false;

//     return function () {
//         if (isOn) {
//             sound.pause();
//             isOn = false;
//         } else {
//             sound.play();
//             isOn = true;
//         }
//     };
// }

const bgClasses = ["bg-summer", "bg-rainy", "bg-winter"];

const bgImage = document.getElementById("bg-image");

const summerBtn = document.getElementById("summer");
const rainBtn = document.getElementById("rainy");
const winterBtn = document.getElementById("winter");

const summerAudio = new Audio(summerSound);
const rainAudio = new Audio(rainSound);
const winterAudio = new Audio(winterSound);

const summerVolumeControl = document.getElementById("summer-volume");
const rainVolumeControl = document.getElementById("rain-volume");
const winterVolumeControl = document.getElementById("winter-volume");

summerVolumeControl.addEventListener("input", (e) => {
    summerSoundObject.adjustVolume(e.target.value);
});
rainVolumeControl.addEventListener("input", (e) => {
    rainSoundObject.adjustVolume(e.target.value);
});
winterVolumeControl.addEventListener("input", (e) => {
    winterSoundObject.adjustVolume(e.target.value);
});

const summerSoundObject = new Sound(summerAudio, summerVolumeControl);
const rainSoundObject = new Sound(rainAudio, rainVolumeControl);
const winterSoundObject = new Sound(winterAudio, winterVolumeControl);

summerBtn.addEventListener("click", () => {
    if (rainSoundObject.isOn) rainSoundObject.togglePlay();
    if (winterSoundObject.isOn) winterSoundObject.togglePlay();
    summerSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-summer");
});

rainBtn.addEventListener("click", () => {
    if (summerSoundObject.isOn) summerSoundObject.togglePlay();
    if (winterSoundObject.isOn) winterSoundObject.togglePlay();
    rainSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-rainy");
});

winterBtn.addEventListener("click", () => {
    if (rainSoundObject.isOn) rainSoundObject.togglePlay();
    if (summerSoundObject.isOn) summerSoundObject.togglePlay();
    winterSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-winter");
});
