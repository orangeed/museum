<template>
    <view class="index">

        <view :style="{ display: currentIndex === 0 ? '' : 'none' }">
            <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top>
                <home ref="home"></home>
            </scroll-view>
        </view>

        <view :style="{ display: currentIndex === 1 ? '' : 'none' }">
            <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top>
                <mine ref="mine"></mine>
            </scroll-view>
        </view>

        <div class="footer">
            <div v-for="(item, index) in tabbarList" :key="index" @click="handleChangeTabbar(item)">
                <image :src="item.active ? item.activeIcon : item.inactiveIcon" />
            </div>
        </div>
    </view>
</template>

<script lang="ts" setup>
import Home from './index/index.vue';
import Mine from './my/index.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Tabbar } from '@/types/common';

// 底部tabbar菜单数据
const tabbarList: Ref<Tabbar[]> = ref([
    {
        id: 0,
        title: '首页',
        active: true,
        activeIcon: '/static/tabbar/home_tnnew.png',
        inactiveIcon: '/static/tabbar/home_tn.png',
    },
    {
        id: 1,
        title: '我的',
        active: false,
        activeIcon: '/static/tabbar/mine_tnnew.png',
        inactiveIcon: '/static/tabbar/mine_tn.png',
    },
]);
// tabbar当前被选中的序号
const currentIndex: Ref<number | string> = ref(0);

// 切换底部导航
const handleChangeTabbar = (item: Tabbar) => {
    currentIndex.value = item.id;
    tabbarList.value.forEach((v: Tabbar) => {
        v.active = v.id === item.id;
    });
};
</script>

<style lang="scss" scoped>
.index {
    background-color: #f6f6f4;
    height: 100%;
    position: relative;
    .footer {
        background-color: #f5f2eb;
        height: 100rpx;
        display: flex;
        position: fixed;
        bottom: 30rpx;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 30rpx;
        box-shadow: 0 0 40rpx 4rpx #e2e0e0;
        div {
            display: flex;
            align-items: center;
            padding: 10rpx 20rpx;
            image {
                height: 60rpx;
                width: 60rpx;
            }
        }
    }
    .footer div:first-child {
        padding-left: 40rpx;
    }
    .footer div:last-child {
        padding-right: 40rpx;
    }
}
</style>
