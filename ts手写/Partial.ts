interface IPerson {
  name: string
  age: number
  sex: '男' | '女'
}

// Partial<T>将T的所有属性变成可选的。
/**
 * 核心实现就是通过映射类型遍历T上所有的属性，
 * 然后将每个属性设置为可选属性
 */
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type IPerson1 = MyPartial<IPerson>

const person1: IPerson1 = {
  name: '不用指定其他参数'
}
console.log(person1)

// [P in keyof T]通过映射类型，遍历T上的所有属性
// ?:设置为属性为可选的
// T[P]设置类型为原来的类型

// 扩展一下，将制定的key变成可选类型:
/**
 * 主要通过K extends keyof T约束K必须为keyof T的子类型
 * keyof T得到的是T的所有key组成的联合类型
 */
type MyPartialOptional<T, K extends keyof T> = {
  [P in K]?: T[P]
}

/**
 * @example
 * type Eg1 = { key1?: string; key2?: number }
 */
type IPerson2 = MyPartialOptional<IPerson, 'name' | 'sex'>

const person2: IPerson1 = {}

console.log(person2)
export {}
