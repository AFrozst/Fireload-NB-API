const mapSector = (sector) => {
  const { materials, ...dataSector } = sector;
  let newMaterials = materials.map((material) => {
    const { Sector_Material, ...dataMaterial } = material;
    return {
      ...dataMaterial,
      ci: Sector_Material.ci,
      weight: Sector_Material.weight,
      total: Sector_Material.total,
    };
  });
  return {
    ...dataSector,
    materials: newMaterials,
  };
};

const mapperInstitution = (institution) => {
  const { firesectors, ...dataInstitution } = institution;
  let newFiresectors = firesectors.map((firesector) => mapSector(firesector));
  return {
    ...dataInstitution,
    firesectors: newFiresectors,
  };
};

const mapperData = (data) => {
  let newData = mapperInstitution(data);
  return newData;
};

module.exports = { mapperData };
