import React from 'react';

// const withAuthenticate = () =>
//        {return ( <h1>HOC</h1> )}

// export default withAuthenticate;



const withAuthenticate = PostsPage =>
  class extends React.Component {
    render() {
        return <PostsPage />;
    }
  };
  export default withAuthenticate;