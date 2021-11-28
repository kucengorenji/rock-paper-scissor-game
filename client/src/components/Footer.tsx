const Footer = () => {
    return (
        <>
            <footer className=" bottom-0 w-screen text-white">
                <div className="flex-row justify-center divide-y-2">
                    <nav className="p-3">
                        <ul className="flex justify-center space-x-5">
                            <li>
                                <a href="AA">MAIN</a>
                            </li>
                            <li>
                                <a href="AA">ABOUT</a>
                            </li>
                            <li>
                                <a href="AA">GAME FEATURES</a>
                            </li>
                            <li>
                                <a href="AA">SYSTEM REQUIREMENTS</a>
                            </li>
                            <li>
                                <a href="AA">QUOTES</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex justify-between mx-48 p-3">
                        <p>&copy; RockPaperScissors, Inc. All Rights Reserved</p>
                        <ul className="flex justify-center divide-x">
                            <li className="px-2"><a href="AA">PRIVACY POLICY</a></li>
                            <li className="px-2"><a href="AA">TERMS OF SERVICES</a></li>
                            <li className="px-2"><a href="AA">CODE OF CONDUCT</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;