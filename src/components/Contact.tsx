"use client"

import "./Contact.css";

export default function Contact() {
    return (
        <>
            <div className="contact-style-0">
                <video className="contact-bg-video" autoPlay muted loop playsInline>
                    <source src="/videos/contact.mp4" type="video/mp4" />
                </video>
                <div className="contact-arrow-style-0">
                    <svg width="24" height="70" viewBox="0 0 24 70" xmlns="http://www.w3.org/2000/svg" className="contact-arrow-style-1">
                        <path d="M10.9393 69.4069C11.5251 69.9926 12.4749 69.9926 13.0607 69.4069L22.6066 59.8609C23.1924 59.2751 23.1924 58.3254 22.6066 57.7396C22.0208 57.1538 21.0711 57.1538 20.4853 57.7396L12 66.2249L3.51476 57.7396C2.92897 57.1538 1.97922 57.1538 1.39344 57.7396C0.807654 58.3254 0.807654 59.2751 1.39344 59.8609L10.9393 69.4069ZM10.5 0.5V68.3462H13.5V0.5H10.5Z" className="contact-arrow-style-2"></path>
                    </svg>
                </div>
                <div className="contact-form-style-0">
                    <div className="contact-form-style-1">
                        <div className="contact-form-style-2" data-aos="fade">
                            <div className="contact-form-style-3">
                                <h2 className="contact-form-style-4">
                                    Locations
                                </h2>
                                <ul className="contact-form-style-5">

                                    <li className="contact-form-style-6"><a href="https://www.align.com/texas?hsLang=en" className="contact-form-style-7">Texas</a></li>
                                    <li className="contact-form-style-8"><a href="https://www.align.com/new-york?hsLang=en" className="contact-form-style-9">New York</a></li>
                                    <li className="contact-form-style-10"><a href="https://www.align.com/london?hsLang=en" className="contact-form-style-11">London</a></li>
                                    <li className="contact-form-style-12"><a href="https://www.align.com/new-jersey?hsLang=en" className="contact-form-style-13">New Jersey</a></li>
                                    <li className="contact-form-style-14"><a href="https://www.align.com/virginia?hsLang=en" className="contact-form-style-15">Virginia</a></li>
                                    <li className="contact-form-style-16"><a href="https://www.align.com/arizona?hsLang=en" className="contact-form-style-17">Arizona</a></li>
                                    <li className="contact-form-style-18"><a href="https://www.align.com/chicago?hsLang=en" className="contact-form-style-19">Chicago</a></li>
                                    <li className="contact-form-style-20"><a href="https://www.align.com/san-francisco?hsLang=en" className="contact-form-style-21">San Francisco</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-form-style-22">
                            <div className="contact-form-style-23">

                                <h2 className="contact-form-style-24">
                                    <span className="contact-form-style-25">
                                        <strong className="contact-form-style-26">
                                            Connect With Us
                                        </strong> </span>
                                </h2>
                            </div>
                            <div className="contact-form-style-27" data-hs-forms-root="true">
                                <form className="contact-form-style-28">
                                    <div className="contact-form-style-29"><label className="contact-form-style-30" htmlFor="firstname-20b42b85-ddea-43d0-8e4f-27113f478926"><span className="contact-form-style-31">First Name</span><span className="contact-form-style-32">*</span></label>
                                        <div className="contact-form-style-33"><input name="firstname" required="" placeholder="" type="text" className="contact-form-style-34" inputMode="text" autoComplete="given-name" defaultValue="" /></div>
                                    </div>
                                    <div className="contact-form-style-35"><label className="contact-form-style-36" htmlFor="lastname-20b42b85-ddea-43d0-8e4f-27113f478926"><span className="contact-form-style-37">Last Name</span><span className="contact-form-style-38">*</span></label>
                                        <div className="contact-form-style-39"><input name="lastname" required="" placeholder="" type="text" className="contact-form-style-40" inputMode="text" autoComplete="family-name" defaultValue="" /></div>
                                    </div>
                                    <div className="contact-form-style-41"><label className="contact-form-style-42" htmlFor="email-20b42b85-ddea-43d0-8e4f-27113f478926"><span className="contact-form-style-43">Email</span><span className="contact-form-style-44">*</span></label>
                                        <div className="contact-form-style-45"><input name="email" required="" placeholder="" type="email" className="contact-form-style-46" inputMode="email" autoComplete="email" defaultValue="" /></div>
                                    </div>
                                    <div className="contact-form-style-47">
                                        <div className="contact-form-style-48"><label className="contact-form-style-49" htmlFor="w_a-20b42b85-ddea-43d0-8e4f-27113f478926"><span className="contact-form-style-50">Service</span><span className="contact-form-style-51">*</span></label>
                                            <div className="contact-form-style-52"><select required="" className="contact-form-style-53" name="w_a">
                                                <option disabled="" defaultValue="" className="contact-form-style-54">Please Select</option>
                                                <option value="Data Center" className="contact-form-style-55">Data Center Design, Procure, Build</option>
                                                <option value="Migrations &amp; Cloud" className="contact-form-style-56">Data Center Assess &amp; Modernize</option>
                                                <option value="Workplace Technology" className="contact-form-style-57">Workplace Technology</option>
                                                <option value="Managed Services" className="contact-form-style-58">Managed Services</option>
                                                <option value="Align Cybersecurity" className="contact-form-style-59">Align Cybersecurity</option>
                                                <option value="Other" className="contact-form-style-60">Other</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="contact-form-style-61"><label className="contact-form-style-62" htmlFor="please_provide_any_additional_information__comments__or_requests_-20b42b85-ddea-43d0-8e4f-27113f478926"><span className="contact-form-style-63">Please provide any additional information, comments, or requests:</span></label>
                                        <div className="contact-form-style-64"><textarea className="contact-form-style-65" name="please_provide_any_additional_information__comments__or_requests_" placeholder=""></textarea></div>
                                    </div>
                                    <div className="contact-form-style-66">
                                        <div className="contact-form-style-67"></div>
                                        <div className="contact-form-style-68"><input type="submit" className="contact-form-style-69" value="Contact Us" /></div>
                                    </div><input name="hs_context" type="hidden" value="{&quot;embedAtTimestamp&quot;:&quot;1756852082743&quot;,&quot;formDefinitionUpdatedAt&quot;:&quot;1753367106821&quot;,&quot;userAgent&quot;:&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36&quot;,&quot;pageTitle&quot;:&quot;Technology Infrastructure Solutions | Align&quot;,&quot;pageUrl&quot;:&quot;https://www.align.com/&quot;,&quot;pageId&quot;:&quot;10658659860&quot;,&quot;isHubSpotCmsGeneratedPage&quot;:true,&quot;formTarget&quot;:&quot;#form-module_16557550451176&quot;,&quot;rumScriptExecuteTime&quot;:2078.89999999851,&quot;rumTotalRequestTime&quot;:2561.2999999970198,&quot;rumTotalRenderTime&quot;:2611.6999999955297,&quot;rumServiceResponseTime&quot;:482.3999999985099,&quot;rumFormRenderTime&quot;:50.399999998509884,&quot;connectionType&quot;:&quot;&quot;,&quot;firstContentfulPaint&quot;:0,&quot;largestContentfulPaint&quot;:0,&quot;locale&quot;:&quot;en&quot;,&quot;timestamp&quot;:1756852083513,&quot;originalEmbedContext&quot;:{&quot;portalId&quot;:&quot;3343341&quot;,&quot;formId&quot;:&quot;20b42b85-ddea-43d0-8e4f-27113f478926&quot;,&quot;region&quot;:&quot;na1&quot;,&quot;target&quot;:&quot;#form-module_16557550451176&quot;,&quot;isBuilder&quot;:false,&quot;isTestPage&quot;:false,&quot;isPreview&quot;:false,&quot;css&quot;:&quot;&quot;,&quot;cssRequired&quot;:&quot;&quot;,&quot;isMobileResponsive&quot;:true},&quot;correlationId&quot;:&quot;853389ab-673a-430f-9acc-8cf84069384a&quot;,&quot;renderedFieldsIds&quot;:[&quot;firstname&quot;,&quot;lastname&quot;,&quot;email&quot;,&quot;w_a&quot;,&quot;please_provide_any_additional_information__comments__or_requests_&quot;],&quot;captchaStatus&quot;:&quot;NOT_APPLICABLE&quot;,&quot;emailResubscribeStatus&quot;:&quot;NOT_APPLICABLE&quot;,&quot;isInsideCrossOriginFrame&quot;:false,&quot;source&quot;:&quot;forms-embed-1.9606&quot;,&quot;sourceName&quot;:&quot;forms-embed&quot;,&quot;sourceVersion&quot;:&quot;1.9606&quot;,&quot;sourceVersionMajor&quot;:&quot;1&quot;,&quot;sourceVersionMinor&quot;:&quot;9606&quot;,&quot;allPageIds&quot;:{&quot;contentPageId&quot;:10658659860,&quot;contentAnalyticsPageId&quot;:&quot;10658659860&quot;},&quot;_debug_embedLogLines&quot;:[{&quot;clientTimestamp&quot;:1756852083459,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved pageContext values which may be overriden by the embed context: {\&quot;pageTitle\&quot;:\&quot;Technology Infrastructure Solutions | Align\&quot;,\&quot;pageUrl\&quot;:\&quot;https://www.align.com/\&quot;,\&quot;userAgent\&quot;:\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36\&quot;,\&quot;pageId\&quot;:\&quot;10658659860\&quot;,\&quot;contentAnalyticsPageId\&quot;:\&quot;10658659860\&quot;,\&quot;contentPageId\&quot;:10658659860,\&quot;isHubSpotCmsGeneratedPage\&quot;:true}&quot;},{&quot;clientTimestamp&quot;:1756852083460,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved countryCode property from normalized embed definition response: \&quot;PK\&quot;&quot;}]}" className="contact-form-style-70" /><iframe name="target_iframe_20b42b85-ddea-43d0-8e4f-27113f478926" className="contact-form-style-71"></iframe>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
