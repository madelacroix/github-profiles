import { useTheme } from 'next-themes';
import { useState } from 'react'
import GithubImg from "../public/github.svg"
import WhiteGithub from "../public/github-white.svg"
import Info from './components/info';

export default function Home() {
  const {theme, setTheme} = useTheme();
  const [username, setUsername] = useState("")
  const [info, setInfo] = useState(false);

  const handleSubmit = (e) => {
    console.log("submitted")
    e.preventDefault();
    setInfo({ element: <Info username={username} /> })
  }

  return (
    <div className="lg:h-screen dark:bg-black">
      <div className='header'>
        <button onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}>
          <GithubImg className="dark:hidden"/>
          <WhiteGithub className="hidden dark:block"/>
          <h4 className='light-text'>light</h4>
          <h4 className='dark-text'>dark</h4>
        </button>
        <h1 className='font-gideon xs:text-[4vh] text-[3vh]'>profile search engine</h1>
      </div>
      <div className='body'>
        <div className='px-[15vw] py-[15vh]'>
          <input
            type="text"
            placeholder='enter username'
            className='search-box'
            onChange={e => setUsername(e.target.value)}
            required
          />
          <br />
          <button className='search-button' type='submit' onClick={handleSubmit}>
            Search
          </button>
        </div>
        {info.element}
      </div>
      <h2 className="footer">
        Made by
        <span className="font-medium">Mads.</span>
      </h2>
    </div>
  )
}