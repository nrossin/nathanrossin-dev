export interface WorkExperience {
    company: string;
    department: string;
    title: string;
    startDate: string;
    endDate: string;
    duration: string;
    description: string[];  // Each element is rendered as a bullet point
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
            'Partnered with BAs, QE, and stakeholders to define clear acceptance criteria and edge cases — preventing ambiguous requirements and reducing rework.',
            'Architected and maintained PHP, Java, and PowerOn microservices (banking-specific technology) that power lending, deposit, and online banking platforms for 350,000+ members daily.',
            'Led the SymformPDF-to-PowerFrame Docs conversion project, documenting the process and delivering hands-on team training.',
            'Promoted adherence to Agile practices and methodologies.'
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
            'Built and deployed a React/Electron app supporting 12+ underwriters, improving data validation and compliance.',
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
            'Developed a proprietary knowledge management system, supporting over 100 employees daily, accelerating service, document retrieval, and collaboration.',
            'Engineered an Excess & Surplus Lines filings system—automating manual compliance workflows across all 50 states.',
            'Built ETL pipelines with Alteryx and SQL Server to consolidate fragmented policy data into a unified, queryable schema.',
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
            'Kept records of customer interactions or transactions, recording details of inquiries, complaints, or comments, as well as actions taken.',
        ]
    }
];