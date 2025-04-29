export interface WorkExperience {
    company: string;
    title: string;
    startDate: string; // i.e. Jan 2024
    endDate: string;
    description: string[];  // Bullet points
}

export const workHistory: WorkExperience[] = [
    {
        company: 'Michigan State University Federal Credit Union',
        title: 'Software Developer',
        startDate: 'July 2023',
        endDate: 'Present',
        description: [
            'Develop, implement, and maintain multiple custom software solutions utilizing various development tools' +
            ' and languages.',
            'Provide project oversight and develop best practices for conversion of SymformPDF to PowerFrame Docs solutions (JHA' +
            ' proprietary systems).',
            'Consistently participate in Agile-related activities such as backlog grooming and sprint planning, utilizing the' +
            ' Jira platform for project/task management.'
        ]
    },
    {
        company: 'Kraft Lake Insurance Agency (Farmers Insurance)',
        title: 'Application Developer',
        startDate: 'May 2015',
        endDate: 'July 2023',
        description: [
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
        title: 'Customer Service Representative',
        startDate: 'September 2013',
        endDate: 'May 2015',
        description: [
            'Designed, built, tested, and deployed customized applications, significantly improving operational ' +
            'efficiency and user productivity.',
            'Developed a proprietary database-driven knowledge management system, supporting over 100 daily users,' +
            ' enhancing organizational communication and workflow management.',
            'Engineered the industry\'s first Excess & Surplus Lines state filings management system, automating' +
            ' previously manual processes and setting a new benchmark in regulatory compliance.',
            'Integrated data from existing Farmers Insurance databases to enhance reporting capabilities and provide' +
            ' detailed insights for exclusive agents'
        ]
    }
];