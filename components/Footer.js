import Link from "next/link";
const Footer = () => {
    return (

        <footer className="text-gray-600 mx-auto body-font text-black dark:text-bright-gray-50 ">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                    <span className="ml-3 text-xl text-pumpkin">Vector Hamza</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Vector Hamza — Made By
                    <a href="https://godigi.website" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Godigi</a>
                </p>

            </div>
        </footer>




    );

};

export default Footer;