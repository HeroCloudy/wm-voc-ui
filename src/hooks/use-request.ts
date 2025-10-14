export interface UseRequestOption {
  manual?: boolean
  onSuccess?: (v: any) => void
  onError?: (e: any) => void
}
export type UseRequestServiceType = () => any

export function useRequest(service: UseRequestServiceType, options: UseRequestOption = {}) {
  const loading = ref(false)
  const data = ref<any>()
  const error = ref<unknown>()

  const { manual, onError, onSuccess } = options || {}

  const run = async () => {
    loading.value = true
    try {
      const resp = await service()
      data.value = resp
      loading.value = false

      if (onSuccess) {
        onSuccess(resp)
      }
    } catch (e) {
      console.error(e)
      error.value = e
      loading.value = false
      if (onError) {
        onError(e)
      }
    } finally {
      loading.value = false
    }
  }

  if (!manual) {
    run()
  }

  return {
    loading,
    data,
    error,
    run,
  }
}
