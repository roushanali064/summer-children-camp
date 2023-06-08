import img1 from '../../../assets/slide1.jpg'
import img2 from '../../../assets/slide2.jpg'
import img3 from '../../../assets/slide3.jpg'

const Banner = () => {
    return (
        <div>
           
            <div className="carousel w-full h-[600px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="carusole-info absolute flex items-center h-full  left-0 right-5 justify-end pr-12">
                    <div className='text-white space-y-7 w-1/2 md:pl-12'>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-[#FEBF00] text-black border-none hover:text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FEBF00] text-black border-none hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="carusole-info absolute flex items-center h-full  left-0 right-5 justify-end pr-12">
                    <div className='text-white space-y-7 w-1/2 md:pl-12'>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-[#FEBF00] text-black border-none hover:text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FEBF00] text-black border-none hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="carusole-info absolute flex items-center h-full  left-0 right-5 justify-end pr-12">
                    <div className='text-white space-y-7 w-1/2 md:pl-12'>
                
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-[#FEBF00] text-black border-none hover:text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FEBF00] text-black border-none hover:text-white">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;