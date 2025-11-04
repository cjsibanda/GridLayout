// script.js
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('techGrid');
    
    // Data structure for web technologies
    const technologies = [
        {
            name: "Bootstrap",
            description: "The world's most popular front-end component library for developing responsive, mobile-first projects.",
            tags: ["Bootstrap", "Front-End"],
            
        },
        {
            name: "TypeScript",
            description: "A typed superset of JavaScript that compiles to plain JavaScript, adding static types and better tooling.",
            tags: ["TypeScript", "JavaScript"],
            
        },
        {
            name: "Flexbox",
            description: "A one-dimensional layout method for arranging items in rows or columns with powerful alignment capabilities.",
            tags: ["Flexbox", "CSS"],
            
        },
        {
            name: "AJAX",
            description: "Asynchronous JavaScript and XML enables web pages to update content without full page reloads.",
            tags: ["Ajax", "JavaScript"],
            
        },
        {
            name: "React",
            description: "A JavaScript library for building user interfaces with reusable components and virtual DOM.",
            tags: ["React", "Javascript"],
            
        },
        {
            name: "Sass",
            description: "A CSS preprocessor that adds variables, nesting, mixins, and inheritance for more maintainable styles.",
            tags: ["Sass", "CSS"],
            
        },
        {
            name: "Grid Layout",
            description: "A two-dimensional layout system in CSS that creates complex responsive web designs with ease.",
            tags: ["Grid Layout", "CSS"],
            
        },
        {
            name: "Vue.js",
            description: "A progressive JavaScript framework for building user interfaces with an approachable core library.",
            tags: ["Vue", "JavaScript"],
            
        },
        {
            name: "Webpack",
            description: "A module bundler that compiles JavaScript modules and assets into optimized bundles for production.",
            tags: ["Webpack", "JavaScript"],
            
        },
        {
            name: "Tailwind CSS",
            description: "A utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
            tags: ["Tailwind", "CSS"],
            
        },
        {
            name: "Node.js",
            description: "A JavaScript runtime built on Chrome's V8 engine for building fast and scalable server-side applications.",
            tags: ["Node", "Javascript"],
            
        },
        {
            name: "GraphQL",
            description: "A query language for APIs that enables clients to request exactly the data they need.",
            tags: ["GraphQL", "APIs"],
            
        }
    ];

    // Generate cards dynamically
    technologies.forEach(tech => {
        const card = document.createElement('div');
        card.className = 'card';
       
        const title = document.createElement('h3');
        title.innerHTML = `${tech.name}`;

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
