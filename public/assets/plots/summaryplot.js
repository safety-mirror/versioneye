define([require],function(){function t(t){this.selector=t.selector||"body",this.classes=t.classes||"",this.fontSize=t.fontSize||12,this.width=t.width||200,this.dataset=t.dataset||[],this.titleWidth=50,this.bar={maxWidth:150,minWidth:20,height:18},this.icon=t.icon||{path:"/assets/language",height:20}}return t.prototype={titleCellTemplate:function(t){var e=this;return['<img src="'+e.icon.path+"/"+t.toLowerCase()+'.png"',' style = "height:'+e.icon.height+'px;" class = "pull-left"',' title = "'+t+'" />'].join(" ")},render:function(t){var e=this;e.dataset=t;var n=d3.select(e.selector).append("div");n.attr("class",e.classes);var i=n.append("table");i.style({width:function(){return e.width+"px"},"font-size":function(){return e.fontSize+"px"}}).attr("class","table table-hover table-condensed");var r=(i.append("thead"),i.append("tbody")),o=r.selectAll("tr").data(e.dataset).enter().append("tr").style("width",e.width),a=(o.selectAll("td").data(function(t){return[t.title,t.value]}).enter().append("td").attr("class",function(t,e){return 1==e?"plot":"title"}).style("width",function(t,n){return 1==n?e.bar.maxWidth+"px":e.titleWidth+"px"}).html(function(t,n){return 0==n?e.titleCellTemplate(t):""}),d3.scale.linear().domain(d3.extent(e.dataset,function(t){return t.value})).range([e.bar.minWidth,e.bar.maxWidth]));o.selectAll("td.plot").append("div").text(function(t){return t}).style({background:"#197bae",color:"white","font-size":e.fontSize,"text-align":"right",padding:"1px 5px",height:function(){return"18px"},width:function(t){return a(t)+"px"}})},loadAndRender:function(t){var e=this;d3.json(t,function(t,n){return t?(console.error("Can not load data, quit rendering"+t),0):void e.render(n)})}},t});