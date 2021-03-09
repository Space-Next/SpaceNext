import Link from 'next/link'

const links = ['rockets', 'launches', 'starlink', 'about']
const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-space ">

        <div className="w-screen h-screen overflow-hidden absolute top-0 left-0" style={{backgroundImage : "url('Bg-stars.png')"}}/>
        <div className="w-screen h-screen overflow-hidden absolute top-0 left-0" style={{backgroundImage : "url('Md-stars.png')"}}/>
        <div className="w-screen h-screen overflow-hidden absolute top-0 left-0" style={{backgroundImage : "url('Sm-stars.png')"}}/>

        <div className="flex justify-center items-center text-9xl font-semibold text-white h-sm">
          Welcome to Space<span className="text-yellow-500">Next</span>
        </div>

        <div className="w-screen absolute bottom-0 left-0 overflow-hidden h-sm bg-cover" style={{backgroundImage : "url('Earth_WH.png')"}}/>

        <div className="text-white flex justify-center w-screen">
          <div className="flex items-center flex-col bg-yellow-500 bg-opacity-75 z-50 p-5 rounded-md">
            <div className="z-50 text-5xl">Destination: </div>
            <div className="flex">
              {links.map(currLink => (
              <Link key={currLink} href={`/${currLink}`} >
                  <a className="z-50 p-3 m-2 text-xl border-white border-2 hover:bg-white hover:text-yellow-500 rounded-md" >{currLink}</a>
              </Link>
              ))}
            </div>
          </div>
        </div>

    </div>
  );
};

export default HomePage;
