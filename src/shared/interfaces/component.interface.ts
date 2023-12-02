export type BaseComponentProps = {
    className?: string;
    style?: Record<string, any>; // --> TODO: @tamagossi @rachmizard need to change to the proper type
};

export type BoxProps = {
    w?: string | number;
    h?: string | number | Record<string, any>;
    minH?: string | number;
    maxH?: string | number;
    minW?: string | number;
    maxW?: string | number;
};

export type FlexProps = {
    gap?: string | number;
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    align?:
        | 'stretch'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'baseline'
        | 'start';
};

export type PaddingProps = {
    p?: string | number;
    px?: string | number;
    py?: string | number;
    pt?: string | number;
    pr?: string | number;
    pb?: string | number;
    pl?: string | number;
};

export type MarginProps = {
    m?: string | number;
    mx?: string | number;
    my?: string | number;
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
};

export type TypographyProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'i';
    children: React.ReactNode;
    className?: string;
    fontWeight?:
        | 'thin'
        | 'extralight'
        | 'light'
        | 'normal'
        | 'medium'
        | 'semibold'
        | 'bold'
        | 'extrabold'
        | 'black';
    fontSize?:
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl';
    color?:
        | 'black'
        | 'white'
        | 'red'
        | 'blue'
        | 'green'
        | 'yellow'
        | 'gray'
        | 'indigo'
        | 'pink'
        | 'purple'
        | 'teal';
};
