import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './mock/table.json',
        method: 'get'
    });
};

export const fetchUserData = () => {
    return request({
        url: './mock/user.json',
        method: 'get'
    });
};

export const fetchRoleData = () => {
    return request({
        url: './mock/role.json',
        method: 'get'
    });
};

export const searchPotData = ( params: {
    rule:string;
    elements: string;
    page: number;
    pageSize: number;
}) => {
    return request({
        url: `/potdata/${params.rule}/pageQuery`,
        method: 'post',
        data: {
            elements: params.elements,
            page: params.page,
            pageSize: params.pageSize
        }
    });
};
