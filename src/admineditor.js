import React, { Component } from 'react';
import './global.css';
import './admineditor.css';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class AdminEditor extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	}

	render(){
		return(
			<Editor 
				editorClassName="admin-editor"
				editorState={this.props.editorState}
				onEditorStateChange={this.props.onEditorStateChange} 
			/>
		)
	}
}

export default AdminEditor;
