import { api } from "../lib/axios"


export interface SignInBody {
  email: string
}

export async function signIn({ email }: SignInBody) {
  const response = await api.post<{token: string}>('/authenticate', { email })

  return response.data.token
}
