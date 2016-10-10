/**
 * Created by Administrator on 2016/9/21.
 */


define(["jquery","scrollTo"],function($,scrollTo){

  function BackTop(el,opts){

    this.opts = $.extend({},BackTop.defaults,opts);
    this.$el =$(el);

    this.scroll = new scrollTo.ScrollTo({
      dest: 0,
      speed:this.opts.speed
    });

    if(this.opts.mode === "move"){
      this.$el.on("click", $.proxy(this._move,this));//改变this指向

    }else {
      this.$el.on("click", $.proxy(this._go,this));//改变this指向

    }

    this._checkPosition();
    $(window).on("scroll",$.proxy(this._checkPosition,this));

  };



  BackTop.defaults = {
    mode:'move',//返回顶部的方式，直接返回还是动画返回
    pos:$(window).height(),//返回顶部按钮显示隐藏的初始值
    speed:800
  }

  BackTop.prototype._move = function(){
    this.scroll.move();
  }
  BackTop.prototype._go = function(){
    this.scroll.go();
  }
  BackTop.prototype._checkPosition = function(){

    var $el = this.$el;

    if($(window).scrollTop() > this.opts.pos){

      $el.fadeIn();
    }else {
      $el.fadeOut();
    }
  };
/*写成jq插件*/
  $.fn.extend({
    backtop:function(opts){
      return  this.each(function(){
        new BackTop(this,opts)
      });

    }
  });
  return {BackTop:BackTop}

});