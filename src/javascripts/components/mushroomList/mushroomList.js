import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';
import mushroomComponent from '../mushroom/mushroom';
import newMushroom from '../newMushroom/newMushroom';
import smash from '../../helpers/data/smash';

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

const buildForest = () => {
  mushroomData.getMushrooms()
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
      $('body').on('click', '.delete-shroom', removeShroomEvent);
      $('body').on('click', '#show-add-mush', newMushroom.showForm);
      $('body').on('click', '#mush-creator', addShroomEvent);
    })
    .catch((error) => console.error('get mushrooms broke', error));
};

export default { buildForest };
