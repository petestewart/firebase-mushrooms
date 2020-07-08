// import utils from '../utils';
import mycologistData from './mycologistData';
import mycologistMushroomData from './mycologistMushroomsData';
import mushroomData from './mushroomData';

const getSingleMycoWithShrooms = (mycologistId) => new Promise((resolve, reject) => {
  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      mycologist.mushrooms = [];
      mycologistMushroomData.getMycoShroomsByMycoUid(mycologist.uid).then((mycoShrooms) => {
        mushroomData.getMushrooms().then((allMushrooms) => {
          mycoShrooms.forEach((mycoShroom) => {
            const mushroom = allMushrooms.find((m) => m.id === mycoShroom.mushroomId);
            mycologist.mushrooms.push(mushroom);
          });
          resolve(mycologist);
        });
      });
    })
    .catch((err) => reject(err));
});

const totallyRemoveShroomie = (mushroomId) => new Promise((resolve, reject) => {
  mushroomData.deleteMushroom(mushroomId)
    .then(() => {
      mycologistMushroomData.getMycoShroomsByShroomId(mushroomId).then((mycoShrooms) => {
        mycoShrooms.forEach((mycologistMushroom) => {
          mycologistMushroomData.deleteMycoMushroom(mycologistMushroom.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

const getMushroomsWithOwners = () => new Promise((resolve, reject) => {
  mushroomData.getMushrooms()
    .then((allMushrooms) => {
      mycologistData.getMycologists().then((allMycos) => {
        mycologistMushroomData.getAllMycoShrooms().then((allMycoMushrooms) => {
          const finalMushrooms = [];
          // loop over each mushroom
          allMushrooms.forEach((oneMush) => {
            // add each myco to singleMush
            const mushroom = { mycologists: [], ...oneMush };

            // find all mycoMush's for current mush
            const mycoMushroomOwners = allMycoMushrooms.filter((mms) => mms.mushroomId === mushroom.id);

            allMycos.forEach((oneMyco) => {
              const myco = { ...oneMyco };
              // add oneMyco.isChecked if oneMyco owns this schroom
              const isOwner = mycoMushroomOwners.find((mms) => mms.mycologistUid === myco.uid);
              // add mycologistMushroomId, faking id where needed
              myco.isChecked = (isOwner !== undefined);
              myco.mycologistMushroomId = isOwner ? isOwner.id : `no-${mushroom.id}-${myco.id}`;
              mushroom.mycologists.push(myco);
            });

            finalMushrooms.push(mushroom);
          });
          resolve(finalMushrooms);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleMycoWithShrooms, totallyRemoveShroomie, getMushroomsWithOwners };
