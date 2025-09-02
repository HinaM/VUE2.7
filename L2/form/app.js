var vm = new Vue({
    el: '#app',
    data: {
        message: "HELLO",
        content: "0000",
        checkValue: [],
        radioValue: "",
        selectValue: ""
    }
})

var von = new Vue({
    el: '#voc',
    data: {
        count: 0,
        preview: ""
    },
    methods: {
        counter: function(value){
            this.count += value;
        },
        handleChange(event){
            var file = event.target.files[0];
            if(file && file.type.match(/^image\/(png|jpeg|jpg)$/)){
                this.preview = window.URL.createObjectURL(file);
            }
        }
    }
})