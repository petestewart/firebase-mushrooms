import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';
import mushroomComponent from '../mushroom/mushroom';
import newMushroom from '../newMushroom/newMushroom';
import smash from '../../helpers/data/smash';
import mycologistMushroomData from '../../helpers/data/mycologistMushroomsData';

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;
  smash.totallyRemoveShroomie(mushroomId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
    })
    .catch((err) => console.error('could not delete shroom', err));
};

const addShroomEvent = (e) => {
  e.preventDefault();

  const newMush = {
    name: $('#mush-name').val(),
    size: $('#mush-size').val(),
    location: $('#mush-location').val(),
    weight: $('#mush-weight').val() * 1,
  };

  mushroomData.addMushroom(newMush)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      utils.printToDom('#new-shroom', '');
    })
    .catch((err) => console.error('could not add mushroom', err));
};

const mycoMushroomController = (e) => {
  // e.preventDefault();
  // console.error(e);
  // e.target.checked
  // e.dataset.mycologistUid
  // if checked, create relationship
  if (e.target.checked) {
    const newMycoMushroom = {
      mushroomId: e.target.closest('.card').id,
      mycologistUid: e.target.dataset.mycologistUid,
    };
    mycologistMushroomData.addMycologistMushroom(newMycoMushroom)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        buildForest();
        utils.printToDom('#single-myco', '');
        utils.printToDom('#new-shroom', '');
      })
      .catch((err) => console.error(err));
    console.error(newMycoMushroom);
  } else {
    mycologistMushroomData.deleteMycoMushroom(e.target.id)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        buildForest();
        utils.printToDom('#single-myco', '');
        utils.printToDom('#new-shroom', '');
      })
      .catch((err) => console.error(err));
  }
  // else, delete existing relationship
};

const buildForest = () => {
  // smash.getMushroomsWithOwners()
  //   .then((testDataObj) => console.error('it worked, ', testDataObj))
  //   .catch((err) => console.error(err));

  smash.getMushroomsWithOwners()
    .then((mushrooms) => {
      // console.error('get mushrooms worked!', mushrooms);
      let domString = `
      <h2 class="text-center">Forest</h2>
      <button class="btn btn-success" id="show-add-mush">Add New Shroom</button>
      <div class="d-flex flex-wrap">
    `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';
      utils.printToDom('#forest', domString);
    })
    .catch((error) => console.error('get mushrooms broke', error));
};

const forestEvents = () => {
  $('body').on('click', '.delete-shroom', removeShroomEvent);
  $('body').on('click', '#show-add-mush', newMushroom.showForm);
  $('body').on('click', '#mush-creator', addShroomEvent);
  $('body').on('click', '.myco-shroom-checkbox', mycoMushroomController);
};

export default { buildForest, forestEvents };
