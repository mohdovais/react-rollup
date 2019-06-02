import React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

const getExclamationMarks = (numChars: number): string =>
    Array(numChars + 1).join('!');

function Hello({ name, enthusiasmLevel = 1 }: Props): JSX.Element {
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}

export default React.memo(Hello);
