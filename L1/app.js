var vm = new Vue({
    el: '#app',
    data(){
        return{
            me: 'Hi',
            title: '123',
            list:[123,456,788],
            isShow: true,
            count: 0,
            isActive: true,
            isChild: true,
            textColor: '#ffffff',
            bgColor: 'pink',
            colorList: ['pink', '#123456', '#45ddf0', '#ddf000'],
            red: 'black'
        }
    },
    methods: {
        test(){
            alert('Hi!!')
        },
        counter: function(){
           this.count+=1;
        },
        counterMin: function(){
            this.count-=1;
        },
        redColor: function(){
            if (this.count < 0){
                this.red = 'red';
            }else if(this.count > 0){
                this.red = 'green';
            }else{
                this.red = 'black';
            }
        },
        changeColor: function(){
            const c = Math.floor(Math.random() * 4);
            this.bgColor = this.colorList[c];
        }
    }
})

var v = new Vue({
    el: '#cir',
    data: {
        radius: 30,
    }
})

var pic = new Vue({
    el: '#pic',
    data(){
        return{
            slideList:[
                {src:'https://images.pexels.com/photos/3098880/pexels-photo-3098880.jpeg?_gl=1*11oatbp*_ga*MTI3MzU5MDEyMi4xNjg0OTgyMzQ4*_ga_8JE65Q40S6*czE3NTE4MDcxMDIkbzE3JGcxJHQxNzUxODA3MTMyJGozMCRsMCRoMA..' ,desc:0},
                {src:'https://images.pexels.com/photos/15304500/pexels-photo-15304500.jpeg?_gl=1*1xj4baz*_ga*MTI3MzU5MDEyMi4xNjg0OTgyMzQ4*_ga_8JE65Q40S6*czE3NTE4MDcxMDIkbzE3JGcxJHQxNzUxODA3MTc4JGo1NyRsMCRoMA..' ,desc:1},
                {src:'https://images.pexels.com/photos/24377404/pexels-photo-24377404.jpeg?_gl=1*17k6yj5*_ga*MTI3MzU5MDEyMi4xNjg0OTgyMzQ4*_ga_8JE65Q40S6*czE3NTE4MDcxMDIkbzE3JGcxJHQxNzUxODA3MjAzJGozMiRsMCRoMA..' ,desc:2}
            ],
        }
    }
})

var v = new Vue({
    el: '#list',
    data: {
        name: '',
        age: '',
        list: [
          { name: '王', age: 25 },
          { name: '無', age: 20 },
          { name: '二', age: 95 }
        ]
    },
    methods: {
        add: function(){
            this.list.push({
                name: this.name,
                age: this.age
            })
        },
        del: function(index){
            this.list.splice(index, 1);
        }
    }
})

var el = new Vue({
    el: '#el',
    data:{
        show: true
    },
    methods: {
        counter: function(){
            console.log(this.$refs.count.innerText);
            const num = parseInt(this.$refs.count.innerText, 10) +1;
            this.$refs.count.innerText = num;
            if (num % 2 == 0){
                this.$el.style.color = '#00c3b5';
            }else{
                this.$el.style.color = '#ff66cc';
            }
        },
        setShow: function(){
            this.show = !this.show
        },
        test: function(){
            console.log(this.$el);
        }
    }
})