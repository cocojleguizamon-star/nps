self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(){});
self.addEventListener("push",function(e){var d={};try{d=e.data.json()}catch(x){}
e.waitUntil(self.registration.showNotification(d.title||"Megatlon NPS",{body:d.body||"",tag:"nps-aviso",data:{url:d.url||"./"}}))});
self.addEventListener("notificationclick",function(e){e.notification.close();
var u=new URL((e.notification.data&&e.notification.data.url)||"./",self.registration.scope).href;
e.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(function(l){for(var i=0;i<l.length;i++){if(l[i].url.indexOf(self.registration.scope)===0&&"focus" in l[i])return l[i].focus()}return clients.openWindow(u)}))});
