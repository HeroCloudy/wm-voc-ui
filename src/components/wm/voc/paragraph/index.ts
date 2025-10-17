import WmVocParagraph from './index.vue'
import PropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/types.ts'
import { defaultProps } from './config.ts'

export default WmVocParagraph

export const WmVocParagraphInfo: ComponentConfig = {
  type: 'paragraph',
  title: '段落',
  component: WmVocParagraph,
  defaultProps,
  propComponent: PropForm,
}
