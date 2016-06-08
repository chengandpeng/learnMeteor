import React from 'react';
import { Footer as FooterMDL, FooterSection, FooterLinkList } from 'react-mdl';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<FooterMDL size="mini" style={{zIndex: '999'}} >
    		<FooterSection type='left' logo='Welcome To My Recipes'>
    			<FooterLinkList>
    				<a href="https://github.com/chengandpeng/learnMeteor/tree/master/myRecipes" target='_blank'>Github</a>
    			</FooterLinkList>
    		</FooterSection>
    	</FooterMDL>
    );
  }
}
