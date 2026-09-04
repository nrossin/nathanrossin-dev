import {dedent} from 'ts-dedent'; // Just because I cannot stand messy code files :)

export const Projects = [
    {
        title: "Rep Assist",
        description: "Knowledge-management and workflow suite that grew from a small documentation tool into a " +
            "collection of internal applications used daily by more than 50 employees.",
        longDescription: dedent(`
        # Overview

        _A knowledge-management and workflow suite built around the day-to-day needs of customer-service and insurance 
        operations._
        
        ---
        
        # Background
        
        Rep Assist began while I was working directly in customer service operations. I found myself repeatedly entering
        the same types of customer interaction notes, so I created a small Java/JavaFX application to generate
        standardized documentation more quickly and consistently.
        
        After moving into another department, I encountered a broader problem: important operational knowledge was 
        spread across Excel spreadsheets, documents, and other disconnected sources. Because I had firsthand experience
        with the work, I began expanding Rep Assist to centralize that information and simplify common workflows.
        
        Over time, Rep Assist grew into a broader knowledge-management and workflow suite used daily by more than 50 
        employees. Its features evolved continuously through direct user feedback, observation of existing processes, 
        and opportunities I identified while working closely with the people using it.
        
        ---
        
        # Technical Evolution
        
        The project also grew alongside my own development experience. The earliest version was created while I was 
        learning Java and JavaFX. As its user base and data needs expanded, I moved application data away from shared 
        files and into SQL Server, allowing the suite to support increasingly complex and data-driven functionality.
        
        ---
        
        # Links
        
        - Rep Assist was developed as a proprietary tool for a former employer; a public demo or repository is 
        unavailable.`
        ),
        flags: ["pro", "inuse"],
        images: [{
            url: "/images/projects/rep_assist/rep_assist_About.png",
            caption: "Rep Assist grew from my first substantial software project into a knowledge-management and " +
                "workflow suite used daily by more than 50 employees."
        }, {
            url: "/images/projects/rep_assist/rep_assist_Appetite Guide.png",
            caption: "Heavily database-driven, Rep Assist included an \"Appetite Guide\" which provided staff with " +
                "immediate access to many details needed to assist callers on a daily basis. This is also where the " +
                "staff would record their phone calls and other interactions with customers."
        }, {
            url: "/images/projects/rep_assist/rep_assist_Carrier Database.png",
            caption: "Providing up-to-the-minute details on our carrier relationships required integrated real-time " +
                "communication with our SQL Server backend."
        }, {
            url: "/images/projects/rep_assist/rep_assist_Resource Center.png",
            caption: "No knowledge management system would be complete without a centralized location for standard " +
                "documents, links to company policies, and the like. Rep Assist also provided an integrated \"envelope\" " +
                "system that connected with Outlook to send one or more documents directly from the application."
        }, {
            url: "/images/projects/rep_assist/rep_assist_Agency Search.png",
            caption: "As a division of Farmers Insurance, our staff needed an integrated method of loading agent data " +
                "and also tracking interactions with specific agents. The \"Agency Search\" feature in Rep Assist " +
                "provided this data along with many quality-of-life features."
        }, {
            url: "/images/projects/rerealtimep_assist/rep_assist_Random Code.png",
            caption: "A sampling of the Rep Assist source code, highlighting some of the utility methods and functions " +
                "created for the system."
        }],
        techStack: ["java", "javafx", "sqlserver"],
        additionalTech: ["github"]
    },
    {
        title: "E&S Tax Calculator",
        description: "React/Electron desktop application built to automate state-specific Excess & Surplus Lines tax " +
            "and fee calculations for underwriters.",
        longDescription: dedent(`
        # Overview
        
        _A React/Electron desktop application built to automate state-specific Excess & Surplus Lines policy tax and 
        fee calculations._
        
        ---
        
        # Background
        
        Underwriters needed to apply different taxes, fees, and calculation rules depending on the state in which a 
        policy was written.
        
        I independently designed and built the E&S Tax Calculator to turn those state-specific requirements into a 
        guided calculation workflow.
        
        Business rules provided by compliance specialists were represented in an XML-driven calculation engine, allowing 
        the application to apply the appropriate calculations while keeping the underlying rules maintainable as 
        requirements changed.
        
        Although built with web technologies including React and TypeScript, the application was packaged with Electron 
        and deployed as a Windows desktop application.
        
        Throughout development, I worked directly with underwriters using screenshots, demonstrations, and feedback to 
        validate the workflow and iteratively improve the application.
        
        ---
        
        # Links
        
        - The E&S Tax Calculator was developed as a proprietary tool for a former employer; a public demo or repository is unavailable.
        `),
        flags: ["pro", "inuse"],
        images: [{
            url: "/images/projects/tax_calculator/tax_calculator_03.png",
            caption: "This React application was deployed as a native Windows application (via Electron), but received " +
                "automatic updates. With an XML \"backend\" providing the state-specific tax rates and rules, employees " +
                "were able to ensure compliance with state regulations."
        }, {
            url: "/images/projects/tax_calculator/tax_calculator_04.png",
            caption: "State rules and regulations are subject to change; this interface ensured users were aware of what " +
                "changed and when."
        }, {
            url: "/images/projects/tax_calculator/tax_calculator_01.png",
            caption: "A sampling of the application's data-access code used to work with the XML-based rules and " +
                "calculation data."
        }, {
            url: "/images/projects/tax_calculator/tax_calculator_02.png",
            caption: "This application ignited my appreciation for the MUI framework, which can be seen in use here."
        }],
        techStack: ["react", "electron", "typescript", "mui"],
        additionalTech: ["linux", "github"]
    },
    {
        title: "E&S Filing Manager",
        description: "State-filings management application built to centralize filing requirements, track progress, and " +
            "support compliance workflows across all 50 states.",
        longDescription: dedent(`
        # Overview
        
        _A centralized application for tracking Excess & Surplus Lines filing requirements and progress across 
        state-specific workflows._
        
        ---
        
        # Background
        
        The team had historically relied on manually maintained Excel spreadsheets to track filing requirements and the 
        status of insurance policies across different states.
        
        Because filing rules and workflows varied by state, the process required careful tracking and created 
        opportunities for missed steps and inconsistent information.
        
        I designed and built the E&S Filing Manager as an extension of Rep Assist, providing a centralized location for 
        tracking filing requirements, workflow status, and related information across all 50 states.
        
        The application replaced a fragmented manual process with a structured, queryable workflow that made it easier 
        for users to understand what needed to be completed and where each filing stood.
        
        ---
        
        # Links
        
        - The E&S Filing Manager was developed as a proprietary tool for a former employer; a public demo or repository 
        is unavailable.
        `),
        flags: ["pro", "inuse"],
        images: [{
            url: "/images//projects/es_filing_manager/es_filing_manager.png",
            caption: "The filing-management interface provided centralized tracking of policy filing requirements and " +
                "status across state-specific workflows."
        }],
        techStack: ["java", "javafx", "sqlserver"],
        additionalTech: ["github"]
    },
    {
        title: "Sale Buddy",
        description: "Personal web application for managing checkout at multi-seller garage and yard sales, tracking " +
            "purchased items, seller attribution, quantities, and transaction totals.",
        longDescription: dedent(`
        # Overview
        
        _A responsive application designed to simplify checkout and seller tracking at multi-seller garage and yard sales._
        
        # Background
        
        Sale Buddy was originally developed as a functional React Native mobile application. I am now reimplementing it as a responsive React and TypeScript web application designed to work across both mobile and desktop devices.
        
        The core workflow is intentionally simple: create or open a sale, start a customer transaction, enter purchased items and their associated sellers, and calculate both the customer's total and the amount attributable to each seller.
        
        The project is serving as an ongoing opportunity to deepen my experience with modern React development, TypeScript, responsive UI design, application state, and full-stack application architecture.
        
        ---
        
        # Screenshots
        
        The screenshots shown here are from the earlier React Native mobile implementation. They represent the application's established workflows and functionality rather than the current web interface.
        `),
        flags: ["personal", "wip"],
        images: [
            {url: "/images/projects/sale_buddy/Sale_Buddy_Splash.png"},
            {url: "/images/projects/sale_buddy/Sale_Buddy_LoginScreen.png"},
            {url: "/images/projects/sale_buddy/Sale_Buddy_UserDashboard.png"},
            {url: "/images/projects/sale_buddy/Sale_Buddy_SaleDashboard.png"},
            {url: "/images/projects/sale_buddy/Sale_Buddy_NewTransaction.png"},
            {url: "/images/projects/sale_buddy/Sale_Buddy_ChangeDue.png"},
            {url: "/images/projects/sale_buddy/Sale_Buddy_CashoutSeller.png"},
            {url: "/images/projects/sale_buddy/Sale_Buddy_EditSale.png"},
            {url: "/images/projects/sale_buddy/Sale_Buddy_GlobalSettings.png"}
        ],
        techStack: ["react", "typescript", "react-native", "react-paper", "expo", "nodejs", "express", "postgresql"],
        homepage: "https://salebuddy.app",
        additionalTech: ["linux"]
    },
    {
        title: "Alteryx Workflows",
        description: "ETL workflows built with Alteryx and SQL Server to consolidate fragmented insurance data into structured, queryable datasets.",
        longDescription: dedent(`
        # Overview

        _ETL workflows designed to consolidate, transform, and standardize data used in operational reporting and 
        internal applications._
        
        ---
        
        # Background
        
        Our department received data from multiple sources and formats, creating a need to normalize and combine that 
        information before it could be reliably queried or used in downstream processes.
        
        I built Alteryx workflows backed by SQL Server to ingest, transform, and consolidate these fragmented datasets.
        
        I placed particular emphasis on making the workflows understandable and maintainable by others, organizing and 
        documenting individual processing steps so that the logic could be followed without relying solely on the 
        original developer.
        
        ---
        
        # Links
        
        - These workflows were developed as proprietary tools for a former employer; a public demo or repository is 
        unavailable.
        `),
        flags: ["pro", "archived"],
        images: [{url: "/images/projects/alteryx/alteryx-ace.png"}, {url: "/images/projects/alteryx/alteryx-acquisitions.png"}],
        techStack: ["alteryx", "sqlserver"]
    },
    {
        title: "Slater - The Acquisitions Manager",
        description: "Prototype workflow application designed to help staff coordinate and track agent book-of-business " +
            "transfers.",
        longDescription: dedent(`
        # Overview
        
        _An unfinished workflow application designed to organize the multi-step process of transferring an insurance 
        agent's book of business._
        
        ---
        
        # Background
        
        When an agent left the agency or a policyholder needed to move to another agent, several coordinated steps were 
        required to complete the transfer.
        
        I began developing Slater as a centralized application for tracking those transfers, their required steps, and 
        their current status.
        
        Although the project was not completed prior to my leaving the organization, it represents another example of 
        applying software to a complex operational workflow that had previously been managed through more manual 
        processes.
        
        ---
        
        # Links
        
        - Slater was developed as a proprietary tool for a former employer; a public demo or repository is unavailable.
        `),
        flags: ["pro", "incomplete", "archived"],
        images: [{url: "/images/projects/slater/slater_01.png"}],
        techStack: ["java", "javafx", "sqlserver"],
        additionalTech: ["sqlserver"]
    },
    {
        title: "Workle",
        flags: ["personal", "archived"],
        description: "JavaFX word game inspired by Wordle, originally created as a personal side project and later made " +
            "available internally for coworkers to play.",
        longDescription: dedent(`
        # Overview

        _Workle was created as a fun side project for my mother, a fan of the original Wordle game. It was then also
        pitched to my employer at Kraft Lake/Farmers, where it was allowed as a once-a-day game for the department!_
        
        ---
        
        # Links
        
        - [Wordle - NY Times](https://www.nytimes.com/games/wordle/index.html)
        `),
        images: [{
            url: "images/projects/workle/workle.png",
            caption: "Workle included a daily word (all players played the same word each day), statistics, and simple " +
                "animations."
        }],
        techStack: ["java", "javafx", "sqlite"],
        additionalTech: ["github"],
        githubUrl: "https://github.com/nrossin/workle"
    },
    // {
    //     title: "Onboarding Manager",
    //     flags: ["pro", "incomplete", "archived"],
    //     description: "Incomplete PowerApps application that was to serve as a organizer/manager for onboarding managers and trainers for new employees.",
    //     images: [{
    //         url: "/images/projects/onboarding_manager/onboarding_manager_01.png",
    //         caption: "A busy interface, but provided crucial tracking services to ensure policy filings were completed in compliance with state laws."
    //     }, {
    //         url: "/images/projects/onboarding_manager/onboarding_manager_02.png",
    //         caption: "A busy interface, but provided crucial tracking services to ensure policy filings were completed in compliance with state laws."
    //     }],
    //     techStack: ["powerapps"]
    // },
    {
        title: "Teams Background Switcher",
        flags: ["personal", "inuse"],
        description: "Small Python utility created to make it easier to manage and switch custom video backgrounds in " +
            "Microsoft Teams.",
        images: [{
            url: "/images/projects/tbs/tbs.png",
            caption: "Behind the scenes, the script allows users to specify a local folder containing their additional " +
                "video backgrounds, and switch those for the defaults provided by Microsoft."
        }],
        githubUrl: "https://github.com/nrossin/teams-bg-switcher",
        techStack: ["python"],
        additionalTech: [],
    },
    {
        title: "Zipuno.io",
        description: "Full-stack file-sharing application built with React, TypeScript, Node.js, Express, and " +
            "PostgreSQL, including time-limited file availability.",
        flags: ["personal", "wip"],
        images: [{
            url: "/images/projects/zipuno/zipuno_01.png",
            caption: "Zipuno.io uses a PostgreSQL database and Node.js/Express backend to support its file-sharing " +
                "workflow."
        }],
        liveDemoUrl: "https://zipuno-frontend.onrender.com/",
        techStack: ["react", "typescript", "nodejs", "express", "postgresql"],
        additionalTech: ["linux"],
    },
    {
        title: "Legend of the Red Dragon - React Clone",
        description: "React-based reimagining of the classic BBS door game Legend of the Red Dragon, built as an ongoing " +
            "full-stack passion project.",
        flags: ["personal", "wip"],
        images: [{
            url: "/images/projects/lord-web/lord-web_01.png",
            caption: "Legend of the Red Dragon was a popular text-based, online role playing game that I grew up with. " +
                "I am using modern web technology to bring the format back to life."
        }],
        techStack: ["react", "typescript", "mui", "nodejs", "express", "postgresql"],
        additionalTech: ["linux"],
    },
    {
        title: "Personal Portfolio",
        description: "This is what you're looking at. Where? Right here. When? Right now!",
        flags: ["personal", "pro", "inuse"],
        images: [{url: "/images/projects/portfolio/portfolio.png"}],
        techStack: ["react", "typescript", "mui"],
        additionalTech: ["linux"],
        githubUrl: "https://github.com/nrossin/nathanrossin-dev"
    },

]