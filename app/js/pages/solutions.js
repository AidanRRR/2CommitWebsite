new Vue({
    el: '#solution-container',
    data: {
        consultancy: true,
        development: false,
        process: false
    },
    methods: {
        toggleConsultancy: function () {
            this.consultancy = true;
            this.development = false;
            this.process = false;
        },
        toggleDevelopment: function () {
            this.consultancy = false;
            this.development = true;
            this.process = false;
        },
        toggleSolution: function () {
            this.consultancy = false;
            this.development = false;
            this.process = true;
        }
    }
})