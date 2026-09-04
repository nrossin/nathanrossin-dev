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
        department: '',
        title: 'Software Engineer',
        startDate: 'July 2023',
        endDate: 'Present',
        duration: '',
        description: [
            'Develop and maintain PHP, Java, and PowerOn applications and services supporting lending, deposit, and online banking platforms serving 350,000+ members.',
            'Partner with business analysts, quality engineers, and stakeholders to clarify requirements, acceptance criteria, and edge cases before implementation.',
            'Led development standards and implementation planning during the team’s evaluation and partial migration from SymformPDF to PowerFrame Docs, defining conventions for code and form organization, documentation, and use of platform features.',
        ]
    },
    {
        company: 'Farmers Insurance',
        department: 'Kraft Lake Insurance Agency',
        title: 'Application Developer',
        startDate: 'May 2016',
        endDate: 'July 2023',
        duration: '7 years, 2 months',
        description: [
            'Expanded Rep Assist into a knowledge-management and workflow suite used daily by 50+ employees, initially replacing an Excel-based source of truth before growing to support additional business processes and tools.',
            'Continuously evolved Rep Assist based on direct user feedback and firsthand experience with the underlying work.',
            'Independently designed, built, and deployed a React/Electron desktop application used by 12+ E&S underwriters to automate state-specific policy tax and fee calculations.',
            'Worked directly with underwriters throughout development to validate design decisions and iteratively improve workflows.',
            'Designed and built an E&S state-filings manager covering state-specific workflows across all 50 states.',
            'Built Power Apps and SharePoint-based tools to collect structured feedback from users of internally developed applications.',
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
            'Conceived and built the original version of Rep Assist, a Java/JavaFX application designed to streamline and standardize customer-interaction documentation while working directly within the business process it was created to improve.',
            'The project led to a transition into a formal application-development role.'
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
        ]
    }
];