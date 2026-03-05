const posts = [
  { title: "JavaScript Tips", category: "Tech", image: "https://picsum.photos/400/300?1", desc: "Improve your JS skills.", date: "March 1, 2026" },
  { title: "Exploring Paris", category: "Travel", image: "https://picsum.photos/400/300?2", desc: "My trip to Paris.", date: "Feb 20, 2026" },
  { title: "Best Pizza Recipes", category: "Food", image: "https://picsum.photos/400/300?3", desc: "Delicious homemade pizza.", date: "Jan 15, 2026" },
  { title: "React vs Vue", category: "Tech", image: "https://picsum.photos/400/300?4", desc: "Frontend comparison.", date: "March 5, 2026" },
  { title: "Northern Areas Trip", category: "Travel", image: "https://picsum.photos/400/300?5", desc: "Pakistan travel diary.", date: "Feb 1, 2026" },
  { title: "Healthy Breakfast Ideas", category: "Food", image: "https://picsum.photos/400/300?6", desc: "Start your day right.", date: "Jan 25, 2026" }
];

const postsPerPage = 3;
let currentPage = 1;
let filteredPosts = posts;
let currentCategory = "All";

const blogGrid = document.getElementById("blogGrid");
const searchInput = document.getElementById("searchInput");
const pageNumber = document.getElementById("pageNumber");

function displayPosts() {
  blogGrid.innerHTML = "";

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = filteredPosts.slice(start, end);

  paginatedPosts.forEach(post => {
    blogGrid.innerHTML += `
      <div class="blog-card">
        <img src="${post.image}" alt="">
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.desc}</p>
          <div class="blog-date">${post.date}</div>
        </div>
      </div>
    `;
  });

  pageNumber.textContent = `Page ${currentPage}`;
}

function filterPosts() {
  const keyword = searchInput.value.toLowerCase();

  filteredPosts = posts.filter(post => {
    const matchesCategory = currentCategory === "All" || post.category === currentCategory;
    const matchesSearch = post.title.toLowerCase().includes(keyword);
    return matchesCategory && matchesSearch;
  });

  currentPage = 1;
  displayPosts();
}

/* CATEGORY FILTER */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentCategory = btn.dataset.category;
    filterPosts();
  });
});

/* SEARCH */
searchInput.addEventListener("input", filterPosts);

/* PAGINATION */
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPosts();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage * postsPerPage < filteredPosts.length) {
    currentPage++;
    displayPosts();
  }
});

displayPosts();