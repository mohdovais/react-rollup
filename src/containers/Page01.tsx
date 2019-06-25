import React from 'react';
import { Translate, Format } from '../components/Localization';

function Page01(): JSX.Element {
    return (
        <div id="lipsum">
            <p>
                <Translate keyword="hi">Hi</Translate> Ovais,
            </p>
            <p>
                <Translate keyword="line2">
                    You have to pay following:{' '}
                </Translate>
            </p>
            <p>
                <Translate keyword="line3">Bill amount: </Translate>
                <Format decimal={2}>{99999.9}</Format>
            </p>
            <p>
                <Translate keyword="line4">Last payement date: </Translate>
                <Format as="date">{new Date()}</Format>
            </p>
        </div>
    );
}

export default React.memo(Page01);
