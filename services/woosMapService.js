export function woosMapService(query) {

  if (!query) { return }

  const buildQueryString = (params) => {
    const queryStringParts = []

    for (const key in params) {
      queryStringParts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
    }

    return queryStringParts.join('&')
  }
  const url = 'https://api.woosmap.com/localities/autocomplete/'
  const args = {
    key: 'woos-81a699ca-5082-3ffd-9f54-a684a4b82853',
    types: 'address',
    // types: 'postal_code|address',
    language: 'en',
    components: 'country:gb|country:je|country:im|country:gg',
    input: query
  }
  const params = buildQueryString(args)
  const transformArray = (arr) => {
    return arr.map((item) => {
      const newArr = item.description.split(',')
      const country = newArr.splice(-1, 1)

      return {
        city: newArr.splice(-2).join().trim(),
        address: newArr.join(),
        country: country.join().trim()
      }
    })
  }

  return fetch(`${url}?${params}`)
    .then((response) => response.json())
    .then((data) => transformArray(data.localities))
}
