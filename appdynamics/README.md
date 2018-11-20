https://cream2018112002230424.saas.appdynamics.com/controller/#/location=EUM_WEB_GEO_DASHBOARD&timeRange=last_1_hour.BEFORE_NOW.-1.-1.60&application=81281


https://docs.appdynamics.com/display/PRO45/EUM+Server+Deployment

https://docs.appdynamics.com/display/PRO45/SPA2+Monitoring

https://docs.appdynamics.com/display/PRO44/Set+Up+and+Access+Browser+RUM

```
  window['adrum-start-time'] = new Date().getTime();
    window["adrum-app-key"] = 'AD-AAB-AAM-XRY';
    
    (function(config){
        config.appKey = 'AD-AAB-AAM-XRY';
        config.adrumExtUrlHttp = 'http://cdn.appdynamics.com';
         config.adrumExtUrlHttps = 'https://cdn.appdynamics.com';
         config.beaconUrlHttp = 'http://col.eum-appdynamics.com';
         config.beaconUrlHttps = 'https://col.eum-appdynamics.com';
         config.xd = {enable : false};
     })(window['adrum-config'] || (window['adrum-config'] = {}));


```
