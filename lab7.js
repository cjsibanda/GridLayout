// script.js
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('techGrid');
    
    // Data structure for web technologies
    const technologies = [
        {
            name: "Bootstrap",
            icon: "🎨",
            description: "The world's most popular front-end component library for developing responsive, mobile-first projects.",
            tags: ["CSS Framework", "Responsive", "Components"],
            accentColor: "#7e3ff2"
        },
        {
            name: "TypeScript",
            icon: "🟦",
            description: "A typed superset of JavaScript that compiles to plain JavaScript, adding static types and better tooling.",
            tags: ["Language", "Type Safety", "OOP"],
            accentColor: "#3178c6"
        },
        {
            name: "Flexbox",
            icon: "📐",
            description: "A one-dimensional layout method for arranging items in rows or columns with powerful alignment capabilities.",
            tags: ["CSS Layout", "Alignment", "Responsive"],
            accentColor: "#ff6b35"
        },
        {
            name: "AJAX",
            icon: "⚡",
            description: "Asynchronous JavaScript and XML enables web pages to update content without full page reloads.",
            tags: ["Asynchronous", "API Calls", "XMLHttpRequest"],
            accentColor: "#4caf50"
        },
        {
            name: "React",
            icon: "⚛️",
            description: "A JavaScript library for building user interfaces with reusable components and virtual DOM.",
            tags: ["Library", "Components", "Virtual DOM"],
            accentColor: "#61dafb"
        },
        {
            name: "Sass",
            icon: "💅",
            description: "A CSS preprocessor that adds variables, nesting, mixins, and inheritance for more maintainable styles.",
            tags: ["Preprocessor", "Variables", "Nesting"],
            accentColor: "#cc6699"
        },
        {
            name: "Grid Layout",
            icon: "🔳",
            description: "A two-dimensional layout system in CSS that creates complex responsive web designs with ease.",
            tags: ["CSS Layout", "2D Grid", "Responsive"],
            accentColor: "#8e44ad"
        },
        {
            name: "Vue.js",
            icon: "🟢",
            description: "A progressive JavaScript framework for building user interfaces with an approachable core library.",
            tags: ["Framework", "Reactive", "Progressive"],
            accentColor: "#42b883"
        },
        {
            name: "Webpack",
            icon: "📦",
            description: "A module bundler that compiles JavaScript modules and assets into optimized bundles for production.",
            tags: ["Bundler", "Modules", "Optimization"],
            accentColor: "#1c78c0"
        },
        {
            name: "Tailwind CSS",
            icon: "🌊",
            description: "A utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
            tags: ["Utility-First", "Customizable", "Rapid"],
            accentColor: "#06b6d4"
        },
        {
            name: "Node.js",
            icon: "🟢",
            description: "A JavaScript runtime built on Chrome's V8 engine for building fast and scalable server-side applications.",
            tags: ["Runtime", "Backend", "Event-Driven"],
            accentColor: "#339933"
        },
        {
            name: "GraphQL",
            icon: "💜",
            description: "A query language for APIs that enables clients to request exactly the data they need.",
            tags: ["API", "Query Language", "Efficient"],
            accentColor: "#e10098"
        }
    ];

    // Generate cards dynamically
    technologies.forEach(tech => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.setProperty('--accent-color', tech.accentColor);

        const title = document.createElement('h3');
        title.innerHTML = `<span class="icon">${tech.icon}</span> ${tech.name}`;

        const description = document.createElement('p');
        description.textContent = tech.description;

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tags';

        tech.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(tagsContainer);

        grid.appendChild(card);
    });
});