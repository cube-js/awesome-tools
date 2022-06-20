import {getDate} from "./date";

function checkEvents () {
  return window?.sessionStorage?.getItem(`cubedev-event-banner_v1_${getDate()}`);
}

function readEvents () {
  const data = window?.sessionStorage?.getItem(`cubedev-event-banner_v1_${getDate()}`);
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function writeEvents (events) {
  window?.sessionStorage?.setItem(`cubedev-event-banner_v1_${getDate()}`, JSON.stringify(events));
}

export {checkEvents, readEvents, writeEvents};
