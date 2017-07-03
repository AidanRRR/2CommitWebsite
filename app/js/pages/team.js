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
    this.vm.next();
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

var vm = new Vue({
    el: '#team-info',
    data: {
        team_index: 0,
        members: [{
                "name": "Katia",
                "title": "Account Manager",
                "quote": "My only focus is satisfaction and trust of our customers and our team."
            },
            {
                "name": "Koen",
                "title": "Project Manager",
                "quote": "There is no I in team!"
            },
            {
                "name": "Dimitri",
                "title": ".NET Architect",
                "quote": "Every day, work to refine skills you have and to add new tools to your repertoire."
            },
            {
                "name": "Stijn",
                "title": ".NET Architect",
                "quote": "Flying is learning how to throw yourself at the ground and miss"
            }
        ]
    },
    methods: {
        next: function () {
            this.team_index += 1;
            if (this.team_index == this.members.length) {
                this.team_index = 0;
            }
        }
    }
})