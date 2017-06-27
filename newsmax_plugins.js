s.usePlugins=true

s.doPlugins = function(s) {
  
var visitor = Visitor.getInstance("05B1470957C7F5EB7F000101@AdobeOrg");
  
s.eVar3=s.prop4=s.getPreviousValue(s.pageName,'gpv_pn');
  
s.prop18=s.eVar16=s.getPercentPageViewed();
  
s.eVar17=s.prop19=s_getLoadTime();
  
s.eVar28=s.prop17 = s.getNewRepeat(30, 's_getNewRepeat');
  
s.prop20=s.getDaysSinceLastVisit('s_lv');
  
s.eVar18=s.prop21=s.getTimeParting('h','-5');
  
s.campaign = s.getValOnce(s.Util.getQueryParam("docket_number"),'s_cid',0);
s.eVar12 = s.getValOnce(s.Util.getQueryParam("intcid"),'s_intcid',0);

var mcID = visitor.getMarketingCloudVisitorID();
if (mcID){
  
s.eVar25 = mcID;
  
}
  
};

function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT} 

var url= window.location.href; 

if(url.indexOf("404")>0){ //condition to determine 404 pages

  s.pageType="errorPage";
}

if(s.pageName){
  
s.eVar98="D=g";
  
}
/*********************************PLUGINS SECTION*********************/
/*
* Plugin: getTimeParting 3.0 - Set timeparting values based on time zone - valid through 2014
*/
s.getTimeParting=new Function("t","z",""
+"var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A"
+"=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C"
+"='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A="
+"='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08"
+"';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if("
+"D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=p"
+"arseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H"
+"<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=n"
+"ew Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','"
+"Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J."
+"getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>=12)"
+"{P='PM';L=L-12};if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R"
+"+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q}}");

/*
* Plugin: Days since last Visit 1.1 - capture time from last visit
*/
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");

s.getLoadTime=new Function("opt","e1","e2",""
+"var s=this;try{if(s.alreadySetLoadTime){var remover=s.split(s.event"
+"s,',');var newEvents='';for(i=0;i<remover.length;i++){if(remover[i]"
+".indexOf(e1+'=')==-1&&remover[i]!=e2)newEvents=newEvents+remover[i]"
+"+',';}s.events=newEvents.substring(0,newEvents.length-1);return;}if"
+"(opt=='header'&&!(typeof s_preLoad==='undefined'))var loadTime=((ne"
+"w Date()).getTime()-s_preLoad);else if(opt=='browserapi'&&!(typeof "
+"performance==='undefined')){try{var loadTime=((new Date()).getTime("
+")-performance.timing.requestStart);}catch(err){return;}}else return"
+";if(loadTime/1000>500)return;if(loadTime<0)return;}catch(err){retur"
+"n;}s.events=s.apl(s.events,e1+'='+Math.round(loadTime/1000)+','+e2,"
+"',',2);var nVer=navigator.appVersion;var nAgt=navigator.userAgent;v"
+"ar browserName=navigator.appName;var fullVersion=''+parseFloat(navi"
+"gator.appVersion);var majorVersion=parseInt(navigator.appVersion,10"
+");var nameOffset,verOffset,ix;if((verOffset=nAgt.indexOf('Opera'))!"
+"=-1){browserName='Opera';fullVersion=nAgt.substring(verOffset+6);if"
+"((verOffset=nAgt.indexOf('Version'))!=-1)fullVersion=nAgt.substring"
+"(verOffset+8);}else if((verOffset=nAgt.indexOf('MSIE'))!=-1){browse"
+"rName='Microsoft Internet Explorer';fullVersion=nAgt.substring(verO"
+"ffset+5);}else if((verOffset=nAgt.indexOf('Chrome'))!=-1){browserNa"
+"me='Chrome';fullVersion=nAgt.substring(verOffset+7);}else if((verOf"
+"fset=nAgt.indexOf('Safari'))!=-1){browserName='Safari';fullVersion="
+"nAgt.substring(verOffset+7);if((verOffset=nAgt.indexOf('Version'))!"
+"=-1)fullVersion=nAgt.substring(verOffset+8);}else if((verOffset=nAg"
+"t.indexOf('Firefox'))!=-1){browserName='Firefox';fullVersion=nAgt.s"
+"ubstring(verOffset+8);}else if((nameOffset=nAgt.lastIndexOf(' ')+1)"
+"<(verOffset=nAgt.lastIndexOf('/'))){browserName=nAgt.substring(name"
+"Offset,verOffset);fullVersion=nAgt.substring(verOffset+1);if(browse"
+"rName.toLowerCase()==browserName.toUpperCase())browserName=navigato"
+"r.appName;}else{browserName='Other Unknown Browser';fullVersion='';"
+"}if((ix=fullVersion.indexOf(';'))!=-1)fullVersion=fullVersion.subst"
+"ring(0,ix);if((ix=fullVersion.indexOf(' '))!=-1)fullVersion=fullVer"
+"sion.substring(0,ix);majorVersion=parseInt(''+fullVersion,10);if(is"
+"NaN(majorVersion)){fullVersion=''+parseFloat(navigator.appVersion);"
+"majorVersion=parseInt(navigator.appVersion,10);}s.alreadySetLoadTim"
+"e=true;return browserName+' '+majorVersion;");

/*
* Plugin: getPercentPageViewed v1.71
*/
s.getPercentPageViewed=new Function("n",""
+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
+"rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
+".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
+"ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
+"',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
+"a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
+"!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
+"if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
+"r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
+"|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
+"th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
+"|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
+"tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
+"_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
+"s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
+"nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
+"C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
+"=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
+":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
+"v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
+"N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
+"Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
+":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
+"','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
+"+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
+"_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
+"length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
+"ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");

/*
* Plugin: getPreviousValue_v1.0 - return previous value of designated
* variable (requires split utility)
*/
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
* Utility Function: split v1.5 - split a string (JS 1.0 compatible)
*/
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
*/
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
* Plugin: getValOnce_v1.11
*/
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

/*
* Plugin Utility: apl v1.1
*/
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*
* Plugin: getTimeParting 3.0 - Set timeparting values based on time zone - valid through 2014
*/
s.getTimeParting=new Function("t","z",""
+"var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A"
+"=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C"
+"='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A="
+"='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08"
+"';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if("
+"D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=p"
+"arseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H"
+"<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=n"
+"ew Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','"
+"Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J."
+"getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>=12)"
+"{P='PM';L=L-12};if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R"
+"+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q}}");
