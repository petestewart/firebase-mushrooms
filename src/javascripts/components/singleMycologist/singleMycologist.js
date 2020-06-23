import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;
  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      const domString = `
      <div class="card single-myco border-0 rounded-0">
        <div class="card-body">
          <div="card-header">${mycologist.name}</div>
          <h5 class="card-title">${mycologist.age} years old</h5>
        </div>
      </div>
      `;
      utils.printToDom('#single-myco', domString);
      console.error('printing single myco called', mycologist);
    })
    .catch((err) => console.error('problem with single myco ', err));
};

export default { buildMycologist };
