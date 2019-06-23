import React from 'react';
import { Translate, Format } from '../components/Localization';

function Page01(): JSX.Element {
    return (
        <div id="lipsum">
            <p>
                <Translate code="hi">Hi</Translate> Ovais,
            </p>
            <p>
                <Translate code="line2">You have to pay following: </Translate>
            </p>
            <p>
                <Translate code="line3">Bill amount: </Translate>
                <Format decimal={2}>{99999.9}</Format>
            </p>
            <p>
                <Translate code="line4">Last payement date: </Translate>
                <Format as="date">{new Date()}</Format>
            </p>
        </div>
    );
}

export default React.memo(Page01);
