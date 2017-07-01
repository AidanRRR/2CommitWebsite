var rotation = 0;
const rotationStep = 40;

function rotateLeft() {
    var from = this.rotation;
    var to = this.rotation + rotationStep;
    this.rotation += rotationStep;
    AnimateRotate(from, to);
}

function rotateRight() {
    var from = this.rotation;
    var to = this.rotation - rotationStep;
    this.rotation -= rotationStep;
    AnimateRotate(from, to);
}

function AnimateRotate(from, to) {
    $({
        deg: from
    }).animate({
        deg: to
    }, {
            step: function (now, fx) {
                $("#planet").css({
                    transform: "rotate(" + now + "deg)"
                });
            }
        });

    AnimateSpaceman();
}

function AnimateSpaceman() {
    var spaceman = $('#spaceman');

    if (spaceman.hasClass('spaceman-animate')) {
        spaceman.removeClass('spaceman-animate');
        spaceman.addClass('spaceman-animate-b');
    } else {
        if (spaceman.hasClass('spaceman')) {
            spaceman.removeClass('spaceman');
        }
        spaceman.removeClass('spaceman-animate-b');
        spaceman.addClass('spaceman-animate');
    }
}

new Vue({
    el: '#team-info',
    data: {
        aidan: "aidan is heel leuk",
        dimitri: "jomiaij",
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