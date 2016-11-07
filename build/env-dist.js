'use strict';

/**
 * Environment constants.
 *
 * This configuration file contains all of the environment-specific values
 * needed to build a working website. The common values should be committed to
 * the `env.js.dist` file. A non-committed environment-specific copy of
 * the file should then be made to setup production, staging, and sandboxes as
 * needed.
 *
 * @class Config
 * @static
 */
var Config = {

    /**
     * Path to uncompiled source files. No trailing slash.
     *
     * @property DIR_SRC
     * @type String
     */
    DIR_SRC: 'src/',

    /**e
     * Path to the WordPress theme directory.
     *
     * @property DIR_THEME
     * @type String
     */
    DIR_THEME: '../'
};

module.exports = Config;
