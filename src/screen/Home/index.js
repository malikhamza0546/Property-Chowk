import React, { useEffect, useState } from "react"
import "font-awesome/css/font-awesome.min.css"
// import "../../App.css";
import Logo from "../../assets/logo.png"
import ProfileIcon from "../../assets/profile-icon.png"
import building from "../../assets/building.png"
import Image11 from "../../assets/products/img11.png"
import PhoneIcon from "../../assets/products/phone-icon.png"
import Phone from "../../assets/products/phone.png"
import Email from "../../assets/products/email.png"
import Img12 from "../../assets/products/IMG12.png"
import App_Store from "../../assets/products/app-store_google-play.png"
import QR from "../../assets/products/qr.png"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"
import { popularCityStat } from "../../Redux/Thunk/homePage"
import { filterSingleProperty } from "../../Redux/Thunk/Property"
import { PageRefresherAction } from "../../Redux/Actions/PageRefreshAction"
import { useNavigate, Link } from "react-router-dom"
import Carousel from "react-elastic-carousel"
import { CarouselData } from "../../Redux/Thunk/homePage"
import Loader from "../../components/Loader"
import { myProfileData } from "../../Redux/Thunk/auth"

// login
import Input from "../../components/FromInput/Input"
import { loginUser, signUpUser } from "../../Redux/Thunk/auth"

import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
// import Box from "@material/material/Box";
import Box from "@material-ui/core/Box"
import Login from "../Login"

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
	paper: {
		position: "absolute",
		width: 600,
		backgroundColor: theme.palette.background.paper,
		// border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		borderRadius: 30,
		// padding: theme.spacing(2, 4, 3),
	},
}))

