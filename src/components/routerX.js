import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../articlesTable.css';
import articles from '../articles.json';

const Header = () => (
    <div id="header">
        <nav>
            <ul>
                <li><Link to='/images'>Images</Link></li>
                <li><Link to='/articles'>Articles</Link></li>
                <li><Link to='/about'>About us</Link></li>
            </ul>
        </nav>
    </div>
);

const Main = () => (
    <div id="main">
        <Switch>
            <Route path='/images' component={Images} />
            <Route path='/articles' component={Articles} />
            <Route path='/about' component={About} />
        </Switch>
    </div>
);

const Images = () => (
    <div>
        <p>Image 1</p>
        <p>Image 2</p>
        <p>Image 3</p>
    </div>
);

const About = () => (
    <div>
        <h2>Who are we</h2>
        <p>We are a small company that .....</p>
    </div>
);

const TableBody = (props) => {
    const matchURL = props.matchURL;
    const articlesList = articles.article.map( function(article){
        return (
            <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.author}</td>
                <td><Link to={`${matchURL}/${article.id}`}>{article.title}</Link></td>
            </tr>
        );
    });
    return articlesList;
};

const Articles = () => (
    <div>
        <table className="articlesTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Author</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                <Route render={(props) => {
                    return (<TableBody matchURL={props.match.url} />)
                }} />
            </tbody>
        </table>
        <Route path="/articles/:id" render={ (props) => {
            return (<ArticleDetail match={props.match}/>);
        }} />
    </div>
);

const ArticleDetail = (props) => {
    const match = props.match;
    const imgDynamicURL = articles.article[match.params.id-1].img;
    const articleDynamicURL = articles.article[match.params.id-1].url;
    return (
    <div className="articleDetail">
        <h2>{articles.article[match.params.id-1].title}</h2>
        <p><a href={articleDynamicURL} target="_blank">Click here to go to the article</a></p>
        <img src={imgDynamicURL} alt="" />
    </div>
    );
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
