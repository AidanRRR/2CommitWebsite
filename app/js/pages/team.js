var rotation = 0;
const rotationStep = 40;
const loopSpeed = 5000;

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

function Loop() {
    setInterval(function () {
        rotateRight();
    }, loopSpeed);
}

var vm = new Vue({
    el: '#team-info',
    data: {
        team_index: 0,
        members: [{
                "name": "Katia",
                "title": "Account Manager",
                "quote": "My only focus is satisfaction and trust of our customers and our team.",
                "url": "images/avatars/katia.png"
            },
            {
                "name": "Koen",
                "title": "Project Manager",
                "quote": "There is no I in team!",
                "url": "images/avatars/koen.png"
            },
            {
                "name": "Dimitri",
                "title": ".NET Architect",
                "quote": "Every day, work to refine skills you have and to add new tools to your repertoire.",
                "url": "images/avatars/dimitri.png"
            },
            {
                "name": "Stijn",
                "title": ".NET Architect",
                "quote": "Flying is learning how to throw yourself at the ground and miss",
                "url": "images/avatars/stijn.png"
            },
            {
                "name": "Aidan",
                "title": "",
                "quote": "",
                "url": "images/avatars/aidan.png"
            },
            {
                "name": "Richard",
                "title": "",
                "quote": "",
                "url": "images/avatars/richard.png"
            },
            {
                "name": "Kristof",
                "title": "",
                "quote": "",
                "url": "images/avatars/kristof.png"
            },
            {
                "name": "Bianca",
                "title": "",
                "quote": "",
                "url": "images/avatars/bianca.png"
            },
            {
                "name": "Tanguy",
                "title": "",
                "quote": "",
                "url": "images/avatars/tanguy.png"
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
});