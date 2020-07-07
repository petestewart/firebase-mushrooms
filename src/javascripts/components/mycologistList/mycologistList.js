import utils from '../../helpers/utils';
import mycologistData from '../../helpers/data/mycologistData';
import mycologistComponent from '../mycologist/mycologist';
import singleMycologist from '../singleMycologist/singleMycologist';
import newMyco from '../newMyco/newMyco';

const generateUid = () => Math.floor(Math.random() * 1000000);

const addMycoEvent = (e) => {
  e.preventDefault();
  const mycoUid = generateUid();
  console.error(mycoUid);
  const newMycol = {
    name: $('#myco-name').val(),
    age: $('#myco-age').val(),
    uid: mycoUid,
  };

  mycologistData.addMyco(newMycol)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildHut();
      utils.printToDom('#new-myco', '');
    });
};

const buildHut = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      // console.error('get mycologists worked!', mycologists);
      let domString = `
      <h2 class="text-center">Hut</h2>
      <button class="btn btn-success" id="show-add-myco">Add New Mycologist</button>
     
      <div class="d-flex flex-wrap">
      `;
      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });
      domString += '</div>';
      utils.printToDom('#hut', domString);
      $('body').on('click', '.myco-card',
        singleMycologist.buildMycologist);
      $('body').on('click', '#show-add-myco', newMyco.showForm);
      $('body').on('click', '#myco-creator', addMycoEvent);
    })
    .catch((error) => console.error('get mycologists broke', error));
};

export default { buildHut, addMycoEvent };
