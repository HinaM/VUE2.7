var list = new Vue({
    el: "#app",
    data: {
        title: "12.",
        imageList: [
            {src: "https://ensemble-stars.jp/mainstory_mega_sphere/_ipx/f_webp&q_80/title-mainstory_ja.png", name: "001",isShow: false},
            {src: "https://ensemble-stars.jp/mainstory_mega_sphere/images/slides/pic-still_prologue01_after.png", name: "002",isShow: false},
            {src: "https://ensemble-stars.jp/mainstory_mega_sphere/images/slides/pic-still_1-01_after.png", name: "003",isShow: false},
            {src: "https://ensemble-stars.jp/mainstory_mega_sphere/_ipx/f_webp&q_80/logo-stream.png", name: "004",isShow: false}
        ]
    },
    methods: {
        showName: function(index){
            this.imageList[index].isShow = true;
        },
        hiddenName: function(index){
            this.imageList[index].isShow = false;
        },
        handle: function(element){
            console.log(element);
        },
        hand: function(element){
            console.log(element.key);
        }
    }
})