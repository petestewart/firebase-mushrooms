import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';
import mushroomComponent from '../mushroom/mushroom';
import smash from '../../helpers/data/smash';

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;
  console.error(mushroomId);
  smash.totallyRemoveShroomie(mushroomId)
    .then((response) => {
      console.error('response?', response);

      // eslint-disable-next-line no-use-before-define
      buildForest();
    })
    .catch((err) => console.error('could not delete shroom', err));
};

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      // console.error('get mushrooms worked!', mushrooms);
      let domString = `
      <h2 class="text-center">Forest</h2>
      <div class="d-flex flex-wrap">
    `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';
      utils.printToDom('#forest', domString);
      $('body').on('click', '.delete-shroom', removeShroomEvent);
    })
    .catch((error) => console.error('get mushrooms broke', error));
};

export default { buildForest };
