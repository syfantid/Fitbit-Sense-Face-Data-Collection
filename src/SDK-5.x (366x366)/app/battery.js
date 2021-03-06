import document from "document"; 
import { battery } from "power";

//Battery - START
export let batteryLine = document.getElementById("battery-line");
export let batteryLineFront = document.getElementById("battery-line-front");
export let batteryLineBack = document.getElementById("battery-line-back");
export let batteryIconCharge = document.getElementById("battery-icon-charge");
export let batteryIcon = document.getElementById("battery-icon");
export let batteryPercent = document.getElementById("battery-percent");
export let batteryPercentBlock = document.getElementById("battery");

export let colour0 = '#FF0000';
export let colour25 = 'lightseagreen';
export let colour50 = 'steelblue';
export let colour75 = '#00FF00';
//Battery - END

export function setShowBatteryPercent(visibility) {
  batteryPercentBlock.style.display = (!visibility ? "none" : "inline");
}

export function setShowBatteryBar(visibility) {
  console.log("Battery bar: " + visibility)
  batteryLine.style.display = (!visibility ? "none" : "inline");
}

export function setFont(font) {
  batteryPercent.style.fontFamily = font;
}

export function setColour0(colour) {
  colour0 = colour;
  drawBat();
}

export function setColour25(colour) {
  colour25 = colour;
  drawBat();
}

export function setColour50(colour) {
  colour50 = colour;
  drawBat();
}

export function setColour75(colour) {
  colour75 = colour;
  drawBat();
}

//Battery Draw - START
export function drawBat() {
  let level = battery.chargeLevel;
  
  isCharging();   
  
  let batteryPercentage = Math.floor(level);
  batteryPercent.text = `${batteryPercentage}%`
  
  let sweep = Math.floor(180*(batteryPercentage/100));
  batteryLineFront.sweepAngle = sweep;
  
  if (batteryPercentage >= 75)
  {
    setColour(colour75);
  }
  else if (batteryPercentage >= 50)
  {
    setColour(colour50);
  }
  else if (batteryPercentage >= 25)
  {
    setColour(colour25);
  }
  else
  {
    setColour(colour0);
  }  
}

export function setColour(colour){
  batteryLineFront.style.fill = colour;
  batteryIconCharge.style.fill = colour;
  batteryIcon.style.fill = colour;
  batteryPercent.style.fill = colour;
}

export function isCharging(){
  if(battery.charging){
    batteryIconCharge.style.display = "inline";
    batteryIcon.style.display = "none";
  }
  else{
    batteryIconCharge.style.display = "none";
    batteryIcon.style.display = "inline";
  }   
}

drawBat();

//Battery Draw - END