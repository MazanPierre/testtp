

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

describe('arrangement testing', function() {
	it('test OK arrangement', function() {
		var a = [[4, 3, 24], [3, 2, 6]];  
		for(var i = 0; i < a.length; i++) {
			expect(Util.arrangement(a[i][0], a[i][1])).toEqual(a[i][2]);
		}
	});
});
