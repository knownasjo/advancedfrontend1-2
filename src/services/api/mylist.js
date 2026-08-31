import apiClient from './client'

const RESOURCE = '/mylist'

export async function getMyList() {
  const response = await apiClient.get(RESOURCE)
  return response.data
}

export async function addMyListItem(item) {
  const response = await apiClient.post(RESOURCE, item)
  return response.data
}

export async function updateMyListItem(id, updates) {
  const response = await apiClient.put(`${RESOURCE}/${id}`, updates)
  return response.data
}

export async function deleteMyListItem(id) {
  const response = await apiClient.delete(`${RESOURCE}/${id}`)
  return response.data
}
