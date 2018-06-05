import React, { Component } from 'react';
import './global.css';
import './newsletter.css';
import CreatePostView from './createpostview'
import AdminEditor from './admineditor';
import AdminPreview from './adminpreview';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';

class CreatePost extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    preview: false,
	    editorState: EditorState.createEmpty(),
	    editorHTML: ""
	  };
	  this.updatePreviewState = this.updatePreviewState.bind(this);
	  this.onEditorStateChange = this.onEditorStateChange.bind(this);
	}

	updatePreviewState(value){
		let previewValue = this.state.preview;
		if (previewValue)
			previewValue = false;
		else
			previewValue = true;
		this.setState(prevState => ({
			preview: previewValue
		}));
	}

	onEditorStateChange(editorState){
		console.log(this.state.editorState);
		console.log(this.state.editorHTML);
		this.setState({
			editorState: editorState,
			editorHTML: draftToHtml(convertToRaw(editorState.getCurrentContent()))
		});
	};


	render(){
		let showEditor = (this.state.preview === false) ? <AdminEditor editorState = {this.state.editorState} onEditorStateChange = {this.onEditorStateChange.bind(this)} /> : null;
		let showPreview = (this.state.preview === true) ? <AdminPreview /> : null;
		return(
		<div className = "body-inner-container">
			<CreatePostView previewState = {this.state.preview} updatePreviewState = {this.updatePreviewState.bind(this)} />
			{showEditor}
			{showPreview}
		</div>
		)
	}
}

export default CreatePost;
