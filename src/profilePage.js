import Page from "./page";
import profile from "./images/profile.JPEG";
import './styles.css';
import { useState, useEffect } from "react";

function useGitHubProfile(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then(r => r.json()),
      fetch(`https://api.github.com/users/${username}/orgs`).then(r => r.json()),
    ]).then(([user, orgs]) => {
      setData({ ...user, orgs });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [username]);

  return { data, loading };
}

export default function ProfilePage() {
  const { data, loading } = useGitHubProfile('kileycos');

  return (
    <Page>
      <div className="profile-layout">

        <div className="profile-sidebar">
          <img src={profile} alt="profile photo" className="profile-photo" />

          {!loading && data && (
            <div className="github-card">
              <img src={data.avatar_url} alt="GitHub avatar" className="github-avatar" />
              <a href={data.html_url} target="_blank" rel="noreferrer" className="github-username">
                @{data.login}
              </a>
              <div className="github-stats">
                <div className="github-stat">
                  <span className="stat-number">{data.public_repos}</span>
                  <span className="stat-label">repos</span>
                </div>
                <div className="github-stat">
                  <span className="stat-number">{data.followers}</span>
                  <span className="stat-label">followers</span>
                </div>
                <div className="github-stat">
                  <span className="stat-number">{data.following}</span>
                  <span className="stat-label">following</span>
                </div>
              </div>
              {data.orgs?.length > 0 && (
                <div className="github-orgs">
                  <span className="stat-label">organizations</span>
                  <div className="org-list">
                    {data.orgs.map(org => (
                      <a key={org.id} href={`https://github.com/${org.login}`} target="_blank" rel="noreferrer">
                        <img src={org.avatar_url} alt={org.login} title={org.login} className="org-avatar" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="profile-main">
          <h2>About Me</h2>
          <p>
            I am a sophomore majoring in both Computer Science and art at Pace University.
            I also have a minor in graphic design (ignore how bad the graphic design is on this site, I haven't
            had the time to really edit it yet). My preferred medium is chalk pastel, and my preferred language
            (as of right now) is Java.
          </p>

          <h3>Skills</h3>
          <p>Java · Python · CSS · HTML · JavaScript · PHP</p>
          <p>Adobe Suite · Blender · Digital Design</p>
          <p>Microsoft Suite · Google Suite</p>
        </div>

      </div>
    </Page>
  );
}
