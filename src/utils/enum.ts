/**
 * 枚举类
 */
// 页面路由的枚举
export enum RouteList {
    // 登录
    LOGIN = '/pages/login/index',
    // 首页
    INDEX = '/pages/index',
    // 首页分包路由
    SUPPLIER = '/packages/indexPackage/supplier/index',
}

// 轮播图数据
export const swiperData = [
    '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586',
    '9oRnoneA&path=%7BshareItemLink%3A9oRnoneA%7D%2F&_etag=1694053351-19652',
    '9oRpXQWg&path=%7BshareItemLink%3A9oRpXQWg%7D%2F&_etag=1694053523-70384',
];

// 地区
import type { SeleteList } from '@/types/common';
export const areaList: SeleteList[] = [
    { value: 0, text: '全部' },
    { value: 1, text: '亚洲' },
    { value: 2, text: '欧洲' },
    { value: 3, text: '南美洲' },
    { value: 4, text: '北美洲' },
    { value: 5, text: '大洋洲' },
    { value: 6, text: '非洲' },
];

// 博物馆名称
export const museumList: SeleteList[] = [
    { value: 1, text: '亚洲', children: [{ value: 1, text: '博物馆', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' }] },
    {
        value: 2,
        text: '欧洲',
        children: [
            { value: 1, text: '大英博物馆', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' },
            { value: 2, text: '大英博物馆', img: '9oRnoneA&path=%7BshareItemLink%3A9oRnoneA%7D%2F&_etag=1694053351-19652' },
            { value: 3, text: '大英博物馆', img: '9oRpXQWg&path=%7BshareItemLink%3A9oRpXQWg%7D%2F&_etag=1694053523-70384' },
            { value: 4, text: '大英博物馆', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' },
        ],
    },
    { value: 3, text: '南美洲' },
    { value: 4, text: '北美洲' },
    { value: 5, text: '大洋洲' },
    { value: 6, text: '非洲' },
];

