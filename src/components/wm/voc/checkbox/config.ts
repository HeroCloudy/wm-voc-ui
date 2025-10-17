export interface VocCheckboxPropsType {
  title?: string
  isVertical?: boolean
  options?: string[]
  value?: string[]
}

export const defaultProps: any = {
  title: '复选框标题',
  isVertical: false,
  options: ['选项1', '选项2', '选项3'],
  value: [],
}
