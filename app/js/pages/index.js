var vm = new Vue({
    el: '#landing',
    data: {},
    methods: {
        preloadImages: function () {
            var images = new Array()

            function preload() {
                for (i = 0; i < preload.arguments.length; i++) {
                    images[i] = new Image()
                    images[i].src = preload.arguments[i]
                }
            }
            preload(
                "../../images/technische-oplossingen.png",
                "../../images/dienstverlening.png",
                "../../images/commitment-space-ship-1.png",
                "../../images/commitment-space-ship-2.png",
                "../../images/commitment-space-ship-3.png",
                "../../images/commitment-space-ship-4.png",
                "../../images/jobs_tv_wide.png",
                "../../images/jobs_tv_wide_loading.png",
                "../../images/why-2commit.png",
                "../../images/planet.png",
                "../../images/avatars/aidan.png",
                "../../images/avatars/bianca.png",
                "../../images/avatars/dimitri.png",
                "../../images/avatars/katia.png",
                "../../images/avatars/koen.png",
                "../../images/avatars/kristof.png",
                "../../images/avatars/richard.png",
                "../../images/avatars/stijn.png",
                "../../images/avatars/tanguy.png",
                "../../images/spaceman_walking_sheet_one_iteration.png",
                "../../images/spaceman_walking_frame_1.png",
                "../../images/ufo-cow.png",
                "../../images/ufo-cow-hover.png",

                "../../images/spaceman_walking/Spaceman Walking_10000.png",
                "../../images/spaceman_walking/Spaceman Walking_10001.png",
                "../../images/spaceman_walking/Spaceman Walking_10002.png",
                "../../images/spaceman_walking/Spaceman Walking_10003.png",
                "../../images/spaceman_walking/Spaceman Walking_10004.png",
                "../../images/spaceman_walking/Spaceman Walking_10005.png",
                "../../images/spaceman_walking/Spaceman Walking_10006.png",
                "../../images/spaceman_walking/Spaceman Walking_10007.png",
                "../../images/spaceman_walking/Spaceman Walking_10008.png",
                "../../images/spaceman_walking/Spaceman Walking_10009.png",
                "../../images/spaceman_walking/Spaceman Walking_10010.png",
                "../../images/spaceman_walking/Spaceman Walking_10011.png",
                "../../images/spaceman_walking/Spaceman Walking_10012.png",
                "../../images/spaceman_walking/Spaceman Walking_10013.png",
                "../../images/spaceman_walking/Spaceman Walking_10014.png",
                "../../images/spaceman_walking/Spaceman Walking_10015.png",
                "../../images/spaceman_walking/Spaceman Walking_10016.png",
                "../../images/spaceman_walking/Spaceman Walking_10017.png",
                "../../images/spaceman_walking/Spaceman Walking_10018.png",
                "../../images/spaceman_walking/Spaceman Walking_10019.png",
                "../../images/spaceman_walking/Spaceman Walking_10020.png",
                "../../images/spaceman_walking/Spaceman Walking_10021.png",
                "../../images/spaceman_walking/Spaceman Walking_10022.png",
                "../../images/spaceman_walking/Spaceman Walking_10023.png",
                "../../images/spaceman_walking/Spaceman Walking_10024.png",
                "../../images/spaceman_walking/Spaceman Walking_10025.png",
                "../../images/spaceman_walking/Spaceman Walking_10026.png",
                "../../images/spaceman_walking/Spaceman Walking_10027.png",
                "../../images/spaceman_walking/Spaceman Walking_10028.png",
                "../../images/spaceman_walking/Spaceman Walking_10029.png",
                "../../images/spaceman_walking/Spaceman Walking_10030.png",
                "../../images/spaceman_walking/Spaceman Walking_10031.png",
                "../../images/spaceman_walking/Spaceman Walking_10032.png",
                "../../images/spaceman_walking/Spaceman Walking_10033.png",
                "../../images/spaceman_walking/Spaceman Walking_10034.png",
                "../../images/spaceman_walking/Spaceman Walking_10035.png",
                "../../images/spaceman_walking/Spaceman Walking_10036.png",
                "../../images/spaceman_walking/Spaceman Walking_10037.png",
                "../../images/spaceman_walking/Spaceman Walking_10038.png",
                "../../images/spaceman_walking/Spaceman Walking_10039.png",
                "../../images/spaceman_walking/Spaceman Walking_10040.png",
                "../../images/spaceman_walking/Spaceman Walking_10041.png",
                "../../images/spaceman_walking/Spaceman Walking_10042.png",
                "../../images/spaceman_walking/Spaceman Walking_10043.png",
                "../../images/spaceman_walking/Spaceman Walking_10044.png",
                "../../images/spaceman_walking/Spaceman Walking_10045.png",
                "../../images/spaceman_walking/Spaceman Walking_10046.png",
                "../../images/spaceman_walking/Spaceman Walking_10047.png"

            )
        }
    }
})

this.vm.preloadImages();