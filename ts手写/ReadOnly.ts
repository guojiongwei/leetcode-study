/**
 * 把类型所有属性变成只读的
 * 主要实现是通过映射遍历所有key，
 * 然后给每个key增加一个readonly修饰符
 */

interface IPerson {
  name: string
  age: number
  sex: '男' | '女'
}

// 实现Readonly

// keyof遍历后，添加readonly注解
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type IPerson1 = MyReadonly<IPerson>

const person1: IPerson1 = {
  name: '哈哈',
  age: 20,
  sex: '男'
}

// 会报错
// person1.age = 111

export {}
