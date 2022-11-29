import { useNavigate } from 'react-router-dom';




function HomePage() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/product');
  };
    return (
      <div className="contaniner" >
        Trang chủ
        <button onClick={handleClick}>Submit</button>
      </div>
    );
  }
  
  export default HomePage;
  