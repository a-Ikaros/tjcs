import {
  microDataTypes,
  mesoDataTypes,
  macroDataTypes,
} from "@/views/dataSearch/dataRules";

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

export const getStructuralType = () => {
  const getTypeList = (list) => {
    return list
      .filter((item) => !item.disabled)
      .map((item) => ({
        key: item.key,
        label: item.name,
        childrenKey: item.children?.map((child) => child.key).filter((child) => !child.disabled),
      }));
  };
  return [
    ...getTypeList(microDataTypes),
    ...getTypeList(mesoDataTypes),
    ...getTypeList(macroDataTypes),
  ];
};

export const getAllDataTypes = () => {
  const getTypeList = (list) => {
    const result = [];
    list.forEach((item) => {
      if (!item.disabled) {
        if (item.children && item.children.length > 0) {
          item.children.forEach((child) => {
            if (!child.disabled) {
              result.push({
                key: child.key,
                label: child.name,
                parentKey: item.key,
                parentLabel: item.name,
              });
            }
          });
        } else {
          result.push({
            key: item.key,
            label: item.name,
            parentKey: null,
            parentLabel: null,
          });
        }
      }
    });
    return result;
  };
  return [
    ...getTypeList(microDataTypes),
    ...getTypeList(mesoDataTypes),
    ...getTypeList(macroDataTypes),
  ];
};

export const buildCountMap = (data: any[]) => {
  return data.reduce((map, item) => {
    const key = capitalizeFirstLetter(item.clazz);
    map[key] = item.count;
    return map;
  }, {});
};

export const getTypeCount = (item: any, countMap: Record<string, number>) => {
  if (item.childrenKey && item.childrenKey.length > 0) {
    return item.childrenKey.reduce((pre: number, cur: string) => {
      return pre + (countMap[capitalizeFirstLetter(cur)] || 0);
    }, 0);
  } else {
    return countMap[capitalizeFirstLetter(item.key)] || 0;
  }
};

export const getLeafDataTypes = () => {
  const getTypeList = (list) => {
    const result = [];
    list.forEach((item) => {
      if (!item.disabled) {
        if (item.children && item.children.length > 0) {
          item.children.forEach((child) => {
            if (!child.disabled) {
              result.push({
                key: child.key,
                label: child.name,
                parentKey: item.key,
                parentLabel: item.name,
              });
            }
          });
        } else {
          result.push({
            key: item.key,
            label: item.name,
            parentKey: null,
            parentLabel: null,
          });
        }
      }
    });
    return result;
  };
  return [
    ...getTypeList(microDataTypes),
    ...getTypeList(mesoDataTypes),
    ...getTypeList(macroDataTypes),
  ];
};
