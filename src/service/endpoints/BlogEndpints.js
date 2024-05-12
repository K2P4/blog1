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

		getSlider1: builder.query({
			query: () => ({
				url: "SlideZoya",
				method: "GET",
			}),
		}),

		getPopular: builder.query({
			query: () => ({
				url: "ZoyaPouplar",
				method: "GET",
			}),
		}),

		getProducts: builder.query({
			query: () => ({
				url: "ZoyaProducts",
				method: "GET",
			}),
		}),
		getLoadingProducts: builder.query({
			query: () => ({
				url: "LoadingProducts",
				method: "GET",
			}),
		}),
		getInstagram: builder.query({
			query: () => ({
				url: "InstagramList",
				method: "GET",
			}),
		}),

		getDetail: builder.query({
			query: (id) => ({
				url: `LatestPosts/${id}`,
				method: "GET",
			}),
		}),

		getDetailPost: builder.query({
			query: () => ({
				url: "DetailPost",
				method: "GET",
			}),
		}),

		getTags: builder.query({
			query: () => ({
				url: "Tags",
				method: "GET",
			}),
		}),

		getDateCollections: builder.query({
			query: () => ({
				url: "DateCollection",
				method: "GET",
			}),
		}),
	}),
});

export const {
	useGetBlogQuery,
	useGetTagsQuery,
	useGetLatestQuery,
	useGetDateCollectionsQuery,

	useGetLoadingProductsQuery,
	useGetSlider1Query,
	useGetPopularQuery,
	useGetDetailQuery,
	useGetInstagramQuery,
	useGetDetailPostQuery,
	useGetProductsQuery,
} = BlogApi;
