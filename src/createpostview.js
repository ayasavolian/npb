import React, { Component } from 'react';
import './global.css';
import './createpostview.css';

class CreatePostView extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	}

	render (){
		return(
		<div className = "create-post-view-container display">
			<div className = "create-post-view-inner-container float-right">
				<div className = "display">
					<div className={"create-post-view-left-switch display " + (this.props.previewState === false ? 'background-color-green font-color-white' : 'font-color-green')} onClick={this.props.updatePreviewState}>
						Edit
					</div>
					<div className={"create-post-view-right-switch display " + (this.props.previewState === true  ? 'background-color-green font-color-white' : 'font-color-green')} onClick={this.props.updatePreviewState}>
						Preview
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default CreatePostView;
