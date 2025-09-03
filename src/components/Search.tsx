"use client";

import "./Search.css";
export default function Search() {
    return (
        <>
                <div className="search-style-0" tabIndex="0">
                <div className="search-style-1">
                    <div className="search-style-2">
                        <button onClick="modalClose()" className="search-style-3" title="Press Escape To Close As Well">× <span className="search-style-4">Close Search</span></button>
                        <form action="/hs-search-results" className="search-style-5">
                            <fieldset className="search-style-6">
                                <div className="search-style-7">
                                    <label className="search-style-8" htmlFor="search-field">
                                        <h3 className="search-style-9">Search The Site</h3>
                                    </label>
                                    <legend className="search-style-10">Search the website pages, blog, podcasts and resources.</legend>
                                    <div className="search-style-11">
                                        <input className="search-style-12" type="text" name="term" required defaultValue="" placeholder="Search The Site" autoComplete="on" inputMode="search" />
                                    </div>
                                </div>
                                <div className="search-style-13">
                                    <div className="search-style-14">
                                        <button className="search-style-15" type="submit">Search</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <div className="search-style-16"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
