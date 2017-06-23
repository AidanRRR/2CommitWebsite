new Vue({
    el: '#contact-container',
    data: {
        message: false,
        voornaam: '',
        achternaam: '',
        email: '',
        bericht: ''

    },
    methods: {
        enableMessage: function () {
            this.message = true;
        },
        sendMessage: function () {
            // POST /someUrl
            this.$http.post('/api/mail', {
                voornaam: this.voornaam,
                achternaam: this.achternaam,
                email: this.email,
                bericht: this.bericht
            }).then(response => {

                // get status
                response.status;

                // get status text
                response.statusText;

                // get 'Expires' header
                response.headers.get('Expires');

                // get body data
                this.someData = response.body;

                //console.log(response);

            }, response => {
                // error callback
                //console.log(response);
            });
        }
    }
})