const Home = ({
	popularCity,
	popularCities,
	filterProperty,
	PageRefresher,
	CarouselDataMaping,
	Carousel_Data,
	myProfileData,
	user,
	PageRefresh,
	loginUser,
	signUpUser,
}) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	console.log(user, "userrr")
	function getModalStyle() {
		const top = 50
		const left = 50

		return {
			top: `${top}%`,
			left: `${left}%`,
			transform: `translate(-${top}%, -${left}%)`,
		}
	}

	const classes = useStyles()

	const [modalStyle] = useState(getModalStyle)
	const [openModal, setOpenModal] = useState(false)
	const [openModalSignUp, setopenModalSignUp] = useState(false)
	const [dummy, setDummy] = useState(true)
	const handleOpenModalSignUp = () => {
		setopenModalSignUp(true)
	}
	const handleCloseModalSignUp = () => {
		setopenModalSignUp(false)
	}

	const handleOpenModal = () => {
		setOpenModal(true)
	}

	const handleCloseModal = () => {
		setOpenModal(false)
	}

	const onSubmit = (data) => {
		// window.location.reload()
		loginUser(data)
		setOpenModal(false)
	}

	const onSubmitSignup = (data) => {
		signUpUser(data)
		setopenModalSignUp(false)
		// setOpenModal(false);
	}

	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? "simple-popover" : undefined

	let navigate = useNavigate()
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		// centerPadding: "30px",
	}
	const [selectCity, setSelectCity] = useState("Islamabad")
	const [query, setQurey] = useState("Hamza")
	const [rerenderPage, setRerenderPage] = useState(2)
	console.log("thisi is city", popularCities && popularCities[0].image)
	// console.log(searchHome, "searchHome")
	const [searchHome, setSearchHome] = useState({
		city: "Islamabad",
		society: "",
		minPrice: null,
		maxPrice: null,
		minArea: null,
		maxArea: null,
		rooms: 1,
		type: "Home",
	})

	// const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6])
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
	]
	useEffect(() => {
		popularCity()
		PageRefresher(PageRerender)
		CarouselDataMaping()
		myProfileData()
	}, [])

	const Clear = () => {
		window.localStorage.clear()
		console.log(Carousel_Data, "Carousel_Data in Clear")
		// console.log(user, "userrr")
		setDummy(false)
		// window.location.reload()
		// window.location.reload(() => {
		// 	navigate("/")
		// })
	}
	const handleSearchHomeCity = (e) => {
		setSearchHome({
			...searchHome,
			city: e.target.value,
		})
	}

	const handleSearchHomesociety = (e) => {
		setSearchHome({
			...searchHome,
			society: e.target.value,
		})
	}

	const handleSearchHomeminPrice = (e) => {
		setSearchHome({
			...searchHome,
			minPrice: parseInt(e.target.value),
		})
	}

	const handleSearchHomemaxPrice = (e) => {
		setSearchHome({
			...searchHome,
			maxPrice: parseInt(e.target.value),
		})
	}

	const handleSearchHomeminArea = (e) => {
		setSearchHome({
			...searchHome,
			minArea: parseInt(e.target.value),
		})
	}

	const handleSearchHomemaxArea = (e) => {
		setSearchHome({
			...searchHome,
			maxArea: parseInt(e.target.value),
		})
	}

	const handleSearchRooms = (e) => {
		setSearchHome({
			...searchHome,
			rooms: parseInt(e.target.value),
		})
	}

	const handleSearchType = (e) => {
		setSearchHome({
			...searchHome,
			type: e.target.value,
		})
	}

	const PageRerender = () => {
		console.log("PageRerender")
		setRerenderPage("H")
		window.location.reload()
	}
	//   const body = (

	// );

	const handlePost = (e) => {
		e.preventDefault()
		filterProperty(
			`city?${searchHome.city}&society?${searchHome.society}&minPrice?${searchHome.minPrice}&maxPrice?${searchHome.maxPrice}&minArea?${searchHome.minArea}&maxArea?${searchHome.maxArea}&rooms?${searchHome.rooms}&type?${searchHome.type}`,
			navigate,
			PageRerender
		)
	}

	const role = user && user.user && user.user.role
	console.log("myprofile from comp roleeeee", role)

	return (
		<>
			<section className=" bg-1  overly">
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
											<a className="nav-link1" href="">
												HOMES
											</a>
										</li>

										<li className="nav-item active">
											<Link to="/formsTwo/plot" state={{ quer: "Name" }}>
												<a className="nav-link1" href="">
													PLOTS
												</a>
											</Link>
										</li>

										<li className="nav-item active">
											{/* <a className="nav-link1" href="" onClick={() => {
                          navigate("/formsTwo/commercial");
												PageRerender()

                        }}>
                          COMMERCIAL
                        </a> */}
											<Link to="/formsTwo/commercial" state={{ quer: "Name" }}>
												<a className="nav-link1" href="">
													COMMERCIAL
												</a>
											</Link>
										</li>

										<li className="nav-item active">
											<Link to="/formsTwo/rent" state={{ quer: "Name" }}>
												<a className="nav-link1" href="">
													RENT
												</a>
											</Link>
										</li>
									</ul>
									{/* {role == "Dealer" && <ul className="navbar-nav   mt-10"> */}
									<ul className="navbar-nav   mt-10">
										{role == "Dealer" && (
											<li className="nav-item">
												<a
													className="nav-link text-white add-button"
													href=""
													onClick={() => {
														navigate("/form")
													}}
												>
													<i className="fa fa-plus-circle"></i>
													Add Property
												</a>
											</li>
										)}
										<li className="nav-item margin-left-5">
											<img
												className="profile-icon"
												src={ProfileIcon}
												alt="product-img"
												aria-describedby={id}
												variant="contained"
												color="primary"
												onClick={handleClick}
											/>
											<Popover
												id={id}
												open={open}
												anchorEl={anchorEl}
												onClose={handleClose}
												anchorOrigin={{
													vertical: "bottom",
													horizontal: "center",
												}}
												transformOrigin={{
													vertical: "top",
													horizontal: "center",
												}}
											>
												{localStorage.getItem("token") === null ? (
													<p className="login-text" onClick={handleOpenModal}>
														Login
													</p>
												) : (
													<p className="login-text" onClick={Clear}>
														LogOut
													</p>
												)}
											</Popover>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>

				<Modal
					open={openModal}
					onClose={handleCloseModal}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
				>
					<Box style={modalStyle} className={classes.paper}>
						<div className="login-wrapper">
							<h1 className="login-title">LOGIN</h1>
							{/* <h3>Please Login to Continue</h3> */}
							<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
								<Input
									// label={"email"}
									type="text"
									placeholder={"Email"}
									name="email"
									validation={{ required: true }}
									error={errors.email}
									register={register}
									errorMessage={"Email is required"}
									{...register("email", {
										required: true,
										pattern:
											/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									})}
								/>
								<Input
									// label={"password"}
									type="password"
									placeholder={"password"}
									name="password"
									validation={{ required: true }}
									error={errors.password}
									register={register}
									errorMessage={"Password Field is Empty"}
									//   {...register("password", {
									//     required: true,
									//     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
									// })}
								/>
								<button className="login-button">LOGIN</button>
								{user == "error" && (
									<a className="login-error">Email or Password is Incorrect</a>
								)}

								<a className="login-link">DO NOT YOU REMEMBER THE PASSWORD?</a>
								<a className="login-link" onClick={handleOpenModalSignUp}>
									CREATE A NEW ACCOUNT
								</a>
							</form>
						</div>
					</Box>
				</Modal>

				<Modal
					open={openModalSignUp}
					onClose={handleCloseModalSignUp}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
				>
					<Box style={modalStyle} className={classes.paper}>
						<div className="login-wrapper">
							<h1 className="login-title">Sign Up</h1>
							{/* <h3>Please SignUp to Continue</h3> */}
							<form
								className="login-form"
								onSubmit={handleSubmit(onSubmitSignup)}
							>
								<Input
									// label={"email"}
									type="text"
									placeholder={"name"}
									name="name"
									validation={{ required: true }}
									error={errors.name}
									register={register}
									errorMessage={"Name is required"}
								/>
								<Input
									// label={"password"}
									type="text"
									placeholder={"email"}
									name="email"
									validation={{ required: true }}
									error={errors.email}
									register={register}
									errorMessage={"Email Field is Empty"}
								/>

								<Input
									// label={"password"}
									type="password"
									placeholder={"password"}
									name="password"
									validation={{ required: true }}
									error={errors.password}
									register={register}
									errorMessage={"Password Field is Empty"}
								/>
								<Input
									// label={"password"}
									type="text"
									placeholder={"realestate"}
									name="realestate"
									validation={{ required: true }}
									error={errors.realestate}
									register={register}
									errorMessage={"Realestate Field is Empty"}
								/>
								<Input
									// label={"password"}
									type="number"
									placeholder={"phone"}
									name="phone"
									validation={{ required: true }}
									error={errors.phone}
									register={register}
									errorMessage={"Phone Field is Empty"}
								/>
								<button className="login-button">Sign Up</button>
							</form>
						</div>
					</Box>
				</Modal>

				<div className="container">
					<div className="row">
						<div className="col-md-12">
							{/* <!-- Header Contetnt --> */}
							<div className="content-block">
								<h3>Search Properties in your State</h3>
								<p>Find the best properties rates in your state</p>
							</div>
							{/* <!-- Advance Search --> */}
							<div className="advance-search">
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-lg-12 col-md-12 align-content-center">
											<div className="container">
												<ul className="nav nav-pills">
													<li className="active">
														<a>Home</a>
													</li>

													<li>
														<a href="property/sell">Sell</a>
													</li>
													{/* <Link to="property/sell" state={{ quer: "Name" }}>
												<a >
													RENT
												</a>
											</Link> */}
													<li>
														<a href="property/rent">Rent</a>
													</li>
												</ul>

												<form onSubmit={handlePost}>
													<div className="form-row form-row-st">
														<div className="form-group col-md-2 padding-top-5 border-right-2">
															<label className="opacity-40">City</label>
															<select
																className="w-100 form-control mt-lg-1 mt-md-2 no-border"
																name="city"
																value={searchHome.city}
																onChange={handleSearchHomeCity}
															>
																<option value="Islamabad">Islamabad</option>
																<option value="Rawalpindi">Rawalpindi</option>
																<option value="Lahore">Lahore</option>
																<option value="Karachi">Karachi</option>
															</select>
														</div>
														<div className="form-group col-md-8 padding-top-5">
															<label className="opacity-40">Location</label>
															<input
																type="text"
																className="form-control my-2 my-lg-1 no-border"
																id="inputtext4"
																placeholder=""
																name="society"
																value={searchHome.society}
																onChange={handleSearchHomesociety}
															/>
														</div>

														<div className="form-group col-md-2 align-self-center">
															<button type="submit" className="btn btn-primary">
																Search Now
															</button>
														</div>
													</div>
												</form>
												<div>
													<div className="form-row ">
														<div className="form-group col-md-2 form-row-st margin-right-5 padding-left-15 padding-bottom-10">
															<label className="opacity-40">
																Property Type
															</label>
															<select
																className="w-100 form-control mt-lg-1 mt-md-2 no-border"
																value={searchHome.type}
																onChange={handleSearchType}
																name="type"
															>
																<option value="Home">Home</option>
																<option value="Building">Building</option>
																<option value="Plot">Plot</option>
															</select>
														</div>
														<div className="form-group col-md-4 form-row-st margin-right-5 padding-left-15 padding-bottom-10">
															<label className="opacity-40">Price Range</label>
															<div className="filter-range">
																<div className="filter-range-title">
																	<div className="price-controls">
																		<label className="min-price">
																			<input
																				className="slider-space"
																				type="number"
																				name="minPrice"
																				value={searchHome.minPrice}
																				onChange={handleSearchHomeminPrice}
																			/>
																		</label>
																		<label className="padding-left-15 ">
																			to
																		</label>
																		<label className="max-price padding-left-15">
																			<input
																				className="slider-space align-self-center"
																				type="number"
																				name="maxPrice"
																				value={searchHome.maxPrice}
																				onChange={handleSearchHomemaxPrice}
																			/>
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="form-group col-md-4 col-12 form-row-st margin-right-5 padding-left-15 padding-bottom-10">
															<label className="opacity-40">Area (Marla)</label>
															<div className="filter-range">
																<div className="filter-range-title">
																	<div className="price-controls">
																		<label className="min-price">
																			<input
																				className="slider-space"
																				type="number"
																				name="minArea"
																				value={searchHome.minArea}
																				onChange={handleSearchHomeminArea}
																			/>
																		</label>
																		<label className="padding-left-15 ">
																			to
																		</label>
																		<label className="max-price padding-left-15">
																			<input
																				className="slider-space align-self-center"
																				type="number"
																				name="maxArea"
																				value={searchHome.maxArea}
																				onChange={handleSearchHomemaxArea}
																			/>
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="form-group col-md-2 form-row-st  padding-left-15 padding-bottom-10">
															<label className="opacity-40">Beds</label>
															<select
																className="w-100 form-control mt-lg-1 mt-md-2 no-border"
																value={searchHome.rooms}
																onChange={handleSearchRooms}
																name="rooms"
															>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
																<option value="5">5</option>
																<option value="6">6</option>
																<option value="7">7</option>
															</select>
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
			</section>

			<section className="popular-deals section ">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h2>TITANIUM PROPERTY EXPERTS</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="container-fluid px-3 px-sm-5 my-5 text-center">
							<div className="owl-carousel owl-theme">
								{/*  .map {if id==current classname jo mrze} if id=current -1 id = current +1 wrna class name default */}
								{Carousel_Data?.map((obj, index) => {
									return (
										<>
											<div className="item first prev">
												<div className="">
													<div className="row justify-content-center">
														<img
															src={
																Carousel_Data[index - 1]?.imgUrl ||
																Carousel_Data[0]?.imgUrl
															}
															className="img-fluid profile-pic mb-4 mt-3"
														/>
													</div>
													<h4 className="mb-3 mt-2">
														{Carousel_Data[index - 1]?.name ||
															Carousel_Data[0]?.name}
													</h4>
													<div className="row active">
														<div className="col-md-6 center ">
															<img className="icon-size" src={building} />

															<h6 className="mb-3 mt-2">Miller Real Estate</h6>
														</div>
														<div className="col-md-6 ">
															<h6 className="mb-3 mt-2 padding-top-70">
																{Carousel_Data[index - 1]?.phone ||
																	Carousel_Data[0]?.phone}
															</h6>
														</div>
													</div>
												</div>
											</div>
											<div className="item show">
												<div className="">
													<div className="row justify-content-center">
														<img
															src={
																Carousel_Data[index + 1]?.imgUrl || obj?.imgUrl
															}
															className="img-fluid profile-pic mb-4 mt-3"
														/>
													</div>
													<h4 className="mb-3 mt-2">
														{Carousel_Data[index + 1]?.name || obj?.name}
													</h4>
													<div className="row diactive">
														<div className="col-md-6 center ">
															<img className="icon-size" src={building} />
															<h6 className="mb-3 mt-2">Miller Real Estate</h6>
														</div>
														<div className="col-md-6">
															<h6 className="mb-3 mt-2 padding-top-70">
																{Carousel_Data[index + 1]?.phone || obj.phone}
															</h6>
														</div>
													</div>
												</div>
											</div>
											<div className="item next">
												<div className="">
													<div className="row justify-content-center">
														<img
															src={
																Carousel_Data[index + 2]?.imgUrl ||
																Carousel_Data[Carousel_Data.length - 1]?.imgUrl
															}
															className="img-fluid profile-pic mb-4 mt-3"
														/>
													</div>
													<h4 className="mb-3 mt-2">
														{Carousel_Data[index + 2]?.name ||
															Carousel_Data[Carousel_Data.length - 1]?.name}
													</h4>
													<div className="row">
														<div className="col-md-6 center">
															<img className="icon-size" src={building} />
															<h6 className="mb-3 mt-2">Miller Real Estate</h6>
														</div>
														<div className="col-md-6">
															<h6 className="mb-3 mt-2 padding-top-70">
																{Carousel_Data[index + 2]?.phone ||
																	Carousel_Data[Carousel_Data.length - 1]
																		?.phone}
															</h6>
														</div>
													</div>
												</div>
											</div>
											<div className="item last">
												<div className="">
													<div className="row justify-content-center">
														<img
															src={
																Carousel_Data[index + 3]?.imgUrl ||
																Carousel_Data[Carousel_Data.length - 1]?.imgUrl
															}
															className="img-fluid profile-pic mb-4 mt-3"
														/>
													</div>
													<h4 className="mb-3 mt-2">
														{Carousel_Data[index + 3]?.name ||
															Carousel_Data[Carousel_Data.length - 1]?.name}
													</h4>
													<div className="row">
														<div className="col-md-6 center">
															<img
																className="icon-size"
																src="images/building.png"
															/>
															<h6 className="mb-3 mt-2">Miller Real Estate</h6>
														</div>
														<div className="col-md-6">
															<h6 className="mb-3 mt-2 padding-top-70">
																{Carousel_Data[index + 3]?.phone ||
																	Carousel_Data[Carousel_Data.length - 1]
																		?.phone}
															</h6>
														</div>
													</div>
												</div>
											</div>
										</>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</section>

			<div>
				<div className="col-md-12">
					<div className="section-title">
						<h2>POPULAR CITIES</h2>
					</div>
				</div>
				<Carousel
					breakPoints={breakPoints}
					pagination={false}
					enableAutoPlay={true}
				>
					{popularCities &&
						popularCities.map((slide) => {
							return (
								<div className="slickDiver">
									<div>
										<img
											className="card-img-top img-fluid img-style"
											src={
												slide?.image
													? slide?.image
													: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg"
											}
											alt="Card image cap"
										/>
										<div className="second-txt">
											<span>{slide.city}</span>
											<br />
											<p className="second-txt-detail">
												{slide.count} Properties
											</p>
										</div>
									</div>
								</div>
							)
						})}
				</Carousel>
			</div>

			<section className="popular-deals section ">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title"></div>
						</div>
					</div>
				</div>
			</section>

			<section className="popular-deals section ">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h2>POPULAR CITIES</h2>
							</div>
						</div>
					</div>

					<div className="items">
						<div>
							<img
								className="card-img-top img-fluid "
								src={Image11}
								alt="Card image cap"
							/>
						</div>
						<div>
							<img
								className="card-img-top img-fluid "
								src={Image11}
								alt="Card image cap"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="margin-top-30">
				{/* <!-- Container Start --> */}
				<div className="container">
					<div
						className="row "
						style={{ boxShadow: "0px 0px 9px rgb(0 0 0 / 11%)" }}
					>
						<div className="col-md-4 padding-top-50">
							<div className="content-holder">
								<h2 style={{ color: "#14B5DB" }}>Get the Property App</h2>
								<p>
									Using our app, You can buy and rent property faster and more
									efficiently.
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div>
								<img
									className="card-img-top img-fluid "
									src={Img12}
									alt="Card image cap"
								/>
							</div>
						</div>
						<div className="col-lg-4 col-md-7 padding-top-50">
							<div className="download-btn d-flex my-3">
								<a href="#">
									<img
										src="images/products/app-store_google-play-.png"
										className="img-fluid"
										alt=""
									/>
								</a>
								<a href="#" className=" ml-3">
									<img src={App_Store} className="img-fluid" alt="" />
								</a>
							</div>

							<div className="row margin-top-30">
								<div className="col-lg-6 col-md-4 margin-top-25">
									<p>Scan the QR code and get the app.</p>
								</div>
								<div className="col-md-6">
									<img
										className="card-img-top img-fluid "
										style={{ width: "100px" }}
										src={QR}
										alt="Card image cap"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Container End --> */}
			</section>

			<footer className="footer section section-sm">
				{/* <!-- Container Start --> */}
				<div className="container">
					<div className="row">
						<div className="col-sm-3  col-6">
							<div className="block">
								<h4>CONTACT US</h4>
								<ul>
									<li>
										<div className="mobile d-flex">
											<a href="">
												{/* <!-- Icon --> */}
												<img src={PhoneIcon} alt="mobile-icon" />
											</a>
											<span className="margin-left-25 footer-contact-us">
												Reference site about Lorem Ipsum, giving information on
												its origins, as well as a random Lipsum generator.
											</span>
										</div>
										<br />
									</li>
									<li>
										<div className="mobile d-flex">
											<a href="">
												{/* <!-- Icon --> */}
												<img src={Phone} alt="mobile-icon" />
											</a>
											<span className="margin-left-25 footer-contact-us">
												+902-829371-1203<br></br>+902-829371-1203
											</span>
										</div>
										<br />
									</li>
									<li>
										<div className="mobile d-flex">
											<a href="">
												{/* <!-- Icon --> */}
												<img src={Email} alt="mobile-icon" />
											</a>
											<span className="margin-left-25 footer-contact-us">
												info@gmail.com<br></br>info@gmail.com
											</span>
										</div>
										<br />
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- Link list --> */}

						<div className="col-sm-3  col-6 ">
							<div className="block">
								<h4>QUICK LINK</h4>
								<ul>
									<li>
										<a href="#">About Us</a>
									</li>
									<br />
									<li>
										<a href="#">Contact Us</a>
									</li>
									<br />
									<li>
										<a href="#">Privacy Policy</a>
									</li>
									<br />
									<li>
										<a href="#">Support</a>
									</li>
									<br />
									<li>
										<a href="#">Terms & Conditions</a>
									</li>
									<br />
								</ul>
							</div>
						</div>
						{/* <!-- Link list --> */}

						<div className="col-sm-3 col-6">
							<div className="block social-media-icons text-right">
								<h4>CITIES</h4>
								<ul className="footer-cities">
									<li>
										<span>Karachi</span>
									</li>
									<li>
										<span>Lahore</span>
									</li>
									<li>
										<span>Multan</span>
									</li>
									<li>
										<span>Islamabad</span>
									</li>
									<li>
										<span>Sibi</span>
									</li>
									<li>
										<span>Mianwali</span>
									</li>
									<li>
										<span>Chakwal</span>
									</li>
									<li>
										<span>Skardu</span>
									</li>
									<li>
										<span>Gilgit</span>
									</li>
									<li>
										<span>Quetta</span>
									</li>
									<li>
										<span>Rawalpindi</span>
									</li>
									<li>
										<span>RYK</span>
									</li>
									<li>
										<span>DI Khan</span>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- Promotion --> */}
						<div className="col-sm-3 col-6">
							<div className="block social-media-icons text-right">
								<h4>FOLLOW US</h4>
								<ul>
									<li className="footer-follow-us">
										<a className="fa fa-facebook" href="" target="_blank"></a>
									</li>
									<li className="footer-follow-us">
										<a className="fa fa-google" href="" target="_blank"></a>
									</li>
									<li className="footer-follow-us">
										<a className="fa fa-twitter" href="" target="_blank"></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Container End --> */}
			</footer>

			<footer className="footer-bottom">
				{/* <!-- Container Start --> */}
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-12">
							{/* <!-- Copyright --> */}
							<div className="copyright">
								<p>
									©
									{/* <script>
							var CurrentYear = new Date().getFullYear()
							document.write(CurrentYear)
						</script> All Rights Reserved, Created By Lorem ipsum</a> */}
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Container End -->
	<!-- To Top --> */}
			</footer>
		</>
	)
}

const mapStateToProps = (state) => {
	let PageRefresh = state.PageRefresherReducer.PageRefresher
	let { popularCities } = state.popularCitiesReducers
	let { Carousel_Data } = state.popularCitiesReducers
	let { user } = state.authReducer

	console.log("mapstate.....", user)
	return {
		popularCities,
		Carousel_Data,
		user,
		PageRefresh,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		popularCity: () => dispatch(popularCityStat()),
		filterProperty: (searchHome, navigate, PageRerender) =>
			dispatch(filterSingleProperty(searchHome, navigate, PageRerender)),

		PageRefresher: (response) => {
			dispatch(PageRefresherAction(response))
		},
		CarouselDataMaping: () => {
			dispatch(CarouselData())
		},
		myProfileData: () => {
			dispatch(myProfileData())
		},
		loginUser: (data) => dispatch(loginUser(data)),
		signUpUser: (data, navigate) => dispatch(signUpUser(data, navigate)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
