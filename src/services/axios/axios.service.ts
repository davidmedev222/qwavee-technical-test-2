import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://64ef7b6b219b3e2873c48fa2.mockapi.io',
  timeout: 1200
})
