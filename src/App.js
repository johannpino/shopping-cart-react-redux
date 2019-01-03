import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Banner from './components/Banner'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header cart={this.props.cart} />
          <Banner />
          <Main />
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => (    
  {
      cart: state.cart
  }
)

export default connect(mapStateToProps)(App);
