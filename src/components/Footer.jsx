import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-gray-100 py-8 px-4 text-center mt-[40px] pt-[40px]">
      <p className="text-gray-600 mb-2">Copyright © 2023 Team The Technophiles</p>
      <nav className="mb-4">
        <ul className="list-none">
          <li className="inline-block mx-2">
            <a className="text-gray-600 hover:text-gray-900" href="#">Terms of Use</a>
          </li>
          <li className="inline-block mx-2">
            <a className="text-gray-600 hover:text-gray-900" href="#">Privacy Policy</a>
          </li>
          <li className="inline-block mx-2">
            <a className="text-gray-600 hover:text-gray-900" >Feedback</a>
          </li>
        </ul>
      </nav>
      <p className="text-gray-600">Designed and developed by Team The Technophiles</p>
    </footer>
  );


/*
    return (
        <footer class="bg-gray-800">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Menu</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">© 2022 Food Delivery. All Rights Reserved.
                </span>
            </div>
        </footer>
    )*/
  }


export default Footer;
