const getFileContent = async (path) => {
    try {
        const res = await fetch(path);
        if (!res.ok) throw new Error("File not found");
        return await res.text();
    } catch (error) {
        console.error("Error reading file:", error);
        return "";
    }
}

const projectData = {
    1: {
        title: "WalPer",
        skills: ["Flutter", "Firebase", "Pexels API"],
        githubUrl: "https://github.com/jerilalbi/WalPer",
        images: [
            "/data/projects/walper/img/walper1.webp",
            "/data/projects/walper/img/walper2.webp",
            "/data/projects/walper/img/walper3.webp",
            "/data/projects/walper/img/walper4.webp",
            "/data/projects/walper/img/walper5.webp",
            "/data/projects/walper/img/walper6.webp",
            "/data/projects/walper/img/walper7.webp",
            "/data/projects/walper/img/walper8.webp",
        ],
        description: () => getFileContent("/data/projects/walper/content.txt"),
    },
    2: {
        title: "Quiz App",
        skills: ["Flutter", "Provider"],
        githubUrl: "https://github.com/jerilalbi/Quiz-App",
        images: [
            "/data/projects/quiz/img/quiz1.webp",
            "/data/projects/quiz/img/quiz2.webp",
            "/data/projects/quiz/img/quiz3.webp",
            "/data/projects/quiz/img/quiz4.webp",
            "/data/projects/quiz/img/quiz5.webp",
        ],
        description: () => getFileContent("/data/projects/quiz/content.txt"),
    },
    3: {
        title: "Cafe Management System",
        skills: ["c#", ".net", "sql"],
        githubUrl: "https://github.com/jerilalbi/coffee-shop",
        images: [
            "/data/projects/cafe/img/cafe1.webp",
            "/data/projects/cafe/img/cafe2.webp",
            "/data/projects/cafe/img/cafe3.webp",
            "/data/projects/cafe/img/cafe4.webp",
            "/data/projects/cafe/img/cafe5.webp",
        ],
        description: () => getFileContent("/data/projects/cafe/content.txt"),
    },
    4: {
        title: "Travel Website",
        skills: ["Html", "Css", "Javascript"],
        githubUrl: "https://github.com/jerilalbi/Travel-website",
        images: [
            "/data/projects/voyage/img/voyage1.webp",
            "/data/projects/voyage/img/voyage2.webp",
            "/data/projects/voyage/img/voyage3.webp",
            "/data/projects/voyage/img/voyage4.webp",
        ],
        description: () => getFileContent("/data/projects/voyage/content.txt"),
    },
    5: {
        title: "ScanCart",
        skills: ["Flutter", "BLoc", "Firebase"],
        githubUrl: "https://github.com/jerilalbi/ScanCart",
        images: [
            "/data/projects/scancart/img/scancart1.webp",
            "/data/projects/scancart/img/scancart2.webp",
            "/data/projects/scancart/img/scancart3.webp",
            "/data/projects/scancart/img/scancart4.webp",
            "/data/projects/scancart/img/scancart5.webp",
        ],
        description: () => getFileContent("/data/projects/scancart/content.txt"),
    },
    6: {
        title: "Stock Alert Bot",
        skills: ["Node js", "web scraping", "Telegram API"],
        githubUrl: "https://github.com/jerilalbi/stock-alert-telegram-bot",
        images: [
            "/data/projects/stock-bot/img/stock_bot1.webp",
            "/data/projects/stock-bot/img/stock_bot2.webp",
            "/data/projects/stock-bot/img/stock_bot3.webp",
        ],
        description: () => getFileContent("/data/projects/stock-bot/content.txt"),
    },
    7: {
        title: "Portfolio Website",
        skills: ["Html", "Css", "Js", "React"],
        githubUrl: "https://github.com/jerilalbi/jerilalbi.github.io",
        images: [
            "/data/projects/portfolio/img/portfolio1.webp",
            "/data/projects/portfolio/img/portfolio2.webp",
            "/data/projects/portfolio/img/portfolio3.webp",
            "/data/projects/portfolio/img/portfolio4.webp",
            "/data/projects/portfolio/img/portfolio5.webp",
            "/data/projects/portfolio/img/portfolio6.webp",
            "/data/projects/portfolio/img/portfolio7.webp",
        ],
        description: () => getFileContent("/data/projects/portfolio/content.txt"),
    },
    8: {
        title: "Movie Tracker",
        skills: ["React", "FastAPI", "SQLite"],
        githubUrl: "https://github.com/jerilalbi/MovieMate",
        images: [
            "https://github.com/jerilalbi/MovieMate/blob/master/screenshots/home.jpeg?raw=true",
            "https://github.com/jerilalbi/MovieMate/blob/master/screenshots/movie_details.jpeg?raw=true",
            "https://github.com/jerilalbi/MovieMate/blob/master/screenshots/add_movies.jpeg?raw=true",
            "https://github.com/jerilalbi/MovieMate/blob/master/screenshots/my_movies.jpeg?raw=true",
            "https://github.com/jerilalbi/MovieMate/blob/master/screenshots/my_movies_filter.jpeg?raw=true",
            "https://github.com/jerilalbi/MovieMate/blob/master/screenshots/my_movies_filter2.jpeg?raw=true",
        ],
        description: () => getFileContent("/data/projects/movie/content.txt"),
    },
    9: {
        title: "Job Portal",
        skills: ["Mongodb", "Express", "React", "Node"],
        githubUrl: "https://github.com/jerilalbi/JobConnect",
        images: [
            "https://github.com/jerilalbi/JobConnect/blob/master/screenshots/job_search.jpeg?raw=true",
            "https://github.com/jerilalbi/JobConnect/blob/master/screenshots/job-seeker-dashboard.jpeg?raw=true",
            "https://github.com/jerilalbi/JobConnect/blob/master/screenshots/admin_dashboard.jpeg?raw=true",
            "https://github.com/jerilalbi/JobConnect/blob/master/screenshots/employer_dashboard.jpeg?raw=true",
            "https://github.com/jerilalbi/JobConnect/blob/master/screenshots/post_new_job.jpeg?raw=true",
            "https://github.com/jerilalbi/JobConnect/blob/master/screenshots/view_applicants.jpeg?raw=true",
            "https://github.com/jerilalbi/JobConnect/blob/master/screenshots/login.jpeg?raw=true",
            "https://github.com/jerilalbi/JobConnect/blob/master/screenshots/signup.jpeg?raw=true",
        ],
        description: () => getFileContent("/data/projects/jobPortal/content.txt"),
    },
}

export default projectData;