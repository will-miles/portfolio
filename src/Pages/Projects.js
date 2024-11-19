import React, { Component } from 'react';
import * as api from '../APIs/api.js';
import { Link } from 'react-router-dom';

class Projects extends Component {
  state = {
    failureCount: 0,
    repos: [],
    loading: true,
  };

  componentDidMount() {
    this.getAllRepos();
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
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
    } else if (error) {
      return (
        <div className='bg-alabaster rounded-xl p-2 max-w-xl m-auto mt-4'>
          <h1 className='text-center text-lg border-b-2 border-violet-800'>
            Uh oh! An error occurred
          </h1>
          <p>Error: {error.code}</p>
          <p>message: {error.message}</p>
          {this.contactOnMultipleErrors()}
          <div className='flex'>
            <button
              className='bg-violet-800  rounded-full transition ease-in-out delay-50 text-alabaster hover:opacity-40 text-center p-2 m-auto'
              onClick={() => {
                this.getAllRepos();
              }}
            >
              Try again
            </button>
          </div>
        </div>
      );
    } else {
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
  }

  contactOnMultipleErrors = () => {
    // if three or more errors in a row prompt an email with prefilled subject line outlining the error
    const { failureCount, error } = this.state;
    if (failureCount >= 3) {
      const subject = `Multiple errors occurred on your website, Error: ${error.code}, location: ${window.location.pathname}`;
      return (
        <div className='bg-violet-800 text-alabaster p-2 rounded-lg mb-2'>
          <p>
            Multiple Errors have been detected. please contact the website admin
            below
          </p>
          <div className='flex m-auto justify-center'>
            <p className='pr-3 pt-1 pl-3 pb-1 m-auto mr-2'>
              willmiles@live.co.uk
            </p>
            <button
              className='transition ease-in-out delay-50 text-violet-800 pr-3 pt-1 pl-3 pb-1 rounded-full bg-alabaster hover:opacity-40 mr-auto'
              onClick={() =>
                (window.location = `mailto:willmiles@live.co.uk?subject=${subject}`)
              }
            >
              <div className='hidden sm:inline'>Send an email</div>
              <div className='inline sm:hidden'>email</div>
            </button>
          </div>
        </div>
      );
    }
  };

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
              <p className='text-center'>Go to repo</p>
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
    return api.fetchAllRepos().then((response) => {
      if (response.error) {
        // error occurred let the user know
        this.setState({
          failureCount: this.state.failureCount + 1,
          error: response.error,
          loading: false,
        });
      } else {
        this.setState({
          error: false,
          repos: response,
          loading: false,
        });
      }
    });
  };
}

export default Projects;
