import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import PhoneIcon from "../../assets/products/phone-icon.png"
import Phone from "../../assets/products/phone.png"
import Email from "../../assets/products/email.png"


function Footer() {
  return (
    <>
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
									<img src={PhoneIcon} alt="mobile-icon"/>
								</a>
								<span className="margin-left-25 footer-contact-us">Reference site about Lorem Ipsum,
									giving information on its origins, as well as a random Lipsum generator.</span>
							</div>
							<br/>
						</li>
            <li>
							<div className="mobile d-flex">
								<a href="">
									{/* <!-- Icon --> */}
									<img src={Phone} alt="mobile-icon"/>
								</a>
								<span
									className="margin-left-25 footer-contact-us">+902-829371-1203<br></br>+902-829371-1203</span>

							</div>
              <br/>
						</li>
            <li>
							<div className="mobile d-flex">
								<a href="">
									{/* <!-- Icon --> */}
									<img src={Email} alt="mobile-icon"/>
								</a>
								<span
									className="margin-left-25 footer-contact-us">info@gmail.com<br></br>info@gmail.com</span>

							</div><br/>
						</li>
					</ul>
			</div>
</div>
			{/* <!-- Link list --> */}
	

      <div className="col-sm-3  col-6 ">
				<div className="block">
					<h4>QUICK LINK</h4>
					<ul>
						<li><a href="#">About Us</a></li><br/>
						<li><a href="#">Contact Us</a></li><br/>
						<li><a href="#">Privacy Policy</a></li><br/>
						<li><a href="#">Support</a></li><br/>
						<li><a href="#">Terms & Conditions</a></li><br/>
					</ul>
				</div>
			</div>
			{/* <!-- Link list --> */}
		
      <div className="col-sm-3 col-6">
				<div className="block social-media-icons text-right">
					<h4>CITIES</h4>
					<ul className="footer-cities">
						<li><span>Karachi</span></li>
						<li><span>Lahore</span></li>
						<li><span>Multan</span></li>
						<li><span>Islamabad</span></li>
						<li><span>Sibi</span></li>
						<li><span>Mianwali</span></li>
						<li><span>Chakwal</span></li>
						<li><span>Skardu</span></li>
						<li><span>Gilgit</span></li>
						<li><span>Quetta</span></li>
						<li><span>Rawalpindi</span></li>
						<li><span>RYK</span></li>
						<li><span>DI Khan</span></li>
					</ul>
				</div>

			</div>
			{/* <!-- Promotion --> */}
      <div className="col-sm-3 col-6">
				<div className="block social-media-icons text-right">
					<h4>FOLLOW US</h4>
					<ul>
						<li className="footer-follow-us"><a className="fa fa-facebook" href="" target="_blank"></a>
						</li>
						<li className="footer-follow-us"><a className="fa fa-google" href="" target="_blank"></a>
						</li>
						<li className="footer-follow-us"><a className="fa fa-twitter" href="" target="_blank"></a></li>
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
					<p>©
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

export default Footer