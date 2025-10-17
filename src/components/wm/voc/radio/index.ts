import WmVocRadio from './index.vue'
import PropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/types.ts'
import { defaultProps } from './config.ts'

export default WmVocRadio

export const WmVocRadioInfo: ComponentConfig = {
  type: 'radio',
  title: '单选框',
  component: WmVocRadio,
  defaultProps,
  propComponent: PropForm,
}
