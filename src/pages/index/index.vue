<!-- 首页 -->
<template>
    <!-- 轮播 -->
    <TnSwiper v-model="currentSwiperIndex" :data="swiperData" width="100%" height="560" autoplay loop>
        <template #default="{ data }">
            <view class="swiper-data">
                <image class="image" :src="imgURL + data" mode="aspectFill" />
            </view>
        </template>
    </TnSwiper>
    <!-- 吸顶筛选 -->
    <div class="content" ref="searchRef">
        <div :class="['search', isFixed ? 'isFixed' : 'notFixed']">
            <uni-data-select v-model="areaIndex" :localdata="areaList" :clear="false" @change="handleChangeArea"></uni-data-select>
        </div>
        <div class="museum">
            <div v-for="(item, index) in museumListItem" :key="index" class="museum-item" @click="handleGoToItem(item)">
                <image class="image" :src="`${imgURL}${item.img}`" mode="aspectFill" />
                <span class="name">{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
image {
    width: 100vw;
    height: 560rpx;
}
.content {
    height: 100%;
    background-color: #fff;
    border-radius: 40rpx;
    margin-top: -40rpx;
    position: relative;
    .search {
        margin: 10rpx 20rpx;
        padding-top: 10rpx;
    }
    .isFixed {
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 96%;
        :deep(.uni-stat__select) {
            background: #fff !important;
            transition: all 1s;
            border-radius: 40rpx;
        }
    }

    .notFixed {
        :deep(.uni-select) {
            transition: all 1s;
            border: none !important;
        }
    }
    :deep(.uni-select) {
        transition: all 1s;
        border-radius: 40rpx;
    }
    .museum {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .museum-item {
        width: 40%;
        height: 40%;
        display: flex;
        flex-wrap: wrap;
        padding: 20rpx;
        border-radius: 20rpx;
        position: relative;

        image {
            height: 300rpx;
        }
        .name {
            position: absolute;
            color: #fff;
            font-size: 32rpx;
            padding: 10rpx 20rpx;
        }
    }
}
</style>
