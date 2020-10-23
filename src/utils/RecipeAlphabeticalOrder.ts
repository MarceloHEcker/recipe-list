interface RecipeObject {
	title: string;
	ingredients: Array<string>;
	link: string;
	gif: string;
	href?: string;
}

const order = (obj: Array<RecipeObject>): Array<RecipeObject> => {
	return obj.sort((a, b) => {
		if (a.title > b.title) return 1;

		if (a.title < b.title) return -1;
		return 0;
	});
};

export default order;
