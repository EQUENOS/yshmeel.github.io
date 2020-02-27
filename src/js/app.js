import Vue from 'vue';
import 'normalize.css';
let animatedTitle = {
    props: ['text1', 'text2'],
    template: '<h3>{{ text1 }}</h3>',
    mounted: function() {
        let currentTextId = 2;
        let this_closure = this;
        setInterval(function() {
            if(currentTextId == 1) {
                this_closure.$el.innerHTML = this_closure.text1;
                currentTextId = 2;
            } else {
                this_closure.$el.innerHTML = this_closure.text2;
                currentTextId = 1;
            }
        }, 1600);
    }
};


let app = new Vue({
    el: "#root",
    data: {
        title: "Who i am?",
        titleAnimated: "Ruslan Yusupov",
        backend: "PHP, Node.js",
        frontend: "HTML, CSS, JS, Angular, React, Vue JS",
        authorDesc: "Just a web-developer, 15 y.o.\
        I don't have any idea to do with web design, \
        so just watch a plain site :)",
        contacts: [
            {
                href: "https://vk.com/yshmeeel",
                name: "VKontakte",
                hrefName: "Ruslan Yusupov"
            }, {
                href: "https://t.me/yshmeel",
                name: "Telegram",
                hrefName: "@yshmeel"
            }, {
                href: "https://github.com/Yshmeel",
                name: "Github",
                hrefName: "Yshmeel"
            }
        ]
    },
    components: {
      'animated-title': animatedTitle,
    }
})
