/**
 * Created by Administrator on 2016/9/21.
 */


define(["jquery"],function($){

  function ScrollTo(opts){

    this.opts = $.extend({},ScrollTo.defaults,opts);

    this.$el = $("html,body");

  };

  ScrollTo.prototype.move = function(){
    var opts = this.opts;
    var dest = opts.dest;
    //防止动画未结束多次执行动画
    if($(window).scrollTop() != dest){//判断是否到达目的地

      if(!this.$el.is(":animated")){//判断是否在运动

        this.$el.animate({
          scrollTop:dest
        },opts.speed);
      }
    }

  };
  ScrollTo.prototype.go = function(){

    var dest = this.opts.dest;

    if($(window).scrollTop() != dest){
      this.$el.scrollTop(dest);
    }

  };
  ScrollTo.defaults = {
    dest: 0,//目的地
    speed:800//滚动速度
  };
  return {
    ScrollTo:ScrollTo
  }
});
