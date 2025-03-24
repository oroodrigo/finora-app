import { api } from "../lib/axios"

interface RegisterUserBody {
  name: string 
  email: string
  imageUrl?: string
}

export async function registerUser({
  email,
  name,
  imageUrl
}: RegisterUserBody) {
  await api.post('/users', { name, email, imageUrl})
}
