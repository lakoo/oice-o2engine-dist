"use strict";Tag.actions.rain=new TagAction({rules:{layer:{type:"LAYER",required:!0},page:{type:/fore|back/,defaultValue:"fore"},trail:{type:/none|drops|smudge/,defaultValue:"drops"},gravityangle:{type:"FLOAT",defaultValue:180},preset:{type:"STRING",defaultValue:"(0,2,0.5)(4,4,1)"},speed:{type:"INT",defaultValue:50},opaque:{type:"BOOLEAN",defaultValue:!0}},action:function(e){function a(){var a=new RainyDay(n,r.canvas,r.rect.width,r.rect.height,1,5);switch(r.rainyday=a,a.reflection=a.REFLECTION_MINIATURE,e.trail){case"none":a.trail=a.TRAIL_NONE;break;case"smudge":a.trail=a.TRAIL_SMUDGE;break;case"drops":default:a.trail=a.TRAIL_DROPS}a.VARIABLE_GRAVITY_ANGLE=e.gravityangle/180*Math.PI;for(var o=/\((-?[0-9\.,\s]+)*\)/g,i=e.preset.match(o),p=[],s=0;s<i.length;s++){var u=i[s].replace("(","").replace(")","").split(",");p.push(a.preset(parseFloat(u[0]),parseFloat(u[1]),parseFloat(u[2])))}a.rain(p,e.speed),a._drawOnContext=r.drawOnContext,a._flush=r.flush,e.opaque?(r.drawOnContext=function(e){var t=r.canvas;r.canvas=n,a._drawOnContext.apply(this,arguments),r.canvas=t},r.flush=function(){return a._flush.apply(this,arguments)?(a.prepareBackground(),a.prepareReflections(),a.stoppedDrops.forEach(function(e){e.draw()}),!0):!1}):r.drawOnContext=function(e){a._drawOnContext.apply(this,arguments),a.img=e.canvas,a.prepareBackground(),a.prepareReflections(),a.stoppedDrops.forEach(function(e){e.draw()}),e.drawImage(a.canvas,0,0)},renderer.animator.requestFrame(function c(){r.rainyday==a&&renderer.animator.requestFrame(c)}),t.done()}var r=e.layer[e.page];if(r.rainyday)return 0;var t=this,n=document.createElement("canvas");return n.width=r.rect.width,n.height=r.rect.height,window.RainyDay?setTimeout(a,0):$.getScript("plugin/rainyday.js").done(a),1}}),Tag.actions.stopraining=new TagAction({rules:{layer:{type:"LAYER",required:!0},page:{type:/fore|back/,defaultValue:"fore"}},action:function(e){var a=e.layer[e.page];if(!a.rainyday)return 0;var r=a.rainyday;return r.drops.concat(r.stoppedDrops).forEach(function(e){r.clearDrop(e,!0)}),a.drawOnContext=r._drawOnContext,a.flush=r._flush,r.stop=!0,delete a.rainyday,0}});