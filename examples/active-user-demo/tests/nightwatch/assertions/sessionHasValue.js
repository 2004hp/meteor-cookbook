/**
 * Checks if the current url equals the given value.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.urlEquals('http://www.google.com');
 *    };
 * ```
 *
 * @method urlEquals
 * @param {string} expected The expected url.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(sessionVar, expectedValue, msg) {

  this.message = msg || util.format('Testing if the URL equals "%s".', expected);
  this.expected = expectedValue;

  this.pass = function(value) {
    return value === this.expectedValue;
  };

  this.value = function(result) {
    return result.value;
  };

  this.command = function(callback) {
    var self = this;
    this.api.execute(function(data){
      return Session.get(self.sessionVar);
    }, callback);
    return this;
  };

};
