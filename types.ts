export type Tasks = {
  items: Task[]
  tags: Tags,
  users: Users
}
export type Tags = {
  [key: string]: number
}
export type Users = {
  [key: string]: User
}
export type User = {
  name: string
  email: string
  avatar_url: string
}
export type Task = {
  category: CategoryType
  title: string
  tags: string[]
  checklist: Checklist[]
}
export type Checklist = {
  title: string
  checked: boolean
}
export enum CategoryType {

}