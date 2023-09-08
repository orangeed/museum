import { defineComponent, ref, reactive, toRefs } from 'vue';
import type { Ref } from 'vue';
import type { MuseumInfo } from '@/types/pages';
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue';
import TnPhotoAlbum from '@tuniao/tnui-vue3-uniapp/components/photo-album/src/photo-album.vue';
import SelectTags from 'tnuiv3p-tn-select-tags/index.vue';

const museumInfo = {
    museumTitle: '',
    museumId: '',
};

export default defineComponent({
    name: 'MuseumDetail',
    components: { TnNavbar, TnPhotoAlbum, SelectTags },
    onLoad(option: { id: string }) {
        museumInfo.museumId = option.id;
    },
    setup() {
        // 文物id
        const museumId: Ref<string | number> = ref('');

        // 图片地址
        const imgURL = import.meta.env.VITE_IMG_URL;

        const currentSelectTags = ref<number[]>([0]);

        // 文物信息
        const museumInfo: MuseumInfo = reactive({
            img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586',
            name: '青玉薄胎茶壶',
            status: '3',
            address: '大英博物馆',
            content: `
            <p style='text-indent:2em'>碧玉薄胎茶壶直径9厘米，长14.3厘米，高8厘米。壶形线条流畅、温顺，舒展，已得到写意式的变形，花朵即像莲花，也似佛手，吉祥文静，壶盖以莲叶纹和其他的花边为饰整件作品端庄、稳重、有灵气，薄胎，薄可透视对面，雕工精湛年10月，《碧玉薄胎茶壶》获得</p>
            <p style='text-indent:2em'>2007年北京天工奖优秀作品奖。
            <p style='text-indent:2em'>2017年10月，《碧玉薄胎茶壶》被大英博物馆收藏，陈列在大英博物馆的Alleyne玉器馆。
            <p style='text-indent:2em'>2023<年8月30日，上线的短片作品《逃出大英博物馆》将中华缠枝纹薄胎玉壶带红网络,
            `,
        });

        return { ...toRefs(museumInfo), imgURL, currentSelectTags };
    },
});
