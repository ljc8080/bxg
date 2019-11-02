//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    info: [
      {
        catename: '就业课',
        cate_id:10,
        info:
          [
            {
              classname: 'python人工智能',
              desc:'具有前景的开发职位',
              study:877,
              price:17980.00,
              logo:"https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png"
            },
            {
              classname: 'mysql数据性能优化',
              desc:null,
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png"
            },
            {
              classname: 'mysql数据性能优化',
              desc:null,
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png"
            },
            {
              classname: 'mysql数据性能优化',
              desc:null,
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png"
            },
            {
              classname: 'python人工智能',
              desc:'具有前景的开发职位',
              study:877,
              price:17980.00,
              logo:"https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png"
            },
          ], 
      },
      {
        catename: '推荐课程',
        cate_id:10,
        info:
          [
            {
              classname: 'javaee',
              desc:'javaee是一个开放的，基于标准的平台',
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png"
            },
            {
              classname: 'javaee',
              desc:'javaee是一个开放的，基于标准的平台',
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png"
            },
            {
              classname: 'javaee',
              desc:'javaee是一个开放的，基于标准的平台',
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png"
            },
            {
              classname: 'javaee',
              desc:'javaee是一个开放的，基于标准的平台',
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png"
            },
          ], 
      },
      {
        catename: '免费课',
        cate_id:10,
        info:
          [
            {
              classname: 'mysql数据性能优化',
              desc:null,
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png"
            },
            {
              classname: 'mysql数据性能优化',
              desc:null,
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png"
            },
            {
              classname: 'mysql数据性能优化',
              desc:null,
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png"
            },
            {
              classname: 'mysql数据性能优化',
              desc:null,
              study:1784,
              price:14980.00,
              logo:"https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png"
            },
          ], 
      }
    ],

    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
