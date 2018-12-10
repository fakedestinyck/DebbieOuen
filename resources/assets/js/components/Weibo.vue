<template>
    <h2><a href="sinaweibo://detailbulletincomment?comment_id=4314916112102846&anchor_id=4314916925735229&is_show_bulletin=2">跳转</a></h2>
</template>

<script>
    export default {

        components: {

        },

        mounted: function() {
            this.hideLoading();
        },
        updated: function() {

        },
        methods: {
            hideLoading: function () {
                $('#loading_all').delay(500).hide(0);
                setTimeout(function(){
                    $('body').removeClass("scoll_dis");
                    document.removeEventListener("touchmove", myFunction);
                    $('html, body, main').css({
                        overflow: 'auto',
                        height: 'auto'
                    });
                },500);
                console.log("hide");
            },
        },
        data() {
            return {


            }
        }
    }
</script>

<style scoped>

</style>