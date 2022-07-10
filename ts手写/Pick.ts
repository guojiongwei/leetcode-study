/**
 * 从某个类型中选择一部分类型组成新的类型
 * 主要实现是通过传人的类型遍历所有key，
 * 然后获取到对应key的类型注解返回新的类型
 */

interface IPerson {
  name: string
  age: number
  sex: '男' | '女'
}

// 实现Pcik
type MyPick<T, K extends keyof T> = {
  [ P in K ]: T[P]
}

type IPerson1 = MyPick<IPerson, 'name' | 'age'>

const person1: IPerson1 = {
  name: '哈哈',
  age: 20
}
