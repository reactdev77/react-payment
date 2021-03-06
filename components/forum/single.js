import React, {Component} from 'react';
import Navbar from '../shared/navbar';
import settings from '../../settings'
import Footer from '../shared/footer'
import { Match, Link } from 'react-router-dom'
import {User, EyeOff} from 'react-feather'
import Moment from 'react-moment';
import {Helmet} from "react-helmet";
import CommentList from './comments'
import NewComment from './comment'
export class SingleForum extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.match.params.forum_id,
            thing: null,
            firstName: '',
            lastName: '',
            isloading: false,
            update: false,
        };
        this.updateComment = this.updateComment.bind(this);
    }
    
    componentDidMount() {
        let {id} = this.state
        this.getForum(id);
        window.scrollTo(0, 0);
    }
    componentWillReceiveProps(nextProps) {
        if (!this.state.id && !!nextProps.id ) {
            this.getForum(nextProps.id);
        }
    }
    updateComment(val){
        this.setState(prevState => ({
            update: !prevState.update
          }), ()=>{
              console.log(this.state.update)
              console.log(val);
          });
    }
    loadPoster(poster_id){
        this.setState({isloading: true});
            fetch(settings.urls.show_info.replace('{user_id}', poster_id ), {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                mode: 'cors',
            })
            .then(
                response => response.json()
            )
            .then(
                data => this.setState({isloading: false, firstName: data.firstName, lastName: data.lastName}, ()=>{
                    console.log(data);
                })
            )
    }
    getForum(forumid){
        this.setState({isloading: true});
            fetch(settings.urls.get_singleforum.replace('{forum_id}', forumid ), {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                mode: 'cors',
            })
            .then(
                response => response.json()
            )
            .then(
                data => this.setState({isloading: false, thing: data}, ()=>{
                    console.log(data);
                    console.log("----------------------------------------------------");
                    console.log(this.state.things);
                    this.loadPoster(data.by);
                })
            )
    }
    render(){
        if(!this.state.thing){
            return <div className="container-fluid"> 
            <div className="row">
                <section className="help-center-section">
                    <Navbar />  
                    <div className="row-fluid hero-box">
                    <div className="col-md-12">
                        <div className="headline-box">
                        
                        <h1 className="home-headline"><div className='text-input__loading--line'></div></h1>
                        
                        </div>
                    </div>
                    </div>
                </section>
            </div>
             
             <div className="row-fluid new-article-row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                <div className="col-spaced help-box">
               
                <div className="row article-sub-row">
                <div className="col-md-2"><img className="forum-poster-img" src="https://api.adorable.io/avatars/260/forum_image.png" /></div>
                <div className="col-md-10">
                <div className="row">
                <div className="col-md-4">
                <span className="forum-by"><div className='text-input__loading--line'></div></span>
                <br/>
                <span className="forum-posted-date"><div className='text-input__loading--line'></div></span>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4 forum-report"><EyeOff />&nbsp;Report</div>
                </div>
                <br/>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                <span className="content">
                <div className='text-input__loading--line'></div>
                </span>
                </div>
                
                </div>
                </div>
                </div>
                <div className="col-md-2">
                </div>
             </div>
            <Footer />
            </div>
        }
        let {topic, content, by, replies, createdAt, id} = this.state.thing;
        let {firstName, lastName} = this.state;
        const {pathname} = this.props.location;
        return <div className="container-fluid"> 
        <Helmet>
                <meta charSet="utf-8" />
                <title>{topic} | The Academist</title>

<meta name="description" content="Just read it -- it&#39;s cute!"/>
<meta name="keywords" content="High Availability"/>

<meta name="og:title" content={`${topic} | The Academist`}/>
<meta name="og:description" content="Just read it -- it&#39;s cute!"/>
<meta name="og:site_name" content="The Academist"/>
<meta name="og:type" content="article"/>

<meta name="twitter:site" content="The Academist" />
<meta name="twitter:title" content={`${topic} | The Academist`}/>
<meta name="twitter:description" content="Just read it -- it&#39;s cute!"/>
<meta name="twitter:creator" content="The Academist"/>
<meta name="twitter:card" content="photo" />
<meta name="twitter:url" content={`https://theacademist.herokuapp.com${pathname}`}/>
<link rel='canonical' href={`https://theacademist.herokuapp.com${pathname}`}/>

            </Helmet>
<div className="row">
    <section className="help-center-section">
        <Navbar />  
        <div className="row-fluid hero-box">
        <div className="col-md-12">
            <div className="headline-box">
            <h1 className="home-headline">{topic}</h1>
            
            </div>
        </div>
        </div>
    </section>
</div>
 
 <div className="row-fluid new-article-row">
    <div className="col-md-2">
    </div>
    <div className="col-md-8">
    <div className="col-spaced help-box">
   
    <div className="row article-sub-row">
    <div className="col-md-2"><img className="forum-poster-img" src="https://api.adorable.io/avatars/260/forum_image.png" /></div>
    <div className="col-md-10">
    <div className="row">
    <div className="col-md-4">
    <span className="forum-by">By <span className="forum-poster-name">{firstName} {lastName}</span></span>
    <br/>
    <span className="forum-posted-date">Posted on &nbsp;
            <Moment format="MMM Do, YYYY">
                {createdAt}
                </Moment></span>
    </div>
    <div className="col-md-4"></div>
    <div className="col-md-4 forum-report"><EyeOff />&nbsp;Report</div>
    </div>
    <br/>
    <span className="content" dangerouslySetInnerHTML={{__html: content}}></span>
    </div>
    
    </div>
    </div>
    </div>
    <div className="col-md-2">
    </div>
 </div>
    <CommentList reply={replies}/>
    <NewComment parentForum={this.state.id} callBack={this.updateComment}/>
<Footer />
</div>
        
    }
}