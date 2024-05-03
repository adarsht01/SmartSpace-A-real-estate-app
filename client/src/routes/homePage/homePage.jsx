import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser}=useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Welcome to a world where your dream home isn't just a vision but a reality waiting to be discovered, we understand that finding the perfect property is more than just a transaction; it's about finding a place where memories are made and futures are built.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="https://media.istockphoto.com/id/538886278/photo/green-ecological-house-in-empty-field.jpg?s=612x612&w=0&k=20&c=7apbYzFqWyn7CrGKRP2_VBrvc7oYTUzko7IjJ8fVnUw=" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
