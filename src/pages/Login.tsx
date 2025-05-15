import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Apple, User } from 'lucide-react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="pt-24 pb-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-amber-900 py-4 px-6 text-center">
            <h2 className="text-2xl font-bold text-white">
              {isLogin ? 'Welcome Back!' : 'Create an Account'}
            </h2>
            <p className="text-amber-200 text-sm mt-1">
              {isLogin 
                ? 'Sign in to access your account' 
                : 'Join MIILEBITES to enjoy exclusive offers'}
            </p>
          </div>
          
          <div className="p-6">
            {/* Social Login Options */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                <Facebook className="mr-2 h-5 w-5" />
                Continue with Facebook
              </button>
              
              <button className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                Continue with Google
              </button>
              
              <button className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition-colors">
                <Apple className="mr-2 h-5 w-5" />
                Continue with Apple
              </button>
            </div>
            
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-amber-200"></div>
              <span className="flex-shrink mx-4 text-amber-500">or</span>
              <div className="flex-grow border-t border-amber-200"></div>
            </div>
            
            {/* Email Login/Signup Form */}
            <form className="space-y-4 mt-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-1">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-500">
                      <User className="h-5 w-5" />
                    </span>
                    <input
                      type="text"
                      id="name"
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-1">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-500">
                    <Mail className="h-5 w-5" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-amber-700 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="••••••••"
                />
              </div>
              
              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-amber-900 focus:ring-amber-500 border-amber-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-700">
                      Remember me
                    </label>
                  </div>
                  
                  <Link to="#" className="text-sm font-medium text-amber-900 hover:text-amber-700">
                    Forgot password?
                  </Link>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-amber-900 hover:bg-amber-800 text-white font-bold py-3 px-4 rounded-md transition-colors"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          </div>
          
          <div className="px-6 py-4 bg-amber-50 border-t border-amber-200 text-center">
            <p className="text-amber-700">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-amber-900 hover:text-amber-700"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;