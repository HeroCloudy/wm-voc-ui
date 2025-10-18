import Mock from 'mockjs'
import getComponentList from './getComponentList.js'
/**
 * @description 生成统计列表
 * @author 双越老师
 */

const Random = Mock.Random

export default function getStatList(len = 1000) {
  const componentList = getComponentList()

  const res = []

  for (let i = 0; i < len; i++) {
    // 一个用户的答卷
    const stat = {
      id: Random.id(),
    }

    // 增加各个组件的 id value
    componentList.forEach((c) => {
      const { fe_id, type, props } = c

      switch (type) {
        case 'input':
          stat[fe_id] = Random.ctitle()
          break
        case 'textarea':
          stat[fe_id] = Random.ctitle()
          break
        case 'radio':
          stat[fe_id] = props.options[0]
          break
        case 'checkbox':
          stat[fe_id] = `${props.options[0]},${props.options[1]}`
          break
      }
    })

    res.push(stat)
  }

  return res
}
