import React, { Component } from "react";
import AsideHeader from "../../../components/aside/aside-header";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import store from "../../../store";
import { observer } from "mobx-react";
@observer
class Other extends Component {
  static propTypes = {
    match: PropTypes.any,
    params: PropTypes.any,
    history: PropTypes.any,
  };
get otherData(){
   if(!store.detileFlag){
     return <a>无</a>
   }else{
     return store.other.filter((item, index) => index <= 5)
     .map((item, index) => {
       return (
         <NavLink
           to={`/detile/${item.id}/${item.author.loginname}`}
           key={index + 1}
           title={`${item.author.loginname}`}
         >
           {item.title}
         </NavLink>
       );
     })
     }
}
  render() {
    if (!store.detileFlag) {
      return <div>加载中</div>;
    }
    return (
      <div className="ignore special-aside">
        <AsideHeader>作者其他话题</AsideHeader>
        <div className="ignore-inner author-topics">
          {this.otherData}
        </div>
      </div>
    );
  }
}

export default withRouter(Other);
