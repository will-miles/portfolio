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
      return (
        <div>
          <h1 className='text-center text-alabaster mt-4 text-lg'>
            Fetching github repos...
          </h1>
          <ul className='flex flex-wrap justify-center'>
            <this.makeLoadingBoxes />
          </ul>
        </div>
      );

    return (
      <div className='max-w-100 m-auto'>
        <h1 className='text-center text-alabaster mt-4 text-lg'>
          Public Github Repositories
        </h1>
        <ul className='flex flex-wrap justify-center'>
          <this.makeRepoBoxes />
        </ul>
      </div>
    );
  }

  makeLoadingBoxes = () => {
    const Arr = [];
    for (let i = 0; i < 8; i++) {
      Arr.push(
        <li
          key={`loading box ${i}`}
          className='flex flex-col animate-pulse m-4 h-64 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-lg'
        >
          <div className='flex-grow h-full rounded-md bg-alabaster p-2'></div>
        </li>
      );
    }
    return Arr;
  };

  makeRepoBoxes = () => {
    const { repos } = this.state;

    // sort repos from most recently changed to least
    repos.sort(function (a, b) {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });

    return repos.map((repo) => {
      return (
        <li
          key={repo.name}
          className='flex flex-col m-4 md:min-h-64 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 shadow-lg'
        >
          <div className='flex flex-col flex-grow rounded-md bg-alabaster rounded-b-none p-2 pb-0'>
            <h2 className='text-center text-xl'>{repo.name}</h2>
            <p className='border-t-2 flex-grow border-solid border-violet-900'>
              {repo.description
                ? this.trimDescription(repo.description)
                : 'No description'}
            </p>
            <p className='pt-2 border-b-2 border-solid border-violet-900'>
              language: {repo.language}
            </p>
          </div>
          <Link to={repo.html_url} target='_blank' rel='noreferrer'>
            <div className='transition ease-in-out delay-50 rounded-md bg-alabaster hover:-translate-y-1 hover:bg-alabaster_hover rounded-t-none shadow-lg p-2'>
              <p className=' text-center'>Go to repo</p>
            </div>
          </Link>
        </li>
      );
    });
  };

  trimDescription = (desc) => {
    return desc.length > 100 ? desc.substring(0, 100 - 3) + '...' : desc;
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
