<template>
 <div class="score">
   <!--头部模块-->
    <div class="wrap">

      <button class="shaixuan" @click="shaixuan">筛选</button>
      <div class="wrap-content">
        <div class="content">
          <li class="active">全场</li>
          <li>半场</li>
          <li>精简</li>
          <li>光柱</li>
        </div>
      </div>
      <router-link class="shezhi" tag="button" to="/shezhi">设置</router-link>
    </div>


    <div class="shaixuanli" v-show="flag">
      <router-link to="/qiangdui" tag="p">强队筛选</router-link>
      <router-link to="/shuju" tag="p">数据筛选</router-link>
      <router-link to="/saishi" tag="p">赛事筛选</router-link>
      <router-link to="/guojia" tag="p">国家筛选</router-link>
      <router-link to="/pankou" tag="p">盘口筛选</router-link>
      <router-link to="/tiaojian" tag="p">条件筛选</router-link>
      <router-link to="/zhishu" tag="p">指数筛选</router-link>
    </div>


    <!--导航栏-->
    <ul class="score-first-ui">
      <li>
        <span>强队落后</span>
        <span></span>
      </li>
      <li>
        <span>现场</span>
        <span></span>
      </li>
      <li>
        <span>赛程</span>
        <span></span>
      </li>
      <li>
        <span>指数</span>
        <span></span>
      </li>
      <li>
        <span>数据雷达</span>
        <span></span>
      </li>
    </ul>

    <ul class="score-second-ui">
      <span>曼联-切尔西</span>&nbsp&nbsp
      <span>大小推荐</span>&nbsp&nbsp
      <span>中！</span>
    </ul>

    <!--内容列表-->
    <ul class="score-content">
      <li class="row1">
        <div style="margin-top:0.22rem" class="iconfont icon-shoucang1"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-jiantou21"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-icon--"></div>
      </li>
      <li class="row2">
        <p>日职女乙</p>
        <p>12:00</p>
        <p>80’</p>
        <p>半场<span></span></p>
      </li>
      <li class="row3">
        <p>
          <span>2</span><span>1</span><small>[7]</small>横滨海鸥女足123123
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

        <p>
          <span>2</span><span>1</span><small>[9]</small>京都女足
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

      </li>
      <li class="row4">
        <strong>1</strong>
        <strong>0</strong>
      </li>
      <li class="row5">
        <p>
          <span>半1:0</span>
        </p>
        <p>
          <span class="iconfont icon-qizi3">4-1</span>
        </p>
      </li>
      <li class="row6">
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row7">
        <p>
          <span>平手</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.00</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row8">
        <p>
          <span>1.51</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.56</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>9.68</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.32</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
    </ul>

    <ul class="score-content">
      <li class="row1">
        <div style="margin-top:0.22rem" class="iconfont icon-shoucang1"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-jiantou21"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-icon--"></div>
      </li>
      <li class="row2">
        <p>日职女乙</p>
        <p>12:00</p>
        <p>80’</p>
        <p>半场<span></span></p>
      </li>
      <li class="row3">
        <p>
          <span>2</span><span>1</span><small>[7]</small>横滨海鸥女足123123
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

        <p>
          <span>2</span><span>1</span><small>[9]</small>京都女足
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

      </li>
      <li class="row4">
        <strong>1</strong>
        <strong>0</strong>
      </li>
      <li class="row5">
        <p>
          <span>半1:0</span>
        </p>
        <p>
          <span class="iconfont icon-qizi3">4-1</span>
        </p>
      </li>
      <li class="row6">
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row7">
        <p>
          <span>平手</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.00</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row8">
        <p>
          <span>1.51</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.56</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>9.68</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.32</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
    </ul>

    <ul class="score-content">
      <li class="row1">
        <div style="margin-top:0.22rem" class="iconfont icon-shoucang1"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-jiantou21"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-icon--"></div>
      </li>
      <li class="row2">
        <p>日职女乙</p>
        <p>12:00</p>
        <p>80’</p>
        <p>半场<span></span></p>
      </li>
      <li class="row3">
        <p>
          <span>2</span><span>1</span><small>[7]</small>横滨海鸥女足123123
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

        <p>
          <span>2</span><span>1</span><small>[9]</small>京都女足
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

      </li>
      <li class="row4">
        <strong>1</strong>
        <strong>0</strong>
      </li>
      <li class="row5">
        <p>
          <span>半1:0</span>
        </p>
        <p>
          <span class="iconfont icon-qizi3">4-1</span>
        </p>
      </li>
      <li class="row6">
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row7">
        <p>
          <span>平手</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.00</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row8">
        <p>
          <span>1.51</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.56</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>9.68</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.32</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
    </ul>

    <ul class="score-content">
      <li class="row1">
        <div style="margin-top:0.22rem" class="iconfont icon-shoucang1"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-jiantou21"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-icon--"></div>
      </li>
      <li class="row2">
        <p>日职女乙</p>
        <p>12:00</p>
        <p>80’</p>
        <p>半场<span></span></p>
      </li>
      <li class="row3">
        <p>
          <span>2</span><span>1</span><small>[7]</small>横滨海鸥女足123123
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

        <p>
          <span>2</span><span>1</span><small>[9]</small>京都女足
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

      </li>
      <li class="row4">
        <strong>1</strong>
        <strong>0</strong>
      </li>
      <li class="row5">
        <p>
          <span>半1:0</span>
        </p>
        <p>
          <span class="iconfont icon-qizi3">4-1</span>
        </p>
      </li>
      <li class="row6">
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row7">
        <p>
          <span>平手</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.00</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row8">
        <p>
          <span>1.51</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.56</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>9.68</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.32</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
    </ul>

    <ul class="score-content">
      <li class="row1">
        <div style="margin-top:0.22rem" class="iconfont icon-shoucang1"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-jiantou21"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-icon--"></div>
      </li>
      <li class="row2">
        <p>日职女乙</p>
        <p>12:00</p>
        <p>80’</p>
        <p>半场<span></span></p>
      </li>
      <li class="row3">
        <p>
          <span>2</span><span>1</span><small>[7]</small>横滨海鸥女足123123
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

        <p>
          <span>2</span><span>1</span><small>[9]</small>京都女足
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

      </li>
      <li class="row4">
        <strong>1</strong>
        <strong>0</strong>
      </li>
      <li class="row5">
        <p>
          <span>半1:0</span>
        </p>
        <p>
          <span class="iconfont icon-qizi3">4-1</span>
        </p>
      </li>
      <li class="row6">
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row7">
        <p>
          <span>平手</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.00</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row8">
        <p>
          <span>1.51</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.56</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>9.68</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.32</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
    </ul>

    <ul class="score-content">
      <li class="row1">
        <div style="margin-top:0.22rem" class="iconfont icon-shoucang1"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-jiantou21"></div>
        <div style="margin-top:0.22rem" class="iconfont icon-icon--"></div>
      </li>
      <li class="row2">
        <p>日职女乙</p>
        <p>12:00</p>
        <p>80’</p>
        <p>半场<span></span></p>
      </li>
      <li class="row3">
        <p>
          <span>2</span><span>1</span><small>[7]</small>横滨海鸥女足123123
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

        <p>
          <span>2</span><span>1</span><small>[9]</small>京都女足
        </p>

        <p>
          <span>射<small>16</small>(<small>5</small>)</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>控<small>52</small>%</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>功<small>112</small></span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>

      </li>
      <li class="row4">
        <strong>1</strong>
        <strong>0</strong>
      </li>
      <li class="row5">
        <p>
          <span>半1:0</span>
        </p>
        <p>
          <span class="iconfont icon-qizi3">4-1</span>
        </p>
      </li>
      <li class="row6">
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.48</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row7">
        <p>
          <span>平手</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.00</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>5.5</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
      <li class="row8">
        <p>
          <span>1.51</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>0.56</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>9.68</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
        <p>
          <span>1.32</span>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </li>
    </ul>

   
   <bottom></bottom>
 </div>
