import CarouselImage1 from "../assets/CarouselImage1.jpg"
import CarouselImage2 from "../assets/CarouselImage2.jpg"
import CarouselImage3 from "../assets/CarouselImage3.jpg"
import CarouselImage4 from "../assets/CarouselImage4.jpg"


export default function AboutSection() {
  return (
    <div className='flex flex-col gap-8 justify-center items-center py-24 px-12'>
        <h1 className='text-5xl font-bold'>About Me</h1>
        <div>
            <h1 className='text-2xl font-semibold text-center'>More Than Just Photos</h1>
            <h1 className='text-xl font-medium text-center'>For me, photography is about connection. I want to build relationships with my clients and understand their stories. I want to create photos that are not only visually beautiful, but also have deep meaning to them. I am committed to providing the best service to my clients. I understand that every moment is special and unique, and I will strive to capture those moments perfectly. I also enjoy working with clients to understand their vision and create photographs that match their desires.</h1>
        </div>
        <div className="carousel w-full h-96">
            <div id="item1" className="carousel-item w-full">
                <img src={CarouselImage1} className="w-full object-cover " />
            </div> 
            <div id="item2" className="carousel-item w-full">
                <img src={CarouselImage2} className="w-full object-cover" />
            </div> 
            <div id="item3" className="carousel-item w-full">
                <img src={CarouselImage3} className="w-full object-cover" />
            </div> 
            <div id="item4" className="carousel-item w-full">
                <img src={CarouselImage4} className="w-full object-cover" />
            </div>
        </div>
    </div>
  )
}
