YUI.add("editor-para-ie",function(a){var c=function(){c.superclass.constructor.apply(this,arguments);},k="host",f="body",d="nodeChange",j="parentNode",b=f+" > p",h="p",g="<br>",i="firstChild",e="li";a.extend(c,a.Plugin.EditorParaBase,{_onNodeChange:function(P){var E=this.get(k),q=E.getInstance(),w,C,B,R,M,G=q.EditorSelection.DEFAULT_BLOCK_TAG,y,o,r,N,u,l,F,K,s,L,T,Q,I,A,z,O=":last-child";switch(P.changedType){case"enter-up":var m=((this._lastPara)?this._lastPara:P.changedNode),S=m.one("br.yui-cursor");if(this._lastPara){delete this._lastPara;}if(S){if(S.previous()||S.next()){if(S.ancestor(h)){S.remove();}}}if(!m.test(G)){var D=m.ancestor(G);if(D){m=D;D=null;}}if(m.test(G)){var H=m.previous(),J,v,x=false;if(H){J=H.one(O);while(!x){if(J){v=J.one(O);if(v){J=v;}else{x=true;}}else{x=true;}}if(J){E.copyStyles(J,m);}}}break;case"enter":if(P.changedNode.test("br")){P.changedNode.remove();}else{if(P.changedNode.test("p, span")){var S=P.changedNode.one("br.yui-cursor");if(S){S.remove();}}}break;}},initializer:function(){var l=this.get(k);if(l.editorBR){a.error("Can not plug EditorPara and EditorBR at the same time.");return;}l.on(d,a.bind(this._onNodeChange,this));}},{NAME:"editorPara",NS:"editorPara",ATTRS:{host:{value:false}}});a.namespace("Plugin");a.Plugin.EditorPara=c;},"@VERSION@",{skinnable:false,requires:["editor-para-base"]});