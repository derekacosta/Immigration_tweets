import React from 'react';
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'

function App(props) {
    return ( 
        <div className="App" >
            <Header />
            <Features />
            <Footer />
        </div>
    );
};

export default App;
