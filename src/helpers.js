export const fetchRequest = ({ url, method = 'GET', body }) => {
  const requestParams = {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }
  if (body) {
    requestParams.body = JSON.stringify(body)
  }
  return fetch(url, requestParams).then((response) =>
    response.json().then((json) => (response.ok ? json : Promise.reject(json)))
  )
}
