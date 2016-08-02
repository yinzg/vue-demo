Vue.component("c-ul", {
    template: '#c-ul',
    props: {nums: Array}
});
new Vue({
    el: "#list",
    data: {
        datanums: [
            {text: '1'},
            {text: '2'},
            {text: '3'}
        ]
    }
});

