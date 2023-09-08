<!-- 文物详情 -->
<template>
    <!-- 顶部导航栏 -->
    <TnNavbar home-icon="" fixed>文物详情 </TnNavbar>
    <div class="museum-info">
        <TnPhotoAlbum :data="[`${imgURL}${img}`]" :column="1" />
        <p>
            <span>姓名：</span>
            {{ name }}
        </p>
        <p class="status">
            <span>状态：</span>
            <SelectTags
                v-model="currentSelectTags"
                :cancelable="false"
                :items="[
                    {
                        label: status === '2' ? '# 归家' : status === '3' ? '# 离家' : '# 在家',
                        value: 0,
                        activeBgColor: status === '3' ? 'tn-type-danger' : 'tn-type-success',
                    },
                ]"
            />
        </p>
        <p>
            <span>所在博物馆：</span>
            <span style="font-weight: 700">{{ address }}</span>
        </p>
        <p class="content" v-html="content"></p>
    </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.museum-info {
    padding: 20rpx 40rpx;
    background-color: #f8f8f8;
    p {
        margin-top: 20rpx;
        // span {
        //     font-weight: 600;
        // }
    }
    .tn-photo-album {
        width: 50% !important;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .status {
        display: flex;
        align-items: center;

        span {
            width: 100rpx;
        }
        :deep(.tn-select-tags__tag-item) {
            margin: 0 !important;
        }
    }
    .content {
        text-indent: 2em;
        line-height: 50rpx;
    }
}
</style>
