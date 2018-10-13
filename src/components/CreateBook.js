import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!) {
    createBook(description: $description) {
      _id
      description
    }
  }
`;

class CreateBook extends Component {
  state = {
    description: ""
  };

  render() {
    const { description } = this.state;
    return (
      <div>
        <div>
          <input
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the Book"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ description }} onCompleted={() => this.props.history.push('/')}>
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateBook;
