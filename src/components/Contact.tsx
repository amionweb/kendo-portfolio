import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@progress/kendo-react-buttons";
import { Label } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "@progress/kendo-react-layout";
import { Fade } from "@progress/kendo-react-animation";
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user types
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Fade enter={inView}>
          <div ref={ref} className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <Fade enter={inView}>
                <CardHeader className="text-gray-700 dark:text-white">
                  <CardTitle className="text-2xl font-semibold m-2">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <Card className="border-0 dark:bg-gray-700 rounded-xl">
                  <CardBody className="p-6">
                    <div className="space-y-6 mb-8">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Mail className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                        <span>john.doe@example.com</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Phone className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Connect With Us
                    </h4>

                    <div className="flex space-x-4 dark:text-white">
                      <Button
                        icon="linkedin"
                        rounded="full"
                        size="large"
                        themeColor="primary"
                        title="LinkedIn"
                        onClick={() =>
                          window.open("https://linkedin.com", "_blank")
                        }
                        className="hover:bg-indigo-100 dark:hover:bg-indigo-900"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button
                        icon="github"
                        rounded="full"
                        size="large"
                        themeColor="primary"
                        title="GitHub"
                        onClick={() =>
                          window.open("https://github.com", "_blank")
                        }
                        className="hover:bg-indigo-100 dark:hover:bg-indigo-900"
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button
                        icon="twitter"
                        rounded="full"
                        size="large"
                        themeColor="primary"
                        title="Twitter"
                        onClick={() =>
                          window.open("https://twitter.com", "_blank")
                        }
                        className="hover:bg-indigo-100 dark:hover:bg-indigo-900"
                      >
                        <Twitter className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Fade>

              <Fade enter={inView}>
                <CardHeader className="text-gray-700 dark:text-white">
                  <CardTitle className="text-2xl font-semibold">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <Card className="border-0 dark:bg-gray-700 rounded-xl">
                  <CardBody className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.name
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-600"
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.email
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-600"
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject
                        </Label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.subject
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-600"
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent`}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message
                        </Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.message
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-600"
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        themeColor="primary"
                        size="large"
                        className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
