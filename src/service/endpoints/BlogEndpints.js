/** @format */

import { ApiService } from "../ApiService";

const BlogApi = ApiService.injectEndpoints({
	endpoints: (builder) => ({
		getBlog: builder.query({
			query: () => ({
				url: "zoyaHiro",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetBlogQuery } = BlogApi;
