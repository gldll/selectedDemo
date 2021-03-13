<template>
    <div class="sliderbar">
        <div class="title">热销榜</div>
        <ul class="list">
            <li class="list-item clearfix"
                v-for="value,index in datas"
                :key="index">
                <img class="icon"
                     :src="$http.getImg(value.src)"
                     alt="">
                <span class="name"
                      v-html="value.text">
                </span>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            datas: []
        }
    },
    async created () {
        this.datas = await this.$http.getSidebar()

    }

}
</script>

<style>
/*  */
.sliderbar {
    width: 108px;
    border: 1px solid #e2ded6;
    position: absolute;
    background: #fff;
    top: 30px;
    left: -150px;
}
.sliderbar .title {
    width: 108px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background: url(../assets/imgs/slidertitle.png) no-repeat;
    font-size: 16px;
    color: #bb3343;
    font-weight: 700;
    border-bottom: 1px solid #e2ded6;
}
.sliderbar .list {
}
.sliderbar .list-item {
    display: table;
    width: 86px;
    height: 36px;
    padding: 1px 11px 0;
    border-bottom: 1px solid #e2ded6;
    position: relative;
}
.sliderbar .list-item .icon {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 12px;
    top: 2px;
}
.sliderbar .list-item .name {
    display: table-cell;
    vertical-align: middle;
    padding-left: 36px;
    font-size: 12px;
    line-height: 14px;
}
.sliderbar .list-item.nbb {
    border-bottom: none;
}
</style>