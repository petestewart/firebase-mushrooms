import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMushrooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mushrooms.json`)
    .then((response) => {
      // take the response
      const mushroomObjects = response.data;
      // format it into an array of objects
      const mushrooms = [];
      // adding the id onto each object and add to array
      if (mushroomObjects) {
        Object.keys(mushroomObjects).forEach((mushroomId) => {
          mushroomObjects[mushroomId].id = mushroomId;
          mushrooms.push(mushroomObjects[mushroomId]);
        });
      }
      // resolve the new array of objects
      resolve(mushrooms);
    })
    .catch((err) => reject(err));
});

const deleteMushroom = (mushroomId) => axios.delete(`${baseUrl}/mushrooms/${mushroomId}.json`);

export default { getMushrooms, deleteMushroom };
