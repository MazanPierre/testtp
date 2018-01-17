describe('salut pierre', function() {
	function foo() {
		throw 'welcome';
	}

	it('michel est parti dormir', function() {
		expect('moi').toBe('moi');
	});
	it('remi regarde l\'écran', function() {
		expect('remi').not.toBe('michel');
	});
	it('younes a qu\'un seul S', function() {
		expect(foo).toThrow();
	});
});


describe('factoriel testing', function() {

	it('test OK factorial', function() {
		var a = [[0, 1], [1, 1], [2, 2], [3, 6], [4, 24], [5, 120]];

		for(var i = 0; i < a.length; i++) {
			expect(Util.factorial(a[i][0])).toEqual(a[i][1]);
		}
	});
	it('test KO throw', function() {
		expect(function() {Util.factorial(-1)}).toThrow('inf a 0');
	});
});

describe('arrangement testing, function() {
	it('test OK arrangement', function() {
		var a = [[7, 10, 604800]]  
	});
});
