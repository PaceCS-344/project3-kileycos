import { useState, useEffect } from 'react';

const IGNORED_REPOS = ['OOP-Final-Project-main'];
const EXTRA_REPOS = ['hyperbole22/TermProject_RiddleMeThis', 'PaceCS-344/project3-kileycos'];

export function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ownRepos =fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`)
      .then(res => res.json());

       const contributedRepos = fetch(
      `https://api.github.com/search/repositories?q=contributor:${username}+user:!${username}&per_page=20`
    ).then(res => res.json());

      const extraRepos = Promise.all(
        EXTRA_REPOS.map(path =>
            fetch(`https://api.github.com/repos/${path}`).then(res => res.json())
      ));

     Promise.all([ownRepos, contributedRepos, extraRepos])
      .then(([own, contributed, extra]) => {
        const filtered = own.filter(r => !IGNORED_REPOS.includes(r.name));

        // contributed.items is the search results array
        const contributedTagged = (contributed.items ?? [])
          .filter(r => !filtered.find(o => o.id === r.id)) // no duplicates
          .map(r => ({ ...r, contributed: true }));

        const extraTagged = extra
          .filter(r => !filtered.find(o => o.id === r.id))
          .map(r => ({ ...r, contributed: true }));

        setRepos([...filtered, ...contributedTagged, ...extraTagged]);
        setLoading(false);
      })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [username]);

  return { repos, loading, error };
}