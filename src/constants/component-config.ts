import { WmVocTitleInfo } from '@/components/wm/voc/title/index.ts'
import { WmVocInputInfo } from '@/components/wm/voc/input/index.ts'

export const componentInfoList = [WmVocTitleInfo, WmVocInputInfo]

export const componentGroup = [
  {
    groupName: '文本显示',
    components: [WmVocTitleInfo],
  },
  {
    groupName: '用户输入',
    components: [WmVocInputInfo],
  },
]

export const getComponent = (type: string) =>
  componentInfoList.find((item) => item.type === type)?.component ?? null
