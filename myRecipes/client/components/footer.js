import React from 'react';
import { Footer as FooterMDL, FooterSection, FooterLinkList } from 'react-mdl';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<FooterMDL size="mini">
    		<FooterSection type='left' logo='Welcome to my site'>
    			<FooterLinkList>
    				<a href="#">Help</a>
    				<a href="#">Privacy % Terms</a>
    			</FooterLinkList>
    		</FooterSection>
    	</FooterMDL>
    );
  }
}
