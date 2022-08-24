import http from 'k6/http';
import {sleep, check, group} from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import {textSummary} from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

import {RESTFUL_BOOKER_SERVICE_URL} from './constants.js'
import {CREATE_BOOKING} from './constants.js'
import {GET_BOOKING} from './constants.js'

import {HEADER} from './constants.js'

export const options = {
    stages: [
        {target: 5, duration: '10s'},
        {target: 10, duration: '20s'},
        {target: 0, duration: '10s'},
        ],
};

export default function (data) {
    group('Restful Booker Load Testing', function () {
        group('Create Booking', function () {
            var url = RESTFUL_BOOKER_SERVICE_URL + CREATE_BOOKING;
            var header = HEADER;
            let request = JSON.stringify({
                        "firstname": randomString(10),
                        "lastname": randomString(10),
                        "totalprice": randomIntBetween(1, 100),
                        "depositpaid": true,
                        "bookingdates": {
                            "checkin": "2018-01-01",
                            "checkout": "2019-01-01"
                        },
                        "additionalneeds": randomString(10)
            });
            
           let res = http.post(url, request, header);
           check(res, {
                "status is 200": (r) => r.status === 200
            });    
        });
        
        group('Get Booking', function () {
           var url = "RESTFUL_BOOKER_SERVICE_URL + GET_BOOKING";
           var header = HEADER;
           let res = http.get(url, header);
           check(res, {
                "status is 200": (r) => r.status === 200
            });    
        });
        
    });
    sleep(1);
}
