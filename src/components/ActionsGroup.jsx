import React from 'react';
import './ActionsGroup.css';

export default class ActionsGroup extends React.PureComponent {
    render() {
        return (
            <div className="actions-group">
                {this.getButtons(this.props.actions)}
            </div>
        );
    }

    getButtons(actions) {
        return actions.map((action, index) => {
            const onClick = action.onClick;
            if(typeof onClick === 'function'){
                return (
                    <button 
                        type="button" 
                        className="actions-button" 
                        onClick={action.onClick} 
                        key={index}
                    >
                        {action.label}
                    </button>
                );
            }else{
                return (
                    <label 
                        className="actions-label" 
                        key={index}
                    >
                        {action.label}
                    </label>
                );
            }
        });
    }
}