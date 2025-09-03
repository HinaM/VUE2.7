var list = new Vue({
    el: "#app",
    data: {
        list: [],
        productions:[
            {id:1,name:"奶茶",price:35},
            {id:2,name:"紅茶",price:25},
            {id:3,name:"綠茶",price:15}
        ],
        buyed:[],
        totalPrice: 0,
        selectionProduction : "",

        typeList:[
            {
                id:1,
                name: "飲料",
                sub:[
                    {id:1,name:"奶茶",price:35},
                    {id:2,name:"紅茶",price:25},
                    {id:3,name:"綠茶",price:15}
                ]
            },{
                id:2,
                name: "零時",
                sub:[
                    {id:1,name:"洋芋片",price:50},
                    {id:2,name:"蛋糕",price:55},
                    {id:3,name:"蛋塔",price:45}
                ]
            },
        ],
        mainID: "",
        subID: "",
        currentSubList: [],

        phone: "0933333333",
        tel:"0224222228",
        Ename: "Nac"
    },
    filters: {
        phoneForMater(origin){
            let fomaterNum = "";
            fomaterNum += origin.substr(0, 4);
            fomaterNum += "-";
            fomaterNum += origin.substr(4, 3);
            fomaterNum += "-";
            fomaterNum += origin.substr(7, 3);

            return fomaterNum;
        },
        telForMater(origin){
            let fomaterNum = "";
            fomaterNum += origin.substr(0, 2);
            fomaterNum += "-";
            fomaterNum += origin.substr(2, 4);
            fomaterNum += "-";
            fomaterNum += origin.substr(6, 4);

            return fomaterNum;
        },
        upper(origin){
            return origin.toUpperCase();
        },
        lower(origin){
            return origin.toLowerCase();
        }
    },
    watch: {
        list: function(newL,oldL){
            console.log("一般" , this.$refs.ulList.offsetHeight);
            this.$nextTick(function(){
                console.log("一般" , this.$refs.ulList.offsetHeight);
            });
        }
    },
    methods: {
        buy: function(){
            if(this.selectionProduction !== ""){
                
                
                
                for(let i =0 ; i<this.productions.length ; i++){
                    if(this.selectionProduction == this.productions[i].id){
                        this.buyed.push({id:this.selectionProduction,name: this.productions[i].name, price:this.productions[i].price});
                        this.totalPrice += this.productions[i].price;
                    }
                }
                this.selectionProduction = "";
                
            }
            
        }
    },
    watch: {
        mainID: function(newID,oldID){
            if(newID == ""){
                this.currentSubList = [];
            }else{
                const temp = this.typeList.find(t => t.id == newID);
                this.currentSubList = temp ? temp.sub : [];
                this.subID = ''; 
            }
        }
    }
})