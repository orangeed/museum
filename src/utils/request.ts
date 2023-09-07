import type { RequestOptions } from '@/types/common';
export const baseURL = `${import.meta.env.VITE_GLOB_API_URL}:${import.meta.env.VITE_PROT}`;

export const request = (options: RequestOptions) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseURL + options.url, //接口地址：前缀+方法中传入的地址
            method: options.method, //请求方法：传入的方法或者默认是“GET”
            data: options.data ? options.data : options.params,
            withCredentials: true, // 跨域
            // header: {
            //     token: uni.getStorageSync('token') || '', //自定义请求头信息
            // },
            success: (res: any) => {
                if (res.data.code == 200) {
                    resolve(res.data.data);
                } else {
                    reject(res.data.message);
                }
            },
            // 这里的接口请求，如果出现问题就输出接口请求失败
            fail: err => {
                console.log(err);
                reject(err);
            },
        });
    });
};
