haproxy-log-parse
-----------------

Parse haproxy http log lines into Javascript objects

install
-------

```bash
npm install haproxy-log-parse
```

usage
-----

```js
var parse = require('haproxy-log-parse');

console.log(parse(haproxyline));
```

```json
{
        "date": "Tue Oct 28 2014 14:50:33 GMT-0400 (EDT)",
        "host": "linuxvm02",
        "process_name": "haproxy",
        "pid": 25089,
        "client_ip": "192.168.100.1",
        "client_port": 34686,
        "accept_date": "Tue Oct 28 2014 14:50:33 GMT-0400 (EDT)",
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
```

license
-------
MIT


