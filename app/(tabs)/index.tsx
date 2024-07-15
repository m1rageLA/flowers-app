import useControls from "r3f-native-orbitcontrols";
import Model from "../../src/components/Model"
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer} {...events}>
        <Canvas>
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['white', 5]}/>
          <directionalLight position={[-1, 0, 0]} args={['white', 5]}/>
          <directionalLight position={[0, 1, 0]} args={['white', 5]}/>
          <directionalLight position={[0, -1, 0]} args={['white', 5]}/>
          <directionalLight position={[0, 0, 1]} args={['white', 5]}/>
          <directionalLight position={[0, 0, -1]} args={['white', 5]}/>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
      {/* <View style={styles.bottomContainer}></View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ebe6",
  },
  modelContainer: {
    flex: 2,
    backgroundColor: "#ffffff",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
