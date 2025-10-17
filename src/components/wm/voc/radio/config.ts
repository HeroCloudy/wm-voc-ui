export interface VocRadioPropsType {
  title?: string
  isVertical?: boolean
  options?: string[]
  value?: string
}

export const defaultProps: any = {
  title: '单选框标题',
  isVertical: false,
  options: ['选项1', '选项2', '选项3'],
  value: '选项2',
}
