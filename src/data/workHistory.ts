export interface WorkExperience {
    company: string;
    department: string;
    title: string;
    startDate: string; // i.e. Jan 2024
    endDate: string;
    duration: string;
    description: string[];  // Bullet points
}

export const workHistory: WorkExperience[] = [
    {
        company: 'Michigan State University Federal Credit Union',
        department: 'Enterprise Applications',
        title: 'Software Developer',
        startDate: 'July 2023',
        endDate: 'Present',
        duration: '',
        description: [
            'Develop, implement, and maintain multiple custom software solutions utilizing various development tools' +
            ' and languages (PHP, Java, PowerOn, Bash, etc.).',
            'Provide project oversight and assist in developing best practices for conversion of SymformPDF to PowerFrame Docs solutions ' +
            '(proprietary JHA systems).',
            'Consistently participate in Agile-related activities such as backlog grooming and sprint planning, utilizing the' +
            ' Jira platform for project/task management.'
        ]
    },
    {
        company: 'Farmers Insurance',
        department: 'Central Support Services',
        title: 'Application Developer',
        startDate: 'January 2022',
        endDate: 'July 2023',
        duration: '1 year, 3 months',
        description: [
            'Collaborated with end-users to design and code a visually appealing web application utilizing HTML, CSS, JavaScript, React.js, and Electron.js.',
            'Utilized version management system (Git, GitHub) to manage source code changes and release deployment of React application.',
            'Created SharePoint team sites with integrated Power Apps functionality',
            'Developed ETL processes to extract, transform and load data from various sources such as MS SQL Server, Excel, CSV, and flat files into target database and other output.',
            'Continued responsibilities from prior role below.',
        ]
    },
    {
        company: 'Farmers Insurance',
        department: 'Kraft Lake Insurance Agency',
        title: 'Application Developer',
        startDate: 'May 2016',
        endDate: 'January 2022',
        duration: '5 years, 8 months',
        description: [
            'Improved existing codebase through refactoring techniques like creating modular functions with fewer lines of code.',
            'Developed and maintained desktop applications using Java, JavaFX, Git, and SQL Server. These applications are relied upon by up to 150 employees on a daily basis.',
            'Utilized version control system (Git) to manage source code changes.',
            'Resolved customer issues by debugging existing application codebase or developing new features in a timely manner.',
            'Provided production support to end-users in order to troubleshoot any problems they may be experiencing with the software applications.',
            'Created technical documentation including design documents, user manuals, installation guides.',
            'Evaluated existing applications to reprogram, update and add new features.',
            'Designed, built, tested, and deployed customized applications, significantly improving operational ' +
            'efficiency and user productivity.',
            'Developed a proprietary database-driven knowledge management system, supporting over 100 daily users,' +
            ' enhancing organizational communication and workflow management.',
            'Engineered the industry\'s first Excess & Surplus Lines state filings management system, automating' +
            ' previously manual processes and setting a new benchmark in regulatory compliance.',
            'Integrated data from existing Farmers Insurance databases to enhance reporting capabilities and provide' +
            ' detailed insights for exclusive agents'
        ]
    },
    {
        company: 'Farmers Insurance',
        department: 'Farmers Direct Service',
        title: 'Service Advocate II',
        startDate: 'October 2015',
        endDate: 'May 2016',
        duration: '7 months',
        description: [
            'Speak with customers by phone to provide information about products or services, modify existing policies, cancel accounts, or obtain details of complaints.',
            'Process customer premium payments.'
        ]
    },
    {
        company: 'Farmers Insurance',
        department: '21st Century Insurance',
        title: 'Customer Service Representative',
        startDate: 'October 2015',
        endDate: 'May 2016',
        duration: '2 years, 1 month',
        description: [
            'Keep records of customer interactions or transactions, recording details of inquiries, complaints, or comments, as well as actions take.',
        ]
    }
];