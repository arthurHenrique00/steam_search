import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Game = {
  name: string
  header_image: string
  short_description: string
}

export const apiFirst = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://cors-anywhere.herokuapp.com/https://store.steampowered.com/api/'
  }),
  endpoints: (builder) => ({
    getAboutGame: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    }),
    getTitleGame: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    }),
    getHeaderImage: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    })
  })
})

export const {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetTitleGameQuery
} = apiFirst
