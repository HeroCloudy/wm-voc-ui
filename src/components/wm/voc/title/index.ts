import WmVocTitle from './index.vue'
import type { ComponentExportType } from '@/components/types.ts'

export default WmVocTitle

export const WmVocTitleInfo: ComponentExportType = {
  type: 'title',
  title: '标题',
  component: WmVocTitle,
}
