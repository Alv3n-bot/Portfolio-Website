import React from "react";

const Portfolio = () => {
  const projects = [
    {
      name: "Book Library",
      description:
        "A modern web app for browsing, adding, and managing books. Built with React and Firebase for seamless real-time data handling.",
      live: "https://book-library-khaki-nu.vercel.app/",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    },
    {
      name: "Task Manager",
      description:
        "A productivity app for managing daily tasks and projects. Features drag-and-drop functionality, due dates, and priority levels.",
      live: "https://your-task-manager.com",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    },
    {
      name: "Ecommerce Store",
      description:
        "A sleek eCommerce platform built with React and Stripe API integration for secure payments.",
      live: "https://www.pxcsoftwares.site/fashion-boutique",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 text-center bg-[#FAF5EF]">
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#3C2F2F]">
        Featured Projects
      </h3>
      <p className="max-w-2xl mx-auto mb-10 text-[#3C2F2F]">
        A selection of my recent work showcasing different skills and
        approaches.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Thumbnail */}
            <div className="bg-[#C9A888] h-40 w-full flex items-center justify-center text-white text-xl font-semibold">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[#3C2F2F]">
                  {project.name}
                </h4>
                <p className="text-sm mb-4 text-[#5C4B3B]">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <ul className="flex justify-center gap-4 mt-auto">
                {project.live && (
                  <li>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B08968] hover:underline"
                    >
                      Live Demo
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`/projects/${project.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-[#B08968] hover:underline"
                  >
                    Details
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;