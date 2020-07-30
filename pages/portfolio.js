import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import axios from 'axios';

class Portfolio extends Component {
    static async getInitialProps() {
        let posts = [];
        try{
            const response = await  axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch(err){
            console.log(err);
        }
        
        return {posts: posts.splice(0, 10)};
    }
    renderPosts(posts){
        return ( posts.map(post => 

                <li key={post.id}>
                <Link as={`/about/${post.id}`} href="/about/[id]">
                     <a>{post.title}</a>
                </Link>
                </li>
           

            )
        )
    }
    render(){ 
        const { posts } = this.props;
        return(
            <>
            <BaseLayout>
                <h1>Hi im Portfolio...</h1>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
            </>
        )
    }
}

export default Portfolio;