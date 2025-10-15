export interface VocTitlePropsType {
  text?: string
  level?: 1 | 2 | 3
  isCenter?: boolean
}

export interface VocInputPropsType {
  title?: string
  placeholder?: string
}

export type VocComponentPropsType = VocTitlePropsType & VocInputPropsType
