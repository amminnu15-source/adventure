/**
 * ESCAPEQUEST Blog Intelligence Database - EXPANDED EDITION
 * Contains immersive, long-form content for every tactical debrief.
 */

const blogData = {
    "psychology": {
        category: "TACTICAL",
        title: "THE PSYCHOLOGY OF THE 60-MINUTE ESCAPE",
        author: "Agent X",
        date: "May 06, 2026",
        readTime: "12 Min Read",
        image: "images/escape.jpg",
        content: `
            <p class="drop-cap">The clock is more than a tool of measurement in an escape room; it is the primary psychological driver of the entire experience. When the LED countdown strikes sixty minutes, a series of neurological triggers are activated.</p>
            
            <h3>The Science of Flow State</h3>
            <p>At ESCAPEQUEST, our mission design team spends hundreds of hours analyzing the "flow state" of squads. We don't just build puzzles; we build emotional arcs. The first ten minutes are designed to build confidence through "Quick Wins," while the middle section introduces "Complexity Plateaus" to test team resilience.</p>
            
            <blockquote class="premium-quote">"True intelligence isn't just solving the puzzle—it's maintaining operational composure when the clock turns red."</blockquote>

            <h3>The Adrenaline Spike and Decision Fatigue</h3>
            <p>As the timer enters the final 15-minute window, the brain shifts from analytical processing to 'System 1' intuitive thinking. This is where most squads fail or find their greatest glory. Decision fatigue sets in, and the role of the 'Tactical Lead' becomes critical. Without clear communication, the cognitive load of the room begins to overwhelm the team's collective processing power.</p>

            <h3>Operational Tips for Agents:</h3>
            <ul class="detail-list-shield">
                <li><strong>Designate a Chronicler:</strong> One agent should track all solved codes to prevent redundant logic cycles.</li>
                <li><strong>Manage Vocal Volume:</strong> High-stress environments lead to shouting, which actually decreases information retention. Keep it tactical.</li>
                <li><strong>The 2-Minute Rule:</strong> If no progress is made on a node in 2 minutes, rotate agents. Fresh eyes are your best inventory.</li>
            </ul>
        `
    },
    "records": {
        category: "MISSION LOG",
        title: "TOP 5 RECORDS BROKEN THIS MONTH",
        author: "Commander V",
        date: "May 04, 2026",
        readTime: "9 Min Read",
        image: "images/haunted.webp",
        content: `
            <p class="drop-cap">This month has seen unprecedented efficiency in our extraction zones. Elite squads are decimating previous records across all difficulty tiers, from Initiate to Phantom.</p>
            
            <h3>The Hall of Fame: Alpha-9's Flawless Run</h3>
            <p>Squad 'Alpha-9' managed to clear the <strong>Haunted Manor</strong> in a staggering 34 minutes and 12 seconds, setting a new global benchmark. Their strategy involved a split-room execution where they divided the team into 'Searchers' and 'Decipherers' immediately upon infiltration.</p>
            
            <h3>Top Operational Performances:</h3>
            <ul class="detail-list-shield">
                <li><strong>Haunted Manor:</strong> 34:12 (Squad Alpha-9) - New World Record</li>
                <li><strong>The Vault:</strong> 41:05 (Team Cipher) - Flawless Execution (Zero Hints)</li>
                <li><strong>Secret Lab:</strong> 48:22 (The Ghost Walkers) - First successful Level 03 extraction this year</li>
            </ul>

            <p>What sets these teams apart is their 'Zero-Latency Communication' protocol. Every discovery was shouted precisely and acknowledged by the lead agent before being logged. This prevented the common 'Double-Solving' trap that adds minutes to an average run.</p>
        `
    },
    "engineering": {
        category: "ENGINEERING",
        title: "ENGINEERING THE SECRET LABORATORY",
        author: "Tech Lead S",
        date: "May 02, 2026",
        readTime: "15 Min Read",
        image: "images/laboratory.webp",
        content: `
            <p class="drop-cap">Welcome to the inner sanctum of ESCAPEQUEST Engineering. Today, we are pulling back the curtain on the Level 03 'Secret Laboratory' node.</p>
            
            <h3>The Sensor Network</h3>
            <p>The Secret Laboratory utilizes over 40 distinct sensors, including ultrasonic proximity detectors, biometric weight scales, and light-frequency scanners. These aren't just for show; they provide real-time telemetry to our Game Masters, allowing them to adjust the 'Pressure Curve' based on the squad's performance.</p>
            
            <blockquote class="premium-quote">"In Level 03, the room is alive. It listens, it watches, and it adapts to your speed."</blockquote>

            <h3>Adaptive AI and Dynamic Soundscapes</h3>
            <p>We've integrated a custom AI engine that monitors team interaction speed. If the team is solving too quickly, the room enters 'Red Alert' mode, shifting the lighting to a high-frequency strobe and increasing the decibel level of the atmospheric tension tracks. This ensures that even the most elite teams never feel 'too comfortable.'</p>

            <h3>Technical Specifications:</h3>
            <ul class="detail-list-shield">
                <li><strong>Lighting:</strong> 128-channel DMX controlled RGBW system</li>
                <li><strong>Audio:</strong> 7.1 Surround Sound with localized haptic feedback</li>
                <li><strong>Logic:</strong> Distributed PLC network with sub-millisecond response time</li>
            </ul>
        `
    },
    "communication": {
        category: "STRATEGY",
        title: "COMMUNICATION: THE SILENT WIN CONDITION",
        author: "Specialist K",
        date: "April 28, 2026",
        readTime: "10 Min Read",
        image: "images/communication.jpg",
        content: `
            <p class="drop-cap">Why verbal coordination is the most powerful tool in your tactical inventory. More missions are lost to silence than to poor logic.</p>
            
            <h3>The 'Call and Response' Protocol</h3>
            <p>The most successful tactical teams use a military-grade 'Call and Response' system. When an agent finds a key, they don't just say "I found a key." They announce: "KEY FOUND - SILVER - TRIANGLE SYMBOL." The rest of the team acknowledges: "COPY THAT - SEARCHING FOR TRIANGLE LOCK."</p>
            
            <h3>Common Communication Failures:</h3>
            <ul class="detail-list-shield">
                <li><strong>The Whisper Trap:</strong> Solving a puzzle without telling anyone, leading the team to keep searching for that same solution.</li>
                <li><strong>The Shouting Match:</strong> Three people shouting different ideas at once, resulting in zero actionable intel.</li>
                <li><strong>The Ego Wall:</strong> Refusing to hand off a puzzle you've been stuck on for too long.</li>
            </ul>

            <p>Mastering these verbal protocols will cut your mission time by at least 15%, regardless of the room's difficulty level.</p>
        `
    }
};

// Export or global access
window.BLOG_INTEL = blogData;
