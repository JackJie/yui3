if(typeof YUI!="undefined"){YUI._YUI=YUI;}var YUI=function(){var c=0,f=this,b=arguments,a=b.length,e=function(h,g){return(h&&h.hasOwnProperty&&(h instanceof g));},d=(typeof YUI_config!=="undefined")&&YUI_config;if(!(e(f,YUI))){f=new YUI();}else{f._init();if(YUI.GlobalConfig){f.applyConfig(YUI.GlobalConfig);}if(d){f.applyConfig(d);}if(!a){f._setup();}}if(a){for(;c<a;c++){f.applyConfig(b[c]);}f._setup();}f.instanceOf=e;return f;};(function(){var q,b,r="@VERSION@",i=".",o="http://yui.yahooapis.com/",u="yui3-js-enabled",d="yui3-css-stamp",m=function(){},h=Array.prototype.slice,s={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},g=(typeof window!="undefined"),f=(g)?window:null,w=(g)?f.document:null,e=w&&w.documentElement,a=e&&e.className,c={},j=new Date().getTime(),n=function(A,z,y,x){if(A&&A.addEventListener){A.addEventListener(z,y,x);}else{if(A&&A.attachEvent){A.attachEvent("on"+z,y);}}},v=function(B,A,z,x){if(B&&B.removeEventListener){try{B.removeEventListener(A,z,x);}catch(y){}}else{if(B&&B.detachEvent){B.detachEvent("on"+A,z);}}},t=function(){YUI.Env.windowLoaded=true;YUI.Env.DOMReady=true;if(g){v(window,"load",t);}},k=function(z,y){var x=z.Env._loader;if(x){x.ignoreRegistered=false;x.onEnd=null;x.data=null;x.required=[];x.loadType=null;}else{x=new z.Loader(z.config);z.Env._loader=x;}YUI.Env.core=z.Array.dedupe([].concat(YUI.Env.core,["loader-base","loader-rollup","loader-yui3"]));return x;},p=function(z,y){for(var x in y){if(y.hasOwnProperty(x)){z[x]=y[x];}}},l={success:true};if(e&&a.indexOf(u)==-1){if(a){a+=" ";}a+=u;e.className=a;}if(r.indexOf("@")>-1){r="3.3.0";}q={applyConfig:function(E){E=E||m;var z,C,B=this.config,D=B.modules,y=B.groups,A=B.aliases,x=this.Env._loader;for(C in E){if(E.hasOwnProperty(C)){z=E[C];if(D&&C=="modules"){p(D,z);}else{if(A&&C=="aliases"){p(A,z);}else{if(y&&C=="groups"){p(y,z);}else{if(C=="win"){B[C]=(z&&z.contentWindow)||z;B.doc=B[C]?B[C].document:null;}else{if(C=="_yuid"){}else{B[C]=z;}}}}}}}if(x){x._config(E);}},_config:function(x){this.applyConfig(x);},_init:function(){var A,z,B=this,x=YUI.Env,y=B.Env,C;B.version=r;if(!y){B.Env={core:["get","intl-base"],mods:{},versions:{},base:o,cdn:o+r+"/build/",_idx:0,_used:{},_attached:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(simpleyui|yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(H,F){var D=H.match(F),G,E;if(D){G=RegExp.leftContext||H.slice(0,H.indexOf(D[0]));E=D[3];if(D[1]){G+="?"+D[1];}G={filter:E,path:G};}return G;},getBase:x&&x.getBase||function(H){var F=(w&&w.getElementsByTagName("script"))||[],I=y.cdn,E,G,D,J;for(G=0,D=F.length;G<D;++G){J=F[G].src;if(J){E=B.Env.parseBasePath(J,H);if(E){A=E.filter;I=E.path;break;}}}return I;}};y=B.Env;y._loaded[r]={};if(x&&B!==YUI){y._yidx=++x._yidx;y._guidp=("yui_"+r+"_"+y._yidx+"_"+j).replace(/\./g,"_");}else{if(YUI._YUI){x=YUI._YUI.Env;y._yidx+=x._yidx;y._uidx+=x._uidx;for(C in x){if(!(C in y)){y[C]=x[C];}}delete YUI._YUI;}}B.id=B.stamp(B);c[B.id]=B;}B.constructor=YUI;B.config=B.config||{bootstrap:true,cacheUse:true,debug:true,doc:w,fetchCSS:true,throwFail:true,useBrowserConsole:true,useNativeES5:true,win:f};if(w&&!w.getElementById(d)){z=w.createElement("div");z.innerHTML='<div id="'+d+'" style="position: absolute !important; visibility: hidden !important"></div>';YUI.Env.cssStampEl=z.firstChild;e.insertBefore(YUI.Env.cssStampEl,e.firstChild);}B.config.lang=B.config.lang||"en-US";B.config.base=YUI.config.base||B.Env.getBase(B.Env._BASE_RE);if(!A||(!("mindebug").indexOf(A))){A="min";}A=(A)?"-"+A:A;B.config.loaderPath=YUI.config.loaderPath||"loader/loader"+A+".js";},_setup:function(C){var y,B=this,x=[],A=YUI.Env.mods,z=B.config.core||[].concat(YUI.Env.core);for(y=0;y<z.length;y++){if(A[z[y]]){x.push(z[y]);}}B._attach(["yui-base"]);B._attach(x);if(B.Loader){k(B);}},applyTo:function(D,C,z){if(!(C in s)){this.log(C+": applyTo not allowed","warn","yui");return null;}var y=c[D],B,x,A;if(y){B=C.split(".");x=y;for(A=0;A<B.length;A=A+1){x=x[B[A]];if(!x){this.log("applyTo not found: "+C,"warn","yui");}}return x&&x.apply(y,z);}return null;},add:function(y,D,C,x){x=x||{};var B=YUI.Env,E={name:y,fn:D,version:C,details:x},F,A,z=B.versions;B.mods[y]=E;z[C]=z[C]||{};z[C][y]=E;for(A in c){if(c.hasOwnProperty(A)){F=c[A].Env._loader;if(F){if(!F.moduleInfo[y]){F.addModule(x,y);}}}}return this;},_attach:function(C,N){var G,O,M,J,x,E,z,A=YUI.Env.mods,H=YUI.Env.aliases,y=this,F,B=y.Env._loader,D=y.Env._attached,I=C.length,B,L=[];for(G=0;G<I;G++){O=C[G];M=A[O];L.push(O);if(B&&B.conditions[O]){y.Object.each(B.conditions[O],function(Q){var P=Q&&((Q.ua&&y.UA[Q.ua])||(Q.test&&Q.test(y)));if(P){L.push(Q.name);}});}}C=L;I=C.length;for(G=0;G<I;G++){if(!D[C[G]]){O=C[G];M=A[O];if(H&&H[O]){y._attach(H[O]);continue;}if(!M){if(B&&B.moduleInfo[O]){M=B.moduleInfo[O];N=true;}if(!N&&O){if((O.indexOf("skin-")===-1)&&(O.indexOf("css")===-1)){y.Env._missed.push(O);y.Env._missed=y.Array.dedupe(y.Env._missed);y.message("NOT loaded: "+O,"warn","yui");}}}else{D[O]=true;for(F=0;F<y.Env._missed.length;F++){if(y.Env._missed[F]===O){y.message("Found: "+O+" (was reported as missing earlier)","warn","yui");y.Env._missed.splice(F,1);}}J=M.details;x=J.requires;E=J.use;z=J.after;if(x){for(F=0;F<x.length;F++){if(!D[x[F]]){if(!y._attach(x)){return false;}break;}}}if(z){for(F=0;F<z.length;F++){if(!D[z[F]]){if(!y._attach(z,true)){return false;}break;}}}if(M.fn){try{M.fn(y,O);}catch(K){y.error("Attach error: "+O,K,O);return false;}}if(E){for(F=0;F<E.length;F++){if(!D[E[F]]){if(!y._attach(E)){return false;}break;}}}}}}return true;},use:function(){var A=h.call(arguments,0),E=A[A.length-1],D=this,C=0,y=[],z,x=D.Env,B=true;if(D.Lang.isFunction(E)){A.pop();}else{E=null;}if(D.Lang.isArray(A[0])){A=A[0];}if(D.config.cacheUse){while((z=A[C++])){if(!x._attached[z]){B=false;break;}}if(B){if(A.length){}D._notify(E,l,A);return D;}}if(D._loading){D._useQueue=D._useQueue||new D.Queue();D._useQueue.add([A,E]);}else{D._use(A,function(G,F){G._notify(E,F,A);});}return D;},_notify:function(A,x,y){if(!x.success&&this.config.loadErrorFn){this.config.loadErrorFn.call(this,this,A,x,y);
}else{if(A){try{A(this,x);}catch(z){this.error("use callback error",z,y);}}}},_use:function(z,B){if(!this.Array){this._attach(["yui-base"]);}var O,G,P,L,y=this,Q=YUI.Env,A=Q.mods,x=y.Env,D=x._used,N=Q.aliases,K=Q._loaderQueue,T=z[0],F=y.Array,R=y.config,E=R.bootstrap,M=[],I=[],S=true,C=R.fetchCSS,J=function(X,W){var V=0,U=[];if(!X.length){return;}if(N){for(V=0;V<X.length;V++){if(N[X[V]]){U=[].concat(U,N[X[V]]);}else{U.push(X[V]);}}X=U;}F.each(X,function(aa){if(!W){I.push(aa);}if(D[aa]){return;}var Y=A[aa],ab,Z;if(Y){D[aa]=true;ab=Y.details.requires;Z=Y.details.use;}else{if(!Q._loaded[r][aa]){M.push(aa);}else{D[aa]=true;}}if(ab&&ab.length){J(ab);}if(Z&&Z.length){J(Z,1);}});},H=function(Y){var W=Y||{success:true,msg:"not dynamic"},V,U,X=true,Z=W.data;y._loading=false;if(Z){U=M;M=[];I=[];J(Z);V=M.length;if(V){if(M.sort().join()==U.sort().join()){V=false;}}}if(V&&Z){y._loading=false;y._use(z,function(){if(y._attach(Z)){y._notify(B,W,Z);}});}else{if(Z){X=y._attach(Z);}if(X){y._notify(B,W,z);}}if(y._useQueue&&y._useQueue.size()&&!y._loading){y._use.apply(y,y._useQueue.next());}};if(T==="*"){S=y._attach(y.Object.keys(A));if(S){H();}return y;}if(A["loader"]&&!y.Loader){y._attach(["loader"]);}if(E&&y.Loader&&z.length){G=k(y);G.require(z);G.ignoreRegistered=true;G._boot=true;G.calculate(null,(C)?null:"js");z=G.sorted;G._boot=false;}J(z);O=M.length;if(O){M=y.Object.keys(F.hash(M));O=M.length;}if(E&&O&&y.Loader){y._loading=true;G=k(y);G.onEnd=H;G.context=y;G.data=z;G.ignoreRegistered=false;G.require(z);G.insert(null,(C)?null:"js");}else{if(E&&O&&y.Get&&!x.bootstrapped){y._loading=true;P=function(){y._loading=false;K.running=false;x.bootstrapped=true;Q._bootstrapping=false;if(y._attach(["loader"])){y._use(z,B);}};if(Q._bootstrapping){K.add(P);}else{Q._bootstrapping=true;y.Get.script(R.base+R.loaderPath,{onEnd:P});}}else{S=y._attach(z);if(S){H();}}}return y;},namespace:function(){var y=arguments,C,A=0,z,B,x;for(;A<y.length;A++){C=this;x=y[A];if(x.indexOf(i)>-1){B=x.split(i);for(z=(B[0]=="YAHOO")?1:0;z<B.length;z++){C[B[z]]=C[B[z]]||{};C=C[B[z]];}}else{C[x]=C[x]||{};C=C[x];}}return C;},log:m,message:m,dump:function(x){return""+x;},error:function(B,y,A){var z=this,x;if(z.config.errorFn){x=z.config.errorFn.apply(z,arguments);}if(z.config.throwFail&&!x){throw (y||new Error(B));}else{z.message(B,"error",""+A);}return z;},guid:function(x){var y=this.Env._guidp+"_"+(++this.Env._uidx);return(x)?(x+y):y;},stamp:function(z,A){var x;if(!z){return z;}if(z.uniqueID&&z.nodeType&&z.nodeType!==9){x=z.uniqueID;}else{x=(typeof z==="string")?z:z._yuid;}if(!x){x=this.guid();if(!A){try{z._yuid=x;}catch(y){x=null;}}}return x;},destroy:function(){var x=this;if(x.Event){x.Event._unload();}delete c[x.id];delete x.Env;delete x.config;}};YUI.prototype=q;for(b in q){if(q.hasOwnProperty(b)){YUI[b]=q[b];}}YUI.applyConfig=function(x){if(!x){return;}if(YUI.GlobalConfig){this.prototype.applyConfig.call(this,YUI.GlobalConfig);}this.prototype.applyConfig.call(this,x);YUI.GlobalConfig=this.config;};YUI._init();if(g){n(window,"load",t);}else{t();}YUI.Env.add=n;YUI.Env.remove=v;if(typeof exports=="object"){exports.YUI=YUI;}}());YUI.add("yui-base",function(b){var i=b.Lang||(b.Lang={}),n=String.prototype,k=Object.prototype.toString,a={"undefined":"undefined","number":"number","boolean":"boolean","string":"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},c=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,r=/^\s+|\s+$/g,e=/\{\s*\[(?:native code|function)\]\s*\}/i;i._isNative=function(v){return !!(b.config.useNativeES5&&v&&e.test(v));};i.isArray=i._isNative(Array.isArray)?Array.isArray:function(v){return i.type(v)==="array";};i.isBoolean=function(v){return typeof v==="boolean";};i.isDate=function(v){return i.type(v)==="date"&&v.toString()!=="Invalid Date"&&!isNaN(v);};i.isFunction=function(v){return i.type(v)==="function";};i.isNull=function(v){return v===null;};i.isNumber=function(v){return typeof v==="number"&&isFinite(v);};i.isObject=function(x,w){var v=typeof x;return(x&&(v==="object"||(!w&&(v==="function"||i.isFunction(x)))))||false;};i.isString=function(v){return typeof v==="string";};i.isUndefined=function(v){return typeof v==="undefined";};i.isValue=function(w){var v=i.type(w);switch(v){case"number":return isFinite(w);case"null":case"undefined":return false;default:return !!v;}};i.now=Date.now||function(){return new Date().getTime();};i.sub=function(v,w){return v.replace?v.replace(c,function(x,y){return i.isUndefined(w[y])?x:w[y];}):v;};i.trim=n.trim?function(v){return v&&v.trim?v.trim():v;}:function(v){try{return v.replace(r,"");}catch(w){return v;}};i.trimLeft=n.trimLeft?function(v){return v.trimLeft();}:function(v){return v.replace(/^\s+/,"");};i.trimRight=n.trimRight?function(v){return v.trimRight();}:function(v){return v.replace(/\s+$/,"");};i.type=function(v){return a[typeof v]||a[k.call(v)]||(v?"object":"null");};var f=b.Lang,q=Array.prototype,o=Object.prototype.hasOwnProperty;function j(x,A,z){var w,v;A||(A=0);if(z||j.test(x)){try{return q.slice.call(x,A);}catch(y){v=[];for(w=x.length;A<w;++A){v.push(x[A]);}return v;}}return[x];}b.Array=j;j.dedupe=function(A){var z={},x=[],w,y,v;for(w=0,v=A.length;w<v;++w){y=A[w];if(!o.call(z,y)){z[y]=1;x.push(y);}}return x;};j.each=j.forEach=f._isNative(q.forEach)?function(x,v,w){q.forEach.call(x||[],v,w||b);return b;}:function(z,x,y){for(var w=0,v=(z&&z.length)||0;w<v;++w){if(w in z){x.call(y||b,z[w],w,z);}}return b;};j.hash=function(y,w){var z={},A=(w&&w.length)||0,x,v;for(x=0,v=y.length;x<v;++x){if(x in y){z[y[x]]=A>x&&x in w?w[x]:true;}}return z;};j.indexOf=f._isNative(q.indexOf)?function(x,v,w){return q.indexOf.call(x,v,w);}:function(y,w,x){var v=y.length;x=+x||0;x=(x>0||-1)*Math.floor(Math.abs(x));if(x<0){x+=v;if(x<0){x=0;}}for(;x<v;++x){if(x in y&&y[x]===w){return x;}}return -1;};j.numericSort=function(w,v){return w-v;};j.some=f._isNative(q.some)?function(x,v,w){return q.some.call(x,v,w);}:function(z,x,y){for(var w=0,v=z.length;
w<v;++w){if(w in z&&x.call(y,z[w],w,z)){return true;}}return false;};j.test=function(x){var v=0;if(f.isArray(x)){v=1;}else{if(f.isObject(x)){try{if("length" in x&&!x.tagName&&!x.alert&&!x.apply){v=2;}}catch(w){}}}return v;};function t(){this._init();this.add.apply(this,arguments);}t.prototype={_init:function(){this._q=[];},next:function(){return this._q.shift();},last:function(){return this._q.pop();},add:function(){this._q.push.apply(this._q,arguments);return this;},size:function(){return this._q.length;}};b.Queue=t;YUI.Env._loaderQueue=YUI.Env._loaderQueue||new t();var m="__",o=Object.prototype.hasOwnProperty,l=b.Lang.isObject;b.cached=function(x,v,w){v||(v={});return function(y){var z=arguments.length>1?Array.prototype.join.call(arguments,m):String(y);if(!(z in v)||(w&&v[z]==w)){v[z]=x.apply(x,arguments);}return v[z];};};b.getLocation=function(){var v=b.config.win;return v&&v.location;};b.merge=function(){var x=arguments,y=0,w=x.length,v={};for(;y<w;++y){b.mix(v,x[y],true);}return v;};b.mix=function(v,w,C,x,z,D){var A,G,F,y,H,B,E;if(!v||!w){return v||b;}if(z){if(z===2){b.mix(v.prototype,w.prototype,C,x,0,D);}F=z===1||z===3?w.prototype:w;E=z===1||z===4?v.prototype:v;if(!F||!E){return v;}}else{F=w;E=v;}A=C&&!D;if(x){for(y=0,B=x.length;y<B;++y){H=x[y];if(!o.call(F,H)){continue;}G=A?false:H in E;if(D&&G&&l(E[H],true)&&l(F[H],true)){b.mix(E[H],F[H],C,null,0,D);}else{if(C||!G){E[H]=F[H];}}}}else{for(H in F){if(!o.call(F,H)){continue;}G=A?false:H in E;if(D&&G&&l(E[H],true)&&l(F[H],true)){b.mix(E[H],F[H],C,null,0,D);}else{if(C||!G){E[H]=F[H];}}}if(b.Object._hasEnumBug){b.mix(E,F,C,b.Object._forceEnum,z,D);}}return v;};var f=b.Lang,o=Object.prototype.hasOwnProperty,u,g=b.Object=f._isNative(Object.create)?function(v){return Object.create(v);}:(function(){function v(){}return function(w){v.prototype=w;return new v();};}()),d=g._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],s=g._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),p=g._hasProtoEnumBug=(function(){}).propertyIsEnumerable("prototype"),h=g.owns=function(w,v){return !!w&&o.call(w,v);};g.hasKey=h;g.keys=f._isNative(Object.keys)?Object.keys:function(z){if(!f.isObject(z)){throw new TypeError("Object.keys called on a non-object");}var y=[],x,w,v;if(p&&typeof z==="function"){for(w in z){if(h(z,w)&&w!=="prototype"){y.push(w);}}}else{for(w in z){if(h(z,w)){y.push(w);}}}if(s){for(x=0,v=d.length;x<v;++x){w=d[x];if(h(z,w)){y.push(w);}}}return y;};g.values=function(z){var y=g.keys(z),x=0,v=y.length,w=[];for(;x<v;++x){w.push(z[y[x]]);}return w;};g.size=function(w){try{return g.keys(w).length;}catch(v){return 0;}};g.hasValue=function(w,v){return b.Array.indexOf(g.values(w),v)>-1;};g.each=function(y,w,z,x){var v;for(v in y){if(x||h(y,v)){w.call(z||b,y[v],v,y);}}return b;};g.some=function(y,w,z,x){var v;for(v in y){if(x||h(y,v)){if(w.call(z||b,y[v],v,y)){return true;}}}return false;};g.getValue=function(z,y){if(!f.isObject(z)){return u;}var w,x=b.Array(y),v=x.length;for(w=0;z!==u&&w<v;w++){z=z[x[w]];}return z;};g.setValue=function(B,z,A){var v,y=b.Array(z),x=y.length-1,w=B;if(x>=0){for(v=0;w!==u&&v<x;v++){w=w[y[v]];}if(w!==u){w[y[v]]=A;}else{return u;}}return B;};g.isEmpty=function(v){return !g.keys(Object(v)).length;};YUI.Env.parseUA=function(B){var A=function(E){var F=0;return parseFloat(E.replace(/\./g,function(){return(F++==1)?"":".";}));},D=b.config.win,v=D&&D.navigator,y={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,accel:false,webos:0,caja:v&&v.cajaVersion,secure:false,os:null,nodejs:0},w=B||v&&v.userAgent,C=D&&D.location,x=C&&C.href,z;y.userAgent=w;y.secure=x&&(x.toLowerCase().indexOf("https")===0);if(w){if((/windows|win32/i).test(w)){y.os="windows";}else{if((/macintosh|mac_powerpc/i).test(w)){y.os="macintosh";}else{if((/android/i).test(w)){y.os="android";}else{if((/symbos/i).test(w)){y.os="symbos";}else{if((/linux/i).test(w)){y.os="linux";}else{if((/rhino/i).test(w)){y.os="rhino";}}}}}}if((/KHTML/).test(w)){y.webkit=1;}if((/IEMobile|XBLWP7/).test(w)){y.mobile="windows";}if((/Fennec/).test(w)){y.mobile="gecko";}z=w.match(/AppleWebKit\/([^\s]*)/);if(z&&z[1]){y.webkit=A(z[1]);y.safari=y.webkit;if(/ Mobile\//.test(w)||(/iPad|iPod|iPhone/).test(w)){y.mobile="Apple";z=w.match(/OS ([^\s]*)/);if(z&&z[1]){z=A(z[1].replace("_","."));}y.ios=z;y.os="ios";y.ipad=y.ipod=y.iphone=0;z=w.match(/iPad|iPod|iPhone/);if(z&&z[0]){y[z[0].toLowerCase()]=y.ios;}}else{z=w.match(/NokiaN[^\/]*|webOS\/\d\.\d/);if(z){y.mobile=z[0];}if(/webOS/.test(w)){y.mobile="WebOS";z=w.match(/webOS\/([^\s]*);/);if(z&&z[1]){y.webos=A(z[1]);}}if(/ Android/.test(w)){if(/Mobile/.test(w)){y.mobile="Android";}z=w.match(/Android ([^\s]*);/);if(z&&z[1]){y.android=A(z[1]);}}if(/Silk/.test(w)){z=w.match(/Silk\/([^\s]*)\)/);if(z&&z[1]){y.silk=A(z[1]);}if(!y.android){y.android=2.34;y.os="Android";}if(/Accelerated=true/.test(w)){y.accel=true;}}}z=w.match(/Chrome\/([^\s]*)/);if(z&&z[1]){y.chrome=A(z[1]);y.safari=0;}else{z=w.match(/AdobeAIR\/([^\s]*)/);if(z){y.air=z[0];}}}if(!y.webkit){if(/Opera/.test(w)){z=w.match(/Opera[\s\/]([^\s]*)/);if(z&&z[1]){y.opera=A(z[1]);}z=w.match(/Version\/([^\s]*)/);if(z&&z[1]){y.opera=A(z[1]);}if(/Opera Mobi/.test(w)){y.mobile="opera";z=w.replace("Opera Mobi","").match(/Opera ([^\s]*)/);if(z&&z[1]){y.opera=A(z[1]);}}z=w.match(/Opera Mini[^;]*/);if(z){y.mobile=z[0];}}else{z=w.match(/MSIE\s([^;]*)/);if(z&&z[1]){y.ie=A(z[1]);}else{z=w.match(/Gecko\/([^\s]*)/);if(z){y.gecko=1;z=w.match(/rv:([^\s\)]*)/);if(z&&z[1]){y.gecko=A(z[1]);}}}}}}if(!B){if(typeof process=="object"){if(process.versions&&process.versions.node){y.os=process.platform;y.nodejs=process.versions.node;}}YUI.Env.UA=y;}return y;};b.UA=YUI.Env.UA||YUI.Env.parseUA();YUI.Env.aliases={"anim":["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"app":["app-base","app-transitions","model","model-list","router","view"],"attribute":["attribute-base","attribute-complex"],"autocomplete":["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],"base":["base-base","base-pluginhost","base-build"],"cache":["cache-base","cache-offline","cache-plugin"],"collection":["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],"controller":["router"],"dataschema":["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],"datasource":["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],"datatable":["datatable-core","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],"datatype":["datatype-number","datatype-date","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],"dd":["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],"dom":["dom-base","dom-screen","dom-style","selector-native","selector"],"editor":["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],"event":["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],"handlebars":["handlebars-compiler"],"highlight":["highlight-base","highlight-accentfold"],"history":["history-base","history-hash","history-hash-ie","history-html5"],"io":["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],"json":["json-parse","json-stringify"],"loader":["loader-base","loader-rollup","loader-yui3"],"node":["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],"pluginhost":["pluginhost-base","pluginhost-config"],"querystring":["querystring-parse","querystring-stringify"],"recordset":["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],"resize":["resize-base","resize-proxy","resize-constrain"],"slider":["slider-base","slider-value-range","clickable-rail","range-slider"],"text":["text-accentfold","text-wordbreak"],"widget":["widget-base","widget-htmlparser","widget-skin","widget-uievents"]};
},"@VERSION@");