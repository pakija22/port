// Sidebar Logic
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Modal Logic
function openLogin() {
    document.getElementById('signin-modal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('signin-modal').style.display = 'none';
}

// Simple View Switching Logic
function showCategory(categoryName) {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('dynamic-view').style.display = 'block';
    document.getElementById('view-title').innerText = categoryName;
    
    // Close sidebar if it was open
    document.getElementById('sidebar').classList.remove('active');
}

function showHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('dynamic-view').style.display = 'none';
}

// Close modal if user clicks outside of the box
window.onclick = function(event) {
    let modal = document.getElementById('signin-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay'); // You'll need to add this div to your HTML
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}