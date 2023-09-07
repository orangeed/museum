import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
    name: 'My',
    components: {},
    setup() {
        const data = reactive({});
        return {
            ...toRefs(data),
        };
    },
});
