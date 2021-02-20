// interface IProps {
// }

const HomePage = () => {
  return (
    <div className="h-screen bg-space">
        <div className="flex justify-center items-center text-9xl font-semibold text-white h-sm">
          Welcome to SpaceNext
        </div>

        <div className="w-screen h-screen bg-cover overflow-hidden absolute top-0 left-0" style={{"background-image" : "url('Bg-stars.png')"}}/>
        <div className="w-screen h-screen bg-cover overflow-hidden absolute top-0 left-0" style={{"background-image" : "url('Md-stars.png')"}}/>
        <div className="w-screen h-screen bg-cover overflow-hidden absolute top-0 left-0" style={{"background-image" : "url('Sm-stars.png')"}}/>

        <div className="w-screen absolute bottom-0 left-0 overflow-hidden h-5/6 bg-cover" style={{"background-image" : "url('Earth_WH.png')"}}/>
    </div>
  );
};

export default HomePage;
