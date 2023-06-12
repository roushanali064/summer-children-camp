import { Slide } from 'react-awesome-reveal';
import icon1 from '../../../assets/icon/icon1.png'
import icon2 from '../../../assets/icon/icon2.png'
import icon3 from '../../../assets/icon/icon3.png'
import icon4 from '../../../assets/icon/icon4.png'

const Activity = () => {
    return (
        <>
            <Slide>
                <div className='flex flex-col md:flex-row justify-around items-center mt-[100px] bg-gradient-to-r from-[#FFC000] to-[#FF8A00] py-10 rounded'>
                    <div>
                        <img src={icon1} alt="icon1" />
                        <div className='pt-5 text-center text-white'>
                            <p className='text-[40px] font-extrabold'>2,679</p>
                            <p>Registered Student</p>
                        </div>
                    </div>
                    <div>
                        <img src={icon2} alt="icon1" />
                        <div className='pt-5 text-center text-white'>
                            <p className='text-[40px] font-extrabold'>1,549</p>
                            <p>Student has been helped <br /> to achieve their dreams </p>
                        </div>
                    </div>
                    <div>
                        <img src={icon3} alt="icon1" />
                        <div className='pt-5 text-center text-white'>
                            <p className='text-[40px] font-extrabold'>10,000</p>
                            <p>More than 10,000 people <br />visit our site monthly</p>
                        </div>
                    </div>
                    <div>
                        <img src={icon4} alt="icon1" />
                        <div className='pt-5 text-center text-white'>
                            <p className='text-[40px] font-extrabold'>#10</p>
                            <p>Ranked among the top 10 growing <br />online learning startups in south asia</p>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    );
};

export default Activity;