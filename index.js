var fields = {
    'date' : Date
    , 'host' : String
    , 'process_name' : String
    , 'pid' : parseInt
    , 'client_ip' : String
    , 'client_port' : parseInt
    , 'accept_date' : Date
    , 'frontend_name' : String
    , 'backend_name' : String
    , 'server_name' : String
    , 'tq' : parseInt
    , 'tw' : parseInt
    , 'tc' : parseInt
    , 'tr' : parseInt
    , 'tt' : parseInt
    , 'status_code' : String
    , 'bytes_read' : parseInt
    , 'captured_request_cookie' : String
    , 'captured_response_cookie' : String
    , 'terminiation_state' : String
    , 'actconn' : parseInt
    , 'feconn' : parseInt
    , 'beconn' : parseInt
    , 'srv_conn' : parseInt
    , 'retries' : parseInt
    , 'srv_queue' : parseInt
    , 'backend_queue' : parseInt
//  , 'requestHeaders'
//  , 'responseHeaders'
    , 'method' : String
    , 'request' : String
    , 'version' : String
};

var keys = Object.keys(fields);

module.exports = parseLine;

function parseLine (str) {
    var reg = /^(\w+ \d+ \S+) (\S+) (\S+)\[(\d+)\]: (\S+):(\d+) \[(\S+)\] (\S+) (\S+)\/(\S+) (\S+)\/(\S+)\/(\S+)\/(\S+)\/(\S+) (\S+) (\S+) *(\S+) (\S+) (\S+) (\S+)\/(\S+)\/(\S+)\/(\S+)\/(\S+) (\S+)\/(\S+) "(\S+) ([^"]+) (\S+)" *$/gi
        , obj
        , matches
        ;

    matches = reg.exec(str);
    
    if (!matches) {
        return null;
    }

    obj = {};
    matches.forEach(function (val, ix) {
        if (ix === 0 ) return;

        obj[keys[ix - 1]] = fields[keys[ix - 1]](val);
    });

    return obj;
}

