new Vue({
    el: '#twitter',
    data: {
        tweets: ''
    },
    methods: {
        getTweets: function () {
            this.$http.get('/api/tweets').then(response => {
                if (response.statusText == "OK") {
                    this.tweets = response.body;
                    let tweetDomTitle = "";
                    let tweetDomImg = "";
                    for (let tweet of this.tweets) {
                        //console.log(tweet.text);
                        tweetDomTitle = "<span class='tweet-text'>" + tweet.text + "</span><br />";
                        if (tweet.entities.media != undefined) {
                            tweetDomImg = "<img src='" + tweet.entities.media[0].media_url + "' class='tweet-img'>"
                            $("#tweets-text-container").append(tweetDomTitle);
                            $("#tweets-text-container").append(tweetDomImg);
                            //console.log(tweet.entities.media[0].media_url);
                        } else {
                            $("#tweets-text-container").append(tweetDomTitle);
                        }
                    }
                }
            });
        }
    },
    beforeMount() {
        this.getTweets();
    }
})