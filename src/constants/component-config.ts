import { WmVocTitleInfo } from '@/components/wm/voc/title/index.ts'
import { WmVocInputInfo } from '@/components/wm/voc/input/index.ts'
import { WmVocParagraphInfo } from '@/components/wm/voc/paragraph/index.ts'
import { WmVocInfoInfo } from '@/components/wm/voc/info/index.ts'
import { WmVocTextareaInfo } from '@/components/wm/voc/textarea/index.ts'
import { WmVocRadioInfo } from '@/components/wm/voc/radio/index.ts'

export const componentInfoList = [
  WmVocTitleInfo,
  WmVocInputInfo,
  WmVocParagraphInfo,
  WmVocInfoInfo,
  WmVocTextareaInfo,
  WmVocRadioInfo,
]

export const componentGroup = [
  {
    groupName: '文本显示',
    components: [WmVocTitleInfo, WmVocParagraphInfo, WmVocInfoInfo],
  },
  {
    groupName: '用户输入',
    components: [WmVocInputInfo, WmVocTextareaInfo, WmVocRadioInfo],
  },
]

export const getComponentConfig = (type: string) =>
  componentInfoList.find((item) => item.type === type)

export const getComponent = (type: string) => getComponentConfig(type)?.component ?? null
