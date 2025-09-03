Vue.component("exp",{
    template:`
        <p> {{val}} </p>
    `,
    props: ["val"]
})

Vue.component("example",{
    template:`
        <p> {{value}} </p>
    `,
    props: {
        value: {
            type: Number,
            default: 100
        }
    }
})

Vue.component("exa",{
    template:`
        <button @click="Click">觸發事件</button>
    `,
    methods: {
        Click: function(){
            alert("ok");
        }
    }
})

Vue.component("exap",{
    template:`
        <button @click="handleClick">觸發事件</button>
    `,
    methods: {
        handleClick: function(){
            this.$emit("child-event");
        }
    }
})

Vue.component("exapp",{
    template:`
        <button @click="handleClick">觸發事件</button>
    `,
    methods: {
        handleClick: function(){
            this.$emit("child-event" , "test-data");
        }
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
        pClick: function(){
          alert("go");  
        },
        ppClick: function(value){
            alert(value);  
        }
    },
    watch: {
        
    }
})