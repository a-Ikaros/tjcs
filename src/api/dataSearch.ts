import request from "@/utils/request";

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
