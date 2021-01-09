import React, { component } from 'react';

export default class Default extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-center text-uppercase pt-5">

						<h1 className="display-3"> 404</h1>
						<h1> Error </h1>
						<h2> Page Not Found </h2>
						<h3> The Reuested URL 
							
							<span className="text-danger">
								{this.props.location.pathname}
							</span>
							{" "}
							was not Found
							</h3>

					</div>
				</div>
			</div >

		)
	}
}   