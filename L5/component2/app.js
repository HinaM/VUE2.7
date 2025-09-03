var list = new Vue({
    el: "#app",
    data: {
        valueA: "apple",
        count: 0
    },
    computed: {
        
    },
    methods: {
        
    }
})

Vue.component("ezp",{
    template: `
        <p> {{appValueA}} </P>
    `,
    computed: {
        appValueA: function(){
            return list.$data.valueA;
        }
    }
    ,
    props:{}
});

Vue.component("ezc",{
    template: `
        <p> {{count}} </P>
    `,
    computed: {
        count: function(){
            return list.$data.count;
        }
    },
    created(){
        list.$on('appEvent',function(){
            this.count++;
        });
        list.$emit("appEvent");
    }
});

var rander = new Vue({
    el: "#app"
})