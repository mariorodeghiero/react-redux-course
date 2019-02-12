import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 545ba910c3a8ab7083c164f8427dfb4d653d83d12e8bc8b7228d202b4290a218'
     }
})