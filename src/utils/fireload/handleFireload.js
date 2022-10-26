const { FireSector, Sector_Material } = require("../../app/models");

const updateFireload = async (idSector) => {
  const materials = await Sector_Material.findAll({
    where: { sectorId: idSector },
    raw: true,
    nest: true,
  });

  const totalMaterials = materials.reduce((acc, material) => {
    return acc + material.total;
  }, 0);

  const sector = await FireSector.findOne({
    where: { id: idSector },
    raw: true,
    nest: true,
  });

  let fireload = (totalMaterials / sector.area) * sector.Ra;
  let level = true ? getIntrinsicLevel(fireload) : getIntrinsicLevelValue2(fireload);

  await FireSector.update(
    { fireload, intrinsicLevel: level },
    {
      where: { id: idSector },
    }
  );
};

const calculateFireload = async (idSector) => {
  const materials = await Sector_Material.findAll({
    where: { sectorId: idSector },
    raw: true,
    nest: true,
  });

  const totalMaterials = materials.reduce((acc, material) => {
    return acc + material.total;
  }, 0);

  const sector = await FireSector.findOne({
    where: { id: idSector },
    raw: true,
    nest: true,
  });

  let fireload = (totalMaterials / sector.area) * sector.Ra;

  return fireload;
};

const getIntrinsicLevel = (fireload) => {
  let level = "";
  if (fireload <= 100 && fireload !== null) {
    level = "BAJO (1)";
  }
  if (fireload > 100 && fireload <= 200) {
    level = "BAJO (2)";
  }
  if (fireload > 200 && fireload <= 300) {
    level = "MEDIO (3)";
  }
  if (fireload > 300 && fireload <= 400) {
    level = "MEDIO (4)";
  }
  if (fireload > 400 && fireload <= 800) {
    level = "MEDIO (5)";
  }
  if (fireload > 800 && fireload <= 1600) {
    level = "ALTO (6)";
  }
  if (fireload > 1600 && fireload <= 3200) {
    level = "ALTO (7)";
  }
  if (fireload > 3200) {
    level = "ALTO (8)";
  }
  return level;
};

const getIntrinsicLevelValue2 = (fireload) => {
  let level = "";
  if (fireload <= 425 && fireload !== null) {
    level = "BAJO (1)";
  }
  if (fireload > 425 && fireload <= 850) {
    level = "BAJO (2)";
  }
  if (fireload > 850 && fireload <= 1275) {
    level = "MEDIO (3)";
  }
  if (fireload > 1275 && fireload <= 1700) {
    level = "MEDIO (4)";
  }
  if (fireload > 1700 && fireload <= 3400) {
    level = "MEDIO (5)";
  }
  if (fireload > 3400 && fireload <= 6800) {
    level = "ALTO (6)";
  }
  if (fireload > 6800 && fireload <= 13600) {
    level = "ALTO (7)";
  }
  if (fireload > 13600) {
    level = "ALTO (8)";
  }
  return level;
};

module.exports = {
  updateFireload,
  calculateFireload,
};
