var list = new Vue({
    el: "#list",
    data: {
        name: '',
        drink: '',
        sweet: '',
        totalPrice: 0,
        totalCup: 0,
        milkTeaP: 50,
        blackTeaP: 30,
        buyList: []
    },
    methods: {
        addInList: function(){
            if (this.name.trim() != '' && this.drink != '' && this.sweet != ''){
                this.buyList.push({
                    name: this.name,
                    drink: this.drink.drink,
                    price: this.drink.price,
                    sweet: this.sweet              

                });
                
                this.totalCup = this.buyList.length;
                
                this.totalPrice = 0;
                for( var i = 0; i < this.buyList.length ; i++){
                    this.totalPrice += this.buyList[i].price;
                };
                
            }else{
                alert("未填完整!!!");
            }
            
            

            /*alert(`新增成功：${this.name} - ${this.drink} - ${this.sweet}`);*/
        },
        del: function(index){
            
            this.totalPrice -= this.buyList[index].price;
            this.buyList.splice(index, 1);
            this.totalCup = this.buyList.length;
        },
        Cart: function(){
            const now = new Date();
            const timeString = now.toLocaleString(); 
            if (this.buyList.length != 0){
                alert(`已於 ${timeString} 送出訂單，總計$${this.totalPrice}`);
                this.buyList = [];
                this.totalPrice = 0;
                this.totalCup = 0;
            }else{
                alert("訂單為空!!!");
            }
        }
    }
})