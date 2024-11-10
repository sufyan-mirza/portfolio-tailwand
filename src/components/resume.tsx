import Image from "next/image";
import image1 from './assets/image1.jpg';

export default function Resume() {
    return (
        <div className="p-8 bg-black">
            <section className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    
                    <div className="md:w-1/4 bg-black border border-gray-700 p-8 rounded-lg text-center">
                        <div className="flex justify-center mb-6">
                            <Image src={image1} alt="1" width={100} height={100} className="rounded-full" />
                        </div>
                        <div className="text-center mb-6 border-b border-gray-600 pb-4">
                            <h1 className="text-2xl text-white font-semibold">Sufyan Mirza</h1>
                            <p className="text-white text-sm border border-gray-600 py-2 px-4 rounded mt-2">Web Developer</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4">
                                <h4 className="text-yellow-400 text-sm font-medium">Email:</h4>
                                <p className="text-gray-400 text-xs">sufyanmirza2007@gmail.com</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-yellow-400 text-sm font-medium">Phone</h4>
                                <p className="text-gray-400 text-xs">+92-3022758453</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-yellow-400 text-sm font-medium">Birthday</h4>
                                <p className="text-gray-400 text-xs">19-9-2007</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-yellow-400 text-sm font-medium">Location</h4>
                                <p className="text-gray-400 text-xs">Hyderabad, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="md:w-3/4 bg-black border border-gray-700 p-8 rounded-lg">
                        <div className="text-left">
                            <h1 className="text-2xl text-white font-semibold border-b border-yellow-400 pb-4 mb-8">Education</h1>
                            <div className="mb-8">
                                <h3 className="text-xl text-white font-semibold">Bahria Foundation School</h3>
                                <h4 className="text-lg text-yellow-400 mb-2">2009 - 2013</h4>
                                <p className="text-gray-400 text-sm">The Bahria Schooling System is a growing, dynamic community with a small but successful history. We believe that school education should be life-changing, not just a daily ritual.</p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl text-white font-semibold">CAA Model High School</h3>
                                <h4 className="text-lg text-yellow-400 mb-2">2014 - 2022</h4>
                                <p className="text-gray-400 text-sm">An institution in Pakistan that offers broad-based education through academic and extracurricular activities to maximize students potential.</p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl text-white font-semibold">Degree College</h3>
                                <h4 className="text-lg text-yellow-400 mb-2">2023 - Present</h4>
                                <p className="text-gray-400 text-sm">Degree College provides a professional atmosphere with a qualified faculty and innovative programs that meet national and international standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
