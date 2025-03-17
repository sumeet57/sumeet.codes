document.addEventListener("DOMContentLoaded", () => {
    let cont = document.querySelector("#projects .cont");

    const projects = [
        {
            title: "Tambola",
            context: "An online multiplayer tambola game using MERN, played by 200+ users in real-time.",
            codelink: "https://google.com",
            weblink: "https://google.com",
            icon: "🎲"
        },
        {
            title: "Weather App",
            context: "A weather forecasting app using OpenWeather API and vanilla JavaScript.",
            codelink: "https://example.com/weather-code",
            weblink: "https://example.com/weather-app",
            icon: "🌦️"
        },
        {
            title: "Task Manager",
            context: "A task management tool built with React and Firebase for real-time updates.",
            codelink: "https://example.com/task-code",
            weblink: "https://example.com/task-app",
            icon: "✅"
        },
        {
            title: "Portfolio Website",
            context: "A personal portfolio website showcasing projects and skills.",
            codelink: "https://example.com/portfolio-code",
            weblink: "https://example.com/portfolio-site",
            icon: "🌐"
        },
        
    ];

    projects.forEach(project => {
        let div = document.createElement("div");
        div.classList.add("list", "w-full", "flex", "flex-col", "md:flex-row", "bg-transparent", "justify-between",
            "items-center", "px-6", "py-8", "shadow-md", "backdrop-blur-md", "transition-all", "duration-300", 
            "border-b", "border-t", "border-gray-800","border-opacity-90", "relative", "overflow-hidden");

        div.innerHTML = `
            <div class="part1 text-left flex items-center space-x-3">
                <span class="text-2xl">${project.icon}</span>
                <div>
                    <h3 class="text-[var(--textSH)] font-semibold text-white">${project.title}</h3>
                    <p class="text-gray-400 text-sm mt-1">- ${project.context}</p>
                </div>
            </div>
            <div class="part2 flex bg-blue-300cv space-x-3 mt-3 md:mt-0">
                <a href="${project.codelink}" target="_blank">
                    <button class="group relative inline-flex items-center justify-center overflow-hidden 
                        bg-gray-700/50 backdrop-blur-lg px-4 py-1.5 text-sm font-semibold text-white 
                        transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                        <span>🖥️ Code</span>
                        <div class="absolute inset-0 flex h-full w-full justify-center 
                            [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 
                            group-hover:[transform:skew(-13deg)_translateX(100%)]">
                            <div class="relative h-full w-6 bg-white/20"></div>
                        </div>
                    </button>
                </a>
                <a href="${project.weblink}" target="_blank">
                    <button class="group relative inline-flex items-center justify-center overflow-hidden 
                        bg-blue-600/70 backdrop-blur-lg px-4 py-1.5 text-sm font-semibold text-white 
                        transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                        <span>🚀 Live</span>
                        <div class="absolute inset-0 flex h-full w-full justify-center 
                            [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 
                            group-hover:[transform:skew(-13deg)_translateX(100%)]">
                            <div class="relative h-full w-6 bg-white/20"></div>
                        </div>
                    </button>
                </a>
            </div>
        `;
        
        cont.appendChild(div);
    });
});
