// Sample rug data structure (to be populated with actual data)
const rugs = [
    {
        id: 1,
        name: "Hawktua",
        image: "images/rugs/hawk.png",
        chartData: "images/charts/hawk.png",
        story: "Hawktua was a promising project that promised to revolutionize the crypto space. However, it turned out to be a classic rug pull, leaving investors with significant losses.",
        date: "2024-12-04",
        valueLost: "Released: Dec 4, 2024"
    },
    {
        id: 2,
        name: "Dababy",
        image: "images/rugs/dababy.png",
        chartData: "images/charts/dababy.png",
        story: "Dababy token was launched with much fanfare but quickly turned into a rug pull, disappointing many investors who had high hopes for the project.",
        date: "2024-03-25",
        valueLost: "Released: Mar 25, 2024"
    },
    {
        id: 3,
        name: "Libra",
        image: "images/rugs/libra.png",
        chartData: "images/charts/libra.png",
        story: "Libra token was marketed as a stable and reliable investment opportunity, but it turned out to be another rug pull in the crypto space.",
        date: "2025-02-14",
        valueLost: "Released: Feb 14, 2025"
    },
    {
        id: 4,
        name: "Trump",
        image: "images/rugs/trump.png",
        chartData: "images/charts/trump.png",
        story: "Trump token was launched with political themes but quickly turned into a rug pull, leaving investors with significant losses.",
        date: "2025-01-17",
        valueLost: "Released: Jan 17, 2025"
    },
    {
        id: 5,
        name: "Melania",
        image: "images/rugs/Melania.png",
        chartData: "images/charts/Melania.png",
        story: "Melania token was launched with political themes but quickly turned into a rug pull, leaving investors with significant losses.",
        date: "2025-01-19",
        valueLost: "Released: Jan 19, 2025"
    },
    {
        id: 6,
        name: "JellyJelly",
        image: "images/rugs/jellyjelly.png",
        chartData: "images/charts/jellyjelly.png",
        story: "JellyJelly token was launched with much fanfare but quickly turned into a rug pull, disappointing many investors who had high hopes for the project.",
        date: "2024-03-25",
        valueLost: "Released: Mar 25, 2024"
    }
];

// Function to create a rug card
function createRugCard(rug) {
    const card = document.createElement('div');
    card.className = 'rug-card';
    
    card.innerHTML = `
        <img src="${rug.image}" alt="${rug.name}" class="rug-image">
        <div class="rug-content">
            <h3 class="rug-title">${rug.name}</h3>
            <div class="rug-chart">
                <img src="${rug.chartData}" alt="${rug.name} chart" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <p class="rug-story">${rug.story}</p>
            <div class="rug-details">
                <span class="rug-value">${rug.valueLost}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Function to populate the rugs grid
function populateRugsGrid() {
    const rugsGrid = document.querySelector('.rugs-grid');
    if (!rugsGrid) return;
    
    rugs.forEach(rug => {
        const card = createRugCard(rug);
        rugsGrid.appendChild(card);
    });
}

// Function to update hero stats
function updateHeroStats() {
    const totalRugs = rugs.length;
    document.querySelector('.stat:nth-child(1) .number').textContent = `${totalRugs}+`;
    document.querySelector('.stat:nth-child(2) .number').textContent = 'TBD';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateRugsGrid();
    updateHeroStats();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 
