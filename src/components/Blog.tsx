import { useInView } from "react-intersection-observer";
import { Calendar, Clock } from "lucide-react";

// KendoReact components (free tier)
import {
  Card,
  CardBody,
  CardTitle,
  CardActions,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Fade } from "@progress/kendo-react-animation";
import { Chip } from "@progress/kendo-react-buttons";

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices and patterns for creating maintainable React applications that scale.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Development",
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies that will shape the future of web development.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      title: "Mastering TypeScript",
      excerpt:
        "A comprehensive guide to using TypeScript effectively in your projects.",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Tutorial",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
              Latest Articles
            </h2>
            <a
              href="/blog"
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              View all posts &rarr;
            </a>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {posts.map((post, index) => (
              <Fade
                key={index}
                enter={inView}
                transitionEnterDuration={300}
                // delay={index * 150}
              >
                <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg h-[420px] bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Chip */}
                    <div className="absolute top-4 left-4">
                      <Chip
                        text={post.category}
                        className="bg-indigo-600 text-white text-sm rounded-full border-none px-3 py-1"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardBody className="p-5 flex flex-col">
                    {/* Date & Read Time */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>

                    {/* Blog Title */}
                    <CardTitle className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {post.title}
                    </CardTitle>

                    {/* Blog Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <CardActions className="mt-auto">
                      <Button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 border-none p-0 flex items-center font-medium">
                        Read more{" "}
                        <span className="ml-1 font-bold text-lg">&rarr;</span>
                      </Button>
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

export default Blog;
