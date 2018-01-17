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

