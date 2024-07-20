import useControls from "r3f-native-orbitcontrols";
import TulipsV1 from "../../src/components/TulipsV1";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { variables } from "../../assets/variables";

export default function HomeScreen() {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer} {...events}>
        <Canvas>
          <OrbitControls
            enablePan={false}
            maxPolarAngle={2}
            dampingFactor={0.03}
            rotateSpeed={1}
          />
          <directionalLight position={[1, 0, 0]} args={["white", 2]} />
          <directionalLight position={[-1, 0, 0]} args={["white", 3]} />
          <directionalLight position={[0, 1, 0]} args={["white", 1]} />
          <directionalLight position={[0, -1, 0]} args={["white", 0.8]} />
          <directionalLight position={[0, 0, 1]} args={["white", 1]} />
          <directionalLight position={[0, 0, -1]} args={["white", 1]} />
          <Suspense fallback={null}>
            <TulipsV1 />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.PRIMARY_COLOR,
  },
  modelContainer: {
    flex: 2
  },
  bottomContainer: {
    flex: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
