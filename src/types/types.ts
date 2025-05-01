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
