
import { api } from '../../../Config/apiconfig'


export const getAll = (endpoint, data) => {
    return api.get(endpoint, data)
}
export const AddData = async (endpoint, data) => {
    return await api.post(endpoint, data)
}
export const Update = (endpoint, data) => {
    return api.put(endpoint, data)
}
export const DeleteData = (endpoint) => {
    return api.delete(endpoint)
}