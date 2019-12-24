import React from 'react';

const RepoList = (props) => (
  <div style={{color: "LightSkyBlue"}}>
    <h3> Repo List Component </h3>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;