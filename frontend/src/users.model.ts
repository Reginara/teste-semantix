export interface User {
  id?: number
  name: string
  email: string
  password: string
  userGroup: Object
}

export interface UserGroup {
  contractor: Object
  cooker: Object
  supplies: Object
}

export interface LoginData {
  email: string
  password: string
}


