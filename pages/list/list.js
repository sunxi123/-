//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用安全管理中心',
    title: "",
    list: [
      { nxzq: '../text/nxzq' },
      { aqgh: '../text/aqgh' },
      { fprj: '../text/fprj' },
      { mraq: '../text/mraq' },
      { wdwz: '../text/wdwz' }
    ]
  },
  //事件处理函数
  onLoad: function(options) {
    this.setData({
      title: options.title
    })
    const filePath = '../text/' + options.title
    console.log(filePath)
    wx.openDocument({
      filePath,
      success(res) {
        console.log('打开文档成功')
      }
    })
  },
  getMenu: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})