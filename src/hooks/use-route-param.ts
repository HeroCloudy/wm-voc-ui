export function useRouteParam() {
  const route = useRoute()
  return route.params || {}
}
