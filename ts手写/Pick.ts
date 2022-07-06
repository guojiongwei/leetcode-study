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
