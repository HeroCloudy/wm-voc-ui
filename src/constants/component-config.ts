import { WmVocTitleInfo } from '@/components/wm/voc/title/index.ts'
import { WmVocInputInfo } from '@/components/wm/voc/input/index.ts'
import { WmVocParagraphInfo } from '@/components/wm/voc/paragraph/index.ts'

export const componentInfoList = [WmVocTitleInfo, WmVocInputInfo, WmVocParagraphInfo]

export const componentGroup = [
  {
    groupName: '文本显示',
    components: [WmVocTitleInfo, WmVocParagraphInfo],
  },
  {
    groupName: '用户输入',
    components: [WmVocInputInfo],
  },
]

export const getComponentConfig = (type: string) =>
  componentInfoList.find((item) => item.type === type)

export const getComponent = (type: string) => getComponentConfig(type)?.component ?? null
