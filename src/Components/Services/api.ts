import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Game = {
  name: string
  header_image: string
  short_description: string
  capsule_image: string
  price_overview: {
    final_formatted: string
  }
  pc_requirements: {
    minimun: string
    recommended: string
  }
}

export const apiFirst = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://cors-anywhere.herokuapp.com/https://store.steampowered.com/api/'
  }),
  endpoints: (builder) => ({
    getAboutGame: builder.query<Game, string>({
      query: (gameId) => `appdetails?appids=${gameId}`,
      transformResponse: (response: any, meta, gameId) => response[gameId].data
    }),
    getHeaderImage: builder.query<Game, string>({
      query: (gameId) => `appdetails?appids=${gameId}`,
      transformResponse: (response: any, meta, gameId) => response[gameId].data
    }),
    getPrice: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    }),
    getRequirements: builder.query<Game, string>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    }),
    getNameGame: builder.query<Game, string>({
      query: (gameId) => `appdetails?appids=${gameId}`,
      transformResponse: (response: any, meta, gameId) => response[gameId].data
    })
  })
})

export const {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetPriceQuery,
  useGetRequirementsQuery,
  useGetNameGameQuery
} = apiFirst
