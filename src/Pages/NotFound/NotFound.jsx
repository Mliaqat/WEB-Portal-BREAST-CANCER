import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundStyle } from './NotFound.style'

function NotFound() {
    return (
        <NotFoundStyle>
        <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-12 d-flex justifi-content-center">
		<div class="offset-1  col-10  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<Link to="/" class="link_404">Go to Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
          </NotFoundStyle>
    )
}

export default NotFound
