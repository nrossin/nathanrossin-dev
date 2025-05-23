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
            'Partnered with BAs, QE, and  stakeholders to define clear acceptance criteria and edge cases — preventing ambiguous requirements and reducing rework.',
            'Architected and maintained PHP, Java, and PowerOn microservices that power lending, deposit, and online banking platforms for 350,000+ members daily.',
            'Led the SymformPDF-to-PowerFrame Docs conversion project—authored 6+ Confluence pages and provided hands-on training sessions for development team.',
            'Facilitated sprint planning and backlog grooming in Jira, promoting Agile methodology adherence.'
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
            'Collaborated with end-users to design and ship a React/Electron desktop application that supports 12+ underwriters, ensuring state compliance and streamlining data entry and validation into a single interface.',
            'Built custom SharePoint sites with embedded Power Apps and Forms, reducing submission errors by streamlining form validation.',
            'Established Git/GitHub strategies for branching, review, and deployment.',
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
            'Developed a proprietary, knowledge management system, supporting over 100 employees daily, accelerating service, document retrieval, and collaboration.',
            'Engineered an Excess & Surplus Lines filings system—automated 100% of manual compliance workflows across all 50 states.',
            'Built Alteryx- and SQL-based ETL pipelines to centralize policy and agency data from MS SQL, Excel, and CSV sources—transforming fragmented files into a single, maintainable database schema (MS SQL).',
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
            'Handled 30+ customer calls daily—fielded policy changes, billing inquiries and complaints, consistently exceeding SLA targets.',
            'Conceived and prototyped a custom Java application to streamline and standardize documentation of customer interactions, which led to my transfer into a formal development role.'
        ]
    },
    {
        company: 'Farmers Insurance',
        department: '21st Century Insurance',
        title: 'Customer Service Representative',
        startDate: 'September 2013',
        endDate: 'October 2015',
        duration: '2 years, 1 month',
        description: [
            'Keep records of customer interactions or transactions, recording details of inquiries, complaints, or comments, as well as actions take.',
        ]
    }
];