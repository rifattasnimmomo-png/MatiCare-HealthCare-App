# 📱 Build MatriCare Android APK Guide

This guide will help you build an Android APK file for the MatriCare app that you can install on your phone.

## ✅ Prerequisites

### 1. Install Android Studio
1. Download Android Studio from: https://developer.android.com/studio
2. Install it with default settings
3. During setup, make sure to install:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device (optional, for testing)

### 2. Install Java Development Kit (JDK)
- Android Studio usually installs JDK automatically
- If not, download JDK 11 or later from: https://www.oracle.com/java/technologies/downloads/

## 🔧 Setup Environment Variables (Windows)

1. Open System Environment Variables:
   - Press `Win + X` → System → Advanced system settings → Environment Variables

2. Add/Update these variables under "System variables":

   **ANDROID_HOME**
   - Variable name: `ANDROID_HOME`
   - Variable value: `C:\Users\YourUsername\AppData\Local\Android\Sdk`

   **JAVA_HOME** (if not set)
   - Variable name: `JAVA_HOME`
   - Variable value: `C:\Program Files\Android\Android Studio\jbr` (or your JDK path)

3. Edit the `Path` variable and add:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\tools`
   - `%ANDROID_HOME%\cmdline-tools\latest\bin`

4. **Restart PowerShell/Terminal** after setting environment variables

## 🏗️ Build the APK

### Method 1: Using Android Studio (Recommended for Beginners)

1. **Open the project in Android Studio:**
   ```powershell
   npx cap open android
   ```

2. **Wait for Gradle sync to complete** (first time takes 5-10 minutes)

3. **Build the APK:**
   - Go to: `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - Wait for build to complete
   - Click "locate" in the notification to find your APK

4. **APK Location:**
   ```
   MatriCare Mobile Healthcare App 3\android\app\build\outputs\apk\debug\app-debug.apk
   ```

### Method 2: Using Command Line (Faster)

1. **Sync Capacitor:**
   ```powershell
   npm run build
   npx cap sync android
   ```

2. **Build APK:**
   ```powershell
   cd android
   .\gradlew assembleDebug
   cd ..
   ```

3. **APK Location:**
   ```
   android\app\build\outputs\apk\debug\app-debug.apk
   ```

## 📲 Install APK on Your Phone

### Option 1: USB Cable (Recommended)
1. Enable Developer Options on your phone:
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
   - Go back → Developer Options → Enable "USB Debugging"

2. Connect phone via USB

3. Install APK:
   ```powershell
   adb install android\app\build\outputs\apk\debug\app-debug.apk
   ```

### Option 2: Direct Transfer
1. Copy `app-debug.apk` to your phone (email, cloud, or USB)
2. On your phone, tap the APK file
3. Allow "Install from Unknown Sources" if prompted
4. Install the app

## 🎨 Customize App Icon & Splash Screen

### App Icon
1. Create your icon (512x512 px PNG)
2. Place icons in:
   ```
   android\app\src\main\res\
   ├── mipmap-hdpi\ic_launcher.png (72x72)
   ├── mipmap-mdpi\ic_launcher.png (48x48)
   ├── mipmap-xhdpi\ic_launcher.png (96x96)
   ├── mipmap-xxhdpi\ic_launcher.png (144x144)
   └── mipmap-xxxhdpi\ic_launcher.png (192x192)
   ```

### Splash Screen
1. Edit: `android\app\src\main\res\values\styles.xml`
2. Add your colors and images

## 🚀 Build Release APK (For Distribution)

### 1. Generate Signing Key
```powershell
keytool -genkey -v -keystore matricare-release-key.keystore -alias matricare -keyalg RSA -keysize 2048 -validity 10000
```

### 2. Create `android/key.properties`:
```properties
storePassword=YourStorePassword
keyPassword=YourKeyPassword
keyAlias=matricare
storeFile=../matricare-release-key.keystore
```

### 3. Update `android/app/build.gradle`:
Add before `android` block:
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

Add inside `android` block:
```gradle
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
        storePassword keystoreProperties['storePassword']
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled false
        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
    }
}
```

### 4. Build Release APK:
```powershell
cd android
.\gradlew assembleRelease
cd ..
```

### 5. Release APK Location:
```
android\app\build\outputs\apk\release\app-release.apk
```

## 🔄 Update Workflow

When you make changes to your app:

```powershell
# 1. Build web app
npm run build

# 2. Sync with Capacitor
npx cap sync android

# 3. Build APK
cd android
.\gradlew assembleDebug
cd ..
```

## ❌ Troubleshooting

### "ANDROID_HOME not set"
- Restart terminal after setting environment variables
- Verify path exists: `echo $env:ANDROID_HOME`

### "SDK location not found"
Create `android/local.properties`:
```properties
sdk.dir=C:\\Users\\YourUsername\\AppData\\Local\\Android\\Sdk
```

### Gradle build fails
```powershell
cd android
.\gradlew clean
.\gradlew assembleDebug
cd ..
```

### App crashes on phone
- Check Android version compatibility
- View logs: `adb logcat`

## 📝 Quick Commands Reference

```powershell
# Build web app
npm run build

# Sync Capacitor
npx cap sync android

# Open Android Studio
npx cap open android

# Build Debug APK
cd android && .\gradlew assembleDebug && cd ..

# Build Release APK
cd android && .\gradlew assembleRelease && cd ..

# Install on connected phone
adb install android\app\build\outputs\apk\debug\app-debug.apk

# View logs
adb logcat | Select-String "MatriCare"
```

## 🎉 Success!

Once built, you'll have an APK file that you can:
- Install on your Android phone
- Share with others
- Upload to Google Play Store (requires paid developer account)

Your MatriCare app is now a standalone mobile application! 📱💖

---

**Need help?** Check the [Capacitor documentation](https://capacitorjs.com/docs) or open an issue on your GitHub repo.
