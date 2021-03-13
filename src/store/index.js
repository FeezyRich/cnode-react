import { observable, action } from "mobx";
import http from "../http";
class AppStore {
  @observable tab = "all"; //首页分类标签，默认all
  @observable page = 1; //首页分页页数，默认1
  @observable list = [{ title: "loading" }]; //首页列表
  @observable listFlag = 0;
  @observable detile = null; //文章详情
  @observable Userdetile = null; //用户信息
  @observable UserCollect = null; //用户收藏文章详情
  @observable UserdetileFlag = 0;
  @observable detileFlag = 0;
  @observable other = []; //作者其他文章
  @action getIndexMessage(tab) {
    //获取首页列表
    if (tab) {
      document.title = "CNode: Node.js专业中文社区";
    }
    http
      .get("/topics", {
        params: {
          tab: this.tab,
          page: this.page,
        },
      })
      .then((response) => {
        this.list = response.data;
        this.listFlag = 1;
      });
  }
  @action getArticleDetile(id, userName) {
    Promise.all([http.get("/user/" + userName), http.get("/topic/" + id)]).then(
      (resArr) => {
        let result = resArr[1].data;
        result.author.score = resArr[0].data.score;
        this.detile = result;
        this.other = resArr[0].data.recent_topics;
        this.detileFlag = 1;
        document.title = resArr[1].data.title;
      }
    );
  }
  @action getUserDetile(userName, tab) {
    Promise.all([
      http.get("/user/" + userName),
      http.get("/topic_collect/" + userName),
    ]).then((resArr) => {
      console.log(resArr[0].data)
      let result = resArr[0].data;
      result.collectCount = resArr[1].data.length;
      let obj = {
        Userdetile:result,
        UserCollect:resArr[1].data,
        UserdetileFlag:1
      }
      Object.assign(this,obj)
      if (tab) {
        document.title = "CNode: Node.js专业中文社区";
      } else {
        document.title = "@" + resArr[0].data.loginname + "的个人主页";
      }
    });
  }

  @action getDate(date) {
    var time = Date.parse(new Date());
    var lasttime = Date.parse(date);
    var day = (time - lasttime) / 1000;
    if (day < 60) {
      return (day = `${parseInt(day)}秒钟`);
    }
    if (day < 3600) {
      return (day = `${parseInt(day / 60)}分钟`);
    }
    if (day < 86400) {
      return (day = `${parseInt(day / (60 * 60))}小时`);
    }
    if (day < 86400 * 30) {
      return (day = `${parseInt(day / (60 * 60 * 24))}天`);
    }
    if (day < 86400 * 30 * 12) {
      return (day = `${parseInt(day / (60 * 60 * 24 * 30))}个月`);
    }
    return (day = `${parseInt(day / (60 * 60 * 24 * 30 * 12))}年`);
  }
  @action handleRecentTopics(data) {
    const booleanArr = [true, false];
    const tabArr = ["ask", "share"];
    let arr = JSON.parse(JSON.stringify(data));
    return arr.map((item, index) => {
      return Object.assign(item, {
        reply_count: parseInt(Math.random() * 100),
        visit_count: parseInt(Math.random() * 1000),
        good: booleanArr[parseInt(Math.random() + 0.5)],
        tab: tabArr[parseInt(Math.random() + 0.5)],
        top: index < 3 ? true : false,
      });
    });
  }
  @action dataDistribute(data) {
    let arr = JSON.parse(JSON.stringify(data));
    const arrLen = arr.length;
    let result = [];
    for (let i = 0; i < Math.ceil(arrLen / 40); i++) {
      if (arr.length >= 40) {
        result.push(arr.splice(0, 40));
      } else {
        result.push(arr.splice(0));
      }
    }
    return result;
  }
}
export default new AppStore();
