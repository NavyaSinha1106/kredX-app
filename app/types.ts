export type TMainContentData = {
    icon: string;
    title: string;
    summary: string;
};

export type TFinalContent = {
    title: string;
    content: string[];
};

export type AnchorProps = {
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

export type Post = {
    title: string;
    date: string;
    content: any;
    slug: {
        current: string;
    }
}

export type CarouselProps = {
    data: Post[];
}

export type InputProps = {
    label: string;
    placeholder: string;
    setValue: (value: string) => void;
    customClass?: string;
    error?: string;
}

export type ButtonProps = {
    text: string;
    customClass?: string;
    handleClick: () => void;
}

export type HeadingProp = {
    text: string;
    customClass?: string;
}