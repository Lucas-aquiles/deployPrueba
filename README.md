# deployPrueba
DEPLOY REACT NATIVE - LOCAL:
 SIGUIENDO LA DOCUMENTACION  SE LOGRA HACER DEPLOY. https://reactnative.dev/docs/signed-apk-android
 
 DEPLY REAC NATIVE - APP CENTER:
 Error: /Users/runner/work/1/s/android/gradlew failed with return code: 1
 SE PRESENTAN DOS ERRORES PARA EL DEPLOY EN APP CENTER. 
 1- Failed to apply plugin 'com.android.internal.application'.
2022-10-28T18:45:28.9316060Z    > Android Gradle plugin requires Java 11 to run. You are currently using Java 1.8.
2022-10-28T18:45:28.9383230Z      Your current JDK is located in  /Users/runner/hostedtoolcache/Java_Temurin-Hotspot_jdk/8.0.345-1/x64/Contents/Home/jre
2022-10-28T18:45:28.9444090Z      You can try some of the following options:
2022-10-28T18:45:28.9501530Z        - changing the IDE settings.
2022-10-28T18:45:28.9545220Z        - changing the JAVA_HOME environment variable.
2022-10-28T18:45:28.9617560Z        - changing `org.gradle.java.home` in `gradle.properties`.

SOLUCION- CREAR LA VARIABLE HOME_JAVA EN APPCENTER

2 Failed the version gradle , not found.

SOLUCION. CAMBIAR LA VERSION EN build.gradle o gradle-wrapper.properties
