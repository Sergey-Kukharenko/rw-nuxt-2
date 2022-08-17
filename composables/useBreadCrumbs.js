export function useBreadCrumbs (route) {
  if (route.path === '/') { return }

  return route.path
    .split('/')
    .reduce((array, path, idx) => {
      idx === 0
        ? array.push({
          path: '/',
          text: 'main'
        })
        : array.push({
          path: array[idx - 1].path + (idx > 1 ? '/' : '') + path,
          text: path
        })

      return array
    }, [])
}
