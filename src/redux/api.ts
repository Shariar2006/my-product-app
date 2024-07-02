import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit = 10, skip = 0 }) => `products?limit=${limit}&skip=${skip}`,
    })
    }),
  })


export const {
  useGetProductsQuery,
} = api;
