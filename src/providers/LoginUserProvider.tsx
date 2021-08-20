import { useState, createContext, Dispatch, SetStateAction, ReactNode } from 'react'
import { User } from '../types/api/user'

type loginUser = User & { isAdmin: boolean }

export type LoginUserContextType = {
  loginUser: (User & { isAdmin: boolean }) | null
  setLoginUser: Dispatch<SetStateAction<loginUser | null>>
}
export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<loginUser | null>(null)
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
