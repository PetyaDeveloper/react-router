import React from 'react';
import {NavLink, Route, Redirect, Switch} from 'react-router-dom';
import CourseContainer from './courses/CourseContainer';
import { CSSCourses,HTMLCourses,JSCourses } from '../data/courses';
import NotFound from './NotFound';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li> 
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Switch>
      <Route exact path={match.path} render={()=> <Redirect to= {`${match.path}/javascript`}/> }/>
      <Route path="/courses/html" render={()=> <CourseContainer data={HTMLCourses} />} />
      <Route path="/courses/css" render={()=> <CourseContainer data={CSSCourses} />} />
      <Route path="/courses/javascript" render={()=> <CourseContainer data={JSCourses} />} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Courses;