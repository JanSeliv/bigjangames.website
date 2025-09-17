// Shared content for Big Jan Games website
const SharedContent = {
    about: {
        title: "About Big Jan Games",
        description: "Big Jan Games is an independent game studio passionate about creating explosive entertainment experiences. Founded with a vision to bring innovative gameplay mechanics and thrilling action to gamers worldwide, we specialize in fast-paced, strategic games that challenge both mind and reflexes.",
        stats: [
            { number: "2025", label: "Studio Founded" },
            { number: "1", label: "Games Released" },
            { number: "∞", label: "Explosions Created" }
        ]
    },

    team: {
        title: "Our Team",
        members: [
            {
                name: "Yevhenii Selivanov",
                positions: ["Founder", "Lead Programmer"],
                emoji: "👨‍💻",
                links: [
                    { type: "github", url: "https://www.github.com/janseliv" },
                    { type: "linkedin", url: "https://www.linkedin.com/in/yevhenii-selivanov" }
                ]
            },
            {
                name: "Maksim Shashkov",
                positions: ["Level Artist", "Level Designer"],
                emoji: "🎨",
                links: [
                    { type: "artstation", url: "https://www.artstation.com/maksimshashkov" }
                ]
            },
            {
                name: "Kateryna Shchetinina",
                positions: ["Cinematics Animator", "Gameplay Animator", "Character Artist"],
                emoji: "🎬",
                links: [
                    { type: "artstation", url: "https://www.artstation.com/kateseliv" },
                    { type: "linkedin", url: "https://www.linkedin.com/in/kateryna-shchetinina" }
                ]
            },
            {
                name: "Yevhenii Oksenchuk",
                positions: ["Game Designer", "Cinematics Designer", "Audio Designer", "UI Designer"],
                emoji: "🎮",
                links: [
                    { type: "linkedin", url: "https://www.linkedin.com/in/yevhenii-oksenchuk-358b99292" }
                ]
            },
            {
                name: "Valeriy Rotermel",
                positions: ["Progression System Programmer"],
                emoji: "⚙️",
                links: [
                    { type: "github", url: "https://github.com/h4rdmol" },
                    { type: "linkedin", url: "https://www.linkedin.com/in/valeriy-rotermel-a91134101" }
                ]
            }
        ]
    },

    contact: {
        title: "Get In Touch",
        description: "Ready to join the explosive action? Have feedback or questions? Connect with us!",
        channels: [
            {
                name: "Discord Community",
                emoji: "💬",
                description: "Join our Discord server to chat with other players, get game updates, and participate in events!",
                url: "https://www.discord.gg/jbWgwDefnE",
                buttonText: "Join Discord",
                iconType: "discord",
                gradient: "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            },
            {
                name: "Instagram",
                emoji: "📸",
                description: "Follow us on Instagram for behind-the-scenes content, development updates, and exclusive screenshots!",
                url: "https://www.instagram.com/bomberrage_indiestudio",
                buttonText: "Follow Us",
                iconType: "instagram",
                gradient: "from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            }
        ]
    }
};

// Icon SVGs
const Icons = {
    github: `<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>`,

    linkedin: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,

    artstation: `<path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728.702a2.424 2.424 0 0 0-2.142-1.295H9.483L21.36 20.533H24v-2.785zm-7.09-3.418L8.323 2.853 1.239 14.33h15.671z"/>`,

    discord: `<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>`,

    instagram: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>`
};

// Content generation functions
const ContentGenerator = {
    generateAboutSection: () => {
        return `
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8 studio-name">${SharedContent.about.title}</h2>
                <p class="text-xl text-gray-300 mb-12 leading-relaxed">
                    ${SharedContent.about.description}
                </p>
                <div class="grid md:grid-cols-3 gap-8 mb-16">
                    ${SharedContent.about.stats.map(stat => `
                        <div class="text-center">
                            <div class="text-3xl font-bold text-orange-400 mb-2">${stat.number}</div>
                            <p class="text-gray-300">${stat.label}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    generateTeamSection: () => {
        return `
            <div class="max-w-6xl mx-auto">
                <h3 class="text-3xl font-bold text-center mb-12 studio-name text-orange-400">${SharedContent.team.title}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${SharedContent.team.members.map(member => `
                        <div class="bg-gray-900 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all hover-glow">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                                    ${member.emoji}
                                </div>
                                <h4 class="text-xl font-semibold mb-3 text-orange-400">${member.name}</h4>
                                <div class="mb-4">
                                    ${member.positions.map((position, index) => `
                                        <div class="text-gray-400 ${index > 0 ? 'text-sm' : ''}">${position}</div>
                                    `).join('')}
                                </div>
                                <div class="flex justify-center space-x-3">
                                    ${member.links.map(link => `
                                        <a href="${link.url}" target="_blank" class="text-gray-400 hover:text-orange-400 transition-colors">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                ${Icons[link.type]}
                                            </svg>
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    generateContactSection: () => {
        return `
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8 studio-name">${SharedContent.contact.title}</h2>
                <p class="text-xl text-gray-300 mb-12">
                    ${SharedContent.contact.description}
                </p>
                <div class="grid md:grid-cols-2 gap-8">
                    ${SharedContent.contact.channels.map(channel => `
                        <div class="bg-gray-800 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all hover-glow">
                            <div class="text-center">
                                <div class="text-5xl mb-4">${channel.emoji}</div>
                                <h3 class="text-xl font-semibold mb-4 text-orange-400">${channel.name}</h3>
                                <p class="text-gray-300 mb-6">${channel.description}</p>
                                <a href="${channel.url}" target="_blank" class="bg-gradient-to-r ${channel.gradient} px-6 py-3 rounded-lg font-semibold transition-all hover-glow flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        ${Icons[channel.iconType]}
                                    </svg>
                                    ${channel.buttonText}
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
};

// Initialize shared content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load About section
    const aboutContainer = document.getElementById('about-content');
    if (aboutContainer) {
        aboutContainer.innerHTML = ContentGenerator.generateAboutSection();
    }

    // Load Team section
    const teamContainer = document.getElementById('team-content');
    if (teamContainer) {
        teamContainer.innerHTML = ContentGenerator.generateTeamSection();
    }

    // Load Contact section
    const contactContainer = document.getElementById('contact-content');
    if (contactContainer) {
        contactContainer.innerHTML = ContentGenerator.generateContactSection();
    }
});