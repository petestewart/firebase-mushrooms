import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMycologists = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologists.json`)
    .then((response) => {
    // take the response
      const mycologistsObjects = response.data;
      // format it into an array of objects
      const mycologists = [];
      // add the id onto each object and put into array
      Object.keys(mycologistsObjects).forEach((mycologistId) => {
        mycologistsObjects[mycologistId].id = mycologistId;
        mycologists.push(mycologistsObjects[mycologistId]);
      });
      // resolve the new array
      resolve(mycologists);
    })
    .catch((err) => reject(err));
});

export default { getMycologists };
