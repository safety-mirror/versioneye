function show_info_box(e,t){box_name=t.infoBox,number_name=t.infoNumber,recursive_deps=e.length,t.data_length=e.length,info_box=document.getElementById(box_name),info_box&&(info_box.style.display="inline-block"),info_number=document.getElementById(number_name),info_number&&(info_number.innerHTML=recursive_deps),scope_name=document.getElementById("scope_name"),scope_name&&("all"==t.scope?scope_name.innerHTML="":scope_name.innerHTML=t.scope)}var DependencyWheel=new Class({options:{type:"default",center:{x:100,y:100},width:null,height:null,lines:{color:"random",lineWidth:2},imageSize:[24,24],radialMultiplier:3.47,hover:!0,hoverLines:{color:"rgba(255,255,255,255)",lineWidth:5},onItemClick:$empty,infoBox:"mooinfo",infoNumber:"moonumber",scope:"compile",data_border:70,canvas_id:"canvas",canvas_hover_id:"canvas_hover",product_key:"product_key",product_version:"product_version",product_name:"product_name",version:"version",show_label:!1,resize:!1,resize_ids:"container,section",resize_factor:11,container_id:"canvas-container",pinit:!0},initialize:function(e,t,n){if(this.data=e,data_length=e.length,this.radius=Math.round(this.options.radialMultiplier*data_length),this.setOptions(n),data_length<3&&(n.height="77",this.options.height="77",n.show_label=!1,this.options.show_label=!1),border=this.options.data_border,data_length>border&&0==this.options.resize)return show_info_box(e,n),!1;var r;if(!this.options.width||!this.options.height){for(var i=0,o=0;o<e.length;o++)e[o].text.length>i&&(i=e[o].text.length);r=2*(this.radius+8*i+this.options.imageSize[0])+12}t.empty(),t=$(t);var a=new Element("canvas",{width:(this.options.width?this.options.width:r)+"px",height:(this.options.height?this.options.height:r)+"px",id:this.options.canvas_id});t.adopt(a),"undefined"!=typeof G_vmlCanvasManager&&(a=$(G_vmlCanvasManager.initElement(a))),this.canvas=a,this.cx=a.getContext("2d"),this.maxCount=1;var s=this.canvas.getCoordinates();return this.options.center={x:s.width/2,y:s.height/2},CanvasTextFunctions.enable(this.cx),0==data_length?(this.cx.fillStyle="green",this.cx.font="42px Arial",this.cx.fillText("0",this.options.center.x-10,45),void show_info_box(this.data,this.options)):(this.options.hover&&(this.hoverCanvas=new Element("canvas",{styles:{position:"absolute",left:s.left+"px",top:s.top+"px",zIndex:9},id:this.options.canvas_hover_id,width:s.width+"px",height:s.height+"px"}),this.hoverCanvas.injectAfter(this.canvas),window.addEvent("resize",function(){var e=this.canvas.getCoordinates();this.hoverCanvas.setStyles({left:e.left+"px",top:e.top+"px"}),this.hoverCanvas.width=e.width,this.hoverCanvas.height=e.height}.bind(this)),"undefined"!=typeof G_vmlCanvasManager&&(this.hoverCanvas=$(G_vmlCanvasManager.initElement(this.hoverCanvas)))),this.data.each(function(e){e.connections.each(function(e){"array"==$type(e)&&e[1]>this.maxCount&&(this.maxCount=e[1])},this)},this),void this.draw())},setPoints:function(){this.points={},this.bboxes=[],this.numDegrees=360/this.data.length;for(var e=0,t=0;t<this.data.length;e+=this.numDegrees,t++)if(!this.data[t].colors){var n=(this.data[t],{});"random"==this.options.lines.color?(p1=100,p2=100,n.__default="rgba("+(Math.floor(Math.random()*p1)+p2)+","+(Math.floor(Math.random()*p1)+p2)+","+(Math.floor(Math.random()*p1)+p2)+", 1)"):n.__default=this.options.lines.color,this.data[t].colors=n}},pc:function(e){return 7*Math.round(e/7)},calcbbox:function(e,t,n,r){e=Number(e.toFixed(2)),t=Number(t.toFixed(2)),n=Number(n.toFixed(2));var i,o=this.options.center.x,a=this.options.center.y,s=(t-a)/(e-o),u={x:e-5*Math.cos((n+90)*(Math.PI/180)),y:t-5*Math.sin((n+90)*(Math.PI/180))},c=u.y-s*u.x;i=s==1/0||s==-(1/0)?function(e){return Math.abs(e-u.x)}:function(e,t){return Math.abs(s*e-t+c)/Math.sqrt(Math.pow(s,2)+1)};var l=this.cx.measureText("sans","10",this.data[r].text);l=Number(l.toFixed(2));var p,d={x:e+5*Math.cos((n+90)*(Math.PI/180)),y:t+5*Math.sin((n+90)*(Math.PI/180))},h=d.y-s*d.x;p=s==1/0||s==-(1/0)?function(e){return Math.abs(e-d.x)}:function(e,t){return Math.abs(s*e-t+h)/Math.sqrt(Math.pow(s,2)+1)},this.bboxes[r]=function(r,o){if(0==n&&r-e<0)return!1;if(n>0&&n<90&&r-e<0&&o-t<0)return!1;if(90==n&&o-t<0)return!1;if(n>90&&n<180&&r-e>0&&o-t<0)return!1;if(180==n&&r-e>0)return!1;if(n>180&&n<270&&r-e>0&&o-t>0)return!1;if(270==n&&o-t>0)return!1;if(n>270&&n<360&&r-e<0&&o-t>0)return!1;var a=Math.sqrt(Math.pow(r-e,2)+Math.pow(o-t,2)),s=i(r,o),u=p(r,o);return a<=l+8&&s<=10&&u<=10}},drawPoints:function(){for(var e=0,t=0;t<this.data.length;e+=this.numDegrees,t++){this.cx.beginPath(),this.cx.fillStyle=this.cx.strokeStyle=this.data[t].colors.__default;var n=this.options.center.x+Math.cos(e*(Math.PI/180))*this.radius,r=this.options.center.y+Math.sin(e*(Math.PI/180))*this.radius;this.cx.arc(n,r,4,0,2*Math.PI,0),this.cx.fill(),this.cx.closePath(),this.calcbbox(n,r,e,t),this.points[this.pc(n)]||(this.points[this.pc(n)]={}),this.points[this.pc(n)][this.pc(r)]=t,this.cx.save(),this.cx.translate(this.options.center.x,this.options.center.y),this.cx.rotate((e>90&&e<270?e-180:e)*(Math.PI/180));var i,o;e>90&&e<270?(i=-(this.radius+this.cx.measureText("sans","10",this.data[t].text+"")+8),o=i-30):(i=this.radius+8,o=i+6+this.cx.measureText("sans","10",this.data[t].text+"")),this.cx.drawText("sans","10",i,this.cx.fontAscent("sans","10")/2,this.data[t].text),this.data[t].image&&this.cx.drawImage($(this.data[t].image),o,-12,this.options.imageSize[0],this.options.imageSize[1]),this.cx.restore()}},getAngle:function(e){return e*(360/this.data.length)},getItemIdxById:function(e){"array"==$type(e)&&(e=e[0]);for(var t=0,n=this.data.length;t<n;t++)if(this.data[t].id==e)return t;return-1},drawConnection:function(e,t){t&&(document.getElementById(this.options.canvas_hover_id).style.top=document.getElementById(this.options.canvas_id).getCoordinates().top+"px");var n=t?this.hoverCanvas.getContext("2d"):this.cx,r=this.data[e],i=r.connections,o=this.getAngle(e),a=this.options.center.x+Math.cos(o*(Math.PI/180))*this.radius,s=this.options.center.y+Math.sin(o*(Math.PI/180))*this.radius;n.lineWidth=t?this.options.hoverLines.lineWidth:2;for(var u=0;u<i.length;u++){var c=this.getItemIdxById(i[u]),l=i[u],p=!(!r.dependencies||r.dependencies.indexOf(l)==-1);n.beginPath(),n.moveTo(a,s),rpos=this.getAngle(c),x2=this.options.center.x+Math.cos(rpos*(Math.PI/180))*this.radius,y2=this.options.center.y+Math.sin(rpos*(Math.PI/180))*this.radius,cp1x=this.options.center.x+Math.cos(o*(Math.PI/180))*(this.radius/1.5),cp1y=this.options.center.y+Math.sin(o*(Math.PI/180))*(this.radius/1.5),cp2x=this.options.center.x+Math.cos(rpos*(Math.PI/180))*(this.radius/1.5),cp2y=this.options.center.y+Math.sin(rpos*(Math.PI/180))*(this.radius/1.5);var d=this.data[c];n.strokeStyle=t?this.getStrokeGradient(n,{x1:a,y1:s,c1:r.colors.__default,x2:x2,y2:y2,c2:d.colors.__default},p):r.colors[i[u][0]]?r.colors[i[u][0]]:r.colors.__default,n.beginPath(),n.moveTo(a,s),n.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x2,y2),n.stroke(),n.closePath()}if(!t)if(this.data[e+1]){var h=this;setTimeout(function(){h.drawConnection(e+1)},25)}else this.drawPoints(),this.options.show_label&&(n.fillStyle="lightgray",n.font="14px Arial",n.fillText("www.VersionEye.com",this.options.center.x-70,30)),show_info_box(this.data,this.options)},getStrokeGradient:function(e,t,n){var r=e.createLinearGradient(t.x1,t.y1,t.x2,t.y2);return n?(r.addColorStop(0,"rgba(0,0,127,0.5)"),r.addColorStop(1,"rgba(0,0,127,1)")):(r.addColorStop(0,"rgba(0,127,0,0.5)"),r.addColorStop(1,"rgba(0,127,0,1)")),r},draw:function(){this.data&&(this.setPoints(),this.drawConnection(0)),this.options.hover&&($(this.hoverCanvas).addEvent("mousemove",function(e){e=new Event(e);var t=$(this.hoverCanvas).getCoordinates(),n={x:e.page.x-t.left,y:e.page.y-t.top},r=function(e){var t={x:this.pc(e.x),y:this.pc(e.y)};if($defined(this.points[t.x])&&$defined(this.points[t.x][t.y]))return this.points[t.x][t.y];for(var n=0,r=this.bboxes.length;n<r;n++){var i=this.bboxes[n];if(i(e.x,e.y)===!0)return n}return!1}.bind(this),i=r(n);if(i!==!1){if(this.lastMouseOver==i)return;this.drawConnection(i,!0),this.lastMouseOver=i,this.canvas.setStyle("opacity","0.5"),this.hoverCanvas.setStyle("cursor","pointer")}else if($defined(this.lastMouseOver)){var o=this.hoverCanvas.getContext("2d");o.clearRect(0,0,t.width,t.height),o.save(),this.lastMouseOver=null,this.canvas.setStyle("opacity","1.0"),this.hoverCanvas.setStyle("cursor","default")}}.bind(this)),$(this.hoverCanvas).addEvent("click",function(e){this.options.onItemClick(this.data[this.lastMouseOver],e)}.bind(this)))},getTemperature:function(e,t){if("heat"==e){var n={r:t/.33,y:(t-.33)/.33,w:(t-.66)/.66},r=Math.round(255*n.r>255?255:255*n.r),i=Math.round(255*n.y>255?255:255*n.y),o=Math.round(255*n.w>255?255:255*n.w);return"rgba("+(r<0?0:r)+","+(i<0?0:i)+","+(o<0?0:o)+", "+(.8*t+.2)+")"}if("cold"==e){var r=Math.round(255*t),a=Math.round(130+125*t);return"rgba("+r+","+a+",255, "+(.8*t+.2)+")"}}});DependencyWheel.implement(new Options),DependencyWheel.Remote=new Class({Extends:DependencyWheel,initialize:function(e,t,n){var r=function(e){var r=[],i={};if(!e)return!1;if(border=n.data_border,e.length>border&&1==n.resize)for(n.width=e.length*n.resize_factor,n.height=e.length*n.resize_factor,element_ids=n.resize_ids.split(","),element_count=0;element_count<element_ids.length;element_count++)element=document.getElementById(element_ids[element_count]),new_width=n.width+20*element_count,element.offsetWidth<new_width&&(element.style.width=new_width+"px");for(var o=0,a=e.length;o<a;o++)e[o].imageUrl&&(r.push(e[o].imageUrl),i[o]=r.length-1);if(0==r.length)return!1;var s=new Asset.images(r,{onComplete:function(){for(var r in i)e[r].image=s[i[r]];arguments.callee._parent_=this.initialize._parent_,this.parent(e,t,n)}.bind(this)});return!0}.bind(this);n&&n.url?(json_url=n.url,new Request.JSON({url:json_url,onComplete:function(i){e=i,arguments.callee._parent_=this.initialize._parent_,r(e,t,n)||this.parent(e,t,n)}.bind(this)}).send()):r(e,t,n)||this.parent(e,t,n)}});