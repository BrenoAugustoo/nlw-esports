import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.22.153.154:3333'
})