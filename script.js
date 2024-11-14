var text = `
Booting up...<br>
Initializing user interface...<br>
Establishing network connection...<br><br>

Luca Maita<br> Junior Java Developer<br>

Phone: (+39) 349 123 3385<br> E-Mail: lucamaita2001@gmail.com<br><br>

WORK EXPERIENCE<br>

Java Developer, SCAI Finance, Turin — 2024 - Present<br>

Development of backend applications using Java and Spring Boot.
Design, implementation, and management of relational databases with SQL.
Use of SourceTree and Bitbucket for version control.
Organization and task management with Trello and Notion.<br><br>
Crew Member, McDonald’s, Vercelli — 2023 - 2023<br>

Effective collaboration with colleagues to manage customer requests.
High-level stress management and ability to work in a high-pressure environment.<br><br>
STEM Lab Instructor, Labs to Learn, Vercelli — 2023 - 2023<br>

Led a lab focused on experiential and logical learning in STEM fields.
Empowered participants’ self-esteem and promoted digital skills acquisition.<br><br>
Security Guard, Mondialpol, Vercelli — 2021 - 2022<br>

Surveillance and control of access and alarms at the Amazon Vercelli facility.<br><br>
Civil Service Volunteer, Cnos-Fap, Vercelli — 2020 - 2021<br>

Assisted students during lessons and helped foreign students with homework.
Supported teachers during classes.<br><br>
Youth Animator, Oratorio Belvedere, Vercelli — 2020 - 2021<br>

Organized activities for middle and high school students.<br><br>
Plumber, Roberto Ciocchetti, Vercelli — 2019 - 2020<br>

Installed and maintained heating, plumbing systems, air conditioning, and solar panels.<br><br>
EDUCATION AND TRAINING<br>

Google Cybersecurity Professional Certificate, Coursera — 2024<br> 182-hour course in cybersecurity, covering network security controls, vulnerability management, incident response, and best practices for data protection and compliance.<br><br>

Java Developer, Generation Italy — 2023 - 2024<br> 620-hour course for Junior Java Developers, focusing on OOP with Java and foundational front-end programming (HTML, CSS, JavaScript).<br><br>

Cnos-Fap High School — 2017 - 2019<br> Operator of thermal-hydraulic and energy systems.<br><br>

ITIS G.C. Faccio High School — 2013 - 2017<br> Information Technology.<br><br>

PROGRAMMING SKILLS<br> Backend: Java OOP, Spring Framework, Spring Boot<br> Frontend: HTML, CSS, JavaScript, TypeScript, Node.js, Angular<br> DevOps: Jenkins, Docker<br> Cloud: OpenShift, AWS, Azure, Google Cloud<br> Database: SQL, MongoDB<br> Testing: JUnit, Jasmine, Karma<br><br>

CYBERSECURITY SKILLS<br> Python, Linux: Scripting for automation, system administration, and hardening.<br> SQL: Queries for auditing and data protection.<br> SIEM: Configuration and use of tools such as Splunk and LogRhythm.<br> IDS: Implementation and management of systems like Snort and Suricata.<br> Risks and Threats: Threat identification and mitigation through threat modeling.<br> Network Security: Monitoring with Wireshark and tcpdump.<br> NIST Framework: Application of the NIST Cybersecurity Framework for risk management.<br><br>

GENERAL SKILLS<br> Audio: Music production (FL Studio, Logic Pro X), hi-fi system calibration.<br> Photography: Adobe Lightroom, skilled with professional cameras.<br> Video: DaVinci Resolve, TV and projector color calibration.<br><br>

`;
var index = 0;
var outputElement = document.getElementById("output");
var cursor = document.getElementById("cursor");
var scrollTarget = document.getElementById("cursor");

function typeWriter() {
    if (index < text.length) {
        outputElement.innerHTML = text.substring(0, index) + "<span id='cursor' class='cursor'>█</span>";
        index++;
        var randomTime = Math.floor(Math.random() * 50) + 1;
        setTimeout(typeWriter, randomTime);
        window.scrollTo(0, document.body.scrollHeight);
    }

}

window.onload = function() {
    typeWriter();
};
