/** @format */

import { ApiService } from "../ApiService";

const authEndpoints = ApiService.injectEndpoints({
	endpoints: (builder) => ({
		Signin: builder.mutation({
			query: (arg) => ({
				url: "/user",
				method: "POST",
				body: arg,
			}),
		}),

		getAuth: builder.query({
			query: () => ({
				url: "user",
				method: "GET",
			}),
		}),

		// getProfile: builder.query({
		// 	query: () => ({
		// 		url: "/user-profile",
		// 		method: "GET",
		// 	}),
		// }),

		// logout: builder.mutation({
		// 	query: () => ({
		// 		url: "/user-logout",
		// 		method: "POST",
		// 	}),
		// 	invalidatesTags: ["auth"],
		// }),
	}),
});

export const { useSigninMutation, useGetAuthQuery } = authEndpoints;
