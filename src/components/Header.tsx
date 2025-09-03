"use client";

import { useState, useEffect, useRef } from 'react';
import './Header.css';
import './Search.css';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState('main');
    const [menuHistory, setMenuHistory] = useState<string[]>([]);
    const [currentMenuTitle, setCurrentMenuTitle] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside the mobile menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                closeMobileMenu();
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Handle scroll events to show/hide scroll header
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        const handleScroll = () => {
            // Clear previous timeout
            clearTimeout(timeoutId);
            
            // Debounce scroll events to prevent rapid state changes
            timeoutId = setTimeout(() => {
                const scrollPosition = window.scrollY;
                const scrollThreshold = 150; // Increased threshold for more stable behavior
                
                setIsScrolled(scrollPosition > scrollThreshold);
            }, 10); // Small delay to debounce
        };

        // Add scroll event listener with passive option for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Check initial scroll position
        handleScroll();

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    // Handle screen size changes for logo switching
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1160);
        };

        // Set initial state
        handleResize();

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
        setCurrentMenu('main');
        setMenuHistory([]);
        setCurrentMenuTitle('');
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setCurrentMenu('main');
        setMenuHistory([]);
        setCurrentMenuTitle('');
    };

    const navigateToMenu = (menuName: string, title: string) => {
        setMenuHistory([...menuHistory, currentMenu]);
        setCurrentMenu(menuName);
        setCurrentMenuTitle(title);
    };

    const goBack = () => {
        if (menuHistory.length > 0) {
            const previousMenu = menuHistory[menuHistory.length - 1];
            setCurrentMenu(previousMenu);
            setMenuHistory(menuHistory.slice(0, -1));
            setCurrentMenuTitle('');
        }
    };

    const modalShow = () => {
        const modal = document.querySelector('.search-style-0') as HTMLElement;
        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'block';
        }
    };

    const modalClose = () => {
        const modal = document.querySelector('.search-style-0') as HTMLElement;
        if (modal) {
            modal.classList.add('hidden');
            setTimeout(() => {
                if (modal) {
                    modal.style.display = 'none';
                }
            }, 300);
        }
    };

    return (
        <>
            <header className={`style-0 ${isScrolled ? 'main-header-hidden' : 'main-header-visible'}`}>

                <div className="style-1">
                    <div className="style-2">

                        <div className="style-3">

                            <a href="https://www.align.com" className="style-4">

                                <span className="style-5">
                                    {!isMobile ? (
                                        <img src="https://www.align.com/hubfs/Logo%20White.svg" alt="Logo White" loading="lazy"
                                            width="136" height="45" className="style-6" />
                                    ) : (
                                        <img src="https://www.align.com/hubfs/align-fullcolor-logo.svg" alt="align-fullcolor-logo"
                                            loading="lazy" width="136" height="46" className="style-8" />
                                    )}
                                </span> </a> <span
                                            className="style-9">
                                <span className="style-10">|&nbsp;&nbsp;</span>US Services
                            </span>
                        </div>
                        <nav className="style-11" aria-label=" menu">
                            <div className="style-12">
                                <div className="style-13">
                                    <nav className="style-14">
                                        <span className="style-15">
                                            <div className="style-16">



                                                <div className="style-17">
                                                    <img src="https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=20&amp;height=20&amp;name=icons8-earth-planet-64.webp"
                                                        height="20" width="20" alt="language switcher"
                                                        srcSet="https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=10&amp;height=10&amp;name=icons8-earth-planet-64.webp 10w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=20&amp;height=20&amp;name=icons8-earth-planet-64.webp 20w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=30&amp;height=30&amp;name=icons8-earth-planet-64.webp 30w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=40&amp;height=40&amp;name=icons8-earth-planet-64.webp 40w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=50&amp;height=50&amp;name=icons8-earth-planet-64.webp 50w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=60&amp;height=60&amp;name=icons8-earth-planet-64.webp 60w"
                                                        sizes="(max-width: 20px) 100vw, 20px" className="style-18" />
                                                    Language:
                                                </div>
                                                <div className="style-19">
                                                    <span className="style-20" data-hs-cos-general-type="widget"
                                                        data-hs-cos-type="language_switcher"></span>
                                                </div>
                                                <div className="style-21">
                                                    <div className="style-22">
                                                        <ul className="style-23">



                                                            <li className="style-24">
                                                                <a className="style-25" href="https://www.align.com/">
                                                                    US Services
                                                                </a>
                                                            </li>
                                                            <li className="style-26">
                                                                <a className="style-27" href="https://www.align.com/en-gb/uk-emea">
                                                                    UK &amp; EMEA Services
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </span> <a className="style-28" href="https://www.align.com/blog?hsLang=en">Our Blog</a> <a
                                            className="style-29" href="https://www.align.com/contact?hsLang=en">Contact Us</a> <a
                                                className="style-30"
                                                href="https://www.align.com/resource-library?hsLang=en">Resources</a> <a
                                                    className="style-31" href="https://www.align.com/support?hsLang=en">
                                            <svg className="style-32" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 23.446 19.278">
                                                <path
                                                    d="M8.337 0A4.168 4.168 0 1012.5 4.168 4.18 4.18 0 008.337 0zm8.857.521a3.387 3.387 0 103.387 3.387A3.4 3.4 0 0017.194.521zM8.337 1.563a2.605 2.605 0 11-2.605 2.605 2.593 2.593 0 012.605-2.605zm8.857.521a1.824 1.824 0 11-1.824 1.824 1.812 1.812 0 011.824-1.824zm0 5.731A7.4 7.4 0 0011.878 9.6a12.8 12.8 0 00-3.541-.48A11.437 11.437 0 002.6 10.526a4.609 4.609 0 00-2.6 3.8V18.5a.812.812 0 00.782.782h15.11a.812.812 0 00.782-.782v-2.609h5.992a.812.812 0 00.782-.782v-3.386A3.484 3.484 0 0021.452 8.8a8.752 8.752 0 00-4.258-.985zm0 1.563a7.329 7.329 0 013.484.79c.837.471 1.2 1.011 1.2 1.555v2.605h-5.21a4.609 4.609 0 00-2.6-3.8c-.159-.094-.328-.183-.5-.269a7.258 7.258 0 013.615-.879zm-8.857 1.3a10.02 10.02 0 014.95 1.189 3.081 3.081 0 011.824 2.459v3.387H1.563v-3.385a3.081 3.081 0 011.824-2.458 10.019 10.019 0 014.95-1.189z"
                                                    className="style-33"></path>
                                            </svg>
                                            Support
                                        </a>
                                    </nav> <button className="style-34" onClick={modalShow}>
                                        <svg className="style-35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.2 61.2">
                                            <path data-name="Path 24"
                                                d="M25 50a25.2 25.2 0 0 0 15.4-5.3L57 61.2l4.2-4.2-16.5-16.6A25 25 0 1 0 25 50Zm0-44A19 19 0 1 1 6 25 19 19 0 0 1 25 6Z"
                                                className="style-36"></path>
                                        </svg> <span className="style-37">Search Our Website</span> </button>
                                </div>
                            </div>
                            <ul className="style-38">
                                <li className="style-39" aria-role="none" aria-haspopup="true">
                                    <a className="style-40" href="https://www.align.com/solutions/data-center-solutions?hsLang=en"
                                        aria-role="menuitem">
                                        Data Center Infrastructure Solutions

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="style-41">
                                            <path
                                                d="M6.70711 9.68899C6.31658 10.0795 5.68342 10.0795 5.29289 9.68899L0.7 5.09609C0.313401 4.70949 0.313401 4.08269 0.7 3.69609C1.0866 3.30949 1.7134 3.30949 2.1 3.69609L6 7.59609L9.9 3.69609C10.2866 3.30949 10.9134 3.30949 11.3 3.69609C11.6866 4.08269 11.6866 4.70949 11.3 5.09609L6.70711 9.68899Z"
                                                fill="currentColor" className="style-42"></path>
                                        </svg> </a>
                                    <div className="style-43" bis_skin_checked="1">
                                        <div className="style-44" bis_skin_checked="1">
                                            <h2 className="style-45">Data Center Technology Infrastructure Solutions</h2>
                                        </div>
                                        <div className="style-46" bis_skin_checked="1">
                                            <div className="style-47" bis_skin_checked="1">
                                                <h4 className="style-48"><a href="https://www.align.com/assess-modernize?hsLang=en"
                                                    rel="noopener" className="style-49">Assess &amp; Modernize</a></h4> <span
                                                        className="style-50" data-hs-cos-general-type="widget"
                                                        data-hs-cos-type="simple_menu">
                                                    <div className="style-51" role="navigation" data-sitemap-name="" data-menu-id=""
                                                        aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-52">
                                                            <li className="style-53" role="none"><a
                                                                href="https://www.align.com/assess-modernize?tab=hs-tabs__tab-1--widget_1744037119268"
                                                                role="menuitem" target="_self" className="style-54">Critical
                                                                Facility Assessments</a></li>
                                                            <li className="style-55" role="none"><a
                                                                href="https://www.align.com/assess-modernize?tab=hs-tabs__tab-2--widget_1744037119268"
                                                                role="menuitem" target="_self" className="style-56">Current
                                                                State Assessments</a></li>
                                                            <li className="style-57" role="none"><a
                                                                href="https://www.align.com/assess-modernize?tab=hs-tabs__tab-3--widget_1744037119268"
                                                                role="menuitem" target="_self" className="style-58">Application
                                                                &amp; Data Migrations</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="style-59" bis_skin_checked="1">
                                                <h4 className="style-60"><a href="https://www.align.com/design-procure?hsLang=en"
                                                    rel="noopener" className="style-61">Design &amp; Plan</a></h4> <span
                                                        className="style-62" data-hs-cos-general-type="widget"
                                                        data-hs-cos-type="simple_menu">
                                                    <div className="style-63" role="navigation" data-sitemap-name="" data-menu-id=""
                                                        aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-64">
                                                            <li className="style-65" role="none"><a href="javascript:void(0);"
                                                                role="menuitem" target="_self"
                                                                className="style-66">Infrastructure Design</a></li>
                                                            <li className="style-66" role="none"><a href="javascript:void(0);"
                                                                role="menuitem" target="_self" className="style-68">AI
                                                                Readiness</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="style-69" bis_skin_checked="1">
                                                <h4 className="style-70"><a href="https://www.align.com/build-optimize?hsLang=en"
                                                    rel="noopener" className="style-71">Procure &amp; Build</a></h4> <span
                                                        className="style-72" data-hs-cos-general-type="widget"
                                                        data-hs-cos-type="simple_menu">
                                                    <div className="style-73" role="navigation" data-sitemap-name="" data-menu-id=""
                                                        aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-74">
                                                            <li className="style-75" role="none"><a href="javascript:void(0);"
                                                                role="menuitem" target="_self"
                                                                className="style-76">Procurement</a></li>
                                                            <li className="style-77" role="none"><a href="javascript:void(0);"
                                                                role="menuitem" target="_self" className="style-78">Vendor
                                                                Management</a></li>
                                                            <li className="style-78" role="none"><a href="javascript:void(0);"
                                                                role="menuitem" target="_self" className="style-80">Cabinet
                                                                Installation</a></li>
                                                            <li className="style-81" role="none"><a href="javascript:void(0);"
                                                                role="menuitem" target="_self" className="style-82">Cabling
                                                                Infrastructure</a></li>
                                                            <li className="style-83" role="none"><a href="javascript:void(0);"
                                                                role="menuitem" target="_self" className="style-84">Installation
                                                                &amp; Testing</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="style-85" bis_skin_checked="1">
                                                <h4 className="style-86"><a href="https://www.align.com/en-us/asset-point?hsLang=en"
                                                    rel="noopener" className="style-87">Manage &amp; Optimize</a></h4> <span
                                                        className="style-88" data-hs-cos-general-type="widget"
                                                        data-hs-cos-type="simple_menu">
                                                    <div className="style-89" role="navigation" data-sitemap-name="" data-menu-id=""
                                                        aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-90">
                                                            <li className="style-91" role="none"><a
                                                                href="https://www.align.com/en-us/asset-point"
                                                                role="menuitem" target="_self" className="style-92">Asset Point®
                                                                - Align's DCIM Platform</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="style-93" aria-role="none" aria-haspopup="true">
                                    <a className="style-94"
                                        href="https://www.align.com/professional-services/workplace-technology?hsLang=en"
                                        aria-role="menuitem">
                                        Workplace Technology

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="style-95">
                                            <path
                                                d="M6.70711 9.68899C6.31658 10.0795 5.68342 10.0795 5.29289 9.68899L0.7 5.09609C0.313401 4.70949 0.313401 4.08269 0.7 3.69609C1.0866 3.30949 1.7134 3.30949 2.1 3.69609L6 7.59609L9.9 3.69609C10.2866 3.30949 10.9134 3.30949 11.3 3.69609C11.6866 4.08269 11.6866 4.70949 11.3 5.09609L6.70711 9.68899Z"
                                                fill="currentColor" className="style-96"></path>
                                        </svg> </a>
                                    <div className="style-97" bis_skin_checked="1">
                                        <div className="style-98" bis_skin_checked="1">
                                            <h2 className="style-99">Workplace Technology&nbsp;</h2>
                                            <p className="style-100">No matter how the office evolves, Align works closely with
                                                businesses to provide a connected IT enterprise for today's hybrid professional
                                                that's built to be secure, flexible and reliable.</p>
                                        </div>
                                        <div className="style-101" bis_skin_checked="1">
                                            <div className="style-102" bis_skin_checked="1">
                                                <h4 className="style-103">Solutions</h4> <span className="style-104"
                                                    data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="style-105" role="navigation" data-sitemap-name=""
                                                        data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-106">
                                                            <li className="style-107" role="none"><a
                                                                href="https://www.align.com/hq-branch-technology-design"
                                                                role="menuitem" target="_self" className="style-108">HQ &amp;
                                                                Branch Technology Design</a></li>
                                                            <li className="style-109" role="none"><a
                                                                href="https://www.align.com/networking-wi-fi"
                                                                role="menuitem" target="_self" className="style-110">Networking
                                                                &amp; Wi-Fi</a></li>
                                                            <li className="style-111" role="none"><a
                                                                href="https://www.align.com/av-design-implementation"
                                                                role="menuitem" target="_self" className="style-112">AV Design
                                                                &amp; Implementation</a></li>
                                                            <li className="style-113" role="none"><a
                                                                href="https://www.align.com/it-structured-cabling"
                                                                role="menuitem" target="_self" className="style-114">IT &amp;
                                                                Structured Cabling</a></li>
                                                            <li className="style-115" role="none"><a
                                                                href="https://www.align.com/smart-office-connected-enterprise"
                                                                role="menuitem" target="_self" className="style-116">Smart
                                                                Office &amp; Connected Enterprise</a></li>
                                                            <li className="style-117" role="none"><a
                                                                href="https://www.align.com/security-access-control"
                                                                role="menuitem" target="_self" className="style-118">Security
                                                                &amp; Access Control</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="style-119" bis_skin_checked="1">
                                                <h4 className="style-120">News &amp; Resources</h4> <span className="style-121"
                                                    data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="style-122" role="navigation" data-sitemap-name=""
                                                        data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-123">
                                                            <li className="style-124" role="none"><a
                                                                href="https://www.align.com/blog" role="menuitem"
                                                                target="_self" className="style-125">Blog</a></li>
                                                            <li className="style-126" role="none"><a
                                                                href="https://www.align.com/resource-library"
                                                                role="menuitem" target="_self" className="style-127">Resource
                                                                Center</a></li>
                                                            <li className="style-127" role="none"><a
                                                                href="https://www.align.com/success-stories/tag/workplace-technology"
                                                                role="menuitem" target="_self" className="style-129">Success
                                                                Stories</a></li>
                                                            <li className="style-130" role="none"><a
                                                                href="https://www.align.com/it-careers-align"
                                                                role="menuitem" target="_self" className="style-131">Careers</a>
                                                            </li>
                                                            <li className="style-132" role="none"><a
                                                                href="https://www.align.com/events" role="menuitem"
                                                                target="_self" className="style-133">Events</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="style-134" aria-role="none" aria-haspopup="true">
                                    <a className="style-135" href="https://www.align.com/managed-services?hsLang=en"
                                        aria-role="menuitem">
                                        Managed Services

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="style-136">
                                            <path
                                                d="M6.70711 9.68899C6.31658 10.0795 5.68342 10.0795 5.29289 9.68899L0.7 5.09609C0.313401 4.70949 0.313401 4.08269 0.7 3.69609C1.0866 3.30949 1.7134 3.30949 2.1 3.69609L6 7.59609L9.9 3.69609C10.2866 3.30949 10.9134 3.30949 11.3 3.69609C11.6866 4.08269 11.6866 4.70949 11.3 5.09609L6.70711 9.68899Z"
                                                fill="currentColor" className="style-137"></path>
                                        </svg> </a>
                                    <div className="style-138" bis_skin_checked="1">
                                        <div className="style-139" bis_skin_checked="1">
                                            <h2 className="style-140">Managed Services &amp; Cybersecurity</h2>
                                            <p className="style-141">Award-winning, scalable, and secure IT solutions from the
                                                industry's premier Managed Services Provider.</p>
                                        </div>
                                        <div className="style-142" bis_skin_checked="1">
                                            <div className="style-143" bis_skin_checked="1">
                                                <h4 className="style-144">Managed Services&nbsp;</h4> <span className="style-145"
                                                    data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="style-146" role="navigation" data-sitemap-name=""
                                                        data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-147">
                                                            <li className="style-148" role="none"><a
                                                                href="https://www.align.com/align-it-suite" role="menuitem"
                                                                target="_self" className="style-149">Align IT Suite</a></li>
                                                            <li className="style-150" role="none"><a
                                                                href="https://www.align.com/managed-cloud-services"
                                                                role="menuitem" target="_self" className="style-151">Cloud
                                                                Services</a></li>
                                                            <li className="style-151" role="none"><a
                                                                href="https://www.align.com/microsoft-365-copilot"
                                                                role="menuitem" target="_self" className="style-153">Microsoft
                                                                365 Copilot</a></li>
                                                            <li className="style-154" role="none"><a
                                                                href="https://www.align.com/operational-due-diligence"
                                                                role="menuitem" target="_self" className="style-155">Operational
                                                                Due Diligence</a></li>
                                                            <li className="style-156" role="none"><a
                                                                href="https://www.align.com/managed-threat-protection"
                                                                role="menuitem" target="_self" className="style-157">Align
                                                                Guardian</a></li>
                                                            <li className="style-158" role="none"><a
                                                                href="https://www.align.com/compliance-and-data-archiving"
                                                                role="menuitem" target="_self" className="style-159">Compliance
                                                                &amp; Data Archiving</a></li>
                                                            <li className="style-160" role="none"><a
                                                                href="https://www.align.com/managed-data-protection"
                                                                role="menuitem" target="_self" className="style-161">Managed
                                                                Data Protection</a></li>
                                                            <li className="style-162" role="none"><a
                                                                href="https://www.align.com/managed-collaboration-voice-services"
                                                                role="menuitem" target="_self" className="style-163">Managed
                                                                Collaboration &amp; Voice Services</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="style-164" bis_skin_checked="1">
                                                <h4 className="style-165">Cybersecurity</h4> <span className="style-166"
                                                    data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="style-167" role="navigation" data-sitemap-name=""
                                                        data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-168">
                                                            <li className="style-169" role="none"><a
                                                                href="https://www.align.com/align-cybersecurity"
                                                                role="menuitem" target="_self" className="style-170">Align
                                                                Cybersecurity </a></li>
                                                            <li className="style-171" role="none"><a
                                                                href="https://www.align.com/align-cybersecurity"
                                                                aria-haspopup="true" aria-expanded="false" role="menuitem"
                                                                target="_self" className="style-172">Solutions</a>
                                                                <ul role="menu" className="style-173">
                                                                    <li className="style-174" role="none"><a
                                                                        href="https://www.align.com/operational-cybersecurity-risk-assessments"
                                                                        role="menuitem" target="_self"
                                                                        className="style-175">Operational Cybersecurity Risk
                                                                        Assessments</a></li>
                                                                    <li className="style-176" role="none"><a
                                                                        href="https://www.align.com/customized-cybersecurity-program-manual"
                                                                        role="menuitem" target="_self"
                                                                        className="style-177">Cybersecurity Program Manuals</a>
                                                                    </li>
                                                                    <li className="style-178" role="none"><a
                                                                        href="https://www.align.com/endpoint-protection-solutions"
                                                                        role="menuitem" target="_self"
                                                                        className="style-179">Endpoint Protection Solutions</a>
                                                                    </li>
                                                                    <li className="style-180" role="none"><a
                                                                        href="https://www.align.com/data-discovery-mapping"
                                                                        role="menuitem" target="_self"
                                                                        className="style-181">Data Discovery &amp; Mapping</a>
                                                                    </li>
                                                                    <li className="style-182" role="none"><a
                                                                        href="https://www.align.com/cybersecurity-education"
                                                                        role="menuitem" target="_self"
                                                                        className="style-183">Cybersecurity Education</a></li>
                                                                    <li className="style-184" role="none"><a
                                                                        href="https://www.align.com/outsourced-virtual-chief-information-security-officers-vciso"
                                                                        role="menuitem" target="_self"
                                                                        className="style-185">vCISO &amp; Cybersecurity
                                                                        Reporting</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="style-186" bis_skin_checked="1">
                                                <h4 className="style-187">Resources &amp; Press</h4> <span className="style-188"
                                                    data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="style-189" role="navigation" data-sitemap-name=""
                                                        data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-190">
                                                            <li className="style-191" role="none"><a
                                                                href="https://www.align.com/blog" role="menuitem"
                                                                target="_self" className="style-192">Blog</a></li>
                                                            <li className="style-192" role="none"><a
                                                                href="https://www.align.com/resource-library?topic=managed-services"
                                                                role="menuitem" target="_self" className="style-194">Resource
                                                                Center</a></li>
                                                            <li className="style-195" role="none"><a
                                                                href="https://www.align.com/success-stories/tag/managed-services"
                                                                role="menuitem" target="_self" className="style-196">Success
                                                                Stories</a></li>
                                                            <li className="style-197" role="none"><a
                                                                href="https://www.align.com/events" role="menuitem"
                                                                target="_self" className="style-198">Upcoming Events</a></li>
                                                            <li className="style-199" role="none"><a
                                                                href="https://portal.align.com/login?url=%2Fapp"
                                                                role="menuitem" target="_self" className="style-200">Client
                                                                Login</a></li>
                                                            <li className="style-200" role="none"><a
                                                                href="https://www.align.com/client-alerts" role="menuitem"
                                                                target="_self" className="style-202">Client Alerts</a></li>
                                                            <li className="style-203" role="none"><a
                                                                href="https://www.align.com/press" role="menuitem"
                                                                target="_self" className="style-204">Press</a></li>
                                                            <li className="style-205" role="none"><a
                                                                href="https://www.align.com/support" role="menuitem"
                                                                target="_self" className="style-206">Support</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="style-207" bis_skin_checked="1">
                                                <h4 className="style-208">Why Align Managed Services</h4> <span className="style-209"
                                                    data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="style-210" role="navigation" data-sitemap-name=""
                                                        data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-211">
                                                            <li className="style-212" role="none"><a
                                                                href="https://www.align.com/managed-services-leadership"
                                                                role="menuitem" target="_self"
                                                                className="style-213">Leadership</a></li>
                                                            <li className="style-214" role="none"><a
                                                                href="https://www.align.com/awards" role="menuitem"
                                                                target="_self" className="style-215">Awards</a></li>
                                                            <li className="style-215" role="none"><a
                                                                href="https://www.align.com/strategic-partners-clients"
                                                                role="menuitem" target="_self" className="style-217">Strategic
                                                                Partners &amp; Clients</a></li>
                                                            <li className="style-218" role="none"><a
                                                                href="https://www.align.com/align-locations" role="menuitem"
                                                                target="_self" className="style-219">Locations</a></li>
                                                            <li className="style-220" role="none"><a
                                                                href="https://www.align.com/operational-security"
                                                                role="menuitem" target="_self" className="style-221">Operational
                                                                Security</a></li>
                                                            <li className="style-222" role="none"><a
                                                                href="https://www.align.com/it-careers-align"
                                                                role="menuitem" target="_self" className="style-223">Careers</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="style-224" aria-role="none" aria-haspopup="true">
                                    <a className="style-225" href="https://www.align.com/about?hsLang=en" aria-role="menuitem">
                                        About Align

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="style-226">
                                            <path
                                                d="M6.70711 9.68899C6.31658 10.0795 5.68342 10.0795 5.29289 9.68899L0.7 5.09609C0.313401 4.70949 0.313401 4.08269 0.7 3.69609C1.0866 3.30949 1.7134 3.30949 2.1 3.69609L6 7.59609L9.9 3.69609C10.2866 3.30949 10.9134 3.30949 11.3 3.69609C11.6866 4.08269 11.6866 4.70949 11.3 5.09609L6.70711 9.68899Z"
                                                fill="currentColor" className="style-227"></path>
                                        </svg> </a>
                                    <div className="style-228" bis_skin_checked="1">
                                        <div className="style-229" bis_skin_checked="1">
                                            <h2 className="style-230">About Align</h2>
                                            <p className="style-231">Over 35 Years' Experience, High-caliber IT Solutions,
                                                Award-Winning Professionals and Managed IT Services, Subject Matter Experts</p>
                                        </div>
                                        <div className="style-232" bis_skin_checked="1">
                                            <div className="style-233" bis_skin_checked="1">
                                                <h4 className="style-234">About Align</h4> <span className="style-235"
                                                    data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="style-236" role="navigation" data-sitemap-name=""
                                                        data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="style-237">
                                                            <li className="style-238" role="none"><a
                                                                href="https://www.align.com/about" role="menuitem"
                                                                target="_self" className="style-239">About Align</a></li>
                                                            <li className="style-239" role="none"><a
                                                                href="https://www.align.com/leadership" role="menuitem"
                                                                target="_self" className="style-241">Leadership</a></li>
                                                            <li className="style-242" role="none"><a
                                                                href="https://www.align.com/blog" role="menuitem"
                                                                target="_self" className="style-243">Blog</a></li>
                                                            <li className="style-244" role="none"><a
                                                                href="https://www.align.com/press" role="menuitem"
                                                                target="_self" className="style-245">News &amp; Press</a></li>
                                                            <li className="style-245" role="none"><a
                                                                href="https://www.align.com/it-careers-align"
                                                                role="menuitem" target="_self" className="style-247">Careers</a>
                                                            </li>
                                                            <li className="style-248" role="none"><a
                                                                href="https://www.align.com/resource-library"
                                                                role="menuitem" target="_self" className="style-249">Resource
                                                                Library</a></li>
                                                            <li className="style-249" role="none"><a
                                                                href="https://www.align.com/success-stories" role="menuitem"
                                                                target="_self" className="style-250">Success Stories</a></li>
                                                            <li className="style-250" role="none"><a
                                                                href="https://www.align.com/awards" role="menuitem"
                                                                target="_self" className="style-252">Awards</a></li>
                                                            <li className="style-253" role="none"><a
                                                                href="https://www.align.com/align-locations" role="menuitem"
                                                                target="_self" className="style-254">Locations</a></li>
                                                            <li className="style-255" role="none"><a
                                                                href="https://www.align.com/events" role="menuitem"
                                                                target="_self" className="style-256">Events</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="style-258">
                                    <a className="style-259" href="https://www.align.com/contact?hsLang=en">Contact us</a>
                                </li>
                            </ul>
                        </nav>

                        {/* Mobile Search Icon - Left of Hamburger */}
                        <button className="mobile-search-btn" onClick={modalShow}>
                            <svg width="36" height="36" viewBox="0 0 61.2 61.2" xmlns="http://www.w3.org/2000/svg">
                                <path data-name="Path 24" d="M25 50a25.2 25.2 0 0 0 15.4-5.3L57 61.2l4.2-4.2-16.5-16.6A25 25 0 1 0 25 50Zm0-44A19 19 0 1 1 6 25 19 19 0 0 1 25 6Z"></path>
                            </svg>
                        </button>

                        <button className="style-260" onClick={openMobileMenu}>
                            <span className="style-261">Menu Button</span> <svg width="100" height="100" viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg" className="style-262">
                                <path
                                    d="M12.5 53.1a3.1 3.1 0 1 1 0-6.2h56.3a3.1 3.1 0 1 1 0 6.2zm18.8 25a3.1 3.1 0 1 1 0-6.2h56.2a3.1 3.1 0 1 1 0 6.2zm3-50a3.1 3.1 0 1 1 0-6.2h56.3a3.1 3.1 0 1 1 0 6.2z"
                                    className="style-263"></path>
                            </svg> </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay">
                    <div className={`mobile-menu ${currentMenu !== 'main' ? 'submenu-open' : ''}`} ref={mobileMenuRef}>
                        {/* Header with back button and title */}
                        <div className="mobile-menu-header">
                            {currentMenu !== 'main' && (
                                <button className="mobile-menu-back" onClick={goBack}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            )}
                            <h2 className="mobile-menu-title">
                                {currentMenuTitle || 'Menu'}
                            </h2>
                            <button className="mobile-menu-close" onClick={closeMobileMenu}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Main Menu */}
                        {currentMenu === 'main' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('data-center', 'Data Center Infrastructure Solutions')}
                                        >
                                            <span>Data Center Infrastructure Solutions</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('workplace', 'Workplace Technology')}
                                        >
                                            <span>Workplace Technology</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('managed-services', 'Managed Services')}
                                        >
                                            <span>Managed Services</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('about', 'About Align')}
                                        >
                                            <span>About Align</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Data Center Submenu */}
                        {currentMenu === 'data-center' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('assess-modernize', 'Assess & Modernize')}
                                        >
                                            <span>Assess & Modernize</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('design-plan', 'Design & Plan')}
                                        >
                                            <span>Design & Plan</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('procure-build', 'Procure & Build')}
                                        >
                                            <span>Procure & Build</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('manage-optimize', 'Manage & Optimize')}
                                        >
                                            <span>Manage & Optimize</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Assess & Modernize Submenu */}
                        {currentMenu === 'assess-modernize' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Critical Facility Assessments</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Current State Assessments</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Application & Data Migrations</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Design & Plan Submenu */}
                        {currentMenu === 'design-plan' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Infrastructure Design</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>AI Readiness</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Procure & Build Submenu */}
                        {currentMenu === 'procure-build' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Procurement</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Vendor Management</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Cabinet Installation</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Cabling Infrastructure</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Installation & Testing</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Manage & Optimize Submenu */}
                        {currentMenu === 'manage-optimize' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Asset Point® - Align's DCIM Platform</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Workplace Technology Submenu */}
                        {currentMenu === 'workplace' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('workplace-solutions', 'Workplace Solutions')}
                                        >
                                            <span>Solutions</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('workplace-news', 'Workplace News & Resources')}
                                        >
                                            <span>News & Resources</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Workplace Solutions Submenu */}
                        {currentMenu === 'workplace-solutions' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>HQ & Branch Technology Design</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Networking & Wi-Fi</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>AV Design & Implementation</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>IT & Structured Cabling</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Smart Office & Connected Enterprise</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Security & Access Control</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Workplace News & Resources Submenu */}
                        {currentMenu === 'workplace-news' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Blog</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Resource Center</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Success Stories</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Careers</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Events</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Managed Services Submenu */}
                        {currentMenu === 'managed-services' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('managed-services-main', 'Managed Services')}
                                        >
                                            <span>Managed Services</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('managed-services-cybersecurity', 'Cybersecurity')}
                                        >
                                            <span>Cybersecurity</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('managed-services-resources', 'Resources & Press')}
                                        >
                                            <span>Resources & Press</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('managed-services-why', 'Why Align Managed Services')}
                                        >
                                            <span>Why Align Managed Services</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Managed Services Main Submenu */}
                        {currentMenu === 'managed-services-main' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Align IT Suite</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Cloud Services</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Microsoft 365 Copilot</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Operational Due Diligence</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Align Guardian</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Compliance & Data Archiving</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Managed Data Protection</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Managed Collaboration & Voice Services</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Cybersecurity Submenu */}
                        {currentMenu === 'managed-services-cybersecurity' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Align Cybersecurity</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="mobile-menu-item"
                                            onClick={() => navigateToMenu('cybersecurity-solutions', 'Cybersecurity Solutions')}
                                        >
                                            <span>Solutions</span>
                                            <svg className="mobile-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Cybersecurity Solutions Submenu */}
                        {currentMenu === 'cybersecurity-solutions' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Operational Cybersecurity Risk Assessments</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Cybersecurity Program Manuals</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Endpoint Protection Solutions</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Data Discovery & Mapping</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Cybersecurity Education</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>vCISO & Cybersecurity Reporting</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Resources & Press Submenu */}
                        {currentMenu === 'managed-services-resources' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Blog</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Resource Center</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Success Stories</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Upcoming Events</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Client Login</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Client Alerts</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Press</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Support</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Why Align Managed Services Submenu */}
                        {currentMenu === 'managed-services-why' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Leadership</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Awards</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Strategic Partners & Clients</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Locations</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Operational Security</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Careers</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* About Align Submenu */}
                        {currentMenu === 'about' && (
                            <div className="mobile-menu-content">
                                <ul className="mobile-menu-list">
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>About Align</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Leadership</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Blog</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>News & Press</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Careers</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Resource Library</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Success Stories</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Awards</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Locations</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="mobile-menu-item">
                                            <span>Events</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Search Modal */}
            <div className="search-style-0 hidden" bis_skin_checked="1" tabindex="0">
                <div className="search-style-1" bis_skin_checked="1">
                    <div className="search-style-2" bis_skin_checked="1">
                        <button onClick={modalClose} className="search-style-3" title="Press Escape To Close As Well">× <span className="search-style-4">Close Search</span></button>
                        <form action="/hs-search-results" className="search-style-5">
                            <fieldset className="search-style-6">
                                <div className="search-style-7" bis_skin_checked="1">
                                    <label className="search-style-8" for="search-field">
                                        <h3 className="search-style-9">Search The Site</h3>
                                    </label>
                                    <legend className="search-style-10">Search the website pages, blog, podcasts and resources.</legend>
                                    <div className="search-style-11" bis_skin_checked="1">
                                        <input className="search-style-12" type="text" name="term" required="" placeholder="Search The Site" autocomplete="on" inputmode="search" />
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


            {/* Scroll State Header */}  
            <header className={`scroll-header-style-0 ${isScrolled ? 'scroll-header-visible' : 'scroll-header-hidden'}`}>

                <div className="scroll-header-style-1" bis_skin_checked="1">
                    <div className="scroll-header-style-2" bis_skin_checked="1">

                        <div className="scroll-header-style-3" bis_skin_checked="1">

                            <a href="https://www.align.com" className="scroll-header-style-4">

                                <span className="scroll-header-style-5">






                                    <img src="https://www.align.com/hubfs/Logo%20White.svg" alt="Logo White" loading="lazy" width="136" height="45" className="scroll-header-style-6" /> </span> <span className="scroll-header-style-7">






                                    <img src="https://www.align.com/hubfs/align-fullcolor-logo.svg" alt="align-fullcolor-logo" loading="lazy" width="136" height="46" className="scroll-header-style-8" /> </span> </a> <span className="scroll-header-style-9">
                                <span className="scroll-header-style-10">|&nbsp;&nbsp;</span>US Services
                            </span>
                        </div>
                        <nav className="scroll-header-style-11" aria-label=" menu">
                            <div className="scroll-header-style-12" bis_skin_checked="1">
                                <div className="scroll-header-style-13" bis_skin_checked="1">
                                    <nav className="scroll-header-style-14">
                                        <span className="scroll-header-style-15">
                                            <div className="scroll-header-style-16" bis_skin_checked="1">



                                                <div className="scroll-header-style-17" bis_skin_checked="1">
                                                    <img src="https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=20&amp;height=20&amp;name=icons8-earth-planet-64.webp" height="20" width="20" alt="language switcher" srcset="https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=10&amp;height=10&amp;name=icons8-earth-planet-64.webp 10w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=20&amp;height=20&amp;name=icons8-earth-planet-64.webp 20w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=30&amp;height=30&amp;name=icons8-earth-planet-64.webp 30w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=40&amp;height=40&amp;name=icons8-earth-planet-64.webp 40w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=50&amp;height=50&amp;name=icons8-earth-planet-64.webp 50w, https://www.align.com/hs-fs/hubfs/2023-assets/icons8-earth-planet-64.webp?width=60&amp;height=60&amp;name=icons8-earth-planet-64.webp 60w" sizes="(max-width: 20px) 100vw, 20px" className="scroll-header-style-18" />
                                                    Language:
                                                </div>
                                                <div bis_skin_checked="1" className="scroll-header-style-19">
                                                    <span className="scroll-header-style-20" data-hs-cos-general-type="widget" data-hs-cos-type="language_switcher"></span>
                                                </div>
                                                <div className="scroll-header-style-21" bis_skin_checked="1">
                                                    <div className="scroll-header-style-22" onclick="" bis_skin_checked="1">
                                                        <ul className="scroll-header-style-23">



                                                            <li className="scroll-header-style-24">
                                                                <a className="scroll-header-style-25" href="https://www.align.com/">
                                                                    US Services
                                                                </a>
                                                            </li>
                                                            <li className="scroll-header-style-26">
                                                                <a className="scroll-header-style-27" href="https://www.align.com/en-gb/uk-emea">
                                                                    UK &amp; EMEA Services
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </span> <a className="scroll-header-style-28" href="https://www.align.com/blog?hsLang=en">Our Blog</a> <a className="scroll-header-style-29" href="https://www.align.com/contact?hsLang=en">Contact Us</a> <a className="scroll-header-style-30" href="https://www.align.com/resource-library?hsLang=en">Resources</a> <a className="scroll-header-style-31" href="https://www.align.com/support?hsLang=en">
                                            <svg className="scroll-header-style-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.446 19.278">
                                                <path d="M8.337 0A4.168 4.168 0 1012.5 4.168 4.18 4.18 0 008.337 0zm8.857.521a3.387 3.387 0 103.387 3.387A3.4 3.4 0 0017.194.521zM8.337 1.563a2.605 2.605 0 11-2.605 2.605 2.593 2.593 0 012.605-2.605zm8.857.521a1.824 1.824 0 11-1.824 1.824 1.812 1.812 0 011.824-1.824zm0 5.731A7.4 7.4 0 0011.878 9.6a12.8 12.8 0 00-3.541-.48A11.437 11.437 0 002.6 10.526a4.609 4.609 0 00-2.6 3.8V18.5a.812.812 0 00.782.782h15.11a.812.812 0 00.782-.782v-2.609h5.992a.812.812 0 00.782-.782v-3.386A3.484 3.484 0 0021.452 8.8a8.752 8.752 0 00-4.258-.985zm0 1.563a7.329 7.329 0 013.484.79c.837.471 1.2 1.011 1.2 1.555v2.605h-5.21a4.609 4.609 0 00-2.6-3.8c-.159-.094-.328-.183-.5-.269a7.258 7.258 0 013.615-.879zm-8.857 1.3a10.02 10.02 0 014.95 1.189 3.081 3.081 0 011.824 2.459v3.387H1.563v-3.385a3.081 3.081 0 011.824-2.458 10.019 10.019 0 014.95-1.189z" className="scroll-header-style-33"></path>
                                            </svg>
                                            Support
                                        </a>
                                    </nav> <button className="scroll-header-style-34" onClick={modalShow}>
                                        <svg className="scroll-header-style-35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.2 61.2">
                                            <path data-name="Path 24" d="M25 50a25.2 25.2 0 0 0 15.4-5.3L57 61.2l4.2-4.2-16.5-16.6A25 25 0 1 0 25 50Zm0-44A19 19 0 1 1 6 25 19 19 0 0 1 25 6Z" className="scroll-header-style-36"></path>
                                        </svg> <span className="scroll-header-style-37">Search Our Website</span> </button>
                                </div>
                            </div>
                            <ul className="scroll-header-style-38">
                                <li className="scroll-header-style-39" aria-role="none" aria-haspopup="true">
                                    <a className="scroll-header-style-40" href="https://www.align.com/solutions/data-center-solutions?hsLang=en" aria-role="menuitem">
                                        Data Center Infrastructure Solutions

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="scroll-header-style-41">
                                            <path d="M6.70711 9.68899C6.31658 10.0795 5.68342 10.0795 5.29289 9.68899L0.7 5.09609C0.313401 4.70949 0.313401 4.08269 0.7 3.69609C1.0866 3.30949 1.7134 3.30949 2.1 3.69609L6 7.59609L9.9 3.69609C10.2866 3.30949 10.9134 3.30949 11.3 3.69609C11.6866 4.08269 11.6866 4.70949 11.3 5.09609L6.70711 9.68899Z" fill="currentColor" className="scroll-header-style-42"></path>
                                        </svg> </a>
                                    <div className="scroll-header-style-43" bis_skin_checked="1">
                                        <div className="scroll-header-style-44" bis_skin_checked="1">
                                            <h2 className="scroll-header-style-45">Data Center Technology Infrastructure Solutions</h2>
                                        </div>
                                        <div className="scroll-header-style-46" bis_skin_checked="1">
                                            <div className="scroll-header-style-47" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-48"><a href="https://www.align.com/assess-modernize?hsLang=en" rel="noopener" className="scroll-header-style-49">Assess &amp; Modernize</a></h4> <span className="scroll-header-style-50" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-51" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-52">
                                                            <li className="scroll-header-style-53" role="none"><a href="https://www.align.com/assess-modernize?tab=hs-tabs__tab-1--widget_1744037119268" role="menuitem" target="_self" className="scroll-header-style-54">Critical Facility Assessments</a></li>
                                                            <li className="scroll-header-style-55" role="none"><a href="https://www.align.com/assess-modernize?tab=hs-tabs__tab-2--widget_1744037119268" role="menuitem" target="_self" className="scroll-header-style-56">Current State Assessments</a></li>
                                                            <li className="scroll-header-style-57" role="none"><a href="https://www.align.com/assess-modernize?tab=hs-tabs__tab-3--widget_1744037119268" role="menuitem" target="_self" className="scroll-header-style-58">Application &amp; Data Migrations</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="scroll-header-style-59" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-60"><a href="https://www.align.com/design-procure?hsLang=en" rel="noopener" className="scroll-header-style-61">Design &amp; Plan</a></h4> <span className="scroll-header-style-62" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-63" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-64">
                                                            <li className="scroll-header-style-65" role="none"><a href="javascript:void(0);" role="menuitem" target="_self" className="scroll-header-style-66">Infrastructure Design</a></li>
                                                            <li className="scroll-header-style-67" role="none"><a href="javascript:void(0);" role="menuitem" target="_self" className="scroll-header-style-68">AI Readiness</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="scroll-header-style-69" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-70"><a href="https://www.align.com/build-optimize?hsLang=en" rel="noopener" className="scroll-header-style-71">Procure &amp; Build</a></h4> <span className="scroll-header-style-72" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-73" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-74">
                                                            <li className="scroll-header-style-75" role="none"><a href="javascript:void(0);" role="menuitem" target="_self" className="scroll-header-style-76">Procurement</a></li>
                                                            <li className="scroll-header-style-77" role="none"><a href="javascript:void(0);" role="menuitem" target="_self" className="scroll-header-style-78">Vendor Management</a></li>
                                                            <li className="scroll-header-style-79" role="none"><a href="javascript:void(0);" role="menuitem" target="_self" className="scroll-header-style-80">Cabinet Installation</a></li>
                                                            <li className="scroll-header-style-81" role="none"><a href="javascript:void(0);" role="menuitem" target="_self" className="scroll-header-style-82">Cabling Infrastructure</a></li>
                                                            <li className="scroll-header-style-83" role="none"><a href="javascript:void(0);" role="menuitem" target="_self" className="scroll-header-style-84">Installation &amp; Testing</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="scroll-header-style-85" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-86"><a href="https://www.align.com/en-us/asset-point?hsLang=en" rel="noopener" className="scroll-header-style-87">Manage &amp; Optimize</a></h4> <span className="scroll-header-style-88" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-89" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-90">
                                                            <li className="scroll-header-style-91" role="none"><a href="https://www.align.com/en-us/asset-point" role="menuitem" target="_self" className="scroll-header-style-92">Asset Point® - Align's DCIM Platform</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="scroll-header-style-93" aria-role="none" aria-haspopup="true">
                                    <a className="scroll-header-style-94" href="https://www.align.com/professional-services/workplace-technology?hsLang=en" aria-role="menuitem">
                                        Workplace Technology

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="scroll-header-style-95">
                                            <path d="M6.70711 9.68899C6.31658 10.0795 5.68342 10.0795 5.29289 9.68899L0.7 5.09609C0.313401 4.70949 0.313401 4.08269 0.7 3.69609C1.0866 3.30949 1.7134 3.30949 2.1 3.69609L6 7.59609L9.9 3.69609C10.2866 3.30949 10.9134 3.30949 11.3 3.69609C11.6866 4.08269 11.6866 4.70949 11.3 5.09609L6.70711 9.68899Z" fill="currentColor" className="scroll-header-style-96"></path>
                                        </svg> </a>
                                    <div className="scroll-header-style-97" bis_skin_checked="1">
                                        <div className="scroll-header-style-98" bis_skin_checked="1">
                                            <h2 className="scroll-header-style-99">Workplace Technology&nbsp;</h2>
                                            <p className="scroll-header-style-100">No matter how the office evolves, Align works closely with businesses to provide a connected IT enterprise for today’s hybrid professional that’s built to be secure, flexible and reliable.</p>
                                        </div>
                                        <div className="scroll-header-style-101" bis_skin_checked="1">
                                            <div className="scroll-header-style-102" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-103">Solutions</h4> <span className="scroll-header-style-104" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-105" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-106">
                                                            <li className="scroll-header-style-107" role="none"><a href="https://www.align.com/hq-branch-technology-design" role="menuitem" target="_self" className="scroll-header-style-108">HQ &amp; Branch Technology Design</a></li>
                                                            <li className="scroll-header-style-109" role="none"><a href="https://www.align.com/networking-wi-fi" role="menuitem" target="_self" className="scroll-header-style-110">Networking &amp; Wi-Fi</a></li>
                                                            <li className="scroll-header-style-111" role="none"><a href="https://www.align.com/av-design-implementation" role="menuitem" target="_self" className="scroll-header-style-112">AV Design &amp; Implementation</a></li>
                                                            <li className="scroll-header-style-113" role="none"><a href="https://www.align.com/it-structured-cabling" role="menuitem" target="_self" className="scroll-header-style-114">IT &amp; Structured Cabling</a></li>
                                                            <li className="scroll-header-style-115" role="none"><a href="https://www.align.com/smart-office-connected-enterprise" role="menuitem" target="_self" className="scroll-header-style-116">Smart Office &amp; Connected Enterprise</a></li>
                                                            <li className="scroll-header-style-117" role="none"><a href="https://www.align.com/security-access-control" role="menuitem" target="_self" className="scroll-header-style-118">Security &amp; Access Control</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="scroll-header-style-119" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-120">News &amp; Resources</h4> <span className="scroll-header-style-121" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-122" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-123">
                                                            <li className="scroll-header-style-124" role="none"><a href="https://www.align.com/blog" role="menuitem" target="_self" className="scroll-header-style-125">Blog</a></li>
                                                            <li className="scroll-header-style-126" role="none"><a href="https://www.align.com/resource-library" role="menuitem" target="_self" className="scroll-header-style-127">Resource Center</a></li>
                                                            <li className="scroll-header-style-128" role="none"><a href="https://www.align.com/success-stories/tag/workplace-technology" role="menuitem" target="_self" className="scroll-header-style-129">Success Stories</a></li>
                                                            <li className="scroll-header-style-130" role="none"><a href="https://www.align.com/it-careers-align" role="menuitem" target="_self" className="scroll-header-style-131">Careers</a></li>
                                                            <li className="scroll-header-style-132" role="none"><a href="https://www.align.com/events" role="menuitem" target="_self" className="scroll-header-style-133">Events</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="scroll-header-style-134" aria-role="none" aria-haspopup="true">
                                    <a className="scroll-header-style-135" href="https://www.align.com/managed-services?hsLang=en" aria-role="menuitem">
                                        Managed Services

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="scroll-header-style-136">
                                            <path d="M6.70711 9.68899C6.31658 10.0795 5.68342 10.0795 5.29289 9.68899L0.7 5.09609C0.313401 4.70949 0.313401 4.08269 0.7 3.69609C1.0866 3.30949 1.7134 3.30949 2.1 3.69609L6 7.59609L9.9 3.69609C10.2866 3.30949 10.9134 3.30949 11.3 3.69609C11.6866 4.08269 11.6866 4.70949 11.3 5.09609L6.70711 9.68899Z" fill="currentColor" className="scroll-header-style-137"></path>
                                        </svg> </a>
                                    <div className="scroll-header-style-138" bis_skin_checked="1">
                                        <div className="scroll-header-style-139" bis_skin_checked="1">
                                            <h2 className="scroll-header-style-140">Managed Services &amp; Cybersecurity</h2>
                                            <p className="scroll-header-style-141">Award-winning, scalable, and secure IT solutions from the industry’s premier Managed Services Provider.</p>
                                        </div>
                                        <div className="scroll-header-style-142" bis_skin_checked="1">
                                            <div className="scroll-header-style-143" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-144">Managed Services&nbsp;</h4> <span className="scroll-header-style-145" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-146" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-147">
                                                            <li className="scroll-header-style-148" role="none"><a href="https://www.align.com/align-it-suite" role="menuitem" target="_self" className="scroll-header-style-149">Align IT Suite</a></li>
                                                            <li className="scroll-header-style-150" role="none"><a href="https://www.align.com/managed-cloud-services" role="menuitem" target="_self" className="scroll-header-style-151">Cloud Services</a></li>
                                                            <li className="scroll-header-style-152" role="none"><a href="https://www.align.com/microsoft-365-copilot" role="menuitem" target="_self" className="scroll-header-style-153">Microsoft 365 Copilot</a></li>
                                                            <li className="scroll-header-style-154" role="none"><a href="https://www.align.com/operational-due-diligence" role="menuitem" target="_self" className="scroll-header-style-155">Operational Due Diligence</a></li>
                                                            <li className="scroll-header-style-156" role="none"><a href="https://www.align.com/managed-threat-protection" role="menuitem" target="_self" className="scroll-header-style-157">Align Guardian</a></li>
                                                            <li className="scroll-header-style-158" role="none"><a href="https://www.align.com/compliance-and-data-archiving" role="menuitem" target="_self" className="scroll-header-style-159">Compliance &amp; Data Archiving</a></li>
                                                            <li className="scroll-header-style-160" role="none"><a href="https://www.align.com/managed-data-protection" role="menuitem" target="_self" className="scroll-header-style-161">Managed Data Protection</a></li>
                                                            <li className="scroll-header-style-162" role="none"><a href="https://www.align.com/managed-collaboration-voice-services" role="menuitem" target="_self" className="scroll-header-style-163">Managed Collaboration &amp; Voice Services</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="scroll-header-style-164" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-165">Cybersecurity</h4> <span className="scroll-header-style-166" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-167" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-168">
                                                            <li className="scroll-header-style-169" role="none"><a href="https://www.align.com/align-cybersecurity" role="menuitem" target="_self" className="scroll-header-style-170">Align Cybersecurity </a></li>
                                                            <li className="scroll-header-style-171" role="none"><a href="https://www.align.com/align-cybersecurity" aria-haspopup="true" aria-expanded="false" role="menuitem" target="_self" className="scroll-header-style-172">Solutions</a>
                                                                <ul role="menu" className="scroll-header-style-173">
                                                                    <li className="scroll-header-style-174" role="none"><a href="https://www.align.com/operational-cybersecurity-risk-assessments" role="menuitem" target="_self" className="scroll-header-style-175">Operational Cybersecurity Risk Assessments</a></li>
                                                                    <li className="scroll-header-style-176" role="none"><a href="https://www.align.com/customized-cybersecurity-program-manual" role="menuitem" target="_self" className="scroll-header-style-177">Cybersecurity Program Manuals</a></li>
                                                                    <li className="scroll-header-style-178" role="none"><a href="https://www.align.com/endpoint-protection-solutions" role="menuitem" target="_self" className="scroll-header-style-179">Endpoint Protection Solutions</a></li>
                                                                    <li className="scroll-header-style-180" role="none"><a href="https://www.align.com/data-discovery-mapping" role="menuitem" target="_self" className="scroll-header-style-181">Data Discovery &amp; Mapping</a></li>
                                                                    <li className="scroll-header-style-182" role="none"><a href="https://www.align.com/cybersecurity-education" role="menuitem" target="_self" className="scroll-header-style-183">Cybersecurity Education</a></li>
                                                                    <li className="scroll-header-style-184" role="none"><a href="https://www.align.com/outsourced-virtual-chief-information-security-officers-vciso" role="menuitem" target="_self" className="scroll-header-style-185">vCISO &amp; Cybersecurity Reporting</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="scroll-header-style-186" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-187">Resources &amp; Press</h4> <span className="scroll-header-style-188" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-189" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-190">
                                                            <li className="scroll-header-style-191" role="none"><a href="https://www.align.com/blog" role="menuitem" target="_self" className="scroll-header-style-192">Blog</a></li>
                                                            <li className="scroll-header-style-193" role="none"><a href="https://www.align.com/resource-library?topic=managed-services" role="menuitem" target="_self" className="scroll-header-style-194">Resource Center</a></li>
                                                            <li className="scroll-header-style-195" role="none"><a href="https://www.align.com/success-stories/tag/managed-services" role="menuitem" target="_self" className="scroll-header-style-196">Success Stories</a></li>
                                                            <li className="scroll-header-style-197" role="none"><a href="https://www.align.com/events" role="menuitem" target="_self" className="scroll-header-style-198">Upcoming Events</a></li>
                                                            <li className="scroll-header-style-199" role="none"><a href="https://portal.align.com/login?url=%2Fapp" role="menuitem" target="_self" className="scroll-header-style-200">Client Login</a></li>
                                                            <li className="scroll-header-style-201" role="none"><a href="https://www.align.com/client-alerts" role="menuitem" target="_self" className="scroll-header-style-202">Client Alerts</a></li>
                                                            <li className="scroll-header-style-203" role="none"><a href="https://www.align.com/press" role="menuitem" target="_self" className="scroll-header-style-204">Press</a></li>
                                                            <li className="scroll-header-style-205" role="none"><a href="https://www.align.com/support" role="menuitem" target="_self" className="scroll-header-style-206">Support</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="scroll-header-style-207" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-208">Why Align Managed Services</h4> <span className="scroll-header-style-209" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-210" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-211">
                                                            <li className="scroll-header-style-212" role="none"><a href="https://www.align.com/managed-services-leadership" role="menuitem" target="_self" className="scroll-header-style-213">Leadership</a></li>
                                                            <li className="scroll-header-style-214" role="none"><a href="https://www.align.com/awards" role="menuitem" target="_self" className="scroll-header-style-215">Awards</a></li>
                                                            <li className="scroll-header-style-216" role="none"><a href="https://www.align.com/strategic-partners-clients" role="menuitem" target="_self" className="scroll-header-style-217">Strategic Partners &amp; Clients</a></li>
                                                            <li className="scroll-header-style-218" role="none"><a href="https://www.align.com/align-locations" role="menuitem" target="_self" className="scroll-header-style-219">Locations</a></li>
                                                            <li className="scroll-header-style-220" role="none"><a href="https://www.align.com/operational-security" role="menuitem" target="_self" className="scroll-header-style-221">Operational Security</a></li>
                                                            <li className="scroll-header-style-222" role="none"><a href="https://www.align.com/it-careers-align" role="menuitem" target="_self" className="scroll-header-style-223">Careers</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="scroll-header-style-224" aria-role="none" aria-haspopup="true">
                                    <a className="scroll-header-style-225" href="https://www.align.com/about?hsLang=en" aria-role="menuitem">
                                        About Align

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="scroll-header-style-226">
                                            <path d="M6.70711 9.68899C6.31658 10.0795 5.68342 10.0795 5.29289 9.68899L0.7 5.09609C0.313401 4.70949 0.313401 4.08269 0.7 3.69609C1.0866 3.30949 1.7134 3.30949 2.1 3.69609L6 7.59609L9.9 3.69609C10.2866 3.30949 10.9134 3.30949 11.3 3.69609C11.6866 4.08269 11.6866 4.70949 11.3 5.09609L6.70711 9.68899Z" fill="currentColor" className="scroll-header-style-227"></path>
                                        </svg> </a>
                                    <div className="scroll-header-style-228" bis_skin_checked="1">
                                        <div className="scroll-header-style-229" bis_skin_checked="1">
                                            <h2 className="scroll-header-style-230">About Align</h2>
                                            <p className="scroll-header-style-231">Over 35 Years' Experience, High-caliber IT Solutions, Award-Winning Professionals and Managed IT Services, Subject Matter Experts</p>
                                        </div>
                                        <div className="scroll-header-style-232" bis_skin_checked="1">
                                            <div className="scroll-header-style-233" bis_skin_checked="1">
                                                <h4 className="scroll-header-style-234">About Align</h4> <span className="scroll-header-style-235" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu">
                                                    <div className="scroll-header-style-236" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu" bis_skin_checked="1">
                                                        <ul role="menu" className="scroll-header-style-237">
                                                            <li className="scroll-header-style-238" role="none"><a href="https://www.align.com/about" role="menuitem" target="_self" className="scroll-header-style-239">About Align</a></li>
                                                            <li className="scroll-header-style-240" role="none"><a href="https://www.align.com/leadership" role="menuitem" target="_self" className="scroll-header-style-241">Leadership</a></li>
                                                            <li className="scroll-header-style-242" role="none"><a href="https://www.align.com/blog" role="menuitem" target="_self" className="scroll-header-style-243">Blog</a></li>
                                                            <li className="scroll-header-style-244" role="none"><a href="https://www.align.com/press" role="menuitem" target="_self" className="scroll-header-style-245">News &amp; Press</a></li>
                                                            <li className="scroll-header-style-246" role="none"><a href="https://www.align.com/it-careers-align" role="menuitem" target="_self" className="scroll-header-style-247">Careers</a></li>
                                                            <li className="scroll-header-style-248" role="none"><a href="https://www.align.com/resource-library" role="menuitem" target="_self" className="scroll-header-style-249">Resource Library</a></li>
                                                            <li className="scroll-header-style-250" role="none"><a href="https://www.align.com/success-stories" role="menuitem" target="_self" className="scroll-header-style-251">Success Stories</a></li>
                                                            <li className="scroll-header-style-252" role="none"><a href="https://www.align.com/awards" role="menuitem" target="_self" className="scroll-header-style-253">Awards</a></li>
                                                            <li className="scroll-header-style-254" role="none"><a href="https://www.align.com/align-locations" role="menuitem" target="_self" className="scroll-header-style-255">Locations</a></li>
                                                            <li className="scroll-header-style-256" role="none"><a href="https://www.align.com/events" role="menuitem" target="_self" className="scroll-header-style-257">Events</a></li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="scroll-header-style-258">
                                    <a className="scroll-header-style-259" href="https://www.align.com/contact?hsLang=en">Contact us</a>
                                </li>
                            </ul>
                        </nav> 
                        
                        {/* Mobile Search Button for Scroll Header */}
                        <button className="scroll-header-mobile-search-btn" onClick={modalShow} style={{ display: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.2 61.2">
                                <path d="M25 50a25.2 25.2 0 0 0 15.4-5.3L57 61.2l4.2-4.2-16.5-16.6A25 25 0 1 0 25 50Zm0-44A19 19 0 1 1 6 25 19 19 0 0 1 25 6Z"></path>
                            </svg>
                        </button>
                        
                        <button className="scroll-header-style-260" onClick={openMobileMenu}>
                            <span className="scroll-header-style-261">Menu Button</span> <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="scroll-header-style-262">
                                <path d="M12.5 53.1a3.1 3.1 0 1 1 0-6.2h56.3a3.1 3.1 0 1 1 0 6.2zm18.8 25a3.1 3.1 0 1 1 0-6.2h56.2a3.1 3.1 0 1 1 0 6.2zm3-50a3.1 3.1 0 1 1 0-6.2h56.3a3.1 3.1 0 1 1 0 6.2z" className="scroll-header-style-263"></path>
                            </svg> </button>
                    </div>
                </div>
            </header>
        </>
    )
}