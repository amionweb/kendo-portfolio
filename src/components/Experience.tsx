import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import { Fade } from "@progress/kendo-react-animation";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "@progress/kendo-react-layout";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Present",
      description:
        "Led development of enterprise-scale React applications, mentored junior developers, and implemented CI/CD pipelines.",
      technologies: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client projects, implemented responsive designs, and optimized application performance.",
      technologies: ["Vue.js", "Python", "Docker", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2018 - 2019",
      description:
        "Created responsive web applications and collaborated with designers to implement pixel-perfect interfaces.",
      technologies: ["JavaScript", "HTML/CSS", "React", "Sass"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Fade enter={inView}>
          <div className="max-w-4xl mx-auto" ref={ref}>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Fade
                  enter={inView}
                  key={index}
                  className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800"
                >
                  <div className="absolute -left-4 top-0">
                    <div className="bg-indigo-600 dark:bg-indigo-400 p-2 rounded-full">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <Card className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <CardHeader className="text-xl font-semibold text-gray-900 dark:text-white">
                      <CardTitle>{exp.title}</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </Fade>
              ))}
            </div>
          </div>
        </Fade>
        <div ref={ref} className="max-w-4xl mx-auto">
          <Fade enter={inView}></Fade>
        </div>
      </div>
    </section>
  );
};

export default Experience;
