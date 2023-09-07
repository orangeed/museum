import { defineComponent, ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue';
import TnListItem from '@tuniao/tnui-vue3-uniapp/components/list/src/list-item.vue';

const museumInfo = {
    museumTitle: '',
    museumId: '',
};

export default defineComponent({
    name: 'MuseumList',
    components: { TnNavbar, TnListItem },
    onLoad(option: { id: string; name: string }) {
        museumInfo.museumTitle = option.name;
        museumInfo.museumId = option.id;
    },
    setup() {
        const museumTitle: Ref<string> = ref('');
        const museumId: Ref<string | number> = ref('');

        onMounted(() => {
            museumTitle.value = museumInfo.museumTitle;
            museumId.value = museumInfo.museumId;
        });
        return { museumTitle, museumId };
    },
});
