<!-- 文物列表 -->
<template>
    <view class="museumList">
        <!-- 顶部导航栏 -->
        <TnNavbar home-icon="" fixed> {{ museumTitle }} </TnNavbar>
        <!-- 筛选 -->
        <div class="search">
            <SelectTags v-model="currentSelectTags" :items="typeList" :multiple="false" :cancelable="false" />
        </div>
        <!-- 列表 -->
        <div class="list">
            <div v-for="(item, index) in museumList" :key="index" class="list-item" @click="handleClick(item)">
                <image class="image" :src="`${imgURL}${item.img}`" mode="aspectFill" />
                <p>
                    <span class="tn-text-ellipsis-1">
                        {{ item.name }}
                    </span>
                </p>
            </div>
        </div>
    </view>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.museumList {
    background: #efeff0 !important;
    .search {
        background-color: #fff;
        width: 100%;
        height: 100rpx;
        .tn-select-tags {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .list {
        height: calc(100vh - 226rpx);
        overflow: auto;
        padding: 20rpx 20rpx;
        border-radius: 20rpx;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &-item {
            display: flex;
            flex-direction: column;
            width: 45%;
            height: 400rpx;
            background-color: #fff;
            margin: 14rpx;
            border-radius: 20rpx;
            image {
                width: 100%;
            }
            p {
                padding: 20rpx;
            }
        }
    }
}
</style>
