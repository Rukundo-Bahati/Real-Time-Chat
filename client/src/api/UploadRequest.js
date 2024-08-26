import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const uploadImage = (data) => API.post('/upload/images', data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const uploadVideo = (data) => API.post('/upload/videos', data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const uploadFile = (data) => API.post('/upload/files', data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const uploadPost = (data) => API.post('/posts', data);
