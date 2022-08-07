import React, { useState, useEffect } from "react"
import Logo from "../../assets/logo.png"
import ProfileIcon from "../../assets/profile-icon.png"
import Image1 from "../../assets/image-1.png"
import Footer from "../../components/Footer"
import {
	singlePropertyDetail,
	allSellProperties,
} from "../../Redux/Thunk/Property"
import { connect, createDispatchHook } from "react-redux"
import propertyReducer from "../../Redux/Reducers/propertyReducer"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { plotsDataFetch, commercialDataFetch } from "../../Redux/Thunk/homePage"
import PaginatedItems from "../../components/Pagination/PaginatedItems"
import Plots from "../Plots"

// import { useLocation } from "react-router-dom"
const FormsTwo = ({
	plotsDataFetch,
	plotsData,
	singlePropertyDetail,
	PageRefresh,
	props,
	allSellProperties,
	sellPropertyList,
}) => {
	let navigate = useNavigate()
	useEffect(() => {
		allSellProperties()
	}, [])

	window.onpopstate = () => {
		console.log("On pop stae")
		PageRefresh()
	}

	const getPropertyDetail = (id) => {
		console.log("id from func plots", id)
		singlePropertyDetail(id, navigate)
		console.log("func caleeeed plots")
	}
	const plot = sellPropertyList?.data
	console.log("propertyDetail in FormsTwo data===", plot && plot)
	console.log(plot, "plotssss")
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
														{plot !== undefined && (
															<PaginatedItems
																itemsPerPage={6}
																cardDetail={plot}
																type={"plot"}
																func={getPropertyDetail}
															/>
														)}
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
	let { sellPropertyList } = state.propertyReducer

	console.log("full state", state)
	return {
		sellPropertyList,
		PageRefresh,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		allSellProperties: () => dispatch(allSellProperties()),

		singlePropertyDetail: (id, navigate) =>
			dispatch(singlePropertyDetail(id, navigate)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(FormsTwo)
