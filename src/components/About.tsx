import { useEffect, useState } from "react";
import { Code2, Palette, Globe2 } from "lucide-react";
// Import free KendoReact components
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { TileLayout } from "@progress/kendo-react-layout";
import { Fade } from "@progress/kendo-react-animation";

const About = () => {
  const [inView, setInView] = useState(false);
  const [itemsInView, setItemsInView] = useState([false, false, false]);

  // Simple intersection observer implementation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add delays to simulate the staggered animation effect
          setItemsInView([true, true, true]);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about-section");
    const skillsSection = document.getElementById("skills-section");

    if (section) observer.observe(section);
    if (skillsSection) skillsObserver.observe(skillsSection);

    return () => {
      if (section) observer.unobserve(section);
      if (skillsSection) skillsObserver.unobserve(skillsSection);
    };
  }, []);

  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Development",
      description:
        "Building scalable applications with modern technologies like React, Node.js, and TypeScript.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with a focus on user experience.",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Cloud Architecture",
      description:
        "Designing and implementing cloud-native solutions using AWS and Azure.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4" id="about-section">
        <Fade enter={inView}>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-none bg-transparent">
              <CardTitle className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                About Me
              </CardTitle>

              <CardBody>
                <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
                  <p className="text-gray-600 dark:text-gray-300">
                    With over 5 years of experience in web development, I
                    specialize in creating modern and efficient web
                    applications. My passion lies in solving complex problems
                    and turning innovative ideas into reality through clean,
                    maintainable code.
                  </p>
                </div>

                <div id="skills-section" className="mt-12">
                  <TileLayout
                    columns={1}
                    rowHeight="auto"
                    gap={{ rows: 8, columns: 8 }}
                    className="md:grid-cols-3 md:flex dark:text-white"
                    items={skills.map((skill, index) => ({
                      header: skill.title,
                      body: (
                        <Fade enter={itemsInView[index]}>
                          <Card className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg h-full max-w-xs">
                            <CardBody>
                              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                                {skill.icon}
                              </div>
                              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {skill.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {skill.description}
                              </p>
                            </CardBody>
                          </Card>
                        </Fade>
                      ),
                    }))}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
