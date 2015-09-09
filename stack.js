
function Stack(items) {
	this.items = items || [];
	this.size = this.items.length;

	this.push = function(item) {
		this.items.push(item);
		return item;
	};

	this.pop = function() {
		return this.items.pop();
	};

	this.top = function() {
		if (this.items.length < 1) return null;
		else return this.items[this.items.length - 1];
	};

	this.print = function() {
		console.log('Bottom - ' + this.items.join(', ') + ' - Top');
	};

	this.max = function() {
		return applyMath.bind(this)('max');
	};

	this.min = function() {
		return applyMath.bind(this)('min');
	};

	function applyMath(fnName) {
		return Math[fnName].apply(null, this.items);
	}
}