import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
  <form>
    <div class="form-group">
      <label for="mush-name">Name</label>
      <input type="text" class="form-control" id="mush-name">
    </div>
    <div class="form-group">
      <label for="mush-size">Size</label>
      <input type="text" class="form-control" id="mush-size">
    </div>
    <div class="form-group">
      <label for="mush-location">Location</label>
      <input type="text" class="form-control" id="mush-location">
    </div>
    <div class="form-group">
      <label for="mush-weight">Weight (in grams)</label>
      <input type="number" class="form-control" id="mush-weight">
    </div>
    <button type="submit" class="btn btn-primary" id="mush-creator">Submit</button>
  </form>
  `;
  utils.printToDom('#new-shroom', domString);
};

export default { showForm };
