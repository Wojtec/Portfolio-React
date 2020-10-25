import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Head from 'next/head';

const BaseLayout = (props) => {
const { children, className, isAuthenticated, user } = props;
const  headerType  = props.headerType || 'default';

    return(
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="57x57" href="images/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="images/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="images/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="images/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="images/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="images/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="images/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="images/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png"/>
                <link rel="manifest" href="images/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="images/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
                <title>W. Poninski</title>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <script dangerouslySetInnerHTML={{ __html: `(function(v,i,s,a){if(!v._visaSettings){v._visaSettings={};}v._visaSettings["e0746b85-155a-11eb-b589-901b0edac50a"]={v:"0.3",s:"e0746b85-155a-11eb-b589-901b0edac50a",a:"1"};_v=i.getElementsByTagName("head")[0];_a=_v;_i=i.createElement("script");_s=_i;_s.defer="defer";_s.src=s+a+v._visaSettings["e0746b85-155a-11eb-b589-901b0edac50a"].v;_a.appendChild(_s);})(window,document,"//app-worker.visitor-analytics.io/main",".js?s=e0746b85-155a-11eb-b589-901b0edac50a&v=") `}} />
            </Head>
            <div className="layout-container">
                <Header className={`port-nav-${headerType}`} isAuthenticated={ isAuthenticated } user={user}/>
                <div className="wrapper">
                    <main className={`cover ${className}`}>
                            {children}
                    </main>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default BaseLayout;