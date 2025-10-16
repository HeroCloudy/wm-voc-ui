import type { ComponentInfo } from '@/stores/modules/editor.ts'

export function getNextSelectedId(index: number, list: ComponentInfo[]) {
  if (index < 0) {
    return ''
  }
  // 计算删除后要选中的id
  const newIndex = index === list.length - 1 ? index - 1 : index + 1
  return list[newIndex]?.fe_id ?? ''
}
