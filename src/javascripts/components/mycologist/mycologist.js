const mycologistMaker = (mycologist) => {
  const domString = `
  <div class="col-3">
  <div class="card myco-card border-0 rounded-0" id="${mycologist.id}">
    <div class="card-body">
      <div="card-header">${mycologist.name}</div>
      <h5 class="card-title">${mycologist.age} years old</h5>
    </div>
  </div>
</div>
  `;
  return domString;
};

export default { mycologistMaker };
