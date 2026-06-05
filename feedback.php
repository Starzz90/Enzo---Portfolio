<?php
    include "connect.php";
    if(isset($_POST['submit'])){
        $user = $_POST['username'];
        $feed = $_POST['feedback'];
        $rate = $_POST['rating'];
        
        $query = "INSERT INTO `feedbacks`(`Username`, `Feedback`, `Rating`) VALUES ('$user','$feed','$rate')";
        $result= mysqli_query($connect, $query);
    }
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,480;1,14..32,480&family=Metrophobic&family=Outfit:wght@900&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="proweb.css" />
    <title>Enzo - Experience</title>
  </head>
  <body>
    <nav>
      <div class="ccenter">
        <div class="top-nav">
          <div class="space-between">
            <a href="index.html" class="top-option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-house-icon lucide-house"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path
                  d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                />
              </svg>
            </a>
            <a href="engineering.html" class="top-option"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-wrench-icon lucide-wrench"
              >
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
                /></svg
            ></a>
            <a href="coding.html" class="top-option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-bug-icon lucide-bug"
                >
                <path d="M12 20v-9" />
                <path
                  d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"
                />
                <path d="M14.12 3.88 16 2" />
                <path d="M21 21a4 4 0 0 0-3.81-4" />
                <path d="M21 5a4 4 0 0 1-3.55 3.97" />
                <path d="M22 13h-4" />
                <path d="M3 21a4 4 0 0 1 3.81-4" />
                <path d="M3 5a4 4 0 0 0 3.55 3.97" />
                <path d="M6 13H2" />
                <path d="m8 2 1.88 1.88" />
                <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
              </svg>
            </a>
            <a href="achievements.html" class="top-option"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-award-icon lucide-award"
              >
                <path
                  d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                />
                <circle cx="12" cy="8" r="6" /></svg
            ></a>
            <a href="experience.html" class="top-option"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-file-icon lucide-file"
              >
                <path
                  d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
                />
                <path d="M14 2v5a1 1 0 0 0 1 1h5" /></svg
            ></a>
          </div>
        </div>
      </div>
    </nav>
    <div class="sidebar">
        <h4 id="side" class="side">PROJECT_ID</h4>
        <h6 id="side" class="side">
          <span class="undertaker">SECTOR_NAV_01</span>
        </h6>
        <a href="index.html" class="list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-house-icon lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path
              d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            />
          </svg>
          HOME
        </a>
        <a href="engineering.html" class="list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-wrench-icon lucide-wrench"
          >
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
            />
          </svg>
          ENGINEERING
        </li>
        <a href="coding.html" class="list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bug-icon lucide-bug"
          >
            <path d="M12 20v-9" />
            <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
            <path d="M14.12 3.88 16 2" />
            <path d="M21 21a4 4 0 0 0-3.81-4" />
            <path d="M21 5a4 4 0 0 1-3.55 3.97" />
            <path d="M22 13h-4" />
            <path d="M3 21a4 4 0 0 1 3.81-4" />
            <path d="M3 5a4 4 0 0 0 3.55 3.97" />
            <path d="M6 13H2" />
            <path d="m8 2 1.88 1.88" />
            <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
          </svg>
          CODING
        </a>
        <a href="achievements.html" class="list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-award-icon lucide-award"
          >
            <path
              d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
            />
            <circle cx="12" cy="8" r="6" />
          </svg>
          AWARDS
        </a>
        <a href="experience.html" class="list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-book-user-icon lucide-book-user"
          >
            <path d="M15 13a3 3 0 1 0-6 0" />
            <path
              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
            />
            <circle cx="12" cy="8" r="2" />
          </svg>
          EXPERIENCE
        </a>
      <div class="double-column-auto"></div>
      <div class="STATS">
        <span class="side" id="side">JOURNEY</span>
        <div class="cage"><div class="statistics"></div></div>
      </div>
    </div>
    <div class="end">
    <div class="LIVE-BAR">
        <div class="text">
            <h4 id="side" class="LIVE"><div class="pulser"></div> LIVE_BAR</h4>
            <h6 id="side" class="side"><span class="undertaker">SYSTEMS: ONLINE</span></h6>
            <span class="live"> STATUS: AVAILABLE</span>
            <span class="live"> LOCATION: IND.</span>
            <span class="live"> CURRENT: FULLSTACK.</span>
            <span class="live"> IELTS: 8.0.</span>
            <span class="live"> TARGET: USA.</span>
            <div class="skills">
                <h2><span class="undertaker">SKILLS_</span></h2>
                <span class="skill">HTML</span>
                <span class="skill">CSS</span>
                <span class="skill">JS</span>
                <span class="skill">PYTHON</span>
                <span class="skill">LEADERSHIP</span>
                <span class="skill">RESILLIENCE</span>
                <span class="skill">ADAPTABILITY</span>
                <span class="skill">COMMUNICATION</span>
                <span class="skill">COLLABORATION</span>
            </div>

        </div>
    </div>
</div>
    <div class="contain">
        <div class="main-head">
        <div class="status-card">Status = Online;</div>
            <h1>FEEDBACK</h1>
            <span class="occupation">An important part of exploration and growth</span><br/>
            <span class="subheading">Improving.Designing.And Publishing works with innovation and adaptability towards a perfect conclusion.</span>
            <div class="under-text"></div>
        </div>
        <div class="feedback-con">
        <div class="Center">
            <h2 class="feedback">FEEDBACK</h2>
        </div>
        <form method="POST" action=""> 
            <p class="feedback-para">
              <input type="text" name="username" min="5" max="30" placeholder="USERNAME" class="inputs" required/>
              <textarea type="text" name="feedback" min="5" max="50" placeholder="FEEDBACK" class="inputs" required/></textarea>
              <input type="rating" name="rating" min="1" max="5" placeholder="RATING (1-5)" class="inputs" required/>
              <button class="submit" name="submit" class="submit">SUBMIT</button>
            </p>
        </form>
        </div>
    </div>
  </body>
  <script src="script.js"></script>
</html>
