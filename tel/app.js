var list = new Vue({
    el: "#app",
    data: {
        dial : [1,2,3,4,5,6,7,8,9,"*",0,"#"],
        input: [],
        history_true: true,
        history: [],
        open_dial: false,
        tel_book: [
            {tel:"0922456789",name:"202"},
            {tel:"0912569777",name:"202"},
            {tel:"0800000000",name:"202"},
            {tel:"0800000000",name:"202"},
            {tel:"0800000000",name:"202"},
            {tel:"0800000000",name:"202"},
            {tel:"0800000000",name:"202"},
            {tel:"0800000000",name:"202"},
            {tel:"0920000789",name:"203"}
        ],
        telB_false: true
    },
    computed: {
        display16() {
          const s = this.input.join('');      
          return s.length > 16 ? '...' + s.slice(-16) : s;
        },
        telBook(){
            const telB = this.tel_book;
            const input = this.input.join("");
            const out = [];
            for (let i = 0; i< telB.length; i++){
                out.push(telB[i].tel);
            };

            const result = telB.filter(({ tel }) => tel?.startsWith(input));

            
            if(input===""){
                return "請輸入"
            }else{
                return result;
            }



            
            
        }
    },
    methods: {
        press: function(d){
            this.input.push(d);
        },
        back: function(){
            this.input.splice(this.input.length - 1, 1);
        },
        go: function(){
            const value = this.input.join("");
            const now = new Date();
            const timeString = now.toLocaleTimeString('zh-TW', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false   // 設定為 24 小時制
            });

            this.history_true = false;
      
            this.history.push({ tel: value, at: timeString });
            
            this.input = [];
        },
        clear: function(){
            this.input = [];
        },
        open_list: function(){
            this.open_dial = true;
        },
        close_list: function(){
            this.open_dial = false;
        }
    }
})