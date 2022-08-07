import { React } from "react"
import Logo from "../../assets/logo.png"
import ProfileIcon from "../../assets/profile-icon.png"
import Footer from "../../components/Footer"
import { connect } from "react-redux"
import PaginatedItems from "../../components/Pagination/PaginatedItems"
import { allPropertiesList } from "../../Redux/Thunk/Property"
import axios from "axios"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	useLocation,
	useNavigate,
} from "react-router-dom"
import { useEffect, useState } from "react"

const Details = ({
	propertyDetail,
	allPropertiesList,
	singleProperty,
	allProperties,
	props,
	route,
}) => {
	const navigate = useNavigate()
	console.log(
		"property detail from detail comp",
		allProperties && allProperties.property
	)
	console.log(route?.params, "route.params")
	console.log(
		"property detail from detail com atitleppp",
		singleProperty && singleProperty
	)

	const paginationData = allProperties && allProperties?.property

	useEffect(() => {
		allPropertiesList()
	}, [])

	const APICall = () => {
		axios
			.post(`http://52.77.156.101:8000//api/v1/property/send/mail/`, UserInfo)
			.then((res) => {
				console.log(" login response....??>>>??>>", res)

				// Notification("success", "Login Successfull")
				// window.location.reload()
			})
			.catch((error) => {
				console.log(" errorr response", error.message)

				// Notification("error", "Login Failed")
			})
	}

	const [UserInfo, setUserInfo] = useState({
		Name: "",
		email: "",
		PhoneNumber: "",
		message: "",
	})

	const handlerForName = (e) => {
		setUserInfo({
			...UserInfo,
			Name: e.target.value,
		})
	}
	const handlerForEmail = (e) => {
		setUserInfo({
			...UserInfo,
			email: e.target.value,
		})
	}
	const handlerForPhoneNumber = (e) => {
		setUserInfo({
			...UserInfo,
			PhoneNumber: e.target.value,
		})
	}
	const handlerFormessage = (e) => {
		setUserInfo({
			...UserInfo,
			message: e.target.value,
		})
	}

	const handlePost = (e) => {
		e.preventDefault()
		console.log(UserInfo, "UserInfo in handle post ")
		APICall()
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
											onClick={() => {
												navigate("/formsTwo/commercial")
											}}
										>
											Commercial
										</a>
									</li>
									<li className="nav-item ">
										<a className="nav-link" href="index.html">
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

			<div className="div">
				{/* <!-- Container Start --> */}
				<div className="container">
					<div className="row">
						{/* <!-- Left sidebar --> */}
						<div className="col-md-8">
							<div className="product-details">
								<h1 className="product-title">
									{singleProperty && singleProperty.property_title}
								</h1>

								{/* <!-- product slider --> */}
								<div className="margin-top-30">
									<img
										className="img-fluid w-100"
										src={
											singleProperty.images &&
											singleProperty.images.length !== 0
												? singleProperty?.images[0]
												: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg"
										}
										alt="product-img"
									/>
									<ul className="list-inline margin-top-25">
										<li className="list-inline-item margin-right-5">
											<a>
												<i className="ri-hotel-bed-line"></i>
												<span className="margin-left-5 margin-right-15">
													4
												</span>{" "}
											</a>
										</li>
										<li className="list-inline-item margin-right-5">
											<a>
												<i className="ri-heavy-showers-line"></i>{" "}
												<span className="margin-left-5 margin-right-15">3</span>
											</a>
										</li>
										<li className="list-inline-item margin-right-5">
											<a>
												<i className="ri-fullscreen-fill"></i>
												<span className="margin-left-5 margin-right-15">
													5987 sqft
												</span>
											</a>
										</li>
									</ul>
								</div>

								{/* <!-- product slider --> */}

								<div className="">
									<div className="">
										<div className="margin-top-15">
											<h3 className="tab-title">Overview</h3>
											<div className="bg-blue padding-15">
												<h6 style={{ color: "white", margin: "0px" }}>
													Discreption
												</h6>
											</div>
											<div className="padding-15">
												<h6>Miller Real Estate</h6>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing
													elit. Officia laudantium beatae quod perspiciatis,
													neque dolores eos rerum, ipsa iste cum culpa numquam
													amet provident eveniet pariatur, sunt repellendus quas
													voluptate dolor cumque autem molestias. Ab quod
													quaerat molestias culpa eius, perferendis facere vitae
													commodi ?
												</p>
											</div>
											<div className="bg-blue padding-15">
												<h6 style={{ color: "white", margin: "0px" }}>
													Details
												</h6>
											</div>
											<div className="padding-15">
												<div className="row">
													<div className="col-md-6">
														<table
															className="table margin-bottom-0 table-bordered1     table-condensed   "
															style={{ fontSize: "13px" }}
														>
															<tbody>
																<tr>
																	<td> Property Type</td>
																	<td> House</td>
																</tr>
																<tr>
																	<td> City</td>
																	<td> Islamabad</td>
																</tr>
																<tr>
																	<td> Area</td>
																	<td> 1 kanal</td>
																</tr>
																<tr>
																	<td> Floor</td>
																	<td> 2</td>
																</tr>
																<tr>
																	<td> Address</td>
																	<td> House no-129 Area DHA</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className="col-md-6">
														<table
															className="table margin-bottom-0 table-bordered1     table-condensed   "
															style={{ fontSize: "13px" }}
														>
															<tbody>
																<tr>
																	<td> Bathroom</td>
																	<td> 4</td>
																</tr>
																<tr>
																	<td> Rooms</td>
																	<td> 5</td>
																</tr>
																<tr>
																	<td> Property Title</td>
																	<td> Prime</td>
																</tr>
																<tr>
																	<td> Property number</td>
																	<td> 22423</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<div className="bg-blue padding-15">
												<h6 style={{ color: "white", margin: "0px" }}>
													Details
												</h6>
											</div>
											<div className="padding-15">
												<div className="row">
													<div className="col-md-6">
														<table
															className="table margin-bottom-0 table-bordered1     table-condensed   "
															style={{ fontSize: "11px" }}
														>
															<tbody>
																<tr>
																	{/* {singleProperty && singleProperty?.propertyType?.Features?.map(()=>(
																		<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Gass</label>
																		</div>
																	</td>
																	))} */}
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Gass</label>
																		</div>
																	</td>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Electricity </label>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Lawn </label>
																		</div>
																	</td>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Near Mosque </label>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Near Market </label>
																		</div>
																	</td>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">TV Lounge </label>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className="col-md-6">
														<table
															className="table margin-bottom-0 table-bordered1     table-condensed   "
															style={{ fontSize: "11px" }}
														>
															<tbody>
																<tr>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Corner House</label>
																		</div>
																	</td>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Water </label>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Dining Room </label>
																		</div>
																	</td>
																	<td>
																		<div
																			className="checkbox-custom checkbox-inline1 checkbox-warning"
																			style={{ fontSize: "2.5em" }}
																		>
																			<input
																				type="checkbox"
																				id="444"
																				name="checkbox"
																				checked=""
																			/>
																			<label for="444">Store Room </label>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<div className="bg-blue padding-15">
												<h6 style={{ color: "white", margin: "0px" }}>
													Agent Details
												</h6>
											</div>
											<div className="padding-15">
												<div className="row">
													<div className="col-md-6">
														<table
															className="table margin-bottom-0 table-bordered1     table-condensed   "
															style={{ fontSize: "13px" }}
														>
															<tbody>
																<tr>
																	<td> Agent Name</td>
																	{/* <td>{singleProperty && singleProperty?.agent?.name}</td> */}
																	<td>Jack Aniston</td>
																</tr>
																<tr>
																	<td> Agent Phone No</td>
																	{/* <td> {singleProperty && singleProperty?.agent?.phone}</td> */}
																	<td> +92 989 898 7</td>
																</tr>
																<tr>
																	<td> Email</td>
																	{/* <td>{singleProperty && singleProperty?.agent?.email}</td> */}
																	<td>zack@gmail.com</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className="col-md-6">
														<div className="">
															<div className="">
																<div className="row justify-content-center">
																	{" "}
																	<img
																		src="https://i.imgur.com/gazoShk.jpg"
																		className="img-fluid"
																		style={{ width: "140px" }}
																	/>{" "}
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
						<div className="col-md-4 text-right">
							<div>
								<a
									href=""
									className="btn btn-contact  btn-danger  my-1"
									style={{
										paddingLeft: "50px",
										paddingRight: "50px",
										paddingTop: "17px",
										paddingBottom: "17px",
									}}
								>
									Super Hot
								</a>
							</div>
							<div className="sidebar">
								{/* <!-- User Profile widget --> */}
								<div
									className="widget user text-center"
									style={{ paddingTop: "14px", paddingBottom: "36px" }}
								>
									<img
										className="rounded-circle img-fluid mb-5 px-5"
										src="images/user/user-thumb.jpg"
										alt=""
									/>
									<h4> PKR 2.50 Crore</h4>
									<button
										type="submit"
										className="d-block p-3 py-4 w-100 my-2 bg-primary text-white border-0 rounded font-weight-bold mt-3"
									>
										Call
									</button>

									<div className="">
										<form onSubmit={handlePost}>
											<fieldset className="input-left">
												<input
													value={UserInfo.Name}
													onChange={handlerForName}
													type="text"
													placeholder="Name"
													className="border p-3 w-100 my-2 py-4"
												/>
												<input
													value={UserInfo.Email}
													onChange={handlerForEmail}
													type="text"
													placeholder="Email"
													className="border p-3 w-100 my-2 py-4"
												/>
												<input
													value={UserInfo.PhoneNumber}
													onChange={handlerForPhoneNumber}
													type="phone"
													placeholder="Phone Number"
													className="border p-3 w-100 my-2 py-4"
												/>
												<input
													value={UserInfo.message}
													onChange={handlerFormessage}
													type="text"
													placeholder="Message"
													className="border p-3 w-100 my-2 py-4"
												/>

												<button
													type="submit"
													className="d-block p-3 py-4 w-100 my-2 bg-primary text-white border-0 rounded font-weight-bold mt-3"
												>
													Send Email
												</button>
											</fieldset>
										</form>
									</div>
								</div>
							</div>
							<div className="sidebar" style={{ marginTop: "93px" }}>
								{/* <!-- User Profile widget --> */}
								<div className="widget user text-center">
									<img
										className="rounded-circle img-fluid mb-5 px-5"
										src="images/user/user-thumb.jpg"
										alt=""
									/>
									<h4> Quick Links</h4>
									<ul className="">
										<li className="">
											<p>Property for rent in islamabad</p>
										</li>
										<li className="">
											<p>Property for rent in islamabad</p>
										</li>
										<li className="">
											<p>Property for rent in islamabad</p>
										</li>
										<li className="">
											<p>Property for rent in islamabad</p>
										</li>

										<li className="">
											<p>Property for rent in islamabad</p>
										</li>
										<li className="">
											<p>Property for rent in islamabad</p>
										</li>
										<li className="">
											<p>Property for rent in islamabad</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="row">
						{paginationData !== undefined && (
							<PaginatedItems
								itemsPerPage={6}
								cardDetail={paginationData}
								type={"details"}
							/>
						)}
					</div>
				</div>
				{/* <!-- Container End --> */}
			</div>
			<div className="Pagination"></div>
			<Footer />
		</>
	)
}

// export default Details

const mapStateToProps = (state) => {
	let { propertyDetail, singleProperty, allProperties } = state.propertyReducer

	return {
		propertyDetail,
		singleProperty,
		allProperties,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		// popularCity: () => dispatch(popularCityStat()),
		allPropertiesList: () => dispatch(allPropertiesList()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)
