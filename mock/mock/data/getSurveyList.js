import Mock from 'mockjs'
/**
 * @description 生成问卷列表
 */

const Random = Mock.Random

function getSurveyList(opt = {}) {
  const { len = 10, isDeleted = false, isStar = false } = opt
  const list = []
  for (let i = 0; i < len; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      answerCount: Random.natural(50, 100),
      createAt: Random.datetime(),
      isDeleted, // 假删除
    })
  }
  return list
}

export default getSurveyList
