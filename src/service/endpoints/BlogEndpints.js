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
				url: `ZoyaAllProducts/${id}`,
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

		getHomeSlide: builder.query({
			query: () => ({
				url: "HomeSlide",
				method: "GET",
			}),
		}),

		getLatestStyle: builder.query({
			query: () => ({
				url: "LatestStyle",
				method: "GET",
			}),
		}),

		getLatestStyle2: builder.query({
			query: () => ({
				url: "LatestStyle2",
				method: "GET",
			}),
		}),

		getLatestStyle3: builder.query({
			query: () => ({
				url: "LatestStyle3",
				method: "GET",
			}),
		}),
	}),
});

export const {
	useGetBlogQuery,
	useGetHomeSlideQuery,
	useGetLatestStyle3Query,
	useGetTagsQuery,
	useGetLatestQuery,
	useGetDateCollectionsQuery,
	useGetLatestStyleQuery,
	useGetLatestStyle2Query,
	useGetLoadingProductsQuery,
	useGetSlider1Query,
	useGetPopularQuery,
	useGetDetailQuery,
	useGetInstagramQuery,
	useGetDetailPostQuery,
	useGetProductsQuery,
} = BlogApi;
