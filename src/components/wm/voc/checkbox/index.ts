import WmVocCheckbox from './index.vue'
import PropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/types.ts'
import { defaultProps } from './config.ts'

export default WmVocCheckbox

export const WmVocCheckboxInfo: ComponentConfig = {
  type: 'checkbox',
  title: '复选框',
  component: WmVocCheckbox,
  defaultProps,
  propComponent: PropForm,
}
