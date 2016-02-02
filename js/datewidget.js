/*
 * Just write the date into a div 
 * using handlebars.
 */
var $ = require('jquery'),
    Handlebars = require('handlebars'),
    template = require('./templates/datetemplate.hbs');

module.exports = {
    render: function() {
        var html = template({date: new Date()});
        $('#placeholder').html(html);
    }
};
