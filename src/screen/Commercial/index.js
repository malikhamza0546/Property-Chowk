import React, { useState, useEffect } from "react"
import Logo from "../../assets/logo.png"
import ProfileIcon from "../../assets/profile-icon.png"
import Image1 from "../../assets/image-1.png"
import Footer from "../../components/Footer"
import {
	allPropertiesList,
	singlePropertyDetail,
} from "../../Redux/Thunk/Property"
import { connect, createDispatchHook } from "react-redux"
import propertyReducer from "../../Redux/Reducers/propertyReducer"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { plotsDataFetch, commercialDataFetch } from "../../Redux/Thunk/homePage"
import PaginatedItems from "../../components/Pagination/PaginatedItems"


const FormsTwo = ({
	allProperties,
	propertyDetail,
	plotsDataFetch,
	commercialDataFetch,
	plotsData,
	commercialData,
	singlePropertyDetail,
	PageRefresh,
}) => {
	let navigate = useNavigate()
	const [allProperty, setAllProperty] = useState()
	const cardData = propertyDetail?.data

	const commercial = commercialData?.property && commercialData?.property

	window.onpopstate = () => {
		console.log("On pop stae")
		PageRefresh()
	}

	window.onpopstate = () => {
		console.log("On pop stae")
		PageRefresh()
	}

	useEffect(() => {
		console.log("commercial componoent api")
		commercialDataFetch()
	}, [])

	const getPropertyDetail = (id) => {
		console.log("id from func", id)
		singlePropertyDetail(id, navigate)
		console.log("func caleeeed")
	}
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
											}}
										>
											Commercial
										</a>
									</li>
									<li className="nav-item ">
										<a
											className="nav-link"
											href="#"
											// onClick={() => {
											// 	navigate("/formsTwo")
											// }}
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
											<h3 className="tab-title">Add Property</h3>
											<div className="bg-blue padding-15">
												<h6 style={{ color: "white", margin: "0px" }}>
													Property Type
												</h6>
											</div>
											<div
												className="row  margin-bottom-15"
												style={{ marginRight: "0px", marginLeft: "0px" }}
											>
												<div className="col-md-2 col-12 border margin-right-20 margin-top-15">
													<lable
														className="opacity-40 "
														style={{ fontSize: "13px" }}
													>
														Purpose
													</lable>
													<select className=" form-control p-2 w-100 my-2 no-border height-45">
														<option>Buy</option>
														<option value="1">Sell</option>
													</select>
												</div>
												<div className="col-md-4 col-12 border margin-right-20 margin-top-15">
													<lable
														className="opacity-40 "
														style={{ fontSize: "13px" }}
													>
														Purpose
													</lable>
													<div className="filter-range margin-top-15">
														<div className="filter-range-title">
															<div className="">
																<label className=" min-price">
																	<input
																		className="slider-space"
																		type="number"
																		name="min-price"
																		value="1000"
																	/>
																</label>
																<lable className="padding-left-15 ">to</lable>
																<label className="max-price padding-left-15">
																	<input
																		className="slider-space align-self-center"
																		type="number"
																		name="max-price"
																		value="1000"
																	/>
																</label>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-2 col-12 border margin-right-20 margin-top-15">
													<lable
														className="opacity-40 "
														style={{ fontSize: "13px" }}
													>
														City
													</lable>
													<select className=" form-control p-2 w-100 my-2 no-border height-45">
														<option>Islamabad</option>
														<option value="1">Rawalpindi</option>
													</select>
												</div>
												<div className="col-md-3 col-12 border margin-right-20 margin-top-15">
													<lable
														className="opacity-40 "
														style={{ fontSize: "13px" }}
													>
														Property Type
													</lable>
													<select className=" form-control p-2 w-100 my-2 no-border height-45">
														<option>Home</option>
														<option value="1">Appartment</option>
													</select>
												</div>
												<div className="col-md-4 col-12 border margin-right-20 margin-top-15">
													<lable
														className="opacity-40 "
														style={{ fontSize: "13px" }}
													>
														Area(Marla)
													</lable>
													<div className="filter-range margin-top-15">
														<div className="filter-range-title">
															<div className="">
																<label className=" min-price">
																	<input
																		className="slider-space"
																		type="number"
																		name="min-price"
																		value="0"
																	/>
																</label>
																<lable className="padding-left-15 ">to</lable>
																<label className="max-price padding-left-15">
																	<input
																		className="slider-space align-self-center"
																		type="number"
																		name="max-price"
																		value="0"
																	/>
																</label>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-2 col-12 border margin-right-20 margin-top-15">
													<lable
														className="opacity-40 "
														style={{ fontSize: "13px" }}
													>
														Bed
													</lable>
													<select className=" form-control p-2 w-100 my-2 no-border height-45">
														<option>5</option>
														<option value="1">2</option>
													</select>
												</div>
												<div className="col-md-3 col-12 border margin-right-20 margin-top-15">
													<lable
														className="opacity-40 "
														style={{ fontSize: "13px" }}
													>
														Bath
													</lable>
													<select className=" form-control p-2 w-100 my-2 no-border height-45">
														<option>1</option>
														<option value="1">2</option>
													</select>
												</div>
												<div className="col-md-2 col-12 border margin-right-20 margin-top-15">
													<lable
														className="opacity-40 "
														style={{ fontSize: "13px" }}
													>
														Society
													</lable>
													<select className=" form-control p-2 w-100 my-2 no-border height-45">
														<option>Society1</option>
														<option value="1">Society2</option>
													</select>
												</div>
											</div>
											<div className="row margin-bottom-15">
												<div className="col-md-12">
													<h6>Features</h6>
												</div>

												<div className="col-md-3 col-3 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Gass </label>
													</div>
												</div>

												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Electricity</label>
													</div>
												</div>
												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Cornor</label>
													</div>
												</div>
												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Near Masjid</label>
													</div>
												</div>
												<div className="col-md-3 col-3 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Lawn </label>
													</div>
												</div>

												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Near School</label>
													</div>
												</div>
												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Tv Lounge</label>
													</div>
												</div>
												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Near Market</label>
													</div>
												</div>
												<div className="col-md-3 col-3 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Pool </label>
													</div>
												</div>

												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Balcony</label>
													</div>
												</div>
												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Kitchen</label>
													</div>
												</div>
												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Near Park</label>
													</div>
												</div>
												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Dining Room</label>
													</div>
												</div>
												<div className="col-md-3 col-5 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<input
															type="checkbox"
															id="444"
															name="checkbox"
															checked=""
														/>
														<label for="444">Darwing Room</label>
													</div>
												</div>
											</div>
											<div className="row margin-bottom-15">
												<div className="col-md-12">
													<h6 className="margin-top-30">
														18000 Properties in Islamabad
													</h6>
													<div className="margin-top-30">
														<div className="nav-tabs-horizontal border">
															<ul
																className="nav nav-tabs font-weight-600"
																data-plugin="nav-tabs"
																role="tablist"
															>
																<li
																	style={{ padding: "15px" }}
																	className="active"
																	role="presentation"
																>
																	<a
																		data-toggle="tab"
																		href=".tab-List"
																		role="tab"
																		aria-expanded="true"
																	>
																		Home (8920)
																	</a>
																</li>

																<li
																	style={{ padding: "15px" }}
																	role="presentation"
																	className=""
																>
																	<a
																		data-toggle="tab"
																		href=".tab-Types"
																		role="tab"
																		aria-expanded="false"
																	>
																		Flats (17283)
																	</a>
																</li>
																<li
																	style={{ padding: "15px" }}
																	role="presentation"
																	className=""
																>
																	<a
																		data-toggle="tab"
																		href=".tab-Type1"
																		role="tab"
																		aria-expanded="false"
																	>
																		Plots (6723){" "}
																	</a>
																</li>
															</ul>
															<div className="tab-content padding-top-20">
																<div
																	className="tab-pane  tab-List active"
																	role="tabpanel"
																>
																	<div className="row">
																		<div className="col-md-12">
																			<table
																				className="table margin-bottom-0 table-bordered1     table-condensed"
																				style={{ fontSize: "12px" }}
																			>
																				<tbody>
																					<tr>
																						<td> I-8 (10)</td>
																						<td> I-8 (10)</td>
																						<td> I-8 (10)</td>
																					</tr>
																					<tr>
																						<td> Shah Allah Ditta(18)</td>
																						<td> Shah Allah Ditta(18)</td>
																						<td> Shah Allah Ditta(18)</td>
																					</tr>
																					<tr>
																						<td> Naval Anchorage(23)</td>
																						<td> Naval Anchorage(23)</td>
																						<td> Naval Anchorage(23)</td>
																					</tr>
																					<tr>
																						<td> Madina Town(15)</td>
																						<td> Madina Town(15)</td>
																						<td> Madina Town(15)</td>
																					</tr>
																					<tr>
																						<td>
																							{" "}
																							National Police Foundation(12)
																						</td>
																						<td>
																							{" "}
																							National Police Foundation(12)
																						</td>
																						<td>
																							{" "}
																							National Police Foundation(12)
																						</td>
																					</tr>
																					<tr>
																						<td> Islamabad Expressway(82)</td>
																						<td> Islamabad Expressway(82)</td>
																						<td> Islamabad Expressway(82)</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
																<div
																	className="tab-pane tab-Types"
																	role="tabpanel"
																>
																	<div className="row">
																		<div className="col-md-12">
																			<table
																				className="table margin-bottom-0 table-bordered1     table-condensed   "
																				style={{ fontSize: "12px" }}
																			>
																				<tbody>
																					<tr>
																						<td> I-8 (10)</td>
																						<td> I-8 (10)</td>
																						<td> I-8 (10)</td>
																					</tr>
																					<tr>
																						<td> Shah Allah Ditta(18)</td>
																						<td> Shah Allah Ditta(18)</td>
																						<td> Shah Allah Ditta(18)</td>
																					</tr>
																					<tr>
																						<td> Naval Anchorage(23)</td>
																						<td> Naval Anchorage(23)</td>
																						<td> Naval Anchorage(23)</td>
																					</tr>
																					<tr>
																						<td> Madina Town(15)</td>
																						<td> Madina Town(15)</td>
																						<td> Madina Town(15)</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>

																<div
																	className="tab-pane tab-Type1"
																	id=""
																	role="tabpanel"
																>
																	<div className="row">
																		<div className="col-md-12">
																			<table
																				className="table margin-bottom-0 table-bordered1     table-condensed   "
																				style={{ fontSize: "12px" }}
																			>
																				<tbody>
																					<tr>
																						<td> Naval Anchorage(23)</td>
																						<td> Naval Anchorage(23)</td>
																						<td> Naval Anchorage(23)</td>
																					</tr>
																					<tr>
																						<td> Madina Town(15)</td>
																						<td> Madina Town(15)</td>
																						<td> Madina Town(15)</td>
																					</tr>
																					<tr>
																						<td>
																							{" "}
																							National Police Foundation(12)
																						</td>
																						<td>
																							{" "}
																							National Police Foundation(12)
																						</td>
																						<td>
																							{" "}
																							National Police Foundation(12)
																						</td>
																					</tr>
																					<tr>
																						<td> Islamabad Expressway(82)</td>
																						<td> Islamabad Expressway(82)</td>
																						<td> Islamabad Expressway(82)</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
															</div>
															<div className="text-center">
																<p
																	className=""
																	style={{ color: "rgb(8, 197, 245)" }}
																>
																	<a>View All Location in Islamabad</a>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="row margin-bottom-15">
												<div className="col-md-8 col-12">
													<div className="row">
													{commercial !== undefined && 

						<PaginatedItems itemsPerPage={6} cardDetail={commercial} type={"commercial"} func={getPropertyDetail}/>
													}
														{/* {commercial &&
															commercial?.map((card) => (
																<div className="col-md-4 margin-top-15 margin-bottom-15">
																	<div className="card">
																		<img
																			className="card-img"
																			src={card.image}
																			alt="Vans"
																		/>
																		<div
																			className="card-img-overlay  "
																			style={{ padding: "0rem" }}
																			onClick={() => {
																				alert("asdf")
																			}}
																		>
																			<a
																				href="#"
																				className="btn-small btn-danger mt-3"
																				style={{ display: "inline" }}
																			>
																				{" "}
																				{card?.propertyType?.featured}
																			</a>
																		</div>
																		<div className=" d-flex ">
																			<a
																				href="#"
																				className="btn-small btn-danger "
																				style={{ marginTop: "-33px" }}
																			>
																				{" "}
																				<span className="">
																					{card?.rooms}
																				</span>{" "}
																				<i className="ri-camera-line"></i>
																			</a>
																		</div>
																		<div className="card-img-overlay d-flex justify-content-end">
																			<a
																				href="#"
																				className="card-link text-danger like"
																			>
																				<i className="ri-heart-line"></i>
																			</a>
																		</div>

																		<div className="text-center">
																			<a
																				// href=""
																				// className="btn-small btn-primary mt-3"
																				className="stretched-link btn-small btn-primary mt-3"
																				onClick={() => {
																					getPropertyDetail(card?._id)
																				}}
																			>
																				Detailss
																			</a>
																		</div>
																		<div className="card-body">
																			<h4 className="card-title">
																				PKR 2.50 Crore
																			</h4>
																			<h6 className="card-subtitle mb-2 text-muted">
																				I-8 Islamabad
																			</h6>
																			<ul className="list-inline margin-top-25">
																				<li className="list-inline-item margin-right-5">
																					<a>
																						<i className="ri-hotel-bed-line"></i>
																						<span className="margin-left-5 ">
																							4
																						</span>{" "}
																					</a>
																				</li>
																				<li className="list-inline-item margin-right-5">
																					<a>
																						<i className="ri-heavy-showers-line"></i>{" "}
																						<span className="margin-left-5 ">
																							3
																						</span>
																					</a>
																				</li>
																				<li className="list-inline-item margin-right-5">
																					<a>
																						<i className="ri-fullscreen-fill"></i>
																						<span className="margin-left-5 ">
																							5987 sqft
																						</span>
																					</a>
																				</li>
																			</ul>
																			<div
																				className="card-img-overlay  "
																				style={{
																					padding: "0rem",
																				}}
																			>
																				<a
																					onClick={() => {
																						navigate("/details")
																					}}
																					href="#"
																					className="btn-small btn-primary mt-3"
																				>
																					{" "}
																					Call
																				</a>
																				<a
																					href="#"
																					className="btn-small btn-primary mt-3"
																				>
																					{" "}
																					Email
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
															))} */}
														
