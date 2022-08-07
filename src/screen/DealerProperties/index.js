import React, { useState, useEffect } from "react"
import Logo from "../../assets/logo.png"
import ProfileIcon from "../../assets/profile-icon.png"
import Image1 from "../../assets/image-1.png"
import Footer from "../../components/Footer"
import {
	allPropertiesDealerList
} from "../../Redux/Thunk/Property"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import PaginatedItems from "../../components/Pagination/PaginatedItems"


const DealerProperties = ({
	PageRefresh,
    dealerPropertyDetail,
    allPropertiesDealerList
}) => {
	let navigate = useNavigate()
	useEffect(() => {
		allPropertiesDealerList()
	}, [])

	window.onpopstate = () => {
		console.log("On pop stae")
		PageRefresh()
	}

	const getPropertyDetail = (id) => {
		console.log("id from func plots", id)
		// singlePropertyDetail(id, navigate)
		console.log("func caleeeed plots")
	}
	const plot = dealerPropertyDetail 
	console.log("propertyDetail in dealerr", plot)


	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav className="navbar navbar-expand-lg navbar-light navigation">
							<a className="navbar-brand" href="/">
								<img src={Logo} alt="" />
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav ml-auto main-nav ">
									<li className="nav-item active">
										<a
											className="nav-link"
											href=""
											onClick={() => {
												navigate("/")
												PageRefresh()
											}}
										>
											Home
										</a>
									</li>
									<li className="nav-item ">
										<a
											className="nav-link"
											href=""
											onClick={() => {
												navigate("/formsTwo/plot")
												PageRefresh()

											}}
										>
											Plot
										</a>
									</li>
									<li className="nav-item ">
										<a
											className="nav-link"
											href=""
											onClick={() => {
												navigate("/formsTwo/commercial")
												PageRefresh()

											}}
										>
											Commercial
										</a>
									</li>
									<li className="nav-item ">
										<a
											className="nav-link"
											href="#"
											onClick={() => {
												navigate("/formsTwo")
											}}
										>
											Rent
										</a>
									</li>

									<li className="nav-item">
										<img
											className=" "
											style={{ maxWidth: "150%" }}
											src={ProfileIcon}
											alt="product-img"
										/>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>

			<div className="div ">
				{/* <!-- Container Start --> */}
				<div className="container">
					<div className="row">
						{/* <!-- Left sidebar --> */}
						<div className="col-md-12">
							<div className="product-details">
								<div className="">
									<div className="">
										<div className="margin-top-15">
											<h3 className="tab-title">Dealer Properties</h3>
											<div className="row margin-bottom-15">
												<div className="col-md-8 col-12">
													<div className="row">
														{/* {dealerPropertyDetail !== undefined && 
						<PaginatedItems itemsPerPage={6} cardDetail={plot} type={"dealerProperty"} func = {getPropertyDetail}/>
					} */}

													</div>
												</div>
												<div className="col-md-4 col-12">
													<div className="row">
														<div className="col-md-12  margin-bottom-15">
															<button
																type="submit"
																className="d-block p-4 w-100 my-3 bg-primary text-white border-0 rounded mt-3"
															>
																Get the latest update about properties
															</button>
															<div className="card">
																<img
																	className="card-img"
																	src={Image1}
																	alt="Vans"
																/>
															</div>
														</div>
														<div className="col-md-12 margin-top-15 margin-bottom-15">
															<div className="card">
																<img
																	className="card-img"
																	src={Image1}
																	alt="Vans"
																/>
															</div>
														</div>
														<div className="col-md-12 margin-top-15 margin-bottom-15">
															<div className="card">
																<img
																	className="card-img"
																	src={Image1}
																	alt="Vans"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Container End --> */}
			<Footer />
		</>
	)
}

const mapStateToProps = (state) => {
	let PageRefresh = state.PageRefresherReducer.PageRefresher
	console.log(PageRefresh, "PageRefresh in Plots")
	let {dealerPropertyDetail} = state.propertyReducer


	console.log("full state", state)
	return {
		PageRefresh,
        dealerPropertyDetail
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		allPropertiesDealerList: () => dispatch(allPropertiesDealerList()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(DealerProperties)
