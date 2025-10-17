import type { Component } from 'vue'
import type { VocInputPropsType } from './wm/voc/input/config.ts'
import type { VocTitlePropsType } from './wm/voc/title/config.ts'
import type { VocParagraphPropsType } from './wm/voc/paragraph/config.ts'
import type { VocInfoPropsType } from '@/components/wm/voc/info/config.ts'
import type { VocTextareaPropsType } from '@/components/wm/voc/textarea/config.ts'
import type { VocRadioPropsType } from '@/components/wm/voc/radio/config.ts'

export type VocComponentPropsType = VocTitlePropsType &
  VocInputPropsType &
  VocParagraphPropsType &
  VocInfoPropsType &
  VocTextareaPropsType &
  VocRadioPropsType

/**
 * 每个组件需要导出的配置信息的结构定义
 */
export interface ComponentConfig {
  type: string
  title: string
  defaultProps: Partial<VocComponentPropsType>
  component: Component
  propComponent: Component
}
