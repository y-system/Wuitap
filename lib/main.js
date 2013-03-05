const widgets = require("widget");
const tabs = require("tabs");
var self = require("self");

var comm=new Array("ぐぐれカス","hi","シャワーヘッドからの水の出し方教えてもらえませんか？","ひねっても下からしか出ないのですが","はよお","hei","動いた","これホームに戻るのどうやるんだろう","CSS書いてるなう","まったく","駅に佐川急便そっくりな服を着ている人がいて吉野さんかと思った","シャワーでたー！！！！（トトロ風に）","なに");
//乱数を入れる変数
var rnd;
var kazu=comm.length;
  //0～4までの乱数を発生させる
function  renew(){
rnd=Math.floor( Math.random() * kazu );
}
var idd="a";

var widget = widgets.Widget({
  id: "wuitapicon",
  label: "click here!",
  contentURL: self.data.url("wuitap.jpg"),
  onClick: function() {
  renew();
  console.log(rnd);
    require("widget").Widget({
  id: idd,
  label: "wuitap's word",
  content: comm[rnd],
  width: comm[rnd].length*13,
    onClick: function() {
    tabs.open("http://www.google.com/");
  }
});
  idd=idd+"a";
  }
});
/* widget.click({renew();
widget.content=comm[rnd];}); */

console.log("The add-on is running.");
