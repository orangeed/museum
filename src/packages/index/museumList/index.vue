<!-- 文物列表 -->
<template>
    <view class="museumList">
        <!-- 顶部导航栏 -->
        <TnNavbar home-icon="" fixed> {{ museumTitle }} </TnNavbar>
        <!-- 列表 -->
        <div class="list">
            <TnListItem v-for="i in 10" :key="i"  height="100rpx"  bg-color="#fff" bottom-border bottom-border-indent> 联系客服 </TnListItem>
        </div>
    </view>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.museumList {
    background: #f8f7f8 !important;
    height: 100vh;
    .list {
        padding: 20rpx 20rpx;
    }
}
</style>
