import React , {useState , useRef} from "react"
import Logo from "../../assets/logo.png"
import ProfileIcon from "../../assets/profile-icon.png"
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom"
import PropertyInput from "../../components/FromInput/PropertyInput"
import {myProfileData} from "../../Redux/Thunk/auth"
import { connect } from "react-redux"
import { addNewProperty , addImage} from "../../Redux/Thunk/Property";




const Form = ({user , addNewProperty , addImage , propertyReducer}) => {
	console.log("user" , user)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	  } = useForm();

const navigate = useNavigate()
const [check , setCheck] = useState(false);
const [propertyPurpose , setPropertyPurpose] = useState("");
const [featuredProperty , setFeaturedProperty] = useState("");
const [propertyType , setPropertyType] = useState("");
const [propertySubType , setPropertySubType] = useState("");
const [propertyLocationType , setPropertyLocationType] = useState("");
const [status , setStatus] = useState("");
const [price , setPrice] = useState();
const [area , setArea] = useState();
const [imageState , setImageState] = useState();

const hiddenFileInput = useRef(null);
  
const handleClick = (e) => {
  hiddenFileInput.current.click();
};

console.log("hidden file input" , hiddenFileInput)


const [subType , setSubType] = useState([])

const handleCheckProperty = (e) => {
	if(e.target.checked){
		subType.push(e.target.value)
	}
	else{
		var newArray =  subType.filter((item)=>
		{ return item != e.target.value })
		setSubType(newArray)
	}
}

let formData = new FormData();

const handleImage =	(e) => {
	console.log(e.target.files[0])
	if(e.target && e.target.files[0] ){
		// setImageState(e.target.files[0])
		setImageState(URL.createObjectURL(e.target.files[0]));
		formData.append('image' , e.target.files[0])
	}
	console.log("formdata" , formData)
	console.log("formdata  state	" , imageState)
   addImage(formData)

}

const handleCheck = (e) => {
	setCheck(!check)
	console.log(e.target.value)
	{e.target.name == "propertyPurpose" && setPropertyPurpose(e.target.value) }
	{e.target.name == "featuredProperty" && setFeaturedProperty(e.target.value) }
	{e.target.name == "propertyType" && setPropertyType(e.target.value) }
	{e.target.name == "propertySubType" && setPropertySubType(e.target.value) }
	{e.target.name == "propertyLocationType" && setPropertyLocationType(e.target.value) }
	{e.target.name == "status" && setStatus(e.target.value) }
	{e.target.name == "price" && setPrice(parseInt(e.target.value)) }
	{e.target.name == "area" && setArea(parseInt(e.target.value)) }
}

