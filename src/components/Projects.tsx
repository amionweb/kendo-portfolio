import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

// KendoReact components
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardActions,
} from "@progress/kendo-react-layout";
import { ProgressBar } from "@progress/kendo-react-progressbars";
import { ChipList } from "@progress/kendo-react-buttons";
import { Fade } from "@progress/kendo-react-animation";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-commerce Platform",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "A full-featured e-commerce platform built with React, Node.js, and Stripe integration.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce-demo.com",
      completion: 85,
    },
    {
      title: "Task Management App",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "A collaborative task management application with real-time updates and team features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/task-manager",
      live: "https://task-manager-demo.com",
      completion: 92,
    },
    {
      title: "AI Image Generator",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "An AI-powered image generation tool using DALL-E API and Next.js.",
      technologies: ["Next.js", "OpenAI API", "Vercel"],
      github: "https://github.com/username/ai-image-gen",
      live: "https://ai-image-gen-demo.com",
      completion: 75,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Fade key={index} enter={inView}>
                <Card className="shadow-lg overflow-hidden rounded-xl p-6 max-w-md w-full bg-white dark:bg-gray-800">
                  <CardBody>
                    {/* Project Title */}
                    <CardTitle className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>

                    {/* Project Image */}
                    <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Project Description */}
                    <CardSubtitle className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </CardSubtitle>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <ChipList
                        data={project.technologies.map((tech) => ({
                          text: tech,
                        }))}
                        className="flex justify-between font-bold text-gray-600 dark:text-gray-200 rounded-full text-sm border-none mr-2 mb-2"
                      />
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Completion Status
                        </span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {project.completion}%
                        </span>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full">
                        <ProgressBar
                          value={project.completion}
                          labelVisible={false}
                          style={{ height: "8px", borderRadius: "4px" }}
                          progressClassName="bg-indigo-500"
                          progressStyle={{
                            backgroundColor: `hsl(220, 100%, ${
                              100 - project.completion / 2
                            }%)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <CardActions className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    </CardActions>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
