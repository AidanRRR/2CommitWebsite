new Vue({
    el: '#solution-container',
    data: {
        choose: true,
        services: [false, false, false, false],
        solutions: [5]
    },
    methods: {
        toggleServices: function (index) {
            this.choose = false;
            var newServices = new Array([this.services.length]);
            newServices[0] = true;
            for (var i = 1; i < this.services.length; i++) {
                newServices[i] = false;
            }
            newServices[index] = true;
            this.services = newServices;
        },
        toggleSolutions: function (index) {
            this.choose = false;
            var newSolutions = new Array([this.solutions.length]);
            newSolutions[0] = true;
            for (var i = 1; i < this.solutions.length; i++) {
                newSolutions[i] = false;
            }
            newSolutions[index] = true;
            this.solutions = newSolutions;
        }
    }
})