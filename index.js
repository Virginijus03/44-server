const server = require('./lib/server')

const app = {}

app.init = () => {
    //paruosti reikiamas direktorijas

    //paruosti reikiamas failus

    //paleisti serveri
    server.init();
}

app.init();

module.exports = app;