import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { EHomePageCategory } from './pages/eHomepageCategories/ehomepagecategories.component';
import { AuthenticatePage } from './pages/AuthenticatePage/authenticate.component';
import { EHomePageList } from './pages/eHomepageList/ehomepagelist.component';
import { HomePage } from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import { auth, createUserProfile } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({

            id: snapshot.id,
            ...snapshot.data()

          })
        })
      }
      this.props.setCurrentUser(userAuth)
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/learn-react-project-one/" component={EHomePageCategory} />
            <Route exact path="/learn-react-project-one/shop" component={EHomePageList} />
            <Route exact path="/learn-react-project-one/shop/:categoryName" component={EHomePageList} />

            <Route exact path="/learn-react-project-one/login" render={() => this.props.currentUser ? (<Redirect to='/learn-react-project-one/' />) : <AuthenticatePage />} />

            <Route path="/learn-react-project-one/old" component={HomePage} />
            <Route path="/learn-react-project-one/old/:monsterId" />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
