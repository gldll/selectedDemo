<template>
    <div class="banner">
        <a href="javascript:;"
           class="btn prev"
           @click="nowIndex--">上一项</a>
        <a href="javascript:;"
           class="btn next"
           @click="nowIndex++">下一项</a>
        <ul class="banner-list">
            <li class="banner-container "
                :class="{cur:nowIndex == index}"
                v-for="value,index in banners"
                :key="index"
                @mouseleave="setTimer()"
                @mouseenter="clearTimer()">
                <a href="value.href">
                    <img :src="$http.getImg(value.src)">
                </a>
            </li>
        </ul>
        <ol class="number-list">
            <li :class="{active:nowIndex == index}"
                v-for="value,index in banners"
                :key="index"
                @click="nowIndex = index"></li>

        </ol>
    </div>
</template>

<script>
export default {
    data () {
        return {
            banners: [],
            now: 0,
            timer: null
        }
    },
    async created () {
        this.banners = await this.$http.getBanners()
        this.setTimer()
    },
    methods: {
        setTimer () {
            this.timer = setInterval(() => {
                this.nowIndex++
            }, 3000);

        },
        clearTimer () {
            clearInterval(this.timer)

        }

    },
    computed: {
        nowIndex: {
            get () {
                return this.now
            },
            set (index) {
                if (index > this.banners.length - 1) {
                    return this.now = 0
                }
                if (index < 0) {
                    return this.now = this.banners.length - 1
                }
                return this.now = index
            }
        }
    },
    beforeDestroy () {
        this.clearTimer()
    },

}
</script>

<style>
/* banner */
.banner {
    height: 420px;
    position: relative;
}
.banner-list {
}
.banner-container {
    width: 1920px;
    height: 420px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0;
    transition: 0.7s all ease;
}
.banner-container img {
    width: 1920px;
    height: 420px;
}
.banner-container.cur {
    opacity: 1;
}
.banner .btn {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 200px;
    text-indent: -99999px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #d0c4af;
    background-image: url(../assets/imgs/icon2.png);
    background-repeat: no-repeat;
}
.banner .btn:hover {
    background-color: #b19e7a;
}
.banner .btn.prev {
    background-position: 0 -5384px;
    margin-left: -605px;
}
.banner .btn.next {
    background-position: 0 -5604px;
    margin-left: 555px;
}
.banner .number-list {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 4px;
    text-align: center;
    z-index: 2;
}
.banner .number-list li {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 8px 10px;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #cecece;
    transition: 0.7s all ease;
}
.banner .number-list .active {
    background: #a7936e;
    box-shadow: 0 0 0 4px #dfcead;
}
</style>