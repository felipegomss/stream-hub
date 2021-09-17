const BASE_URL = 'https://api.themoviedb.org/3/'
// const API_KEY = 'f8aa2b4202ca0004d90f16be4f20efb0'

const baseFetch = async (endpoint) => {
  const req = await fetch(`${BASE_URL}${endpoint}`)
  const json = await req.json()
  return json
}

const date = new Date()
const data = {
  getTrending: async () => {
    return [
      {
        slug: 'popular',
        title: 'Popular Today',
        items: await baseFetch(
          'trending/all/day?api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      },
      {
        slug: 'popular movies',
        title: 'Popular Movies',
        items: await baseFetch(
          'trending/movie/week?api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      },
      {
        slug: 'popular tv',
        title: 'Popular Tv Shows',
        items: await baseFetch(
          'trending/tv/week?api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      }
    ]
  },
  getMovies: async () => {
    return [
      {
        slug: 'popular movies',
        title: 'Popular Movies',
        items: await baseFetch(
          'trending/movie/week?api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      },
      {
        slug: 'theatres movies',
        title: 'Movies in Theatres',
        items: await baseFetch(
          `discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=${date.getFullYear()}-0${date.getMonth()}-${date.getDate()}&api_key=f8aa2b4202ca0004d90f16be4f20efb0`
        )
      },
      {
        slug: 'highest rated movies',
        title: 'Highest Rated Movies',
        items: await baseFetch(
          'discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      },
      {
        slug: 'year best movie',
        title: `${date.getFullYear()}'s Best Movies`,
        items: await baseFetch(
          `discover/movie?primary_release_year=${date.getFullYear()}&sort_by=vote_average.desc&api_key=f8aa2b4202ca0004d90f16be4f20efb0`
        )
      }
    ]
  },
  getTv: async () => {
    return [
      {
        slug: 'popular tv',
        title: 'Popular Tv Shows',
        items: await baseFetch(
          'trending/tv/week?api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      },
      {
        slug: 'highest rated shpws',
        title: 'Highest Rated Shows',
        items: await baseFetch(
          'discover/tv/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      },
      {
        slug: 'bests drama shows',
        title: `${date.getFullYear()}'s Best Drama Shows`,
        items: await baseFetch(
          `discover/tv?with_genres=18&primary_release_year=${date.getFullYear()}&api_key=f8aa2b4202ca0004d90f16be4f20efb0`
        )
      }
    ]
  }
}

export default data
