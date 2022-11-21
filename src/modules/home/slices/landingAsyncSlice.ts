import { globalApi } from '../../../app/globalAsync'

export const landingAsyncSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<any[], any>({
      query: () => ({
        url: 'http://38.242.148.91:3000/api/quick-links/feeds/test',
      }),
    }),
  }),
})
export const { useGetNewsQuery } = landingAsyncSlice
