import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Book from './Book'

const BOOKS_QUERY = gql`
  {
    books {
      _id
      description
    }
  }
`

class Books extends Component {
  render() {
    return (
      <Query query={BOOKS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const booksToRender = data.books
    
          return (
            <div>
              {booksToRender.map(book => <Book key={book._id} book={book} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Books