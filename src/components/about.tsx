import Image from "next/image";
import image1 from './assets/image1.jpg';

export default function About() {
    return (
        <div>
            <section className="bg-black py-8 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/4 bg-black border border-gray-700 p-6 rounded-lg text-center">
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={image1}
                                    alt="Profile Image"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="border-b border-gray-700 mb-4 pb-4">
                                <h1 className="text-white text-2xl font-semibold mb-2">Sufyan Mirza</h1>
                                <p className="text-white bg-gray-800 py-1 px-2 rounded">Web Developer</p>
                            </div>
                            <div className="text-center space-y-3">
                                <div>
                                    <h4 className="text-yellow-400 text-sm font-medium">Email:</h4>
                                    <p className="text-gray-300 text-sm">sufyanmirza2007@gmail.com</p>
                                </div>
                                <div>
                                    <h4 className="text-yellow-400 text-sm font-medium">Phone</h4>
                                    <p className="text-gray-300 text-sm">+92-3022758453</p>
                                </div>
                                <div>
                                    <h4 className="text-yellow-400 text-sm font-medium">Birthday</h4>
                                    <p className="text-gray-300 text-sm">19-9-2007</p>
                                </div>
                                <div>
                                    <h4 className="text-yellow-400 text-sm font-medium">Location</h4>
                                    <p className="text-gray-300 text-sm">Hyderabad, Pakistan</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-3/4 bg-black border border-gray-700 p-8 rounded-lg">
                            <div className="mb-8">
                                <h1 className="text-white text-3xl uppercase font-bold mb-4 border-b border-yellow-400 pb-2">About</h1>
                                <p className="text-gray-300 text-sm">
                                    Hey! I am Sufyan Mirza 👋<br/><br/>
                                    Creative Front-end developer with a demonstrated history of working in the information technology and services industry.
                                    I started coding at the age of 15, dedicated to building and optimizing the performance of user-centric, high-impact websites
                                    for nationwide and global companies. I leverage technical, analytical, and problem-solving skills to create websites and am an
                                    expert in implementing each step of the project. Eager to learn new technologies and methodologies.
                                </p>
                            </div>

                            <div>
                                <h1 className="text-white text-3xl uppercase font-bold mb-8 border-b border-yellow-400 pb-2">What I am Doing</h1>
                                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                                    <div className="bg-black border border-gray-500 p-4 rounded-lg w-full sm:w-[45%]">
                                        <h1 className="text-yellow-400 text-lg font-semibold border-b border-yellow-400 pb-2 mb-2">Web Design</h1>
                                        <p className="text-gray-300 text-sm">The most modern and high-quality design made at a professional level.</p>
                                    </div>
                                    <div className="bg-black border border-gray-500 p-4 rounded-lg w-full sm:w-[45%]">
                                        <h1 className="text-yellow-400 text-lg font-semibold border-b border-yellow-400 pb-2 mb-2">Web Development</h1>
                                        <p className="text-gray-300 text-sm">High-quality development of sites at the professional level.</p>
                                    </div>
                                    <div className="bg-black border border-gray-500 p-4 rounded-lg w-full sm:w-[45%]">
                                        <h1 className="text-yellow-400 text-lg font-semibold border-b border-yellow-400 pb-2 mb-2">Mobile Development</h1>
                                        <p className="text-gray-300 text-sm">Professional development of applications for iOS and Android.</p>
                                    </div>
                                    <div className="bg-black border border-gray-500 p-4 rounded-lg w-full sm:w-[45%]">
                                        <h1 className="text-yellow-400 text-lg font-semibold border-b border-yellow-400 pb-2 mb-2">Social Media Marketing</h1>
                                        <p className="text-gray-300 text-sm">Implementing marketing strategies to capture from social media platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
