var vue = new Vue({
    el: '#signature',
    data: {
        voornaam: '',
        achternaam: '',
        email: '',
        gsm: '',
        signature: '#signature_code'
    },
    methods: {
        generateSignature: function () {
            document.querySelector('#signature_code').select();
            document.execCommand('copy');
        }
    }
});