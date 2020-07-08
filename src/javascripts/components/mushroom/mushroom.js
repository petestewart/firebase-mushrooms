const mushroomMaker = (mushroom) => {
  let domString = `
  <div class="col-3">
    <div class="card" id=${mushroom.id}>
      <div class="card-body">
        <div="card-header">${mushroom.name}</div>
        <h5 class="card-title">${mushroom.location}</h5>
        <p class="card-text">This mushroom is ${mushroom.size} and ${mushroom.weight} lbs.</p>
        <p>Owners:</p>
        <form>
        `;

  mushroom.mycologists.forEach((myco) => {
    domString += `
    <div class="form-check">
    <input type="checkbox" class="form-check-input myco-shroom-checkbox" id="${myco.mycologistMushroomId}" data-mycologist-uid=${myco.uid} ${(myco.isChecked) ? 'checked' : ''}>
    <label class="form-check-label" for="${myco.mycologistMushroomId}">${myco.name}</label>
  </div>`;
  });

  domString += `</form>
        <button class="btn btn-danger delete-shroom"><i class="far fa-trash-alt"></i> Delete Shroom</button>
      </div>
    </div>
  </div>
  `;
  return domString;
};

export default { mushroomMaker };
