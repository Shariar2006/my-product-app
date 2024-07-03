import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ limit = 10, skip = 0 }) => `products?limit=${limit}&skip=${skip}`,
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
        getCategories: builder.query({
            query: () => 'products/categories',
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `products/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
    }),
})


export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetCategoriesQuery,
    useUpdateProductMutation,
} = api;
