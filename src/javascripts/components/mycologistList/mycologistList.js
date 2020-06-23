import utils from '../../helpers/utils';
import mycologistData from '../../helpers/data/mycologistData';
import mycologistComponent from '../mycologist/mycologist';

const buildHut = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      console.error('get mycologists worked!', mycologists);
      let domString = `
      <h2 class="text-center">Hut</h2>
      <div class="d-flex flex-wrap">
      `;
      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });
      domString += '</div>';
      utils.printToDom('#hut', domString);
    })
    .catch((error) => console.error('get mycologists broke', error));
};

export default { buildHut };
