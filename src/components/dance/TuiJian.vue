<template>
  <div class="tuijian">
    <div class="video-box">
      <!-- 热门推荐 -->
      <div class="video-bar">
        <div class="bt">热门推荐</div>
        <div class="more">
          <i class="iconfont biliicon-paixingbang"></i>
          <span class="paihangbang">排行榜</span>
          <i class="iconfont biliicon-youjiantou"></i>
        </div>
      </div>
      <!-- 推荐数据 -->
      <ul class="video-list">
        <li class="video-item" v-for="(item, index) in tuijian" :key="index">
          <div class="item-img">
            <img :src="item.imgSrc" alt="" />
            <div class="count">
              <div class="bofangliang">
                <i class="iconfont biliicon-shipinbofangliang"></i>
                <span class="count-count">{{ item.count }}</span>
              </div>
              <div class="danmuliang">
                <i class="iconfont biliicon-danmushu"></i>
                <span class="count-count">{{ item.num }}</span>
              </div>
            </div>
          </div>
          <p class="item-title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
    <div class="video-box">
      <!-- 宅舞 -->
      <div class="video-bar">
        <div class="bt">宅舞</div>
        <div class="more">
          <span class="paihangbang lookmore">查看更多</span>
          <i class="iconfont biliicon-youjiantou lookmore"></i>
        </div>
      </div>
      <!-- 宅舞数据 -->
      <ul class="video-list">
        <li class="video-item" v-for="(item, index) in tuijian" :key="index">
          <div class="item-img">
            <img :src="item.imgSrc" alt="" />
            <div class="count">
              <div class="bofangliang">
                <i class="iconfont biliicon-shipinbofangliang"></i>
                <span class="count-count">{{ item.count }}</span>
              </div>
              <div class="danmuliang">
                <i class="iconfont biliicon-danmushu"></i>
                <span class="count-count">{{ item.num }}</span>
              </div>
            </div>
          </div>
          <p class="item-title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TuiJian",
  data() {
    return {
      tuijian: null,
    };
  },
  methods: {
    async getTuijian() {
      let { data } = await axios.get("/api/tuijian");
      this.tuijian = data;
    },
  },
  created() {
    this.getTuijian();
  },
};
</script>

<style scoped>
.tuijian {
  padding-top: 10px;
}
.video-box {
  box-sizing: border-box;
  width: 100vw;
  padding: 0 5px;
}
.video-bar {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
}
.video-bar .bt {
  font-size: 15px;
}
.video-bar .more {
  font-size: 14px;
  color: #ffa726;
}
.video-bar .more .paihangbang {
  margin: 0 5px;
}
.video-list {
  display: flex;
  flex-wrap: wrap;
}
.video-item {
  box-sizing: border-box;
  width: 50%;
  padding: 8px 5px;
}
.item-img {
  width: 100%;
  position: relative;
}
.item-img > img {
  width: 100%;
}
.item-img .count {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 12px;
  color: #fff;
  padding: 5px 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
}
.bofangliang,
.danmuliang {
  display: flex;
  align-items: center;
}
.item-img .count .iconfont {
  margin-right: 5px;
}
.item-title {
  font-size: 12px;
  color: #212121;
  margin-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.video-bar .lookmore {
  font-size: 14px;
  color: #999;
}
</style>