{/* 
														<div className="col-md-12 margin-top-30">
															<nav aria-label="Page navigation example ">
																<ul className="pagination justify-content-center">
																	<li className="page-item active">
																		<a className="page-link" href="#">
																			1
																		</a>
																	</li>
																	<li className="page-item">
																		<a className="page-link" href="#">
																			2
																		</a>
																	</li>
																	<li className="page-item">
																		<a className="page-link" href="#">
																			3
																		</a>
																	</li>
																	<li className="page-item">
																		<a className="page-link" href="#">
																			4
																		</a>
																	</li>
																	<li className="page-item">
																		<a className="page-link" href="#">
																			5
																		</a>
																	</li>
																	<li className="page-item">
																		<a className="page-link" href="#">
																			6
																		</a>
																	</li>
																</ul>
															</nav>
														</div> */}
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
	let { propertyDetail } = state.propertyReducer
	let { plotsData, commercialData } = state.popularCitiesReducers
	let PageRefresh = state.PageRefresherReducer.PageRefresher

	console.log("full state", state)
	return {
		propertyDetail,
		plotsData,
		commercialData,
		PageRefresh,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		singlePropertyDetail: (id, navigate) =>
			dispatch(singlePropertyDetail(id, navigate)),
		allProperties: () => dispatch(allPropertiesList()),
		plotsDataFetch: () => dispatch(plotsDataFetch()),
		commercialDataFetch: () => dispatch(commercialDataFetch()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(FormsTwo)
