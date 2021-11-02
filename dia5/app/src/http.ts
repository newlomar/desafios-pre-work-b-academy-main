// type ValidHeaders = 'content-type' | 'accept'

// type Headers = {
//   [key in ValidHeaders]?: string
// }

// type Options = {
//   method: string,
//   headers: Headers,
//   body: string
// }

const request = (url:string, options?: RequestInit) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

type Methods = 'POST' | 'DELETE'

// type DataPost = {
//   plate: string,
//   image: string,
//   brandModel: string,
//   year: number,
//   color: string
// }

// type DataDelete = {
//   plate: string
// }

// type Data = DataPost | DataDelete

const createRequest = (method: Methods) => <T>(url:string, data: T) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = request
export const post = createRequest('POST')
export const del = createRequest('DELETE')
