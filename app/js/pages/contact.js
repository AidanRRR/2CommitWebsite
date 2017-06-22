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

var data = JSON.stringify({
    "personalizations": [{
        "to": [{
            "email": "aidan.rypens@hotmail.com",
            "name": "John Doe"
        }],
        "subject": "Hello, World!"
    }],
    "from": {
        "email": "sam.smith@example.com",
        "name": "Sam Smith"
    },
    "reply_to": {
        "email": "sam.smith@example.com",
        "name": "Sam Smith"
    },
    "subject": "Hello, World!",
    "content": [{
        "type": "text/html",
        "value": "<html><p>Hello, world!</p></html>"
    }]
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
xhr.setRequestHeader("authorization", "Bearer <<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>>");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);