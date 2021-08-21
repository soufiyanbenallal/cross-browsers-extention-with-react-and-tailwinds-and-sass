import * as React from 'react';
import {browser, Tabs} from 'webextension-polyfill-ts';
import '../index.css';
import './styles.scss';
function openWebPage(url) {
  return browser.tabs.create({url})
}

const Popup = () => {
  return (
      <section className="" style={{ minWidth: 450}} id="popup">
          <div className="top-0 w-full h-full">
             <h1 className="top-0 w-full h-full text-center text-3xl py-3"><strong>LOGO</strong></h1>
          </div>
          <div className="container mx-auto h-full">
            <div className="w-full">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
               
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-center my-3">
                      <h6 className="text-sm font-bold">
                        Enter your email & password
                      </h6>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password">
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm  focus:outline-none focus:ring w-full"
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm  focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          
                        />
                      </div>
                      <div className="flex flex-wrap mt-6 justify-center">
                        <div className="w-1/2">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              id="customCheckLogin"
                              type="checkbox"
                              className="form-checkbox border-0 rounded text-gray-200 ml-1 w-5 h-5"
                              
                            />
                            <span className="ml-2 text-sm text-gray-900">
                              Remember me
                            </span>
                          </label>
                        </div>
                        <div className="w-1/2 text-right py-1">
                          <a
                            href="#pablo"
                            onClick={e => e.preventDefault()} 
                          >
                           <span className="text-sm text-gray-900">
                           Forgot password?
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div> 
            </div>
          </div>
        </section>
  );
};

export default Popup;
