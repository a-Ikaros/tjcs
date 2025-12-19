export interface TitleInfo {
    nameZh: string;
    nameEn: string;
    showMore?: boolean;
    moreLink?: string;
}

export interface CardInfo {
    icon?: any,
    imgSrc?: string;
    alt: string;
    cardTitle: string;
    cardDesc: string;
}

export interface CardTabInfo {
    cardList: Array<CardInfo>;
    titleInfo: TitleInfo;
    type: 'card' | 'card2' | 'tools'
}
