import { api } from "@/ui/lib/axios";
import { Category } from "../types";

interface FetchCategoriesResponse {
  categories: Category[]
}

export async function fetchCategories() {
  const response = await api.get<FetchCategoriesResponse>('/categories')

  return response.data.categories
}