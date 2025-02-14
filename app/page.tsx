
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Target,
  MessageCircle,
  BarChart2,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import mockimg from "./android app mockup.png";
const events = [
  {
    title: "AI for Career and Entrepreneurship",
    date: "15-2-2025",
    time: "9:00 AM - 12:30 AM",
    location: "In-Place",
    image: "https://i.postimg.cc/15wsWqKp/event-banner.jpg",
    category: "Technology",
  },
];


// App screenshots for slider
const screenshots = [
  "/images/ss.png",
  "/images/OIP.jpg",
  "/images/ok.jpg",

];


export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 3000); // Change image every 3s
    return () => clearInterval(interval);
  }, []);

  const [greeting, setGreeting] = useState("");

  // Dynamically set the greeting based on the time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);
  // Sample testimonials data
  const testimonials = [
    {
      name: "John Doe",
      role: "Software Engineer",
      feedback:
        "Career Canvas helped me land my dream job. The resources and community are top-notch!",
    },
    {
      name: "Jane Smith",
      role: "Marketing Specialist",
      feedback:
        "The learning experience was incredible. I was able to upskill and grow in my career!",
    },
  ];
  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      <section
        id="home"
        className="min-h-screen flex items-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0052CC]/5 to-[#3CB371]/5"
      >
        <div className="max-w-7xl mx-auto w-full">

          {/* Right - Auto-Rotating Image Slider */}
          <div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center overflow-hidden rounded-[2rem] shadow-2xl mt-8 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full"
              >
                <Image
                  src={screenshots[index]}
                  alt="App Screenshot"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/50 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center mt-8 ">
            {/* Greeting Message */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
              {greeting}, Welcome to Career Canvas!
            </h1>

            {/* Platform Introduction */}
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Explore innovative learning experiences designed to boost your career and empower your education journey. Join thousands of learners in transforming their futures!
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#0052CC] hover:bg-[#3CB371] transition-colors w-full sm:w-auto"
              >
                Get Started
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#FFA07A] text-[#FFA07A] hover:bg-[#FFA07A]/10 w-full sm:w-auto mb-8"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          





          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
                Transform Your <br />
                <span className="text-gradient">Learning Journey</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience education like never before with our innovative
                learning platform. Join thousands of learners worldwide on their
                path to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="interactive-hover bg-[#0052CC] hover:bg-[#3CB371] transition-colors w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" /> Download App
                </Button>
                <Link
                  href="https://www.youtube.com/watch?v=G4BFlIs9j_M"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="interactive-hover w-full sm:w-auto border-[#FFA07A] text-[#FFA07A] hover:bg-[#FFA07A]/10"
                  >
                    Watch Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] sm:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 animate-fade-in">
              <Image
                // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                src="https://i.postimg.cc/7Zhy3hVK/career-canvas-android-mockup-4.png"
                alt="Students learning"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0052CC]/50 to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#3CB371]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Career Canvas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of education with our innovative features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Interactive Learning",
                description:
                  "Engage with interactive content and learn at your own pace",
              },
              {
                icon: Users,
                title: "Community Support",
                description:
                  "Connect with peers and experts in your field of study",
              },
              {
                icon: Award,
                title: "Certified Courses",
                description:
                  "Earn recognized certificates upon course completion",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="card-hover p-8 bg-white/50 backdrop-blur-sm border-2 border-[#0052CC]/10"
              >
                <feature.icon className="h-12 w-12 text-[#0052CC] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0052CC]/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our educational events and enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="card-hover overflow-hidden bg-white border-2 border-[#0052CC]/10"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#0052CC] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-3 text-gray-600 mb-6">
                    <div className="flex items-center group">
                      <Calendar className="h-5 w-5 mr-3 text-[#3CB371] group-hover:scale-110 transition-transform" />
                      {event.date}
                    </div>
                    <div className="flex items-center group">
                      <Clock className="h-5 w-5 mr-3 text-[#3CB371] group-hover:scale-110 transition-transform" />
                      {event.time}
                    </div>
                    <div className="flex items-center group">
                      <MapPin className="h-5 w-5 mr-3 text-[#3CB371] group-hover:scale-110 transition-transform" />
                      {event.location}
                    </div>
                  </div>
                  <Button className="interactive-hover w-full bg-[#0052CC] hover:bg-[#3CB371] transition-colors">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSchXP4tQCub2dq2Dicj4iZPM2qm4i1BWRyZhnE8MrdSheE-IQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Register Now
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section
      id="benefits"
      className="min-h-[600px] py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3CB371]/5 to-[#0052CC]/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gradient mb-12">
          The Benefits of Joining Career Canvas
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8 shadow-xl rounded-lg">
            <Users className="mx-auto h-12 w-12 text-[#0052CC] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vibrant Community</h3>
            <p className="text-gray-700 mb-4">
              Join a supportive community of learners and mentors from around the world.
            </p>
            <Button
              variant="outline"
              className="w-full text-[#0052CC] border-[#0052CC] hover:bg-[#0052CC]/10"
            >
              Learn More
            </Button>
          </Card>
          <Card className="text-center p-8 shadow-xl rounded-lg">
            <Target className="mx-auto h-12 w-12 text-[#3CB371] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Career-Focused</h3>
            <p className="text-gray-700 mb-4">
              Tailored resources to help you reach your career goals and land your dream job.
            </p>
            <Button
              variant="outline"
              className="w-full text-[#3CB371] border-[#3CB371] hover:bg-[#3CB371]/10"
            >
              Learn More
            </Button>
          </Card>
          <Card className="text-center p-8 shadow-xl rounded-lg">
            <Award className="mx-auto h-12 w-12 text-[#FFA07A] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-gray-700 mb-4">
              Earn certificates upon completing courses and showcase your achievements.
            </p>
            <Button
              variant="outline"
              className="w-full text-[#FFA07A] border-[#FFA07A] hover:bg-[#FFA07A]/10"
            >
              Learn More
            </Button>
          </Card>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 text-center">
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <BarChart2 className="mx-auto h-12 w-12 text-[#0052CC] mb-4" />
            <h3 className="text-3xl font-bold text-[#0052CC] mb-2">98%</h3>
            <p className="text-gray-700">Success Rate for Career Placements</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <Star className="mx-auto h-12 w-12 text-[#3CB371] mb-4" />
            <h3 className="text-3xl font-bold text-[#3CB371] mb-2">4.9/5</h3>
            <p className="text-gray-700">Average Rating from Students</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <Users className="mx-auto h-12 w-12 text-[#FFA07A] mb-4" />
            <h3 className="text-3xl font-bold text-[#FFA07A] mb-2">5000+</h3>
            <p className="text-gray-700">Active Users Worldwide</p>
          </div>
        </div>

        {/* User Testimonials */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center text-gradient mb-6">
            What Our Users Say
          </h3>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
              <p className="text-xl font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#3CB371]/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-gradient">Career Canvas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make education accessible, engaging, and
              effective for everyone through innovative technology.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "We're passionate about transforming education",
              },
              {
                icon: Target,
                title: "Innovation",
                description:
                  "Constantly pushing boundaries in educational technology",
              },
              {
                icon: Users,
                title: "Community",
                description: "Building strong learning communities",
              },
              {
                icon: MessageCircle,
                title: "Support",
                description: "Always here to help our users succeed",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="card-hover p-8 text-center bg-white/50 backdrop-blur-sm border-2 border-[#0052CC]/10"
              >
                <value.icon className="h-12 w-12 text-[#0052CC] mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-[#0052CC] to-[#3CB371] rounded-3xl p-12 text-white text-center transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download our app today and join thousands of successful learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="interactive-hover bg-[#FFA07A] hover:bg-[#FFA07A]/90"
              >
                <Download className="mr-2 h-5 w-5" /> Download Now
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="interactive-hover bg-[#FFA07A] hover:bg-[#FFA07A]/90"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
