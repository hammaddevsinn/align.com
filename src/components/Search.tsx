"use client";

import "./Search.css";
export default function Search() {
    return (
        <>
                <div className="search-style-0" bis_skin_checked="1" tabindex="0">
                <div className="search-style-1" bis_skin_checked="1">
                    <div className="search-style-2" bis_skin_checked="1">
                        <button onclick="modalClose()" className="search-style-3" title="Press Escape To Close As Well">× <span className="search-style-4">Close Search</span></button>
                        <form action="/hs-search-results" className="search-style-5">
                            <fieldset className="search-style-6">
                                <div className="search-style-7" bis_skin_checked="1">
                                    <label className="search-style-8" for="search-field">
                                        <h3 className="search-style-9">Search The Site</h3>
                                    </label>
                                    <legend className="search-style-10">Search the website pages, blog, podcasts and resources.</legend>
                                    <div className="search-style-11" bis_skin_checked="1">
                                        <input className="search-style-12" type="text" name="term" required="" value="" placeholder="Search The Site" autocomplete="on" inputmode="search" />
                                    </div>
                                </div>
                                <div className="search-style-13" bis_skin_checked="1">
                                    <div className="search-style-14" bis_skin_checked="1">
                                        <button className="search-style-15" type="submit">Search</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <div className="search-style-16" bis_skin_checked="1"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
