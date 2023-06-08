"use strict";

const config = require('config');
const fs = require('fs');

if (!config.roles) {
    config.roles = config.defaultRoles;
}

if (config.mysql.host && config.mysql.host.indexOf('.mysql.database.azure.com') != -1) {
    config.mysql.ssl = {
        ca: fs.readFileSync('/app/DigiCertGlobalRootCA.crt.pem')
    };
}
module.exports = config;