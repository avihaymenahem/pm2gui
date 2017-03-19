const express = require("express");
const pm2 = require("pm2");
const os = require("os");
const app = express();
const port = 3000;

let connectAndExec = (onSuccess, onError) => {
    pm2.connect(function(err) {
        if (err) {
            console.error(err);
            process.exit(2);
            onError();
        }

        onSuccess();
    });
};

app.get('/serverinfo', function (req, res) {
    let hostcpu = os.cpus();

    res.send(JSON.stringify({
        "hostname" : os.hostname(),
        "cpus" : {
            count: hostcpu.length
        },
        "memory" : {
            "total" : os.totalmem(),
            "free" : os.freemem(),
        }
    }));
});

app.get('/list', function (req, res) {
    connectAndExec(() => {
        pm2.list((err, data) => {
            if (err) {
                console.error(err);
                process.exit(2);
            }

            res.send(data);
        });
    });
});

app.get('/stop/:id', function(req, res) {
    let reqId = req.params.id;

    if(!reqId) {
        return;
    }

    connectAndExec(() => {
        pm2.stop(reqId, (err, data) => {
            if (err) {
                console.error(err);
                process.exit(2);
            }

            res.send(data);
        });
    });
});

app.get('/start/:id', function(req, res) {
    let reqId = req.params.id;

    if(!reqId) {
        return;
    }

    connectAndExec(() => {
        pm2.start(reqId, (err, data) => {
            if (err) {
                console.error(err);
                process.exit(2);
            }

            res.send(data);
        });
    });
});

app.get('/delete/:id', function(req, res) {
    let reqId = req.params.id;

    if(!reqId) {
        return;
    }

    connectAndExec(() => {
        pm2.delete(reqId, (err, data) => {
            if (err) {
                console.error(err);
                process.exit(2);
            }

            res.send(data);
        });
    });
});

app.get('/reload/:id', function(req, res) {
    let reqId = req.params.id;

    if(!reqId) {
        return;
    }

    connectAndExec(() => {
        pm2.gracefulReload(reqId, (err, data) => {
            if (err) {
                console.error(err);
                process.exit(2);
            }

            res.send(data);
        });
    });
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});