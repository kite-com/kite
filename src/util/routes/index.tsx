import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '@comp/home';
import HotPage from '@comp/hot';
import PostPage from '@comp/post';
import ImagePage from '@comp/image';
import VideoPage from '@comp/video';
import QueryPage from '@comp/query';

const AppRoute: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/hot' component={HotPage} />
        <Route exact={true} path='/post' component={PostPage} />
        <Route exact={true} path='/image' component={ImagePage} />
        <Route exact={true} path='/video' component={VideoPage} />
        <Route exact={true} path='/query' component={QueryPage} />
      </Switch>
    </Router>
  );
}

export default AppRoute;
