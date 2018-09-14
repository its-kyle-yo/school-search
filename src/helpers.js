import axios from 'axios'

const settings = {
  baseURL: 'https://api.data.gov/ed/collegescorecard/v1/schools.json?',
  api_key: 'z20Oxr8SwsZDZuOt3srArCmr55oJjLqDHYMOa572',
}

const buildRequestURL = (name, id) => {
  let urlString = settings.baseURL
  if (name && name !== '') {
    urlString += '&school.name=' + name
  }

  if (id && id !== '' && !isNaN(parseInt(id))) {
    urlString += '&school.id=' + id
  }

  urlString += '&api_key=' + settings.api_key
  return urlString
}

export const getSchoolByName = ({ name = '', id = '' }) => {
  const uri = encodeURI(buildRequestURL(name, id))
  console.log('Request URI: ', uri)
  const res = axios.get(uri).catch(err => console.error(err))
  console.log('API Response: ', res)
  return res
}
