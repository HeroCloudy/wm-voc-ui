import WmVocInput from './index.vue'
import PropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/types.ts'
import { defaultProps } from './config.ts'

export default WmVocInput

export const WmVocInputInfo: ComponentConfig = {
  type: 'input',
  title: '输入框',
  component: WmVocInput,
  defaultProps,
  propComponent: PropForm,
}
