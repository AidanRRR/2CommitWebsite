new Vue({
    el: '#solution-container',
    data: {
        choose: true,
        services: [2],
        solutions: [3]
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
            console.log("toggleSolution");
            this.choose = false;
            var newSolutions = new Array([this.solutions.length]);
            newSolutions[0] = true;
            for (var i = 1; i < this.solutions.length; i++) {
                newSolutions[i] = false;
            }
            newSolutions[index] = true;
            this.solutions = newSolutions;
        },
        back: function () {
            this.choose = true;
            this.services = [false, false, false];
            this.solutions = [false, false, false, false];
        }
    }
})