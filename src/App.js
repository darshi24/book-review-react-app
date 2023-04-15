import './App.css';
import BannerComponent from "./headers/banner";
import NavBarComponent from "./headers/navbar";
import HomeComponent from "./home/home";
import LogInComponent from "./signup/login";
import SignUpComponent from "./signup/signup";
import {Route, Routes} from "react-router";
import SearchComponent from "./search/search";
import ProfileComponent from "./profile/profile";
import store from "./reducers/store";
import {Provider} from "react-redux";
import EditProfileComponent from "./profile/edit-profile";
import BookItemDetailsComponent from "./search/book-item-details";
import CurrentUserContext from "./components/current-user-context";
import UsersListComponent from "./stats/users";
import ReviewsListComponent from "./stats/reviews";
function App() {
  return (
      <Provider store={store}>
          <CurrentUserContext>
              <div className="App">
                  <div className="row">
                      <BannerComponent/>
                  </div>
                  <div className="row">
                      <NavBarComponent/>
                  </div>
                  <div className="row justify-content-center">
                      <Routes>
                          <Route path="/" element={<HomeComponent/>}/>
                          <Route path="/login" element={<LogInComponent/>}/>
                          <Route path="/signup" element={<SignUpComponent/>}/>
                          <Route path="/search" element={<SearchComponent/>}/>
                          <Route path="/search/:searchTerm" element={<SearchComponent/>}/>
                          <Route path="/books" element={<BookItemDetailsComponent/>}/>
                          <Route path="/profile" element={<ProfileComponent/>}/>
                          <Route path="/profile/:uid" element={<ProfileComponent/>}/>
                          <Route path="/profile/:uid/following" element={<UsersListComponent/>}/>
                          <Route path="/profile/:uid/followers" element={<UsersListComponent/>}/>
                          <Route path="/profile/:uid/reviews" element={<ReviewsListComponent/>}/>
                          <Route path="/edit-profile" element={<EditProfileComponent/>}/>
                      </Routes>

                  </div>
              </div>
          </CurrentUserContext>
      </Provider>

  );
}

export default App;
