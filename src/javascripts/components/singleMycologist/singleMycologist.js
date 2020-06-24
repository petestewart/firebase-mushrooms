import smash from '../../helpers/data/smash';
// import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;
  smash.getSingleMycoWithShrooms(mycologistId)
    .then((mycologist) => {
      // console.error('here is your myco', mycologist);
      let domString = `
      <div class="card single-myco border-0 rounded-0">
        <div class="card-body">
          <div="card-header">${mycologist.name}</div>
          <h5 class="card-title">${mycologist.age} years old</h5>
          <h3>Mushroom(s) Owned</h3>
      `;

      mycologist.mushrooms.forEach((mushroom) => {
        domString += `<p class="card-text">${mushroom.name}</p>`;
      });

      domString += `
      </div>
      </div>
            </div>
      `;
      utils.printToDom('#single-myco', domString);
      // console.error('printing single myco called', mycologist);
    })
    .catch((err) => console.error('problem with single myco ', err));
};

export default { buildMycologist };
