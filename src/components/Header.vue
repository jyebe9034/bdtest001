<template>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item><span class="font-bold text-2xl" style="color: darkorange">보건의료 빅데이터 플랫폼</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">소개</template>
        <el-menu-item index="1-1" @click="activeRoute('/intro/businessIntro')">사업 소개</el-menu-item>
        <el-menu-item index="1-2" @click="activeRoute('/intro/PlatformIntro')">플랫폼 소개</el-menu-item>
        <el-menu-item index="1-3"
                      @click="activeRoute('/intro/DataOfferProcess')">데이터 제공 절차</el-menu-item>
        <el-menu-item index="1-4"
                      @click="activeRoute('/intro/DataDeIdentified')">데이터 비식별조치</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">데이터 카탈로그</template>
        <el-menu-item index="2-1"
                      @click="activeRoute('/catalog/dataCatalogIntro')">데이터 카탈로그 소개</el-menu-item>
        <el-menu-item index="2-2"
                      @click="activeRoute('/catalog/searchByInstitute')">기관별 조회</el-menu-item>
        <el-menu-item index="2-3"
                      @click="activeRoute('/catalog/dataCatalogDownload')">
          데이터 카탈로그 다운로드</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">데이터 신청</template>
        <el-menu-item index="3-1" @click="activeRoute('/apply/dataApplyProcess')">데이터 신청절차
        </el-menu-item>
        <el-menu-item index="3-2" @click="activeRoute('/apply/dataApply')">데이터 신청</el-menu-item>
        <el-menu-item index="3-3" @click="activeRoute('/apply/dataTakeOutApplyResult')">폐쇄망데이터
          반출신청결과
        </el-menu-item>
        <el-menu-item index="3-4"
                      @click="activeRoute('/apply/dataBringInBoard')">반입게시판</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">공지사항</template>
        <el-menu-item index="4-1" @click="activeRoute('/notice/notice')">공지사항</el-menu-item>
        <el-menu-item index="4-2" @click="activeRoute('/notice/fAQ')">FAQ</el-menu-item>
        <el-menu-item index="4-3" @click="activeRoute('/notice/qnA')">Q&N 통합</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
  methods: {
    async activeRoute(path) {
      await this.$router.push(path);
    },
  },
};
</script>
<style>

</style>
