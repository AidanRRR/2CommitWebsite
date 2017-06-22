var rotation = 0;
const rotationStep = 20;

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
            $("#moon").css({
                transform: "rotate(" + now + "deg)"
            });
        }
    });
}