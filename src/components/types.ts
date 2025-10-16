import type { Component } from 'vue'
import type { VocInputPropsType } from './wm/voc/input/config.ts'
import type { VocTitlePropsType } from './wm/voc/title/config.ts'

export type VocComponentPropsType = VocTitlePropsType & VocInputPropsType

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
