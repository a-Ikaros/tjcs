export const clazzNameMap = {
//   wg: "微观",
//   jg: "结构",
//   hg: "宏观",
  crystals: "晶体结构",
  basisSetPotential: "赝势基组",
  trackBasisSet: "数值原子轨道基组",
  gsBasisSet: "高斯型基组",
  pseudopotential: "赝势",
  pairPotential: "对势",
  nist: "多体势",
  reaxffPotential: "反应力场",
  machineLearningPotential: "神经网络势",
  machineLearnGap: "机器学习用数据",
  mtd: "热力学数据",
  dynamics: "动力学数据",
  metalMaterial: "金属材料",
  carbon: "碳材料",
};

export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
};