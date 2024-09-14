export type ICategory = {
	id: string;
	title: string;
};

export type IAuthor = {
	name: string;
	avatar?: {
		url: string;
		fileName: string;
	};
};

export type IBlogTag = {
	tags: string[];
};

export type IBlog = {
	id: string;
	slug: string;
	title: string;
	smallDescription: string;
	updatedAt: string;
	content: {
		markdown: string;
	};
	category: ICategory;
	author: IAuthor;
	blogTags: IBlogTag;
};

export type IBlogQueryResponse = {
	blog: IBlog;
};

export type IBlogsQueryResponse = {
	blogs: IBlog[];
};

export type ICategoriesQueryResponse = {
	categories: ICategory[];
};
