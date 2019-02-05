# Tec-Badger
A badge system application for student engagement in university's activities

## Run the application on Android
1. Make sure you have installed "build-tools;28.0.3" and "platforms;android-28" and that you have accepted the licenses. You can do it with the Android SDK manager.
2. Create an avd in android studio that uses an sdk version >= 28.
3. Create an assets folder in the android app.
```sh
mkdir android/app/src/main/assets
```

3. Bundle the application.
```sh
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

4. Run an avd or plug an android phone.
You can run an avd by running
```sh
/Users/hermes.espinola/Library/Android/sdk/tools/emulator -avd $AVD_NAME -netdelay none -netspeed full
```

5. Now you should be able to run the app.
```sh
react-native run-android
```
The 4th and 5th steps are aliased to `npm run start-android`.
