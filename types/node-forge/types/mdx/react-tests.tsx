import { MDXComponents, MDXContent, MDXModule } from "mdx/types";
import * as React from "react";
import MyMarkdownComponent from "./MyComponent.markdown";
import MyMDComponent from "./MyComponent.md";
import MyMDownComponent from "./MyComponent.mdown";
import MyMDXComponent from "./MyComponent.mdx";
import MyMKDComponent from "./MyComponent.mkd";
import MyMKDNComponent from "./MyComponent.mkdn";
import MyMKDownComponent from "./MyComponent.mkdown";
import MyRonComponent from "./MyComponent.ron";

// Test setup — User code

interface CustomImageComponentProps extends React.ComponentPropsWithoutRef<"img"> {
    type?: "custom";
}

class CustomImageComponent extends React.Component {
    constructor(props: CustomImageComponentProps) {
        super(props);
    }

    render() {
        return <div />;
    }
}

// Tests — The `mdx` imports.

function MyMDXPage(props: MDXModule) {
    // $ExpectType MDXContent
    const Content = props.default;

    // $ExpectType unknown
    props.title;

    return (
        <div>
            <h1>{props.title as string}</h1>
            <Content />
        </div>
    );
}

const MyComponentAlias: MDXContent = MyMDXComponent;
const MyComponentAliasAlias: typeof MyMDXComponent = MyComponentAlias;

// Ensure custom components are valid JSX components.
declare const customComponents: MDXComponents;
const Div = customComponents.div!;
<Div />;

// Tests — All mdx file exports.

// $ExpectType Element
<MyMDXComponent />;

// $ExpectType Element
<MyMDXComponent
    the="answer"
    to={{ life: "the" }}
    universe={() => "and"}
    everything={42}
    components={{
        a(props) {
            // $ExpectType DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
            props;
            return null;
        },
        div(props) {
            // $ExpectType DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        input: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: "div",
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: "Not just any type is allowed though",
        // Aliasing is valid though
        span: "div",
    }}
/>;

// $ExpectType Element
<MyMDComponent />;

// $ExpectType Element
<MyMDComponent
    the="answer"
    to={{ life: "the" }}
    universe={() => "and"}
    everything={42}
    components={{
        a(props) {
            // $ExpectType DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
            props;
            return null;
        },
        div(props) {
            // $ExpectType DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        input: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: "div",
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: "Not just any type is allowed though",
        // Aliasing is valid though
        span: "div",
    }}
/>;

// $ExpectType Element
<MyMarkdownComponent />;

// $ExpectType Element
<MyMarkdownComponent
    the="answer"
    to={{ life: "the" }}
    universe={() => "and"}
    everything={42}
    components={{
        a(props) {
            // $ExpectType DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
            props;
            return null;
        },
        div(props) {
            // $ExpectType DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        input: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: "div",
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: "Not just any type is allowed though",
        // Aliasing is valid though
        span: "div",
    }}
/>;

// $ExpectType Element
<MyMDownComponent />;

// $ExpectType Element
<MyMDownComponent
    the="answer"
    to={{ life: "the" }}
    universe={() => "and"}
    everything={42}
    components={{
        a(props) {
            // $ExpectType DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
            props;
            return null;
        },
        div(props) {
            // $ExpectType DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        input: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: "div",
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: "Not just any type is allowed though",
        // Aliasing is valid though
        span: "div",
    }}
/>;

// $ExpectType Element
<MyMKDNComponent />;

// $ExpectType Element
<MyMKDNComponent
    the="answer"
    to={{ life: "the" }}
    universe={() => "and"}
    everything={42}
    components={{
        a(props) {
            // $ExpectType DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
            props;
            return null;
        },
        div(props) {
            // $ExpectType DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        input: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: "div",
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: "Not just any type is allowed though",
        // Aliasing is valid though
        span: "div",
    }}
/>;

// $ExpectType Element
<MyMKDComponent />;

// $ExpectType Element
<MyMKDComponent
    the="answer"
    to={{ life: "the" }}
    universe={() => "and"}
    everything={42}
    components={{
        a(props) {
            // $ExpectType DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
            props;
            return null;
        },
        div(props) {
            // $ExpectType DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        input: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: "div",
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: "Not just any type is allowed though",
        // Aliasing is valid though
        span: "div",
    }}
/>;

// $ExpectType Element
<MyMKDownComponent />;

// $ExpectType Element
<MyMKDownComponent
    the="answer"
    to={{ life: "the" }}
    universe={() => "and"}
    everything={42}
    components={{
        a(props) {
            // $ExpectType DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
            props;
            return null;
        },
        div(props) {
            // $ExpectType DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        input: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: "div",
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: "Not just any type is allowed though",
        // Aliasing is valid though
        span: "div",
    }}
/>;

// $ExpectType Element
<MyRonComponent />;

// $ExpectType Element
<MyRonComponent
    the="answer"
    to={{ life: "the" }}
    universe={() => "and"}
    everything={42}
    components={{
        a(props) {
            // $ExpectType DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
            props;
            return null;
        },
        div(props) {
            // $ExpectType DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        input: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: "div",
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: "Not just any type is allowed though",
        // Aliasing is valid though
        span: "div",
    }}
/>;
