import React, { Component } from 'react';
import './note.css';
import './global.css';

class Note extends Component {
  render(){
      return (
      	<div className = "note-container">
      		<div className = "note-inner-container">
      			<div className = "note-subject display">
      				<div className = "note-subject-text font-size-24 font-weight-100 float-left">
      					NOTE FROM US 
      				</div>
      				<div className = "note-subject-line float-left">
      					<hr />
      				</div>
      			</div>
      			<div className = "note-text font-size-18 font-weight-100">
      				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Aenean id metus id velit ullamcorper pulvinar. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sollicitudin. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Duis viverra diam non justo. Donec iaculis gravida nulla. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. <br /> <br />
      				Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Mauris elementum mauris vitae tortor. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Praesent in mauris eu tortor porttitor accumsan. Nulla non lectus sed nisl molestie malesuada. In rutrum. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam faucibus mi quis velit. Nam sed tellus id magna elementum tincidunt. Etiam quis quam. Nulla est. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Aliquam erat volutpat. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.
      			</div>
      		</div>
      	</div>
      )
  }
}

export default Note;