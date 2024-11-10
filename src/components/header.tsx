import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <section className="bg-black py-2">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex justify-center text-center">
                        <nav className="flex">
                            <ul className="flex flex-row md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                                <li className="text-lg text-yellow-300 p-3  mt-0.5 font-poppins">
                                    <Link href="/">About</Link>
                                </li>
                                <li className="text-lg text-yellow-300 p-3 mt-0.5 font-poppins">
                                    <Link href="/education">Education</Link>
                                </li>
                                <li className="text-lg text-yellow-300 p-3 mt-0.5 font-poppins">
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    );
}
