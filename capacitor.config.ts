import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Clinic.KWT',
  webDir: 'www',
  bundledWebRuntime: false,  
    "plugins": {
      "SplashScreen": {
        "launchShowDuration": 13000,
        "launchAutoHide": true,
        "backgroundColor": "#ffffffff",
        "androidSplashResourceName": "splash",
        "androidScaleType": "CENTER_CROP",
        "androidSpinnerStyle": "small",
        "iosSpinnerStyle": "small",
        "spinnerColor": "#0069b4",
        "showSpinner": true,
        "splashFullScreen": true,
        "splashImmersive": true
      },
      "StatusBar":{
        "backgroundColor":"#0069b4"
      }
    }
    
};

export default config;
