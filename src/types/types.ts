export interface TechInfo {
    label: string;
    category: string;
    icon: string;
    url: string;
    description: string;
}

export type TechItemMap = {
    [techName: string]: TechInfo;
};

export interface LightboxImage {
    url: string;
    caption?: string;
}

export interface ProjectImage {
    url: string;
    caption?: string;
}

export interface Project {
    title: string;
    description: string;
    flags?: string[];
    images: ProjectImage[];
    techStack: string[];
    liveDemoUrl?: string;
    githubUrl?: string;
    additionalTech?: string[];
    longDescription?: string;
}
