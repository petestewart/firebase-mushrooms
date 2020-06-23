import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';
import mushroomComponent from '../mushroom/mushroom';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      console.error('get mushrooms worked!', mushrooms);
      let domString = `
      <h2 class="text-center">Forest</h2>
      <div class="d-flex flex-wrap">
    `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';
      utils.printToDom('#forest', domString);
    })
    .catch((error) => console.error('get mushrooms broke', error));
  // const domString = "Shrooms";
};

export default { buildForest };
