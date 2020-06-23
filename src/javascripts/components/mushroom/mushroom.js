const mushroomMaker = (mushroom) => {
  const domString = `
  <div class="col-3">
    <div class="card">
      <div class="card-body">
        <div="card-header">${mushroom.name}</div>
        <h5 class="card-title">${mushroom.location}</h5>
        <p class="card-text">This mushroom is ${mushroom.size} and ${mushroom.weight} lbs.</p>
      </div>
    </div>
  </div>
  `;
  return domString;
};

export default { mushroomMaker };
