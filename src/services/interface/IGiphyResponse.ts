export interface IGiphyResponse {
	data: Array<{ url: string }>;
	meta: {
		status: number;
	};
}
