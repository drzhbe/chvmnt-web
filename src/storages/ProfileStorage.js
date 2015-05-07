var localStorage = require('./LocalStorage');
function ProfileStorage() {
	this.storage = localStorage;
	this.key = 'profile';
	if (!this.storage[this.key]) this.storage[this.key] = '{}';
}
ProfileStorage.prototype.get = function(key) {
	return this._all()[key];
};
ProfileStorage.prototype.add = function(key, val) {
	var values = this._all();
	values[key] = val;
	this._set(JSON.stringify(values));
};
ProfileStorage.prototype.remove = function(key) {
	var values = this._all();
	values.key = undefined;
	this._set(JSON.stringify(values));
};
ProfileStorage.prototype._set = function(val) {
	this.storage[this.key] = val;
};
ProfileStorage.prototype._all = function() {
	return JSON.parse(this.storage[this.key]);
};

module.exports = new ProfileStorage();