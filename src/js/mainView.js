import React from 'react';
import '../css/app.less';
import homeImage from '../html/home.png';

export default class MainView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : props.name
		}
	}

	onSetName = () => {
        this.setState({
            name : this.refs.nameTxt.value
        })
    }

	render() {
		return <div className="main-view">
			Hello {this.state.name} !
			<p/>
            Enter Name : <input type="text" ref="nameTxt" />
            <button type="button" onClick={this.onSetName}>Set Name</button>
            <p/>
            <img src={homeImage}/> - Example of loaging image with webpack image loader
		</div>
	}
}
