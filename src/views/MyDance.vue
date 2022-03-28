<template>
  <div id="app">
    <ul class="dance">
      <li>
        <router-link to="/tuijian" class="dance-item" active-class="active"
          >推荐</router-link
        >
      </li>
      <li>
        <router-link to="/zhaiwu" class="dance-item" active-class="active"
          >宅舞</router-link
        >
      </li>
      <li>
        <router-link to="/jiewu" class="dance-item" active-class="active"
          >街舞</router-link
        >
      </li>
      <li>
        <router-link to="/mingxing" class="dance-item" active-class="active"
          >明星舞蹈</router-link
        >
      </li>
      <li>
        <router-link to="/zhongguo" class="dance-item" active-class="active"
          >中国舞</router-link
        >
      </li>
      <li>
        <router-link to="/zonghe" class="dance-item" active-class="active"
          >舞蹈综合</router-link
        >
      </li>
      <li>
        <router-link to="/jiaocheng" class="dance-item" active-class="active"
          >舞蹈教程</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style scoped>
.dance {
  width: 100vw;
  height: 40px;
  display: flex;
  align-items: center;
  overflow: scroll;
  margin-top: 84px;
  border-bottom: 1px solid #e7e7e7;
}
.dance::-webkit-scrollbar {
  display: none;
}
.dance > li {
  height: 40px;
  line-height: 40px;
  width: 20%;
  text-align: center;
  flex-shrink: 0;
  color: #505050;
  font-size: 14px;
}
.dance-item.active {
  display: inline-block;
  height: calc(100% - 2px);
  border-bottom: 2px solid #fb7299;
  color: #fb7299;
}
</style>
