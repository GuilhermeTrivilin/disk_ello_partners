// 2020-05-08T09:01:02.000Z => 08/05/2020
export const formatFromTimeZone = (timezone_time) => timezone_time?.split('T')[0].split('-').reverse().join('/')

// 08/05/2020 => 2020-05-08
export const formatToInternationalModel = (date) => date?.split('/').reverse().join('-')

// 2020-05-08 => 08/05/2020
export const formatToLocalModel = (date = '') => date?.split('-').reverse().join('/')

// 2020-05-08T09:01:02.000Z => 09:01
export const formatHourFromTimezone = (timezone_time) => timezone_time?.split('T')[1].split('.')[0].split(':').slice(0, 2).join(":")

// 1231231231321 (milliseconds) => 00:00:00
export const millisecondsToTime = (duration) => {
    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  }