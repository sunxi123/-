//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    Menu: true,
    MyInfo: false,
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    userInfo: {},
    array: [
      { src: '../img/img1.jpg' },
      { src: '../img/img2.jpg' },
      { src: '../img/img3.jpg' },
      { src: '../img/img4.jpg' }
    ]
  },
  //事件处理函数
  getMenu: function () {
    this.setData({
      MyInfo: false,
      Menu: true
    })
  },
  getMyInfo: function () {
    this.setData({
      MyInfo: true,
      Menu: false
    })
  },  //轮播图的切换事件

  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent]
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  goList: function(evevt) {
    console.log(evevt)
      wx.navigateTo({
        url: '../list/list'
      })
    },
})
