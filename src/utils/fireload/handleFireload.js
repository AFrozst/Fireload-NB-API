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

  await FireSector.update(
    { fireload },
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

module.exports = {
  updateFireload,
  calculateFireload,
};
