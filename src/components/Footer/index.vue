<!--
 * @Author: 崔令雨
 * @Date: 2022-11-26 13:26:58
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 18:28:24
 * @Description: 
-->
<template>
  <footer>
    <div class="footer_versionCenter">
      <div class="footer_list">
        <FooterItem
          v-for="(item, index) in details"
          :key="index"
          :detail="item" />
      </div>
      <div class="bottom">
        <div class="about_us">
          <ul>
            <li>关于我们</li>
            <li>联系我们</li>
            <li>关于我们</li>
            <li>商家入驻</li>
            <li>营销中心</li>
            <li>友情链接</li>
            <li>关于我们</li>
            <li>营销中心</li>
            <li>友情链接</li>
            <li>关于我们</li>
          </ul>
        </div>
        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
        <p>京ICP备19006430号</p>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterItem from '@/components/Footer/FooterItem';
import wx from '@/assets/wx_cz.jpg';
export default {
  components: { FooterItem },
  data() {
    return {
      details: [
        {
          title: '购物指南',
          information: ['购物流程', '会员介绍', '生活旅行/团购', '常见问题', '购物指南'],
        },
        {
          title: '配送方式',
          information: ['上门自提', '211限时达', '配送服务查询', '配送费收取标准', '海外配送'],
        },
        {
          title: '支付方式',
          information: ['货到付款', '在线支付', '分期付款', '邮局汇款', '公司转账'],
        },
        {
          title: '售后服务',
          information: ['售后政策', '价格保护', '退款说明', '返修/退换货', '取消订单'],
        },
        {
          title: '特色服务',
          information: ['夺宝岛', 'DIY装机', '延保服务', '尚品汇E卡', '尚品汇通信'],
        },
        {
          title: '帮助中心',
          img: wx,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../mixer/mixer';
footer {
  background: #eaeaea;
  .footer_versionCenter {
    @include versionCenter;
    .footer_list {
      width: 100%;
      display: inline-flex;
      justify-content: space-around;
      border-bottom: 1px solid #e4e1e1;
      margin-top: 20px;
    }
    height: 322px;
    .bottom {
      padding: 20px;
      .about_us {
        ul {
          text-align: center;
          li {
            display: inline-block;
          }
        }
      }
      p {
        text-align: center;
      }
      & :nth-child(n) {
        padding: 3px 0;
      }
    }
  }
}
</style>
