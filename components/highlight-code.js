import { createRef, useEffect } from 'react';
import hljs from 'highlight.js';

export default ({ children, language }) => {
    const codeRef = createRef();

    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, []);

    return (
        <pre className={language}>
            <code ref={coderef}>{children}</code>
        </pre>
    );
};