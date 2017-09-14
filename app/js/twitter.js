new Vue({
    el: '#twitter',
    data: {
        tweets: '',
        tweetIndex: 0,
        tweetsLoopSpeed: 5000
    },
    methods: {
        getTweets: function () {
            this.$http.get('/api/tweets').then(response => {
                if (response.statusText == "OK") {
                    this.tweets = response.body;
                    this.getNextTweet();
                }
            });
        },
        getNextTweet: function () {
            this.tweetIndex++;

            let tweetDomTitle = "";
            let tweetDomImg = "";
            tweetDomTitle = "<span class='tweet-text'>" + this.tweets[this.tweetIndex].text + "</span><br />";

            $("#twitter-box").removeClass("tweets-loading").addClass("tweets");

            $("#tweets-text-container").empty();
            if (this.tweets[this.tweetIndex].entities.media != undefined) {
                tweetDomImg = "<img src='" + this.tweets[this.tweetIndex].entities.media[0].media_url + "' class='tweet-img'>"
                $("#tweets-text-container").append(tweetDomTitle);
                $("#tweets-text-container").append(tweetDomImg);
            } else {
                //tweetDomImg = "<img src='" + "http://www.rypens.be/upload/files/Logo-07.png" + "' class='tweet-img'>"
                $("#tweets-text-container").append(tweetDomTitle);
                //$("#tweets-text-container").append(tweetDomImg);
            }

            if (this.tweetIndex < 9) {
                setTimeout(function () {
                    $("#tweets-text-container").empty;
                    $("#twitter-box").removeClass("tweets").addClass("tweets-loading");
                }, this.tweetsLoopSpeed - 500);
                setTimeout(this.getNextTweet, this.tweetsLoopSpeed);
            }
        }
    },
    beforeMount() {
        this.getTweets();
    }
})