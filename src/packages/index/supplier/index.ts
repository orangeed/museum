import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Supplier",
  components: {},
  setup() {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
