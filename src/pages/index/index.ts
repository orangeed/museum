import { defineComponent, reactive, toRefs, ref, type Ref, onMounted, onUnmounted } from 'vue';
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue';
import TnSticky from '@tuniao/tnui-vue3-uniapp/components/sticky/src/sticky.vue';
import { swiperData, areaList, museumList } from '@/utils/enum';
import type { SeleteList } from '@/types/common';

export default defineComponent({
    name: 'Index',
    components: { TnSwiper, TnSticky },
    setup() {
        // 轮播索引
        const currentSwiperIndex = ref(0);

        // 图片地址
        const imgURL = import.meta.env.VITE_IMG_URL;

        // 地区的值
        const areaIndex: Ref<number> = ref(2);

        // 分地区博物馆名称
        const museumListItem: Ref<SeleteList[] | undefined> = ref([]);

        // 切换地区事件
        const handleChangeArea = (val: number) => {
            museumListItem.value = [];
            if (val == 0) {
                museumList.forEach((v: SeleteList | any) => {
                    if (v.children) museumListItem.value?.push(...v.children);
                });
            } else {
                museumListItem.value = museumList[Number(val - 1)]?.children;
            }
        };

        // 是否吸顶
        const isFixed: Ref<boolean> = ref(false);

        // 需要吸顶的dom
        const searchRef: Ref<any> = ref(null);

        // 吸顶函数
        const handleScroll = () => {
            //计算滚动条位置
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //计算绑定div位置
            const offsetTop = searchRef.value.offsetTop;
            //进行比较设置位置fixed
            isFixed.value = scrollTop > offsetTop;
        };

        // 跳转到文物列表的函数
        const handleGoToItem = (item: SeleteList) => {
            uni.navigateTo({
                url: `/packages/index/museumList/index?id=${item.value}&name=${item.text}`,
                animationType: 'fade-in',
            });
        };

        const openDropdown = ref<boolean>(false);

        // 选项点击事件
        const menuItemClickHandle = () => {
            openDropdown.value = true;
        };

        onMounted(() => {
            handleChangeArea(areaIndex.value);
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            imgURL,
            swiperData,
            currentSwiperIndex,
            areaList,
            areaIndex,
            handleChangeArea,
            isFixed,
            searchRef,
            museumList,
            museumListItem,
            handleGoToItem,
            menuItemClickHandle,
            openDropdown,
        };
    },
});
