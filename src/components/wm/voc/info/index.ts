import WmVocInfo from './index.vue'
import PropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/types.ts'
import { defaultProps } from './config.ts'

export default WmVocInfo

export const WmVocInfoInfo: ComponentConfig = {
  type: 'info',
  title: '问卷信息',
  component: WmVocInfo,
  defaultProps,
  propComponent: PropForm,
}
