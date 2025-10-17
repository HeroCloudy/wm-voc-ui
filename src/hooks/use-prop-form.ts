export function usePropForm(props: any, emits: any) {
  const form = ref({ ...props })

  watch(
    () => form.value,
    () => {
      emits('change', form.value)
    },
    {
      deep: true,
    },
  )

  watch(
    props,
    () => {
      form.value = { ...props }
    },
    {
      deep: true,
    },
  )

  return {
    form,
  }
}
