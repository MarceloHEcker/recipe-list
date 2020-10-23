import order from '../../src/utils/RecipeAlphabeticalOrder';

describe('RecipeAlphabeticalOrderTest', () => {
	it('it should order object', async () => {
		const orderedObject = [
			{
				title: 'Abril',
				ingredients: [''],
				link: '',
				gif: '',
			},
			{
				title: 'Maio',
				ingredients: [''],
				link: '',
				gif: '',
			},
			{
				title: 'Marcelo',
				ingredients: [''],
				link: '',
				gif: '',
			},
			{
				title: 'Verão',
				ingredients: [''],
				link: '',
				gif: '',
			},
		];

		let unorderedObject = [
			{
				title: 'Marcelo',
				ingredients: [''],
				link: '',
				gif: '',
			},
			{
				title: 'Abril',
				ingredients: [''],
				link: '',
				gif: '',
			},
			{
				title: 'Maio',
				ingredients: [''],
				link: '',
				gif: '',
			},
			{
				title: 'Verão',
				ingredients: [''],
				link: '',
				gif: '',
			},
		];

		unorderedObject = order(unorderedObject);
		expect(unorderedObject).toEqual(orderedObject);
	});
});
