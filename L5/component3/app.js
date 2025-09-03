Vue.component("exp",{
    template:`
        <div>test</div>
    `,
    created: function(){
        this.$on('open',function(){
            console.log("123");
        })
    }
})




var list = new Vue({
    el: "#app",
    data: {
        test: "123"
    },
    computed: {
        
    },
    methods: {
        clickevent: function(){
            this.$refs.comp.$emit("open");
        }
    },
    watch: {
        
    }
})