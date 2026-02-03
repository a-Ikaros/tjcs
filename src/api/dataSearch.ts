import request from "@/utils/request";

export const searchPotData = ( params: {
    rule:string;
    elements: string;
    page: number;
    pageSize: number;
    filters?: Record<string, any>; // 新增筛选参数
}) => {
    return request({
        url: `/potdata/${params.rule}/pageQuery`,
        method: 'post',
        data: {
            elements: params.elements,
            page: params.page,
            pageSize: params.pageSize,
            ...params.filters, // 将筛选参数展开到请求体中
        }
    });
};


export const getDataDetail = ( params: {
    rule:string;
    id: string;
}) => {
    return request({
        url: `/potdata/${params.rule}/detail`,
        method: 'get',
        params: {
            id: params.id,
            needExtra:true
        }
    });
};

export const downloadFileById = ( params: {
    rule:string;
    id: string;
}) => {
    return request({
        url: `/potdata/${params.rule}/download?id=${params.id}`,
        method: 'get',
       
    });
};

/**
 * 获取指定数据类型的 Potential Type 列表
 * @param rule 数据类型规则
 */
export const getPotentialTypes = (rule: string) => {
    return request({
        url: `/potdata/${rule}/getPotentialTypes`,
        method: 'get',
    });
};

/**
 * 获取指定数据类型的 Potential Type 列表
 * @param rule 数据类型规则
 */
export const getDownloadBf = (rule: string,id: string) => {
    return request({
        url: `/potdata/${rule}/downloadBf?id=${id}`,
        method: 'get',
    });
};

/**
 * 获取指定数据类型的 Potential Type 列表
 * @param rule 数据类型规则
 */
export const getDownloadR = (rule: string,id: string) => {
    return request({
        url: `/potdata/${rule}/downloadBf?id=${id}`,
        method: 'get',
    });
};

