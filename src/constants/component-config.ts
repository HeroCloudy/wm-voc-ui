import { WmVocTitleInfo } from '@/components/wm/voc/title/index.ts'
import { WmVocInputInfo } from '@/components/wm/voc/input/index.ts'
import { WmVocParagraphInfo } from '@/components/wm/voc/paragraph/index.ts'
import { WmVocInfoInfo } from '@/components/wm/voc/info/index.ts'
import { WmVocTextareaInfo } from '@/components/wm/voc/textarea/index.ts'
import { WmVocRadioInfo } from '@/components/wm/voc/radio/index.ts'
import { WmVocCheckboxInfo } from '@/components/wm/voc/checkbox/index.ts'
import type { ComponentInfo } from '@/stores/modules/editor.ts'

export const componentInfoList = [
  WmVocTitleInfo,
  WmVocInputInfo,
  WmVocParagraphInfo,
  WmVocInfoInfo,
  WmVocTextareaInfo,
  WmVocRadioInfo,
  WmVocCheckboxInfo,
]

const groupDisplay = [WmVocTitleInfo, WmVocParagraphInfo, WmVocInfoInfo]

const groupInput = [WmVocInputInfo, WmVocTextareaInfo, WmVocRadioInfo, WmVocCheckboxInfo]

export const componentGroup = [
  {
    groupName: '文本显示',
    components: groupDisplay,
  },
  {
    groupName: '用户输入',
    components: groupInput,
  },
]

export const UserInputTypes = groupInput.map((item) => item.type)

export const getComponentConfig = (type: string) =>
  componentInfoList.find((item) => item.type === type)

export const getComponent = (type: string) => getComponentConfig(type)?.component ?? null

export const isUserInputComponent = (type: string) => {
  return UserInputTypes.includes(type)
}
