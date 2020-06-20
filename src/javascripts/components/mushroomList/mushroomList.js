// import utils from '../../helpers/utils'
import mushroomData from '../../helpers/data/mushroomData';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((response) => console.error('get mushrooms worked!', response.data))
    .catch((error) => console.error('get mushrooms broke', error));
  // const domString = "Shrooms";
  // utils.printToDom('#forest', domString);
};

export default { buildForest };
