export const useCoreStore = defineStore(
  'coreStore',
  () => {
    const token = ref('')

    const setToken = (value: string) => {
      token.value = value
    }

    return { token, setToken }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
