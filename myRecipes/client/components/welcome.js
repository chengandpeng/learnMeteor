import React from 'react';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<ul className='welcome-ul'>
      		<li className='animated bounceInLeft'>
      			<div>1</div>
      			<p>Sign In or Sign Up To Start Using <strong>MyRecipe</strong></p>
      		</li>
      		<li className='animated bounceInLeft animate2'>
      			<div>2</div>
      			<p>Add Your Favorite Recipe.</p>
      		</li>
      		<li className='animated bounceInLeft animate3'>
      			<div>3</div>
      			<p>Select Recipes For Menu.</p>
      		</li>
      		<li className='animated bounceInLeft animate4'>
      			<div>4</div>
      			<p>Check Shopping List and Enjoy Yourself.</p>
      		</li>
      	</ul>
      </div>
    );
  }
}
