export async function woosMapService(query) {
  if (!query) {
    return;
  }

  const url = 'https://api.woosmap.com/localities/autocomplete/';
  const result = [];

  const params = new URLSearchParams({
    key: 'woos-81a699ca-5082-3ffd-9f54-a684a4b82853',
    types: 'address',
    language: 'en',
    components: 'country:gb|country:je|country:im|country:gg',
    input: query
  });

  try {
    const transformArray = (arr) => {
      return arr.map((item) => {
        const newArr = item.description.split(',');
        const country = newArr.splice(-1, 1);

        return {
          city: newArr.splice(-2).join().trim(),
          address: newArr.join(),
          country: country.join().trim()
        };
      });
    };

    const response = await fetch(`${url}?${params}`);
    const {localities} = await response.json();
    result.push(...transformArray(localities));
  } catch (error) {
    throw new Error(error);
  }

  return result;
}
