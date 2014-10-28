var test = require('tape');
var parse = require('./');
var strTest = 'Oct 28 12:59:57 linuxvm02 haproxy[25089]: 192.168.100.1:34686 [28/Oct/2014:12:59:57.123] frontend0 cluster0/node0 1/2/3/4/5 200 571 - - --VN 6/7/8/9/10 11/12 "GET /do-thing-nowish HTTP/1.1"';

test('test line parsing', function (t) {
    t.plan(1);

    var obj = parse(strTest);
    var expect = {
        "date": Date("Tue Oct 28 2014 14:50:33 GMT-0400 (EDT)"),
        "host": "linuxvm02",
        "process_name": "haproxy",
        "pid": 25089,
        "client_ip": "192.168.100.1",
        "client_port": 34686,
        "accept_date": Date("Tue Oct 28 2014 14:50:33 GMT-0400 (EDT)"),
        "frontend_name": "frontend0",
        "backend_name": "cluster0",
        "server_name": "node0",
        "tq": 1,
        "tw": 2,
        "tc": 3,
        "tr": 4,
        "tt": 5,
        "status_code": "200",
        "bytes_read": 571,
        "captured_request_cookie": "-",
        "captured_response_cookie": "-",
        "terminiation_state": "--VN",
        "actconn": 6,
        "feconn": 7,
        "beconn": 8,
        "srv_conn": 9,
        "retries": 10,
        "srv_queue": 11,
        "backend_queue": 12,
        "method": "GET",
        "request": "/do-thing-nowish",
        "version": "HTTP/1.1"
    }

    t.deepEqual(obj, expect);
    t.end();
});
