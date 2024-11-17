"use strict";
import "./index.css";
import summerSound from "./assets/sounds/summer.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import winterSound from "./assets/sounds/winter.mp3";

class Sound {
    private _sound: HTMLAudioElement;
    private _isOn: boolean;
    private _soundControl: HTMLInputElement;

    /**
     * Class contructor
     * @param {HTMLAudioElement} sound Sound object that will be operated by this instance
     * @param {HTMLInputElement} soundControl Sound control input (type "range") for sound object in this instance
     */
    constructor(sound: HTMLAudioElement, soundControl: HTMLInputElement) {
        this._sound = sound;
        this._isOn = false;
        this._soundControl = soundControl;
    }

    /**
     * Getter for playback status
     * @returns (boolean) Returns audio playback private status
     */
    get isOn(): boolean {
        return this._isOn;
    }

    /**
     * Turning on/off sound playback and changing HTMLInputElement's visibility according to it's current status
     */
    public togglePlay(): void {
        if (this._isOn) {
            this._sound.pause();
            this._isOn = false;
            this._soundControl.classList.add("hidden");
        } else {
            this._sound.play();
            this._isOn = true;
            this._soundControl.classList.remove("hidden");
        }
    }

    /**
     *Changes volume for audio object in this instance
     * @param {string} value
     */
    public adjustVolume(value: string): void {
        const convertedValue: number = Number(value);
        this._sound.volume = convertedValue;
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
    summerSoundObject.adjustVolume((<HTMLInputElement>e.target).value);
});
rainVolumeControl.addEventListener("input", (e: Event): void => {
    rainSoundObject.adjustVolume((<HTMLInputElement>e.target).value);
});
winterVolumeControl.addEventListener("input", (e: Event): void => {
    winterSoundObject.adjustVolume((<HTMLInputElement>e.target).value);
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
