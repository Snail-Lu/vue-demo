function H(){let e=new Date,s=e.getFullYear(),r=e.getMonth(),a=e.getDate().toString().padStart(2,"0"),t=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0"),y=e.getSeconds().toString().padStart(2,"0");return r=r+1,r=r.toString().padStart(2,"0"),`${s}-${r}-${a} ${t}:${n}:${y}`}const c=function(){var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,s=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,r=/[^-+\dA-Z]/g,a=function(t,n){for(t=String(t),n=n||2;t.length<n;)t="0"+t;return t};return function(t,n,y){var m=c;if(arguments.length==1&&Object.prototype.toString.call(t)=="[object String]"&&!/\d/.test(t)&&(n=t,t=void 0),t=t?new Date(t):new Date,isNaN(t))throw SyntaxError("invalid date");n=String(m.masks[n]||n||m.masks.default),n.slice(0,4)=="UTC:"&&(n=n.slice(4),y=!0);var i=y?"getUTC":"get",d=t[i+"Date"](),h=t[i+"Day"](),g=t[i+"Month"](),T=t[i+"FullYear"](),o=t[i+"Hours"](),D=t[i+"Minutes"](),S=t[i+"Seconds"](),u=t[i+"Milliseconds"](),M=y?0:t.getTimezoneOffset(),p={d,dd:a(d),ddd:m.i18n.dayNames[h],dddd:m.i18n.dayNames[h+7],m:g+1,mm:a(g+1),mmm:m.i18n.monthNames[g],mmmm:m.i18n.monthNames[g+12],yy:String(T).slice(2),yyyy:T,h:o%12||12,hh:a(o%12||12),H:o,HH:a(o),M:D,MM:a(D),s:S,ss:a(S),l:a(u,3),L:a(u>99?Math.round(u/10):u),t:o<12?"a":"p",tt:o<12?"am":"pm",T:o<12?"A":"P",TT:o<12?"AM":"PM",Z:y?"UTC":(String(t).match(s)||[""]).pop().replace(r,""),o:(M>0?"-":"+")+a(Math.floor(Math.abs(M)/60)*100+Math.abs(M)%60,4),S:["th","st","nd","rd"][d%10>3?0:(d%100-d%10!=10)*d%10]};return n.replace(e,function(l){return l in p?p[l]:l.slice(1,l.length-1)})}}();c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]};const b=e=>{const r=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();return f(r)},A=e=>{const s=new Date(e.getTime());return s.setDate(1),s.getDay()},N=(e,s)=>{if(s<=0)return[];const r=new Date(e.getTime());r.setDate(0);const a=r.getDate();return f(s).map((t,n)=>a-(s-n-1))},f=function(e){return Array.from({length:e},(s,r)=>r+1)};export{A as a,N as b,b as c,c as d,H as g,f as r};
