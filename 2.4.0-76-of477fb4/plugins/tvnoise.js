"use strict";!function(){var t=function(){Layer.apply(this,arguments),this.running=!1,this.opacity=.5,this.index=Math.max.apply(Math,o2.allForeLayers().map(function(t){return t.index}))+1,this.noiseCanvas=document.createElement("canvas"),this.noiseCanvas.width=this.rect.width,this.noiseCanvas.height=this.rect.height,this.noiseCtx=this.noiseCanvas.getContext("2d"),this.setColor("#ffffff")};t.prototype=Object.create(Layer.prototype),t.prototype.setColor=function(t){this.color=t,this.ctx.fillStyle=this.color},t.prototype.startNoise=function(){this.running||(this.running=!0,this.applyNoise())},t.prototype.stopNoise=function(){this.running&&(this.running=!1)},t.prototype.applyNoise=function(){var t=this;if(!this.running)return void renderer.animator.requestFrame(function(){t.ctx.clearRect(0,0,t.rect.width,t.rect.height)});for(var e=this.rect.width,i=this.rect.height,n=this.noiseCtx.createImageData(e,i),r=new Uint32Array(n.data.buffer),o=r.length,a=0;a<o;)r[a++]=(255*Math.random()|0)<<24;this.noiseCtx.putImageData(n,0,0),this.ctx.fillRect(0,0,this.rect.width,this.rect.height),this.ctx.drawImage(this.noiseCanvas,0,0,this.rect.width,this.rect.height),renderer.animator.requestFrame(function(){t.applyNoise()})};var e=function(){var i=new t(new Rect({x:0,y:0,width:config.scWidth,height:config.scHeight}));return e=function(){return i},i},i=!1,n=o2.allForeLayers,r=o2.allBackLayers;o2.allForeLayers=function(){var t=n.apply(this,arguments);return i?t=t.concat(e()):t},o2.allBackLayers=function(){var t=r.apply(this,arguments);return i?t=t.concat(e()):t},Tag.actions.tvnoise=new TagAction({rules:{enable:{type:"BOOLEAN"},above:{type:"LAYER"},index:{type:"INT"},opacity:{type:"FLOAT"},color:{type:"COLOR"}},action:function(t){return"enable"in t&&t.enable!=i&&(i=t.enable,i?(e().startNoise(),o2.refreshRendererLayers()):e().stopNoise()),"index"in t?(e().index=t.index,o2.refreshRendererLayers()):"above"in t&&(e().index=t.above.fore.index+1,o2.refreshRendererLayers()),"opacity"in t&&(e().opacity=t.opacity/255),"color"in t&&e().setColor(t.color),0}})}();