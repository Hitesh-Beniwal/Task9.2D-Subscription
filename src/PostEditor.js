
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript'; 
import './postEditor.css';

const PostEditor = () => {
    const [code, setCode] = useState('// Write your code here...');

    return (
        <div className="editor">
            <h2>Code Editor</h2>
            <CodeMirror
                value={code}
                options={{
                    lineNumbers: true,
                    mode: 'javascript',
                }}
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
            />
            <h3>Your Code:</h3>
            <pre>{code}</pre>
        </div>
    );
};

export default PostEditor;
