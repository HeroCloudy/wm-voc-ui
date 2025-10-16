import WmVocInput from './index.vue'
import type { ComponentExportType } from '@/components/types.ts'

export default WmVocInput

export const WmVocInputInfo: ComponentExportType = {
  type: 'input',
  title: '输入框',
  component: WmVocInput,
}
