import Image from "next/image";
import image1 from './assets/image1.jpg';

export default function Contact() {
    return (
        <div className="p-8 bg-black">
            <section className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    
                    <div className="md:w-1/4 bg-black border border-gray-700 p-8 rounded-lg text-center">
                        <div className="flex justify-center mb-6">
                            <Image src={image1} alt="Profile Picture" width={100} height={100} className="rounded-full" />
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
                        <div className="text-center mb-8">
                            <h1 className="text-2xl text-white font-semibold border-b border-yellow-400 pb-4">Contact Me</h1>
                        </div>
                        <div className="bg-black border border-gray-700 p-8 rounded-lg">
                            <form className="w-full space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-4 text-lg bg-gray-900 text-yellow-400 rounded-lg placeholder-yellow-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-4 text-lg bg-gray-900 text-yellow-400 rounded-lg placeholder-yellow-400"
                                />
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    className="w-full p-4 text-lg bg-gray-900 text-yellow-400 rounded-lg placeholder-yellow-400"
                                />
                                <input
                                    type="file"
                                    className="w-full p-4 text-lg bg-gray-900 text-yellow-400 rounded-lg placeholder-yellow-400"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={8}
                                    className="w-full p-4 text-lg bg-gray-900 text-yellow-400 rounded-lg placeholder-yellow-400"
                                ></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
