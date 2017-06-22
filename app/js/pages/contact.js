new Vue({
    el: '#contact-container',
    data: {
        message: false,
    },
    methods: {
        sendMessage: function () {
            this.message = true;
        }
    }
})