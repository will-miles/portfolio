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
    if (loading)
      return <h1 className='text-center text-alabaster'>Loading...</h1>;

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

    repos.sort(function (a, b) {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });

    return repos.map((repo) => {
      return (
        <li
          key={repo.name}
          className='animate-appear m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'
        >
          <div className='rounded-md bg-alabaster rounded-b-none shadow-lg p-2 pb-0'>
            <h2 className='text-center text-lg'>{repo.name}</h2>
            <p className='border-t-2 border-solid border-violet-900'>
              {repo.description ? repo.description : 'No description'}
            </p>
            <p className='pt-2 border-b-2 border-solid border-violet-900'>
              language: {repo.language}
            </p>
          </div>
          <Link to={repo.html_url} target='_blank' rel='noreferrer'>
            <div className='rounded-md bg-alabaster hover:bg-alabaster_hover rounded-t-none shadow-lg p-2'>
              <p className='text-center'>Go to repo</p>
            </div>
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
