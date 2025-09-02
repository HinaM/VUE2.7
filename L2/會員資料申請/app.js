var list = new Vue({
    el: "#app",
    data: {
        fName: "",
        lName: "",
        account: "",
        psd: "",
        conpsd: "",
        telList: [
            {tel: ""}
        ],
        isShow: false,
        isRed: false
    },
    methods: {
        addTel: function(){
            this.telList.push({tel: ''});
        },
        remove: function(index){
            this.telList.splice(index,1);
        },send: function(){
            if(this.fName == "" | this.lName == "" | this.account == "" | this.psd == ""){
                alert("有空格");
            }else if (this.psd != this.conpsd){
                alert('密碼不相同');
                this.isRed = true;
            }else{
                this.isShow = true;
            }
        }
    }
})