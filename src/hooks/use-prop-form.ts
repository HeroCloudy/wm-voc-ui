import type { VocComponentPropsType } from '@/components/types.ts'

export function usePropForm(props: VocComponentPropsType, emits: any) {
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
