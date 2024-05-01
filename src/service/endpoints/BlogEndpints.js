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

		getLatest: builder.query({
			query: () => ({
				url: "LatestPosts",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetBlogQuery, useGetLatestQuery } = BlogApi;
