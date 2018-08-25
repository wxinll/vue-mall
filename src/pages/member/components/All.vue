<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block"
      v-for="li in list">
      <a class="block-item js-address-item address-item " 
        :class="{'address-item-default':li.isDefault}"
        @click="toEdit(li)" >
        <div class="address-title">{{li.name}} {{li.tel}}</div>
        <p>{{li.provinceName}}{{li.cityName}}{{li.districtName}}{{li.address}}</p>
        <a class="address-edit">修改</a>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link :to="{path:'/address/form',query: {type: 'add'}}" class="btn btn-blue js-no-webview-block js-add-address-btn">新增地址
      </router-link>
    </div>
  </div>
</template>

<script>

  import Address from 'js/addressService.js'

  export default{
    computed: {
      list() {
        return this.$store.state.lists
      }
    },
    created() {
      if(!this.list){
        this.$store.dispatch('getLists')
      }
    },
    methods: {
      toEdit(li){
        this.$router.push({path: '/address/form', 
          query: {
            type: 'edit',
            instance: li
          }})
      },
    }
  }
</script>

<style scoped>
  @import './address_base.css';
  @import './address.css';
</style>

