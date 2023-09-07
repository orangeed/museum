export const setStorge = (key: string, value: any) => {
    return uni.setStorageSync(key, JSON.stringify(value));
};

export const getStorge = (key: string) => {
    const str = uni.getStorageSync(key);
    return str ? JSON.parse(str) : null;
};

export const removeStorge = (key: string) => {
    uni.removeStorageSync(key);
};

export const clearStorge = () => {
    uni.clearStorage();
};
