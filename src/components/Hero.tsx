import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
// Import free KendoReact components
import { Card, CardBody } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { StackLayout } from "@progress/kendo-react-layout";
import Resume from "../assets/codebuster.pdf";

function AnimatedSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4f46e5" wireframe />
    </mesh>
  );
}

const Hero = () => {
  // Animation utility to simulate motion
  const fadeInAnimation = (delay = 0) => ({
    animation: `fadeIn ${0.5}s ease-out ${delay}s forwards`,
    opacity: 0,
    transform: "translateY(20px)",
  });

  const handleDownload = () => {
    const resumePath = Resume; // Adjust this path based on where you place the file
    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "My_Resume.pdf"); // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} autoRotate />
            <AnimatedSphere />
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10">
        <Card className="bg-transparent border-0 shadow-none max-w-3xl">
          <CardBody>
            <StackLayout gap={4} orientation="vertical">
              <>
                <h2
                  style={fadeInAnimation(0)}
                  className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  Hi, I'm{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    John Doe
                  </span>
                </h2>
              </>

              <>
                <p
                  style={fadeInAnimation(0.2)}
                  className="text-xl text-gray-700 dark:text-gray-300 mb-8"
                >
                  A Full Stack Developer passionate about <br />
                  creating innovative web solutions
                </p>
              </>

              <>
                <div style={fadeInAnimation(0.4)} className="m-4">
                  <StackLayout orientation="horizontal" gap={4}>
                    <>
                      <Button
                        themeColor="primary"
                        className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors m-2"
                        onClick={() => {
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Get in Touch
                      </Button>
                    </>
                    <>
                      <Button
                        themeColor="base"
                        className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        onClick={handleDownload}
                      >
                        Download CV
                      </Button>
                    </>
                  </StackLayout>
                </div>
              </>
            </StackLayout>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
