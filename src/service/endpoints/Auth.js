/** @format */

import { ApiService } from "../ApiService";

const authEndpoints = ApiService.injectEndpoints({
	endpoints: (builder) => ({
		Signin: builder.mutation({
			query: (arg) => ({
				url: "/login",
				method: "POST",
				body: arg,
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

export const { useSigninMutation } = authEndpoints;
