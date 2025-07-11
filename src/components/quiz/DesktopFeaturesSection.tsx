import React from "react";
import { Video, BookOpen, BarChart2, MessageCircle } from "lucide-react";

const DesktopFeaturesSection: React.FC = () => (
  <section className="bg-[#eafff3] py-16">
    <div className="max-w-6xl mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Learn Spanish anywhere, anytime
        </h2>
        <p className="text-lg text-gray-600">
          Our mobile-optimized platform adapts to your lifestyle, making Spanish learning<br />
          convenient and engaging wherever you are
        </p>
      </div>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Mobile Mockups */}
        <div className="flex gap-4 overflow-x-auto md:overflow-x-visible md:gap-6 md:justify-center">
          {/* Live Class Mockup */}
          <div className="flex flex-col items-center w-60 flex-shrink-0">
            <span className="bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">LIVE</span>
            <div className="rounded-3xl border-4 border-gray-900 bg-white h-[420px] flex flex-col p-4 shadow-xl w-full">
              <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-xl px-4 py-2 text-lg font-semibold mb-4">
                Live Spanish Class
              </div>
              <div className="flex flex-col gap-2 mb-4 flex-grow min-h-0">
                <div className="flex-1 min-h-0 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="https://spanishvip.com/wp-content/uploads/2025/06/Luisa-Reyes.jpg" alt="Teacher video" className="object-cover w-full h-full" />
                </div>
                <div className="flex-1 min-h-0 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="https://spanishvip.com/wp-content/uploads/2025/07/Depositphotos_370154040_L.jpg" alt="Your video" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-100 text-green-700 rounded-lg py-1 font-semibold text-xs">Mic On</button>
                <button className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-1 font-semibold text-xs">Camera</button>
              </div>
            </div>
          </div>
          {/* Academy Course Mockup */}
          <div className="flex flex-col items-center w-60 flex-shrink-0">
            <span className="bg-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">SELF-PACED</span>
            <div className="rounded-3xl border-4 border-gray-900 bg-white h-[420px] flex flex-col justify-between p-4 shadow-xl w-full">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-xl px-4 py-2 text-lg font-semibold mb-4">
                Academy Course
              </div>
              <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-500 font-semibold mb-1">Lesson 3: Family</div>
                <div className="text-sm text-gray-700 mb-2">
                  Listen and repeat:<br />
                  <span className="font-bold text-gray-900">"Mi familia es grande"</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <div className="text-xs text-gray-500 text-right">75%</div>
              </div>
              <button className="w-full bg-cyan-400 text-white rounded-lg py-2 font-semibold text-sm">Continue Lesson</button>
            </div>
          </div>
        </div>
        {/* Features List */}
        <div className="flex-1">
          <ul className="space-y-7">
            <li className="flex items-start gap-4">
              <span className="bg-orange-100 text-orange-500 rounded-lg p-2">
                <Video className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Join Live Classes from Anywhere</div>
                <div className="text-gray-600">
                  Participate in interactive group sessions with your smartphone or tablet. High-quality video calls optimized for mobile devices.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-green-100 text-green-500 rounded-lg p-2">
                <BookOpen className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Academy Courses On-the-Go</div>
                <div className="text-gray-600">
                  Access your self-paced lessons during commutes, breaks, or whenever you have a few minutes to spare.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-purple-100 text-purple-500 rounded-lg p-2">
                <BarChart2 className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Track Your Progress</div>
                <div className="text-gray-600">
                  Monitor your learning journey with detailed progress tracking, achievements, and personalized recommendations.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-green-100 text-green-500 rounded-lg p-2">
                <MessageCircle className="w-6 h-6" />
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Practice with AI Chat</div>
                <div className="text-gray-600">
                  Engage in conversation practice with our AI tutor anytime, building confidence before live classes.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default DesktopFeaturesSection; 