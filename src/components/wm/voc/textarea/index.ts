import WmVocTextarea from './index.vue'
import PropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/types.ts'
import { defaultProps } from './config.ts'

export default WmVocTextarea

export const WmVocTextareaInfo: ComponentConfig = {
  type: 'textarea',
  title: '多行输入框',
  component: WmVocTextarea,
  defaultProps,
  propComponent: PropForm,
}
