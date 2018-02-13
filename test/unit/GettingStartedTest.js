describe('test unit getting started', function() {
	function foo() {
		throw 'welcome';
	}

	it('moi equal moi', function() {
		expect('moi').toBe('moi');
	});
	it('remi not equal michel', function() {
		expect('remi').not.toBe('michel');
	});
	it('foo expected to throw', function() {
		expect(foo).toThrow();
	});
});

