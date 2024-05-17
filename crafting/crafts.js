function createMaterial(name, unit, costPerUnit) {
  return { name, unit, costPerUnit };
}

function calculateMaterialCost(material, qty) {
  return `${qty} ${material.unit}s of ${material.name} costs $${
    material.costPerUnit * qty
  }.`;
}

function createSupplyCloset(materials = []) {
  var supplies = [];

  for (let i = 0; i < materials.length; i += 1) {
    supplies.push(materials[i].name);
  }

  return { supplies };
}

function addSupply(closet, material) {
  if (closet.supplies.includes(material.name))
    return `You already have ${material.name} in your closet!`;

  closet.supplies.push(material.name);
  return closet.supplies;
}

function createNewProject(materialsNeeded, status = 'not started') {
  return { materialsNeeded, status };
}

function compareMaterials(project, closet) {
  var suppliesOnHand = closet.supplies;
  var materialsNeeded = project.materialsNeeded;

  for (let i = 0; i < materialsNeeded.length; i += 1) {
    if (!suppliesOnHand.includes(materialsNeeded[i].name)) {
      return 'Oh no! You need to go shopping before you can start this project!'
    }
  }

  return 'Yay! You can start this project!'
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials,
};
