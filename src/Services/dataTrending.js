const BASE_URL = 'https://api.themoviedb.org/3/trending/'
// const API_KEY = 'f8aa2b4202ca0004d90f16be4f20efb0'

const baseFetch = async (endpoint) => {
  const req = await fetch(`${BASE_URL}${endpoint}`)
  const json = await req.json()
  return json
}

const data = {
  getData: async () => {
    return [
      {
        slug: 'popular',
        title: 'Popular Today',
        items: await baseFetch(
          'all/day?api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      },
      {
        slug: 'popular movies',
        title: 'Popular Movies',
        items: await baseFetch(
          'movie/week?api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      },
      {
        slug: 'popular tv',
        title: 'Popular Tv Shows',
        items: await baseFetch(
          'tv/week?api_key=f8aa2b4202ca0004d90f16be4f20efb0'
        )
      }
    ]
  }
}

export default data
