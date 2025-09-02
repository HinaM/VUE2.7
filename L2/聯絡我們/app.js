var list = new Vue({
    el: "#app",
    data: {
        typeList:[
            {id: 1, name: "服務報價"},
            {id: 2, name: "專人服務"},
            {id: 3, name: "問題回報"}
        ],
        isShow: false,
        fullname: "",
        title: "",
        email: "",
        phone: "",
        company: "",
        typeName: "",
        comment: ""
    },
    methods: {
        onSubmit: function () {
            this.isShow = true;
        },
        onClear: function(){
            this.isShow = false;
            this.fullname = this.title = this.email = this.phone = this.company = this.typeName = this.comment = '';
        }
    }
})