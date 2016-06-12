/**
 * @file fis css compressor 模块
 * @author sparklewhy@gmail.com
 */

'use strict';

var CleanCSS = require('clean-css');

module.exports = function (content, file, conf) {
    var _ = fis.util;
    var options = _.extend({
        advanced: false,
        aggressiveMerging: false,
        shorthandCompacting: false,
        compatibility: 'ie7',
        keepBreaks: true,
        relativeTo: file.dirname
    }, conf);

    var clean = new CleanCSS(options);
    return clean.minify(content).styles;
};
