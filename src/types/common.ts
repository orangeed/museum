// request请求参数
export interface RequestOptions {
    url?: any;
    proxy?: boolean;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | undefined;
    params?: any;
    data?: any;
}

// 底部导航
export interface Tabbar {
    id: number;
    title: string;
    active: boolean;
    activeIcon: string;
    inactiveIcon: string;
}

// 下拉选择框
export interface SeleteList {
    value: string | number;
    text: string;
    children?: SeleteList[];
    img?: string;
}
