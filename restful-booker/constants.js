import {getRandomBookingId} from './parser.js'

const RESTFUL_BOOKER_SERVICE_URL = "https://restful-booker.herokuapp.com/"
const CREATE_BOOKING="booking"
const GET_BOOKING="booking/" + getRandomBookingId()

const HEADER = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

module.exports = {
    RESTFUL_BOOKER_SERVICE_URL,
    HEADER,
    CREATE_BOOKING,
    GET_BOOKING
}