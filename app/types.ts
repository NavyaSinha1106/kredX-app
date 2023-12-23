export type TMainContentData = {
    icon: string;
    title: string;
    summary: string;
};

export type TFinalContent = {
    title: string;
    content: string[];
};

export type ButtonProps = {
    link: string;
    text: string;
    customClass?: string;
}

export type ContentData = {
    content: TMainContentData
}

export type DummyData = {
    title: string;
}