</template>

<script>
  import bottom from '../../components/bottom.vue'
    export default {
      name: "score",
      data(){
        return{
          flag: false
        }
      },
      methods: {
        shaixuan: function(){
          return this.flag = !this.flag;
        }
      },
      components:{
          bottom
      }
    }
</script>

<style scoped>
/*头部模块*/
.wrap{
  background: #452E94;
  width:100%;
  height: 1.11rem;
  display:flex;
  justify-content: space-between;
}
.wrap button{
  display:block;
  font-size:0.2rem;
  margin:0.23rem 0.18rem;
  height: 0.56rem;
  width: 1.2rem;
  border:1px solid #ccc;
  border-radius:2rem;
  text-align:center;
  background: #452E94;
  color:#e6d9f3;
}
.wrap-content{
  margin:0.24rem 0;
}
.content{
  width: 4.05rem;
  display: flex;
  justify-content: space-between;
}
.content li{
  width:25%;
  font-size:0.3rem;
  padding: 0.06rem 0;
  border:1px solid #ccc;
  text-align:center;
  color: #fff;
}
.content span{
  width:25%;
  text-align:center;
  font-size: 0.27rem;
}
.content .active{
  color: #452E94;
  background: #fff;
  font-weight:bold;
}

/*导航栏一*/
.score-first-ui{
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 0.13rem;
  text-align: center;
  background: #ECEDFF;
}
.score-first-ui li{
  vertical-align: middle;
  margin:0;
  font-weight: bold;
}
.score-first-ui li span:first-child{
  line-height: 0.74rem;
  font-size: 0.3rem;
  color: #84828D;
}
.score-first-ui li span:last-child{
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 0.1rem solid transparent;
  border-right: 0.1rem solid transparent;
  border-top: 0.22rem solid red;
  margin-left:-0.06rem;
}
/*导航栏二*/
.score-second-ui{
  display:flex;
  justify-content: center;
  background: #f03001;
  height:0.45rem;
  color:#fff;
  font-size:0.22rem;
  line-height:0.45rem;
}
/*内容部分*/
.score-content{
  padding:0.1rem 0.1rem 0.06rem 0rem;
  display:flex;
  flex-direction: row;
  height: 1.8rem;
  border-bottom: 1px solid #ccc;
  background:#fff;
}
.score-content li{
  text-align:center;
  padding-bottom:0.06rem;
}
.row1{
  flex: 0.7;
  line-height:0.26rem;
  margin-top:-0.1rem;
}
.row1 div{
  font-size:0.32rem;
}
.score-content .row2{
  flex: 1.8;
  text-align:left;
}
.score-content .row2 p{
  font-size:0.24rem;
  color: #9D9B9c;
  line-height:0.34rem;
}
.row2 p:nth-child(1){
   color: #7ABD43;
 }
