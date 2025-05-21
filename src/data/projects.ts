import { dedent } from 'ts-dedent'; // Just because I cannot stand messy code files :)

export const Projects = [
    {
        title: "Rep Assist",
        description: "Complete knowledge management and CRM application suite. What began as a hands-on training project quickly became an indispensable set of tools relied upon by an entire company.",
        longDescription: dedent(`
        # Overview

        _An expansive suite of applications designed to replace multiple Excel spreadsheets, documentation, etc._
        
        ---
        
        # Background
        
        Rep Assist was originally bourne out of a desire to stop repeatedly typing the same comments over and over again
        when customers would call in to service their insurance policies ("add driver," "make payment," etc.). The first
        version of this app was simply known as "Comment Master" and helped to automatically generate standardized
        comments to be copy/pasted into our CMS system.
        
        After changing departments, the scope grew quite rapidly. Our new department was dependent on multiple Excel
        spreadsheets and other loose documents; there was no central location for the department's knowledge. After
        spending time working the phones in that department, I began adapting and expanding rep assist to meet the unique
        needs of that team.
        
        Over the next few years, rep assist became a de-facto customer relationship manager and knowledge management suite
        of applications.
        
        ---
        
        # Challenges & Solutions
        
        **Challenge:** At the beginning, I did not know how to create applications at all.  
        **Solution:** After researching languages (in 2015), I decided to learn Java and JavaFX, using this particular project as my learning goal.
        
        **Challenge:** As the user base grew, the application became less stable  
        **Solution:** Moved "backend" from a shared network drive to SQL Server database
        
        ---
        
        # Links
        
        - Rep Assist was developed as a proprietary tool for a former employer; public demo/repository is unavailable.

        
        `),
        flags: ["pro", "inuse"],
        images: [{
            url: "/images/rep_assist_About.png",
            caption: "My first real project, Rep Assist was still relied upon daily by almost 100 employees as of 2023."
        }, {
            url: "/images/rep_assist_Appetite Guide.png",
            caption: "Heavily database-driven, Rep Assist included an \"Appetite Guide\" which provided staff with immediate access to many details needed to assist callers on a daily basis. This is also where the staff would record their phone calls and other interactions with customers."
        }, {
            url: "/images/rep_assist_Carrier Database.png",
            caption: "Providing up-to-the-minute details on our carrier relationships required integrated realtime communication with our SQL Server backend."
        }, {
            url: "/images/rep_assist_Resource Center.png",
            caption: "No knowledge management system would be complete without a centralized location for standard documents, links to company policies, and the like. Rep Assist also provided an integrated \"envelope\" system that connected with Outlook to send one or more documents directly from the application."
        }, {
            url: "/images/rep_assist_Agency Search.png",
            caption: "As a division of Farmers Insurance, our staff needed an integrated method of loading agent data and also tracking interactions with specific agents. The \"Agency Search\" feature in Rep Assist provided this data along with many qualify-of-life features."
        }, {
            url: "/images/rep_assist_Random Code.png",
            caption: "A sampling of the Rep Assist source code, highlighting some of the Utility methods/functions created for the system. Note that this project began as a learning experience for me and I had not yet developed best practices for code organization and documentation."
        }],
        techStack: ["java", "javafx", "sqlserver"],
        additionalTech: [
            "intellij", "rally", "github"
        ]
    },
    {
        title: "E&S Filing Manager",
        description: "The Excess & Surplus Lines industry's first and only state filings manager! This application helped ensure compliance with state filing regulations, avoiding penalties and fees.",
        longDescription: dedent(`
        # Overview

        _A visual database and reporting tool intended to assist the insurance agency with managing the status of 
        policy filings with each state._
        
        ---
        
        # Background
        
        For many years, our team had used manually-updated Excel spreadsheets to track the state filing statuses of thousands
        of insurance policies. With errors leading to sometimes massive penalties from state regulatory agencies, there
        was a genuine need to move to a more modern solution.
        
        The industry itself does not already have such a solution available, so I set about creating the first of its kind.
        
        The E&S Filing Manager was created as an add-on to Rep Assist that allowed our teams to accurately track, plan, and
        report on the current filing status for these policies.
        
        ---
        
        # Impact
        
        - 💲 Within the first year of its operation, the agency had saved over $10,000 in state fines and penalties.
        - ⌛ No more late filings!
        
        ---
        
        # Links
        
        - The E&S Filing Manager was developed as a proprietary tool for a former employer; public demo/repository is unavailable.
        `),
        flags: ["pro", "inuse"],
        images: [{
            url: "/images/es_filing_manager.png",
            caption: "A busy interface, but provided crucial tracking services to ensure policy filings were completed in compliance with state laws."
        }],
        techStack: ["java", "javafx", "sqlserver"],
        additionalTech: [
            "intellij", "rally", "github"
        ]
    },
    {
        title: "Alteryx Workflows",
        description: "Detailed ETL workflows built to ingest, format, and output large amounts of data.",
        longDescription: dedent(`
        # Overview
        
        _Our department received and provided numerous reports during our daily business—I used Alteryx to make sense of it all._
        
        ---
        
        # Background
        
        My philosophy while creating these workflows was that they must be human readable and understandable by not only myself.
        As such, I spent an extensive amount of time ensuring each step was properly documented and organized in an intuitive manner.
        
        ---
        
        # Links
        
        - These workflows were developed as proprietary tools for a former employer; public demo/repository is unavailable.
        
        `),
        flags: ["pro", "archived"],
        images: [{url: "/images/alteryx-ace.png"},{url: "/images/alteryx-acquisitions.png"}],
        techStack: ["alteryx", "sqlserver"]
    },
    {
        title: "Slater - The Acquisitions Manager",
        description: "Data-heavy application designed to assist with (and track) the transferring an agent's book of business to another agency.",
        longDescription: dedent(`
        # Overview
        
        _While never completed, this app was meant to assist our staff in processing book-of-business transfers from
        one agent to another (common when agents leave the agency, for example)._
        
        ---
        
        # Background
        
        When agents leave the agency or a policyholder simply requests a different agent, a transfer needs to take
        place. There are often several steps involved in order to smoothly transition from one agent to another.
        
        Slater - The Acquisition Center (so named in jest as it was once simply called A.C.; IYKYK) was built to 
        keep track of these transfers and ensure the workflow handled smoothly.
        
        ---
        
        # Links
        
        - Slater was developed as a proprietary tool for a former employer; public demo/repository is unavailable.
        
        `),
        flags: ["pro", "incomplete", "archived"],
        images: [{url: "/images/slater_01.png"}],
        techStack: ["java", "javafx", "sqlserver"],
        additionalTech: ["intellij", "sqlserver"]
    },
    {
        title: "E&S Tax Calculator",
        description: "My first real web-based application, this simple tool assisted underwriters with ensuring the proper tax was being charged on new insurance policies.",
        longDescription: dedent(`
        # Overview

        _The E&S Tax Calculator was designed to ensure our underwriters included the correct amount of state taxes
        when writing a policy._
        
        ---
        
        # Background
        
        This was my first foray into modern web development and I chose to focus on learning React and MUI for the task.
        Interestingly, this app was never actually deployed to a web server, but instead uses Electron.js to build a
        native Windows application in which the web app would run.
        
        ---
        
        # Links
        
        - The E&S Tax Calculator was developed as a proprietary tool for a former employer; public demo/repository is unavailable.
        `),
        flags: ["pro", "inuse"],
        images: [{
            url: "/images/tax_calculator_03.png",
            caption: "This React application was deployed as a native Windows application (via Electron), but received automatic updates. With an XML \"backend\" providing the state-specific tax rates and rules, employees were able to ensure compliance with state regulations."
        }, {
            url: "/images/tax_calculator_04.png",
            caption: "State rules and regulations are subject to change; this interface ensured users were aware of what changed and when."
        }, {
            url: "/images/tax_calculator_01.png",
            caption: "A proper API was planned for this application at some time in the future; here is a sampling of the API code that would talk to the \"backend\" (provided at this time via a bundled XML)."
        }, {
            url: "/images/tax_calculator_02.png",
            caption: "This application ignited my appreciation for the MUI framework, which can be seen in use here."
        }],
        techStack: ["react", "electron", "typescript", "mui"],
        additionalTech: ["linux", "webstorm", "github"]
    },
    {
        title: "Workle",
        flags: ["personal", "archived"],
        description: "Simple, JavaFX clone of the popular word game Wordle. Workle runs locally on Windows machines.",
        longDescription: dedent(`
        # Overview

        _Workle was created as a fun side project for my mother, a fan of the original Wordle game. It was then also
        pitched to my employer at Kraft Lake/Farmers, where it was allowed as a once-a-day game for the department!_
        
        ---
        
        # Links
        
        - [Wordle - NY Times](https://www.nytimes.com/games/wordle/index.html)
        `),
        images: [{
            url: "images/workle.png",
            caption: "Workle included a daily word (all players played the same word each day), statistics, and simple animations."
        }],
        techStack: ["java", "javafx", "sqlite"],
        additionalTech: ["intellij", "github"],
        githubUrl: "https://github.com/nrossin/workle"
    },
    {
        title: "Onboarding Manager",
        flags: ["pro", "incomplete", "archived"],
        description: "Incomplete PowerApps application that was to serve as a organizer/manager for onboarding managers and trainers for new employees.",
        images: [{
            url: "/images/onboarding_manager_01.png",
            caption: "A busy interface, but provided crucial tracking services to ensure policy filings were completed in compliance with state laws."
        }, {
            url: "/images/onboarding_manager_02.png",
            caption: "A busy interface, but provided crucial tracking services to ensure policy filings were completed in compliance with state laws."
        }],
        techStack: ["powerapps"]
    },
    {
        title: "Teams Background Switcher",
        flags: ["personal", "inuse"],
        description: "A simple script that extends the available video backgrounds in Microsoft Teams.",
        images: [{
            url: "/images/tbs.png",
            caption: "Behind the scenes, the script allows users to specify a local folder containing their additional video backgrounds, and switch those for the defaults provided by Microsoft."
        }],
        githubUrl: "https://github.com/nrossin/teams-bg-switcher",
        techStack: ["python"],
        additionalTech: ["pycharm"],
    },
    {
        title: "Zipuno.io",
        description: "Secure, private, and anonymous file sharing made easy—time bombs included!",
        flags: ["personal", "wip", "ai"],
        images: [{
            url: "/images/zipuno_01.png",
            caption: "First personal app to include backend coding, Zipuno.io utilizes a PostgreSQL database to facilitate file sharing."
        }],
        githubUrl: "https://github.com/nrossin/zipuno-frontend",
        liveDemoUrl: "https://zipuno-frontend.onrender.com/",
        techStack: ["react", "typescript", "nodejs", "express", "postgresql"],
        additionalTech: ["linux", "webstorm", "chatgpt"],
    },
    {
        title: "Legend of the Red Dragon - React Clone",
        description: "A simple passion project meant to capture the nostalgic magic of my favorite BBS door game of yesteryear. Still a work in progress!",
        flags: ["personal", "wip", "ai"],
        images: [{
            url: "/images/lord-web_01.png",
            caption: "Legend of the Red Dragon was a popular text-based, online role playing game that I grew up with. I am using modern web technology to bring the format back to life."
        }],
        techStack: ["react", "typescript", "mui", "nodejs", "express", "postgresql"],
        additionalTech: ["linux", "webstorm", "chatgpt"],
    },
    {
        title: "Personal Portfolio",
        description: "This is what you're looking at. Where? Right here. When? Right now!",
        flags: ["personal", "pro", "inuse", "wip", "ai"],
        images: [{url: "/images/portfolio.png"}],
        techStack: ["react", "typescript", "mui"],
        additionalTech: ["linux", "webstorm", "chatgpt"]
    },
    {
        title: "Untitled Project",
        description: "A new mobile app has just begun!",
        longDescription: "This will be my first mobile-first application and is being created to not only be useful, but also as a learning project for me. Utilizing React Native for the first time, the goal is to deploy this to iOS, Android, and Web, with potential monetization in the future!",
        flags: ["personal", "wip", "ai"],
        images: [{url: "/images/home-pos.png"}],
        techStack: ["react", "typescript", "react-native", "react-paper", "expo"],
        additionalTech: ["linux", "webstorm", "chatgpt"]
    }
]