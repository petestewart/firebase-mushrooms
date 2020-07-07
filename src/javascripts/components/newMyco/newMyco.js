import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
  <form>
    <div class="form-group">
      <label for="myco-name">Name</label>
      <input type="text" class="form-control" id="myco-name">
    </div>
    <div class="form-group">
      <label for="myco-age">Age</label>
      <input type="number" class="form-control" id="myco-age">
    </div>
    <button type="submit" class="btn btn-primary" id="myco-creator">Submit</button>
  </form>
  `;
  utils.printToDom('#new-myco', domString);
};

export default { showForm };
