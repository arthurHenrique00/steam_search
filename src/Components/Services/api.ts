import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Game = {
  name: string
  header_image: string
  short_description: string
  capsule_image: string
  price_overview: {
    initial_formatted: string
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
    getAboutGame: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    }),
    getHeaderImage: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    }),
    getPrice: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    }),
    getRequirements: builder.query<Game, void>({
      query: () => 'appdetails?appids=1091500',
      transformResponse: (response: any) => response['1091500'].data
    })
  })
})

export const {
  useGetAboutGameQuery,
  useGetHeaderImageQuery,
  useGetPriceQuery,
  useGetRequirementsQuery
} = apiFirst
