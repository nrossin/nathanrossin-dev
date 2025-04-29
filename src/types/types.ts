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
