import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Game = {
  about: string
  title: string
  header_image: string
  background_image: string
}

export const apiFirst = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://store.steampowered.com/api'
  }),
  endpoints: (builder) => ({
    getAboutGame: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500'
    }),
    getTitleGame: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500'
    }),
    getHeaderImage: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500'
    }),
    getBackgroundImage: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500'
    })
  })
})

export const {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetTitleGameQuery,
  useGetBackgroundImageQuery
} = apiFirst
