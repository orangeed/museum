import { defineComponent, ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue';
import SelectTags from 'tnuiv3p-tn-select-tags/index.vue';
import type { SelectTagsItem } from 'tnuiv3p-tn-select-tags';

const museumInfo = {
    museumTitle: '',
    museumId: '',
};

export default defineComponent({
    name: 'MuseumList',
    components: { TnNavbar, SelectTags },
    onLoad(option: { id: string; name: string }) {
        museumInfo.museumTitle = option.name;
        museumInfo.museumId = option.id;
    },
    setup() {
        // 页面标题
        const museumTitle: Ref<string> = ref('');

        // 博物馆id
        const museumId: Ref<string | number> = ref('');

        // 图片地址
        const imgURL = import.meta.env.VITE_IMG_URL;

        // 博物馆文物列表
        const museumList: Ref<any[]> = ref([
            { id: 1, name: '大英博物馆谢谢谢谢谢谢', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' },
            { id: 2, name: '大英博物馆', img: '9oRnoneA&path=%7BshareItemLink%3A9oRnoneA%7D%2F&_etag=1694053351-19652' },
            { id: 3, name: '大英博物馆', img: '9oRpXQWg&path=%7BshareItemLink%3A9oRpXQWg%7D%2F&_etag=1694053523-70384' },
            { id: 4, name: '大英博物馆', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' },
            { id: 1, name: '大英博物馆', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' },
            { id: 2, name: '大英博物馆', img: '9oRnoneA&path=%7BshareItemLink%3A9oRnoneA%7D%2F&_etag=1694053351-19652' },
            { id: 3, name: '大英博物馆', img: '9oRpXQWg&path=%7BshareItemLink%3A9oRpXQWg%7D%2F&_etag=1694053523-70384' },
            { id: 4, name: '大英博物馆', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' },
            { id: 1, name: '大英博物馆', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' },
            { id: 2, name: '大英博物馆', img: '9oRnoneA&path=%7BshareItemLink%3A9oRnoneA%7D%2F&_etag=1694053351-19652' },
            { id: 3, name: '大英博物馆', img: '9oRpXQWg&path=%7BshareItemLink%3A9oRpXQWg%7D%2F&_etag=1694053523-70384' },
            { id: 4, name: '大英博物馆', img: '9oRk2KHA&path=%7BshareItemLink%3A9oRk2KHA%7D%2F&_etag=1694052932-882586' },
        ]);

        // 文物状态筛选
        const typeList: SelectTagsItem[] = [
            { value: 1, label: '# 全部', activeBgColor: 'tn-indigo' },
            { value: 2, label: '# 归家', activeBgColor: 'tn-cyan' },
            { value: 3, label: '# 离家', activeBgColor: 'tn-type-danger' },
            { value: 4, label: '# 在家', activeBgColor: 'tn-type-success' },
        ];

        // 文物状态索引值
        const currentSelectTags = ref<number[]>([1]);

        // 点击文物
        const handleClick = (item: SelectTagsItem) => {
            console.log('item', item);
            uni.navigateTo({
                url: '/packages/index/museumDetail/index',
                animationType: 'fade-in',
            });
            
        };

        onMounted(() => {
            museumTitle.value = museumInfo.museumTitle;
            museumId.value = museumInfo.museumId;
        });
        return { museumTitle, museumId, museumList, currentSelectTags, typeList, imgURL, handleClick };
    },
});
