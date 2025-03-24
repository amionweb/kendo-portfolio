import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "@progress/kendo-react-layout";
import { Chip } from "@progress/kendo-react-buttons";
import { ProgressBar } from "@progress/kendo-react-progressbars";

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Kubernetes", level: 65 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies & Skills
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="shadow-lg h-full p-6 dark:bg-gray-700 rounded-xl">
                <CardHeader className="p-2 rounded-lg w-full mb-2">
                  <CardTitle className="text-gray-900 dark:text-white text-xl font-semibold">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="mb-4">
                        <div className="flex justify-between items-center mb-2 text-gray-700 dark:text-gray-300">
                          <Chip
                            text={skill.name}
                            size="medium"
                            rounded="medium"
                            themeColor="info"
                            className="font-medium"
                          />
                          <span className="text-gray-600 dark:text-indigo-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-full">
                          <ProgressBar
                            value={skill.level}
                            max={100}
                            labelVisible={false}
                            labelPlacement="center"
                            style={{
                              height: "8px",
                              borderRadius: "4px",
                            }}
                            progressStyle={{
                              backgroundColor: `hsl(220, 100%, ${
                                100 - skill.level / 2
                              }%)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
