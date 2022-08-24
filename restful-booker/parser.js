import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const BookingIds_CSV = new SharedArray('booking id data', function () {
    return papaparse.parse(open('./bookingIds.csv'), { header: false }).data;
  });


function getRandomBookingId(){

    return BookingIds_CSV[Math.floor(Math.random() * BookingIds_CSV.length)][0];
}

module.exports = {
    getRandomBookingId
}