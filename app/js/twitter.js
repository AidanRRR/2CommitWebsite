new Vue({
    el: '#twitter',
    data: {
        tweets: '',
        tweetIndex: 0
    },
    methods: {
        getTweets: function () {
            this.$http.get('/api/tweets').then(response => {
                if (response.statusText == "OK") {
                    this.tweets = response.body;
                    setInterval(this.getNextTweet(), 5000);
                }
            });
        },
        getNextTweet: function () {
            this.tweetIndex++;

            let tweetDomTitle = "";
            let tweetDomImg = "";

            for (let tweet of this.tweets) {
                if (this.tweetIndex === index) {
                    tweetDomTitle = "<span class='tweet-text'>" + tweet.text + "</span><br />";
                    if (tweet.entities.media != undefined) {
                        tweetDomImg = "<img src='" + tweet.entities.media[0].media_url + "' class='tweet-img'>"
                        $("#tweets-text-container").append(tweetDomTitle);
                        $("#tweets-text-container").append(tweetDomImg);
                    } else {
                        $("#tweets-text-container").append(tweetDomTitle);
                    }
                }
            }

        }
    },
    beforeMount() {
        this.getTweets();
    }
})