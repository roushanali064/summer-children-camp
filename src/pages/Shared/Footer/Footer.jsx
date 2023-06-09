import logo from '../../../assets/logo.webp'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#212121] text-white mt-[100px]">
            <div>
                <img src={logo} alt="" />
                <p className='text-xl font-bold'>Summer Children Camp.<br />Providing reliable tech since 2023</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Classes</a>
                <a className="link link-hover">Instructor</a>
                <a className="link link-hover">Popular Class</a>
                <a className="link link-hover">Dashboard</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;