.row2 p:nth-child(2){
  font-size:0.24rem;
}
.row2 span{
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 0.08rem solid transparent;
  border-right: 0.08rem solid transparent;
  border-top: 0.18rem solid red;
}

.row3{
  flex: 5;
}
.row3 p:nth-child(2n-1) {
  line-height:0.46rem;
  font-size:0.33rem;
  color: #000;
  width: 3.1rem;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-weight: bold;
}
.row3 p:nth-child(2n-1) > span{
  font-size:0.18rem;
  border-radius: 0.06rem;
  padding:0 0.06rem;
  font-weight: normal;
}
.row3 span:nth-child(1){
  background: #E9b03D;
}
.row3 span:nth-child(2){
  background: #FE3334;
}
.row3 p:nth-child(2n){
  display:flex;
  padding-left:0.4rem;

}
.row3 p:nth-child(2n) > span:nth-child(2n-1){
  flex:0.5;
  font-size:0.24rem;
  color: #AAADA5;
  font-weight: normal;
  background: none;
}
.row3 p:nth-child(2n) > span:nth-child(2n-1) > small{
  font-size:0.24rem;
  color: #000;
}
.row3 p:nth-child(2n) > span:nth-child(2n){
  display:block;
  line-height:0.01rem;
  width:0.12rem;
  background:none;
}
.row3 p:nth-child(2n) > span:nth-child(2n) > span{
  display:block;
  height:0.03rem;
  margin-bottom:0.02rem;
  background:#F5D101;
  border-radius: 0.3rem;
}
.row3 p:nth-child(2n) > span:nth-child(2n) > span:first-of-type{
  margin-top:0.02rem;
}


.row4{
  flex: 0.4;
}
.row4 strong:first-child{
  margin-top:-0.2rem;
}
.row4 strong{
  font-size:0.44rem;
  line-height:0.86rem;
  color: #4b9607;
  display:block;
}
.row5{
  flex: 1.1;
}
.row5 p:first-child{
  margin-top:-0.22rem;
}
.row5 p{
  line-height:0.86rem;
}
.row5 p span{
  font-size:0.18rem;
}
.row7{
  flex: 1.2;
}
.row6,
.row7,
.row8{
  flex: 1.1;
  margin-top:-0.1rem;
  line-height:0.42rem;
}
.row6 p,
.row7 p,
.row8 p{
  display:flex;
}
.row6 span:first-child,
.row7 span:first-child,
.row8 span:first-child{
  flex:2;
  font-size:0.22rem;
}
.row6 span:last-of-type,
.row7 span:last-of-type,
.row8 span:last-of-type{
  display:block;
  height:0.3rem;
  width:0.12rem;
}
.row6 span:last-of-type > span,
.row7 span:last-of-type > span,
.row8 span:last-of-type > span{
  display:block;
  margin-bottom:0.02rem;
  height:0.03rem;
  background:#F5D101;
  border-radius: 0.3rem;
}
.row6 span:last-of-type > span:first-of-type,
.row7 span:last-of-type > span:first-of-type,
.row8 span:last-of-type > span:first-of-type{
  margin-top:0.08rem;
}


/*shaixuanli*/
.shaixuanli{
  width:1.8rem;
  border:1px solid #8298A2;
  margin-left: 0.05rem;
  position:absolute;
  z-index:2;
  background:#DEE7EE;
  height:3.86rem;
}
.shaixuanli p{
  font-size:0.31rem;
  text-align:center;
  line-height:0.54rem;
  color:#252525;
}

</style>
