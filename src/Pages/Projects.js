import React, { Component } from 'react';
import * as api from '../APIs/api.js';
import { Link } from 'react-router-dom';

class Projects extends Component {
  state = {
    repos: [],
    loading: true,
  };

  componentDidMount() {
    this.getAllRepos();
  }

  render() {
    const { loading } = this.state;
    if (loading) return <h1>Loading...</h1>;

    return (
      <div className='max-w-100 m-auto'>
        <h1 className='text-center text-alabaster'>
          Public Github Repositories
        </h1>

        <ul className='flex flex-wrap justify-center'>
          <this.makeRepoBoxes />
        </ul>
      </div>
    );
  }

  makeRepoBoxes = () => {
    const { repos } = this.state;

    return repos.map((repo) => {
      return (
        <li
          key={repo.name}
          className='rounded-md bg-alabaster shadow-lg p-2 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'
        >
          <h2 className='text-center'>{repo.name}</h2>
          <p>{repo.description ? repo.description : 'No description'}</p>
          <p className='border-b-2 border-solid border-violet-900'>
            language: {repo.language}
          </p>
          <Link className='' to={repo.html_url}>
            <p className=' hover:opacity-40 text-center'>Go to repo</p>
          </Link>
        </li>
      );
    });
  };

  getAllRepos = () => {
    return api.fetchAllRepos().then((repos) => {
      this.setState({
        repos: repos,
        loading: false,
      });
    });
  };
}

export default Projects;
