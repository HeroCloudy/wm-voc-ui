import WmVocTitle from './index.vue'
import PropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/types.ts'
import { defaultProps } from './config.ts'

export default WmVocTitle

export const WmVocTitleInfo: ComponentConfig = {
  type: 'title',
  title: '标题',
  component: WmVocTitle,
  defaultProps,
  propComponent: PropForm,
}
