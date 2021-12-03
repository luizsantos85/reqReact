// const baseUrl = 'https://apilaravel.lhscode.com.br/public/api';
const baseUrl = 'http://localhost:8000/api';

const request = async (method, endpoint, params, token = null) => {
   method = method.toLowerCase();
   let fullUrl = `${baseUrl}${endpoint}`;
   let body = null;
   switch (method) {
      case 'get':
         let queryString = new URLSearchParams(params).toString();
         fullUrl += `?${queryString}`;
         break;
      case 'post':
      case 'put':
      case 'delete':
         body = JSON.stringify(params);
         break;
   }
   let headers = { 'Content-Type': 'application/json' };
   if (token) {
      headers.Authorization = `Bearer ${token}`;
   }
   let req = await fetch(fullUrl, { method, headers, body });
   let json = await req.json();
   return json;
};

export default () => {
   return {
      getToken: () => {
         return localStorage.getItem('token');
      },
      validateToken: async () => {
         let token = localStorage.getItem('token');
         let json = await request('post', '/auth/validate', {}, token);
         return json;
      },
      login: async (email, password) => {
         let json = await request('post', '/auth/login', { email, password });
         return json;
      },
      getAllCars: async () => {
         let token = localStorage.getItem('token');
         let json = await request('get', '/cars', {}, token);
         return json;
      },
      addCar: async (data) => {
         let token = localStorage.getItem('token');
         let req = await fetch(`${baseUrl}/car`,{
            method:'POST',
            headers:{
               Authorization: `Bearer ${token}`
            },
            body: data
         });
         let json = await req.json();
         return json;
      },
      updateCar: async (fData, id) => {},
   };
};
