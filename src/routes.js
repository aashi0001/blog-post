import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app'
import PostsIndex from './components/posts_index'

const greeting = () =>{
    return <div>Hey There!</div>;
}

export default(

    <Route path='/'  component={App} >
        <IndexRoute component={PostsIndex} />/* this always show on the default root */
        <Route path="greet" component={greeting} /> /* this show when you type localhost:8080/greet */
    </Route>
);