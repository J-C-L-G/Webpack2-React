import React from 'react';

import styles from './Info.scss';

export default class Info extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'May the force'
        }
    }
    
    changeMessage(){
        this.setState((prevState)=>({
            text: 'Be with you!'
        }));
    }
    
    render(){
        return (
            <div className="col-xs-4">
                <p className={styles.inComponent}>{this.state.text}</p>
                <button onClick={this.changeMessage.bind(this)}>Change Text</button>
            </div>
        );
    }
    
}