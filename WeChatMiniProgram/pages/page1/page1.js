// pages/page1/page1.js
var app = getApp();
var ut = require("../../utils/util.js")
Page({
  data: {
    tabbarShow:true,
    tabbarBadge:true,
    school: function () {
      name: "木子";
      age: 18
    },
    adress: "西安市",
    ap:app.myschool,
    uts:ut.formatTime(new Date())
  },

  switchTab: function () {
    this.setData({ tabbarShow: !this.data.tabbarShow })
    if (this.data.tabbarShow) {
      wx.showTabBar({
      })
    } else {
      wx.hideTabBar({
      })
    }
  },
  styleTab:function(){
    wx.setTabBarStyle({
      color: '#fff',
      selectedColor: '#cccccc',
      backgroundColor: '#0000ff',
      borderStyle: 'black',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  setTabBarItem:function(){
    wx.setTabBarItem({
      index: 0,
      text: '替换',
      iconPath: '/images/16-圆圈分享.png',
      selectedIconPath: '/images/人.png',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {console.info("修改成功")},
    })
  },
  setTabBarBadge:function(){
    this.setData({tabbarBadge:!this.data.tabbarBadge})
    if(this.data.tabbarBadge){
      wx.setTabBarBadge({
        index: 0,
        text: 'hello',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{
      wx.removeTabBarBadge({
        index: 0,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    },
  showTabBarRedDot:function(){
    wx.showTabBarRedDot({
      index: 0,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  stopPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },
  startPullDownRefresh:function(){
    wx.startPullDownRefresh({
      success: function (res) { console.info(res)},
      fail: function(res) {console.info(res)},
      complete: function(res) {console.info("123")},
    })
  },
  pageScrollTo:function(){
    wx.pageScrollTo({
      scrollTop: 300,
      duration: 20000,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})