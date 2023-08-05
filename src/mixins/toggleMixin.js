export default {
    props:{
        show: {
            type: Boolean,
            default: false,
            required: true,
        }
    },
    methods: {
        hideModal() {
            this.$emit("update:show", false);
          },
    },
    mounted() {
        
    },
}