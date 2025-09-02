var list = new Vue({
    el: "#app",
    data: {
        lname: "",
        fname: "",
        postNo: "",
        city: "",
        zone: "",
        address: "",
        nt: 0,
        usdRatio: 31,
        jptRatio: 0.2
    },
    computed: {
        fullname: function(){
            return this.fname + this.lname;
        },
        fulladdress: function(){
            return this.postNo + this.city + this.zone + this.address;
        },
        usd: function(){
            return Math.round(this.nt / this.usdRatio * 100) / 100;
        },
        jpy: function(){
            return Math.round(this.nt / this.jptRatio * 100) / 100;
        }
    },
    methods: {
        
    }
})