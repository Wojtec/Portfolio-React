import React, { Component } from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slateEditor/Editor';
class BlogEditor extends Component {
    
    render() {
        return (
                <BaseLayout {...this.props.auth}>
                    <BasePage className="blog-editor-page" title="Write your story">
                    
                    <SlateEditor/>
                    </BasePage>
                </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(BlogEditor);

