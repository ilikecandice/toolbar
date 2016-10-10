/**
 * Created by liuccb@yonyou.com on 2016/9/21.
 */

require.config({
  paths:{
    jquery:"./jquery-1.11.3"
  }

});
//通过require引入项目的依赖模块
require(['jquery',"backtop"],function ($,backTop) {
  var backTop = new backTop.BackTop($("#backTop"),{
    mode:"move",
    dest:0,
    speed:500
  });
});
