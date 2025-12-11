import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      name: "Weather App",
      description:
        "Real-time weather application using OpenWeather API with dynamic UI, loading states, and responsive card layouts.",
      category: "Beginner",
      difficulty: "Beginner",
      technologies: ["React", "Tailwind CSS", "OpenWeather API"],
      concepts: ["API requests", "Conditional rendering", "Responsive design"],
      live: "https://your-weather-app.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    },
    {
      name: "Crypto Tracker",
      description:
        "Live cryptocurrency tracker with CoinGecko API, featuring price charts, search/filter functionality, and real-time updates.",
      category: "Beginner",
      difficulty: "Beginner",
      technologies: ["React", "Chart.js", "CoinGecko API", "Tailwind CSS"],
      concepts: ["REST APIs", "Search/filter logic", "Chart visualization"],
      live: "https://your-crypto-tracker.com",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    },
    {
      name: "Movie Explorer",
      description:
        "Browse and explore movies using TMDB API with dynamic routing, pagination, and detailed movie information pages.",
      category: "Beginner",
      difficulty: "Beginner",
      technologies: ["React", "React Router", "TMDB API", "Tailwind CSS"],
      concepts: ["API pagination", "Dynamic routing", "Lazy loading"],
      live: "https://your-movie-explorer.com",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    },
    {
      name: "Book Finder App",
      description:
        "Search and discover books using Google Books API with debounced search input and custom data fetching hooks.",
      category: "Intermediate",
      difficulty: "Intermediate",
      technologies: ["React", "Google Books API", "Custom Hooks", "Tailwind CSS"],
      concepts: ["Nested API responses", "Debouncing", "Custom hooks"],
      live: "https://book-library-khaki-nu.vercel.app/",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    },
    {
      name: "Recipe Finder",
      description:
        "Discover recipes using Edamam API with filters, favorites system, and environment variable management.",
      category: "Intermediate",
      difficulty: "Intermediate",
      technologies: ["React", "Edamam API", "Tailwind CSS", "Environment Variables"],
      concepts: ["API keys", "State management", "Modals and cards"],
      live: "https://your-recipe-finder.com",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    },
    {
      name: "News Dashboard",
      description:
        "Stay updated with latest news using NewsAPI, featuring dark/light theme toggle and responsive grid layouts.",
      category: "Intermediate",
      difficulty: "Intermediate",
      technologies: ["React", "NewsAPI", "Tailwind CSS", "Theme Toggle"],
      concepts: ["Mapping API data", "Grid layouts", "Theme management"],
      live: "https://your-news-dashboard.com",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    },
    {
      name: "Task Manager",
      description:
        "Full-featured task management app with CRUD operations, Firebase integration, and smooth Tailwind animations.",
      category: "Intermediate",
      difficulty: "Intermediate",
      technologies: ["React", "Firebase", "Tailwind CSS", "LocalStorage"],
      concepts: ["CRUD operations", "Data persistence", "Animations"],
      live: "https://portfolio-website-xi-flame-84.vercel.app/task-manager",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    },
    {
      name: "Chat Application",
      description:
        "Real-time messaging app with Firebase Realtime Database, user authentication, and synchronized state management.",
      category: "Advanced",
      difficulty: "Advanced",
      technologies: ["React", "Firebase", "Realtime DB", "Authentication"],
      concepts: ["Realtime listeners", "Auth sessions", "State sync"],
      live: "https://your-chat-app.com",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    },
    {
      name: "Expense Tracker",
      description:
        "Comprehensive expense tracking dashboard with chart visualizations, data storage, and Context API for state management.",
      category: "Advanced",
      difficulty: "Advanced",
      technologies: ["React", "Recharts", "Context API", "Tailwind CSS"],
      concepts: ["State management", "Data visualization", "Dashboard layout"],
      live: "https://your-expense-tracker.com",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    },
    {
      name: "Ecommerce Frontend",
      description:
        "Full-featured eCommerce platform with product listings, shopping cart system, checkout flow, and protected routes.",
      category: "Advanced",
      difficulty: "Advanced",
      technologies: ["React", "Context API", "React Router", "Tailwind CSS"],
      concepts: ["Global state", "Routing", "Protected pages"],
      live: "https://www.pxcsoftwares.site/fashion-boutique",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    },
    {
      name: "Spotify Clone",
      description:
        "Music streaming interface clone with Spotify API integration, OAuth authentication, and playlist management.",
      category: "Advanced",
      difficulty: "Advanced",
      technologies: ["React", "Spotify API", "OAuth", "Tailwind CSS"],
      concepts: ["OAuth flow", "Token management", "Async data"],
      live: "https://your-spotify-clone.com",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80",
    },
    {
      name: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with multiple API integrations, real-time updates, and data visualization.",
      category: "Advanced",
      difficulty: "Advanced",
      technologies: ["React", "Multiple APIs", "Recharts", "Tailwind CSS"],
      concepts: ["API aggregation", "Real-time data", "Complex state"],
      live: "https://your-social-dashboard.com",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    },
  ];

  const categories = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.difficulty === filter);

  return (
    <div className="font-sans bg-[#FAF5EF] text-[#3C2F2F] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#B08968] to-[#8C6B54] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">My Projects</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          A progressive collection of 12 frontend projects — from beginner to advanced — 
          showcasing React, Tailwind CSS, API integration, and modern UI/UX design.
        </p>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 text-center bg-[#F1E7DC] sticky top-0 z-10 shadow-sm">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-[#B08968] text-white shadow-lg scale-105"
                  : "bg-white text-[#3C2F2F] hover:bg-[#C9A888] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-[#5C4B3B]">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Difficulty Badge */}
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                  project.difficulty === "Beginner" ? "bg-green-500" :
                  project.difficulty === "Intermediate" ? "bg-yellow-500" :
                  "bg-red-500"
                } text-white shadow-lg`}>
                  {project.difficulty}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl mb-2 text-[#3C2F2F]">
                  {project.name}
                </h3>
                
                <p className="text-sm mb-4 text-[#5C4B3B] flex-grow">
                  {project.description}
                </p>

                {/* Key Concepts */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-[#B08968] mb-2">Key Concepts:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.concepts.map((concept, i) => (
                      <span
                        key={i}
                        className="bg-[#F1E7DC] text-[#5C4B3B] text-xs px-2 py-1 rounded"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-[#B08968] mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#C9A888] text-white text-xs px-2 py-1 rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#B08968] text-white text-center py-2 rounded-lg hover:bg-[#8C6B54] transition font-medium text-sm"
                  >
                    View Live
                  </a>
                  <a
                    href={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex-1 border-2 border-[#B08968] text-[#B08968] text-center py-2 rounded-lg hover:bg-[#B08968] hover:text-white transition font-medium text-sm"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-[#5C4B3B]">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Learning Path Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#3C2F2F]">
            Progressive Learning Path
          </h2>
          <p className="text-[#5C4B3B] mb-8">
            These projects are designed to build your skills progressively. Start with beginner projects 
            to learn fundamentals, move to intermediate for deeper concepts, and challenge yourself with 
            advanced projects for real-world applications.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-500">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-bold text-lg mb-2 text-green-700">Beginner</h3>
              <p className="text-sm text-gray-600">API basics, React fundamentals, responsive design</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-500">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold text-lg mb-2 text-yellow-700">Intermediate</h3>
              <p className="text-sm text-gray-600">State management, custom hooks, data persistence</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-500">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-lg mb-2 text-red-700">Advanced</h3>
              <p className="text-sm text-gray-600">Real-time data, authentication, complex architectures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#F1E7DC] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#3C2F2F]">
          Let's Build Something Amazing Together
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-[#5C4B3B]">
          These projects demonstrate my journey and growth as a developer. I'm always excited to take on 
          new challenges and collaborate on innovative ideas.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#B08968] text-white px-8 py-3 rounded-lg hover:bg-[#8C6B54] transition font-medium"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
};

export default Projects;