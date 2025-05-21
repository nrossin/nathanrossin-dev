export const flagInfoMap: {
    [key: string]: {
        label: string,
        tooltip: string,
        color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
    }
} = {
    pro: {
        label: 'Professional',
        tooltip: 'Built for a real-world company as part of my role as an employee.',
        color: 'primary'
    },
    personal: {
        label: 'Personal',
        tooltip: 'Built on my own time for personal experience or hobby.',
        color: 'secondary'
    },
    inuse: {
        label: 'Still In Use',
        tooltip: 'This project is still actively maintained or used today.',
        color: 'success'
    },
    wip: {
        label: 'Work in Progress',
        tooltip: 'This project is currently under active development.',
        color: 'warning'
    },
    archived: {
        label: 'Archived',
        tooltip: 'This project is no longer maintained.',
        color: 'default'
    },
    incomplete: {
        label: 'Incomplete',
        tooltip: 'This project was not actually completed beyond POC or beta',
        color: 'error'
    },
    ai: {
        label: 'AI',
        tooltip: 'AI (most likely ChatGPT) was utilized to some degree while building this project.',
        color: 'info'
    }
};