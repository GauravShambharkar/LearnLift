import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, Play } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center flex flex-col gap-3">
            {/* Main Headline */}
            <h1 className="text-5xl  md:text-7xl font-bold text-gray-900 leading-tight tracking-tighter">
              Explore Your <span> </span>
              <span className="bg-gradient-to-r  from-black to-gray-500 bg-clip-text text-transparent">
                Learning Path!
              </span>
            </h1>

            {/* Subheading */}
            <p className=" tracking-tight leading-tight  md:text-2xl text-gray-600 max-w-3xl mx-auto ">
              Discover personalized learning journeys, connect with expert
              creators, and unlock your potential with LearnLift's innovative
              platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex  flex-col sm:flex-row gap-4 justify-center items-center ">
              <Link to="/register">
                <Button
                  size="lg"
                  className=" bg-black rounded-lg cursor-pointer text-white px-8 py-3 text-md font-medium  shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 rounded-lg cursor-pointer border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 text-lg font-semibold transition-all duration-300"
                >
                  LogIn
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid w-full mt-10 grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <BookOpen className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Courses Available</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="text-gray-600">Active Learners</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose LearnLift?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience learning like never before with our cutting-edge
              platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 cursor-pointer rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personalized Learning
              </h3>
              <p className="text-gray-600">
                AI-powered recommendations tailored to your learning style and
                goals
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Creators
              </h3>
              <p className="text-gray-600">
                Learn from industry professionals and certified instructors
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Interactive Content
              </h3>
              <p className="text-gray-600">
                Engage with hands-on projects, quizzes, and real-world
                applications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-black to-gray-400/70">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of learners who have already transformed their skills
            with LearnLift
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white  px-8 py-3 text-lg font-semibold"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
