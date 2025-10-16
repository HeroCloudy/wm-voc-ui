export interface VocTitlePropsType {
  text?: string
  level?: 1 | 2 | 3
  isCenter?: boolean
}

export const defaultProps: VocTitlePropsType = {
  text: '一行标题',
  level: 1,
  isCenter: false,
}
