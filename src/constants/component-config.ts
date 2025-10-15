import WmVocTitle from '@/components/wm/voc/title/index.vue'
import WmVocInput from '@/components/wm/voc/input/index.vue'

export const componentMap: Record<string, any> = {
  title: WmVocTitle,
  input: WmVocInput,
}

export const componentGroup = [
  {
    groupName: '文本显示',
    components: [WmVocTitle],
  },
  {
    groupName: '用户输入',
    components: [WmVocInput],
  },
]