const url = propertyReducer &&  propertyReducer.imageUrl && propertyReducer.imageUrl.url

	  const onSubmit = (data) => {

		  data["purpose"] = propertyPurpose
		  data["featured"] = featuredProperty
		  data["property_type"] = propertyType
		  data["sub_type"] = propertySubType
		  data["propertyLocationType"] = propertyLocationType
		  data["status"] = status
		  data["property_features"] = subType
		  data["area"] = area
		  data["price"] = price
		  data["image"] = url

		console.log("data", data)
		addNewProperty(data)
	  };

	//   const addNewPropertyUser  = 
	return (
		<>
			<div>
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
											<a className="nav-link" href="" onClick={() => {
                          navigate("/");
                        }}>
												Home
											</a>
										</li>
										<li className="nav-item ">
											<a className="nav-link" href="" onClick={() => {
                          navigate("/formsTwo/plot");
                        }}>
												Plot
											</a>
										</li>
										<li className="nav-item ">
											<a className="nav-link" href=""
											onClick={() => {
												navigate("/formsTwo/commercial");
											  }}>
												Commercial
											</a>
										</li>
										<li className="nav-item ">
											<a className="nav-link" href="" onClick={() => {
                          navigate("/dealerProperties");
                        }}>
												All Properties
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
			</div>

			<div className="div">
				{/* <!-- Container Start --> */}
				<div className="container">
					<div className="row">
						{/* <!-- Left sidebar --> */}
						<form onSubmit={handleSubmit(onSubmit)}>
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
												className="row"
												style={{ marginTop: "10px", marginBottom: "10px" }}
											>
												<div className="col-md-5 col-3  text-right">
													<p style={{ marginTop: "7px" }}>Property Purpose</p>
												</div>
											
												<div className="col-md-2 col-4 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
													<label for="buy" className="containerCheckBox" >
														<input
															type="radio"
															id="buy"
															name="propertyPurpose"
															value="buy"
															onChange={handleCheck}
														/>
														 Buy
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
												<div className="col-md-2 col-4">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
													<label for="sell" className="containerCheckBox" >
														<input
															type="radio"
															id="sell"
															name="propertyPurpose"
															value="sell"
															onChange={handleCheck}
														/>
														 Sell
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
											</div>
											<div
												className="row"
												style={{ marginTop: "10px", marginBottom: "10px" }}
											>
												<div className="col-md-5 col-3  text-right">
													<p style={{ marginTop: "7px" }}>Featured Property</p>
												</div>
												<div className="col-md-2 col-4 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
													<label for="hot" className="containerCheckBox" >
														<input
															type="radio"
															id="hot"
															name="featuredProperty"
															value="hot"
															onChange={handleCheck}
														/>
														 Hot
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
												<div className="col-md-2 col-4">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
													<label for="superHot" className="containerCheckBox" >
														<input
															type="radio"
															id="superHot"
															name="featuredProperty"
															value="superHot"
															onChange={handleCheck}
														/>
														 Super Hot
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
											</div>
											<div className="row" style={{ marginTop: "10px" }}>
												<div className="col-md-5 col-3  text-right">
													<p style={{ marginTop: "7px" }}> Property Type</p>
												</div>
												<div className="col-md-7 col-9 margin-bottom-5">
													<div className="row">
														<div className="col-md-2 col-3 margin-bottom-5">
															<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="plot" className="containerCheckBox" >
														<input
															type="radio"
															id="plot"
															name="propertyType"
															value="plot"
															onChange={handleCheck}
														/>
														Plot
														 <span class="checkmark"></span>
														</label>
															</div>
														</div>

														<div className="col-md-3 col-5 margin-bottom-5">
															<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="commercial" className="containerCheckBox" >
														<input
															type="radio"
															id="commercial"
															name="propertyType"
															value="commercial"
															onChange={handleCheck}
														/>
														Commercial
														 <span class="checkmark"></span>
														</label>
															</div>
														</div>
														<div className="col-md-3 col-5 margin-bottom-5">
															<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="farmHouse" className="containerCheckBox" >
														<input
															type="radio"
															id="farmHouse"
															name="propertyType"
															value="farmHouse"
															onChange={handleCheck}
														/>
														Farm House
														 <span class="checkmark"></span>
														</label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="row" style={{ marginBottom: "10px" }}>
												<div className="col-md-5 col-3  text-right">
													<p style={{ marginTop: "15px" }}>
														{" "}
														Property Sub Type
													</p>
												</div>
												<div className="col-md-7 col-9 margin-bottom-5">
													<div
														className="row"
														style={{ marginTop: "10px", marginBottom: "10px" }}
													>
														<div className="col-md-2 col-3 margin-bottom-5">
															<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="file" className="containerCheckBox" >
														<input
															type="radio"
															id="file"
															name="propertySubType"
															value="file"
															onChange={handleCheck}
														/>
														File
														 <span class="checkmark"></span>
														</label>
															</div>
														</div>

														<div className="col-md-3 col-5 margin-bottom-5">
															<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="commercials" className="containerCheckBox" >
														<input
															type="radio"
															id="commercials"
															name="propertySubType"
															value="commercial"
															onChange={handleCheck}
														/>
														Commercial
														 <span class="checkmark"></span>
														</label>
														
															</div>
														</div>
														<div className="col-md-3 col-5 margin-bottom-5">
															<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="resident" className="containerCheckBox" >
														<input
															type="radio"
															id="resident"
															name="propertySubType"
															value="resident"
															onChange={handleCheck}
														/>
														Resident
														 <span class="checkmark"></span>
														</label>
														
															</div>
														</div>
														<div className="col-md-3 col-5 margin-bottom-5">
															<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="agriculture" className="containerCheckBox" >
														<input
															type="radio"
															id="agriculture"
															name="propertySubType"
															value="agriculture"
															onChange={handleCheck}
														/>
														Agriculture
														 <span class="checkmark"></span>
														</label>
														
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="bg-blue padding-15">
												<h6 style={{ color: "white", margin: "0px" }}>
													Property Location
												</h6>
											</div>
											   <PropertyInput
                          label={"Society"}
                          type="text"
                        //   placeholder={"password"}
                          name="society"
                          validation={{ required: true }}
                          error={errors.society}
                          register={register}
                          errorMessage={"Society Field is Empty"}
                        />
														   <PropertyInput
                          label={"Phase"}
                          type="text"
                        //   placeholder={"password"}
                          name="Phase"
                          validation={{ required: true }}
                          error={errors.Phase}
                          register={register}
                          errorMessage={"Phase Field is Empty"}
                        />
															   <PropertyInput
                          label={"Block"}
                          type="text"
                        //   placeholder={"password"}
                          name="block"
                          validation={{ required: true }}
                          error={errors.block}
                          register={register}
                          errorMessage={"Block Field is Empty"}
                        />
															   <PropertyInput
                          label={"Sector"}
                          type="text"
                        //   placeholder={"password"}
                          name="sector"
                          validation={{ required: true }}
                          error={errors.sector}
                          register={register}
                          errorMessage={"Sector Field is Empty"}
                        />
															   <PropertyInput
                          label={"Road"}
                          type="text"
                        //   placeholder={"password"}
                          name="road"
                          validation={{ required: true }}
                          error={errors.road}
                          register={register}
                          errorMessage={"Road Field is Empty"}
                        />
															   <PropertyInput
                          label={"Street"}
                          type="text"
                        //   placeholder={"password"}
                          name="street"
                          validation={{ required: true }}
                          error={errors.street}
                          register={register}
                          errorMessage={"Street Field is Empty"}
                        />
															   <PropertyInput
                          label={"Property Num"}
                          type="text"
                        //   placeholder={"password"}
                          name="property_number"
                          validation={{ required: true }}
                          error={errors.property_number}
                          register={register}
                          errorMessage={"Property Number Field is Empty"}
                        />



											<div
												className="row"
												style={{ marginTop: "10px", marginBottom: "10px" }}
											>
												<div className="col-md-5 col-3  text-right">
													<p style={{ marginTop: "7px" }}>Property Type</p>
												</div>
												<div className="col-md-2 col-3 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="pair" className="containerCheckBox" >
														<input
															type="radio"
															id="pair"
															name="propertyLocationType"
															value="pair"
															onChange={handleCheck}
														/>
														Pair
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
												<div className="col-md-2 col-3">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
													<label for="triple" className="containerCheckBox" >
														<input
															type="radio"
															id="triple"
															name="propertyLocationType"
															value="triple"
															onChange={handleCheck}
														/>
														Tripple
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
												<div className="col-md-2 col-3">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
													<label for="tetra" className="containerCheckBox" >
														<input
															type="radio"
															id="tetra"
															name="propertyLocationType"
															value="tetra"
															onChange={handleCheck}
														/>
														Tetra
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
											</div>

											<div className="bg-blue padding-15">
												<h6 style={{ color: "white", margin: "0px" }}>
													Property Details
												</h6>
											</div>
										
											<div
												className="row"
												style={{ marginTop: "10px", marginBottom: "10px" }}
											>
												<div className="col-md-5 col-3  text-right">
													<p style={{ marginTop: "7px" }}>Property</p>
												</div>
												<div className="col-md-2 col-3 margin-bottom-5">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
															<label for="active" className="containerCheckBox" >
														<input
															type="radio"
															id="active"
															name="status"
															value="active"
															onChange={handleCheck}
														/>
														Active
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
												<div className="col-md-2 col-3">
													<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
													<label for="inActive" className="containerCheckBox" >
														<input
															type="radio"
															id="inActive"
															name="status"
															value="inActive"
															onChange={handleCheck}
														/>
														In Active
														 <span class="checkmark"></span>
														</label>
													</div>
												</div>
											
											</div>
											<PropertyInput
                          label={"Property Title"}
                          type="text"
                        //   placeholder={"password"}
                          name="property_title"
                          validation={{ required: true }}
                          error={errors.property_title}
                          register={register}
                          errorMessage={"Property Title Field is Empty"}
                        />

<PropertyInput
                          label={"Property Desc"}
                          type="text"
                        //   placeholder={"password"}
                          name="description"
                          validation={{ required: true }}
                          error={errors.description}
                          register={register}
                          errorMessage={"Property Description Field is Empty"}
                        />

											 {/* <PropertyInput
											 onChange={handleCheck}
                          label={"Price"}
                          type="number"
                        //   placeholder={"password"}
                          name="price"
                          validation={{ required: true }}
                          error={errors.password}
                          register={register}
                          errorMessage={"Price Field is Empty"}
                        /> */}
						<div
											className="row"
											style={{ marginTop: "10px", marginBottom: "10px" }}
										>
											<div className="col-md-5 col-3  text-right">
												<p style={{ marginTop: "15px" }}>
													Price
												</p>
											</div>
											<div className="col-md-4 col-7 margin-bottom-5" style={{  marginLeft:"17px" }}>
												<input
													type="number"
													onChange={handleCheck}
													value={price}
													name="price"
													placeholder=""
													className="border p-2 w-100 my-2"
												/>
											</div>
										</div>

										<div
											className="row"
											style={{ marginTop: "10px", marginBottom: "10px" }}
										>
											<div className="col-md-5 col-3  text-right">
												<p style={{ marginTop: "15px" }}>
													Area
												</p>
											</div>
											<div className="col-md-4 col-7 margin-bottom-5" style={{  marginLeft:"17px" }}>
												<input
													type="number"
													name="area"
													onChange={handleCheck}
													value={area}
													placeholder=""
													className="border p-2 w-100 my-2"
												/>
											</div>
										</div>

{/* <PropertyInput

                          label={"Area"}
                          type="number"
                        //   placeholder={"password"}
                          name="area"
                          validation={{ required: true }}
                          error={errors.password}
                          register={register}
                          errorMessage={"Area Field is Empty"}
                        /> */}
										</div>

										<div className="row" style={{ marginBottom: "10px" }}>
											<div className="col-md-5 col-3  text-right">
												<p style={{ marginTop: "15px" }}> Property Sub Type</p>
											</div>
											<div className="col-md-7 col-9 margin-bottom-5">
												<div
													className="row"
													style={{ marginTop: "10px", marginBottom: "10px" }}
												>
													<div className="col-md-2 col-3 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="gass" className="containerCheckBox" >
														<input
															type="checkbox"
															id="gass"
															name="propertyLocationType"
															value="gass"
															onChange={handleCheckProperty}
														/>
														Gass
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>

													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="electricity" className="containerCheckBox" >
														<input
															type="checkbox"
															id="electricity"
															name="propertyLocationType"
															value="electricity"
															onChange={handleCheckProperty}
														/>
														Electricity
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="corner" className="containerCheckBox" >
														<input
															type="checkbox"
															id="corner"
															name="propertyLocationType"
															value="corner"
															onChange={handleCheckProperty}
														/>
														Corner
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="nearMasjid" className="containerCheckBox" >
														<input
															type="checkbox"
															id="nearMasjid"
															name="propertyLocationType"
															value="nearMasjid"
															onChange={handleCheckProperty}
														/>
														Near Masjid
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
													<div className="col-md-2 col-3 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="lawn" className="containerCheckBox" >
														<input
															type="checkbox"
															id="lawn"
															name="propertyLocationType"
															value="lawn"
															onChange={handleCheckProperty}
														/>
														Lawn
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>

													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="nearSchool" className="containerCheckBox" >
														<input
															type="checkbox"
															id="nearSchool"
															name="propertyLocationType"
															value="nearSchool"
															onChange={handleCheckProperty}
														/>
														Near School
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="tvLounge" className="containerCheckBox" >
														<input
															type="checkbox"
															id="tvLounge"
															name="propertyLocationType"
															value="tvLounge"
															onChange={handleCheckProperty}
														/>
														TV Lounge
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="nearMarket" className="containerCheckBox" >
														<input
															type="checkbox"
															id="nearMarket"
															name="propertyLocationType"
															value="nearMarket"
															onChange={handleCheckProperty}
														/>
														Near Market
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
													<div className="col-md-2 col-3 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="pool" className="containerCheckBox" >
														<input
															type="checkbox"
															id="pool"
															name="propertyLocationType"
															value="pool"
															onChange={handleCheckProperty}
														/>
														Pool
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>

													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="balcony" className="containerCheckBox" >
														<input
															type="checkbox"
															id="balcony"
															name="propertyLocationType"
															value="balcony"
															onChange={handleCheckProperty}
														/>
														Balcony
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="kitchen" className="containerCheckBox" >
														<input
															type="checkbox"
															id="kitchen"
															name="propertyLocationType"
															value="kitchen"
															onChange={handleCheckProperty}
														/>
														Kitchen
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
													<div className="col-md-3 col-5 margin-bottom-5">
														<div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
														<label for="nearPark" className="containerCheckBox" >
														<input
															type="checkbox"
															id="nearPark"
															name="propertyLocationType"
															value="nearPark"
															onChange={handleCheckProperty}
														/>
														Near Park
														 <span class="checkmark"></span>
														</label>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="bg-blue padding-15">
											<h6 style={{ color: "white", margin: "0px" }}>
												Contact Information
											</h6>
										</div>
										<div
											className="row"
											style={{ marginTop: "10px", marginBottom: "10px" }}
										>
											<div className="col-md-5 col-3  text-right">
												<p style={{ marginTop: "15px" }}>Name </p>
											</div>
											<div className="col-md-4 col-7 margin-bottom-5">
												<input
													type="text"
													value={user.name}
													placeholder=""
													className="border p-2 w-100 my-2"
												/>
											</div>
										</div>
										<div
											className="row"
											style={{ marginTop: "10px", marginBottom: "10px" }}
										>
											<div className="col-md-5 col-3  text-right">
												<p style={{ marginTop: "15px" }}>Email </p>
											</div>
											<div className="col-md-4 col-7 margin-bottom-5">
												<input
													type="text"
													placeholder=""
													value={user.email}
													className="border p-2 w-100 my-2"
												/>
											</div>
										</div>
										<div
											className="row"
											style={{ marginTop: "10px", marginBottom: "10px" }}
										>
											<div className="col-md-5 col-3  text-right">
												<p style={{ marginTop: "15px" }}>Estate Name </p>
											</div>
											<div className="col-md-4 col-7 margin-bottom-5">
												<input
													type="text"
													placeholder=""
													value={"Property Chowk"}
													className="border p-2 w-100 my-2"
												/>
											</div>
										</div>
										<div
											className="row"
											style={{ marginTop: "10px", marginBottom: "10px" }}
										>
											<div className="col-md-5 col-3  text-right">
												<p style={{ marginTop: "15px" }}>Phone Number </p>
											</div>
											<div className="col-md-4 col-7 margin-bottom-5">
												<input
													type="text"
													value={user.phone}
													placeholder=""
													className="border p-2 w-100 my-2"
												/>
											</div>
										</div>
										<div
											className="row"
											style={{ marginTop: "10px", marginBottom: "10px" }}
										>
											<div className="col-md-5 col-3  text-right">
												<p style={{ marginTop: "15px" }}>
													Optional Phone Number
												</p>
											</div>
											<div className="col-md-4 col-7 margin-bottom-5">
												<input
													type="text"
													value="none"
													placeholder=""
													className="border p-2 w-100 my-2"
												/>
											</div>
										</div>

										<div className="bg-blue padding-15">
											<h6 style={{ color: "white", margin: "0px" }}>
												Add Images
											</h6>
										</div>
										
										<div className="image-select-top">
										<div
											className="buy d-flex  align-items-center"
											style={{
												justifyContent: "space-evenly",
												marginBottom: "15px",
											}}
											onClick={handleClick}

										>
											<a
												
												className="btn btn-primary mt-3"
												style={{ backgroundColor: "rgb(18, 88, 134)" }}
											>

												Add Images
											</a>
										</div>
										<div>
										<input type= "file" name="file_upload" ref={hiddenFileInput} onChange={handleImage} style={{display:'none'}}/>
										
										<img src={imageState} className="image-preview-style" />
										</div>
										</div>
										




										<div className="bg-blue padding-15">
											<h6 style={{ color: "white", margin: "0px" }}>
												Add Videos
											</h6>
										</div>

										<div
											className="buy d-flex  align-items-center"
											style={{ justifyContent: "space-evenly" }}
										>
											<a
												
												className="btn btn-primary mt-3"
												style={{ backgroundColor: "rgb(18, 88, 134)" }}
											>
												{" "}
												Add Videos
											</a>
										</div>
									</div>

									<div
										className="buy d-flex  align-items-center margin-top-15 margin-bottom-15"
										style={{ justifyContent: "space-evenly" }}
									>
										<button className="btn btn-primary mt-3 ">
	
											Add Property
										</button>
									</div>
								</div>
							</div>
						</div>
						</form>
					</div>
				</div>
			</div>
			{/* <!-- Container End --> */}
		</>
	)
}



const mapStateToProps = (state) => {
  let {user} = state.authReducer.user
  let {propertyReducer} = state

	return {
    user,
	propertyReducer

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    myProfileData: () => {dispatch(myProfileData())},
	addNewProperty: (data) => {dispatch(addNewProperty(data))},
	addImage : (data) => {dispatch(addImage(data))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
