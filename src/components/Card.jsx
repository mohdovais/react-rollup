import React from 'react';

import './Card.css';
import RenderIf from './RenderIf';

export default class Card extends React.PureComponent {
    render() {
        const props = this.props;
        return (
            <div className="card">
                <RenderIf condition={props.header}><header>{props.header}</header></RenderIf>
                <div className="card-content">{props.children}</div>
                <RenderIf condition={props.footer}><footer>{props.footer}</footer></RenderIf>
            </div>
        );
    }
}
