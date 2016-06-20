define([require],function(){function t(t){this.selector=t.selector||"#area3",this.margin=t.margin||{top:20,right:10,bottom:30,left:10},this.padding=t.padding||{top:5,right:0,bottom:0,left:0},this.width=t.width||940,this.height=t.height||300,this.dataset=t.dataset||[],this.url=t.url||"/",this.xScaler=d3.time.scale().range([0,this.width-(this.margin.left+this.margin.right)]),this.yScaler=d3.scale.linear().range([this.height-(this.margin.top+this.margin.bottom),this.padding.top]),this.dateParser=d3.time.format("%Y-%m-%d").parse,this.bisectDate=d3.bisector(function(t){return t.date}).left,this.strokeScaler=d3.scale.category10()}return t.prototype.loadAndRender=function(t){var e=this;d3.json(t,function(n,r){return n?(console.error("Can not load for Timeline from url: "+t),1):(r.forEach(function(t){t.date=e.dateParser(t.date)}),r.sort(function(t,e){return t.date-e.date}),void e.render(r))})},t.prototype.initCanvas=function(){var t=this,e=d3.select(t.selector).append("svg").attr({width:t.width,height:t.height});return e.append("g").attr("tranform","translate("+t.margin.left+","+t.margin.top+")"),e},t.prototype.addAxisX=function(t){var e=this,n=d3.svg.axis().scale(e.xScaler).orient("bottom");return t.append("g").attr("class","x axis").attr("transform","translate(0,"+(e.height-e.margin.bottom)+")").call(n),t},t.prototype.addAxisY=function(t){var e=this;d3.svg.axis().scale(e.yScaler).orient("left");return t},t.prototype.addFocusator=function(t){function e(){var t=n.xScaler.invert(d3.mouse(this)[0]),e=n.dataset,i=n.bisectDate(e,t,1),o=e[i-1],s=i<e.length?e[i]:e[e.length-1],a=t-o.date>s.date-t?s:o;r.attr("transform","translate("+n.xScaler(a.date)+","+n.yScaler(a.value)+")"),r.select("text").text(a.value)}var n=this,r=t.append("g").attr("class","focus").style("display","none");r.append("circle").attr("r",4.5),r.append("text").attr({x:9,dy:".35em"}),t.append("rect").attr({"class":"overlay",width:n.width+"px",height:n.height+"px"}).on("mouseover",function(){r.style("display",null)}).on("mouseout",function(){r.style("display","none")}).on("mousemove",e)},t.prototype.registerEvents=function(){var t=this;d3.selectAll(".lang-timeline-btn").on("click",function(){var e=d3.select(this).attr("data-lang"),n=t.url+"?lang="+e;d3.selectAll(".lang-timeline-btn").classed("active",!1),d3.select(this).classed("active",!0),d3.select(t.selector).select("svg").remove(),t.loadAndRender(n)})},t.prototype.render=function(t){var e=this;e.dataset=t,e.strokeScaler.domain(t.length),e.xScaler.domain(d3.extent(t,function(t){return t.date})),e.yScaler.domain(d3.extent(t,function(t){return t.value}));var n=e.initCanvas(),r=n.selectAll(".lang").data(e.dataset).enter().append("g").attr("class","lang1"),i=d3.svg.line().interpolate("linear").x(function(t){return e.xScaler(t.date)}).y(function(t){return e.yScaler(t.value)});r.append("path").style({stroke:"steelblue"}).attr({"class":"line",d:function(){return i(t)}}),e.addAxisX(n),e.addFocusator(n),e.registerEvents()},t});