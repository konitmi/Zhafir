// --- Menus ---
function showMenu(menu) {
    document.querySelectorAll('.menu').forEach(m => m.classList.remove('active'));
    document.getElementById(menu).classList.add('active');
}

// --- User Alias ---
function saveAlias() {
    const alias = document.getElementById('alias').value;
    if (alias) {
        localStorage.setItem('userAlias', alias);
        alert('Alias saved!');
    }
}

// --- Share Link ---
function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied!');
}

// --- Dummy Zhafir Data (replace with Google Sheet API) ---
let totalZhafir = 300000;
let nullZhafir = 7;
let userCollected = 0;
let nullZhafirList = ['#000007', '#001234', '#005678', '#012345', '#123456', '#234567', '#345678'];

// --- Display Function ---
function updateDashboard() {
    const iconsContainer = document.getElementById('zhafir-icons');
    iconsContainer.innerHTML = '';

    for (let i = 1; i <= userCollected; i++) {
        const div = document.createElement('div');
        div.classList.add('zhafir-icon');
        // Assign Null-Zhafir symbol if matches
        if (nullZhafirList.includes(`#${String(i).padStart(6,'0')}`)) div.classList.add('null-zhafir');
        div.textContent = i;
        iconsContainer.appendChild(div);
    }

    document.getElementById('zhafir-count').textContent = userCollected;
    document.getElementById('zhafir-remaining').textContent = totalZhafir - userCollected;
    document.getElementById('null-remaining').textContent = nullZhafir;
}

// --- Collect Zhafir (simulate claim) ---
function collectZhafir() {
    if (userCollected < totalZhafir) {
        userCollected++;
        updateDashboard();
    } else {
        alert('All Zhafir claimed!');
    }
}

// Initial dashboard load
updateDashboard();

// For demo: simulate claiming every 3 sec
setInterval(() => { if(userCollected < 10) collectZhafir(); }, 3000);
