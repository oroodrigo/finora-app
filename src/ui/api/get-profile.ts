import { api } from "../lib/axios"


export interface GetProfileResponse {
  user: {
    id: string
    name: string
    email: string
    imageUrl: string | null
    createdAt: Date
  }
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data.user
}
