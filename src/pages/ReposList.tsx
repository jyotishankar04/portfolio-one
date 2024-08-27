import { memo, useEffect, useState } from "react";
import { api } from "../data/AxiosConfig";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

interface props {
  name: string;
  html_url: string;
  description: string;
  id: string;
  url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
}
interface user {
  login: string;
  avatar_url: string;
  name: string;
  created_at: string;
  html_url: string;
  bio: string;
}

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [user, serUser] = useState<user>({
    login: "",
    avatar_url: "",
    name: "",
    created_at: "",
    html_url: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);
  const getRepos = async () => {
    const res = await api.get("/users/jyotishankar04/repos");
    setRepos(res.data);
  };
  const getUserInfo = async () => {
    setLoading(true);
    const res = await api.get("/users/jyotishankar04");
    getRepos();
    serUser(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      {loading ? <Loading /> : null}
      <Navbar />
      <div className="container h-full overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
          <div className="flex justify-center items-center flex-col gap-4 ">
            <img
              src={user.avatar_url}
              className="w-48 h-48 border-2 border-primary rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 ">
            <h1 className="text-3xl font-semibold text-gray-700">
              {user.login}
            </h1>
            <h1 className="text-xl font-semibold text-gray-700">{user.name}</h1>

            <p className="text-xl text-gray-500">{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-primary w-full"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
        <div className="w-full">
          <h1 className="card-title text-primary text-3xl p-3">
            Github Repositories
          </h1>
        </div>
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4   p-4 gap-5">
          {repos.map((repo, index: number) => (
            <ReposCard key={index} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ReposCard: React.FC<{ repo: props }> = memo(({ repo }) => {
  const time = new Date(repo.created_at).toLocaleDateString();
  return (
    <div className="card card-body hover:bg-base-300 hover:border bg-base-200">
      <h2 className="card-title">{repo.name}</h2>
      <p>{time}</p>
      <p>{repo.description}</p>
      <div className="flex md:flex-row gap-2   flex-col md:justify-between items-start my-2 md:items-center">
        <div className="flex gap-4 items-center">
          <img
            src={repo.owner.avatar_url}
            className="w-8 h-8 rounded-full"
            alt=""
          />
          <p>{repo.owner.login}</p>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          className="btn w-full md:w-fit btn-primary"
        >
          View Repo
        </a>
      </div>
    </div>
  );
});
export default ReposList;
