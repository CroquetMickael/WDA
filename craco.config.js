const { POSTCSS_MODES } = require("@craco/craco");

module.exports = {
    webpack: {
        configure: {
            externals: {
                sqlite3: "commonjs sqlite3",
                squel: "commonjs squel"
            },
            target: "electron-renderer"
        }
    },
    style: {
        postcss: {
            mode: POSTCSS_MODES.file
        }
    }
};