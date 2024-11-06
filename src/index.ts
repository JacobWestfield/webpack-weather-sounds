"use strict";
import "./index.css";
import summerSound from "./assets/sounds/summer.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import winterSound from "./assets/sounds/winter.mp3";

class Sound {
    sound: HTMLAudioElement;
    isOn: boolean;
    soundControl: HTMLInputElement;

    /**
     * Class contructor
     * @param {HTMLAudioElement} sound Sound object that will be operated by this instance
     * @param {HTMLInputElement} soundControl Sound control input (type "range") for sound object in this instance
     */
    constructor(sound: HTMLAudioElement, soundControl: HTMLInputElement) {
        this.sound = sound;
        this.isOn = false;
        this.soundControl = soundControl;
    }

    /**
     * Turning on/off sound playback and changing HTMLInputElement's visibility according to it's current status
     */
    togglePlay(): void {
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

    /**
     *Changes volume for audio object in this instance
     * @param {string} value
     */
    adjustVolume(value: number) {
        this.sound.volume = value;
    }
}

const bgClasses: Array<string> = ["bg-summer", "bg-rainy", "bg-winter"];

const bgImage = document.getElementById("bg-image") as HTMLElement;

const summerBtn = document.getElementById("summer") as HTMLElement;
const rainBtn = document.getElementById("rainy") as HTMLElement;
const winterBtn = document.getElementById("winter") as HTMLElement;

const summerAudio: HTMLAudioElement = new Audio(summerSound);
const rainAudio: HTMLAudioElement = new Audio(rainSound);
const winterAudio: HTMLAudioElement = new Audio(winterSound);

const summerVolumeControl = document.getElementById(
    "summer-volume"
) as HTMLInputElement;
const rainVolumeControl = document.getElementById(
    "rain-volume"
) as HTMLInputElement;
const winterVolumeControl = document.getElementById(
    "winter-volume"
) as HTMLInputElement;

const summerSoundObject = new Sound(summerAudio, summerVolumeControl);
const rainSoundObject = new Sound(rainAudio, rainVolumeControl);
const winterSoundObject = new Sound(winterAudio, winterVolumeControl);

summerVolumeControl.addEventListener("input", (e: Event): void => {
    summerSoundObject.adjustVolume(
        Number((e.target as HTMLInputElement).value)
    );
});
rainVolumeControl.addEventListener("input", (e: Event): void => {
    rainSoundObject.adjustVolume(Number((e.target as HTMLInputElement).value));
});
winterVolumeControl.addEventListener("input", (e: Event): void => {
    winterSoundObject.adjustVolume(
        Number((e.target as HTMLInputElement).value)
    );
});

summerBtn.addEventListener("click", (): void => {
    if (rainSoundObject.isOn) rainSoundObject.togglePlay();
    if (winterSoundObject.isOn) winterSoundObject.togglePlay();
    summerSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-summer");
});

rainBtn.addEventListener("click", (): void => {
    if (summerSoundObject.isOn) summerSoundObject.togglePlay();
    if (winterSoundObject.isOn) winterSoundObject.togglePlay();
    rainSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-rainy");
});

winterBtn.addEventListener("click", (): void => {
    if (rainSoundObject.isOn) rainSoundObject.togglePlay();
    if (summerSoundObject.isOn) summerSoundObject.togglePlay();
    winterSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-winter");
});
