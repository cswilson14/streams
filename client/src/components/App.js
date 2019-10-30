import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return <div><Link to="/pagetwo">Navigate to page two</Link></div>;
}

const PageTwo = () => {
    return <div><Link to="/pagetwo">Navigate to page one</Link></div>;
}

const App = (props) => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;