var list = new Vue({
    el: "#app",
    data: {
        test: ""
    },
    computed: {
        
    },
    methods: {
        
    },
    watch: {
        test: function(newValue, oldValue){
            //alert(`新:${newValue}，舊:${oldValue}`);
        }
    }
})