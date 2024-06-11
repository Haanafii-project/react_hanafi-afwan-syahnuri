import heroImage from '../assets/heroimage.png'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-2 justify-center h-screen items-center py-12" >
        <div className="p-10">
            <h1 className="text-5xl font-bold">
                Transforming Moments into Memories
            </h1>
            <p className="py-5 text-lg font-medium">
                Through our lens, every fleeting moment is artfully captured and transformed into cherished memories that last forever.
            </p>
            <div className="grid grid-cols-2">
                <div>
                    <a href="" className="btn rounded-full bg-cyan-700 hover:bg-cyan-800 text-white">
                        Get Started
                    </a>
                </div>
                <div className="pt-3">
                    <a href="" className="link link-hover hover:text-cyan-700">
                        Watch Video
                    </a>
                </div>
            </div>
        </div>
        <div className="p-10 justify-self-center">
            <img src={heroImage} alt="hero image" />
        </div>
    </div>
  )
}
