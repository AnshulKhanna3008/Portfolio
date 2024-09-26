import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIN<FaLinkedin size={30} /> </>
            ),
            href: 'https://www.linkedin.com/in/anshul-khanna-6305b4265/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>Github<FaGithub size={30} /> </>
            ),
            href: 'https://github.com/AnshulKhanna3008/',
        },
        {
            id: 3,
            child: (
                <>Mail<HiOutlineMail size={30} /> </>
            ),
            href: 'mailto:khannaanshul30@gmail.com',
        },
        {
            id: 4,
            child: (
                <>Resume<BsFillPersonLinesFill size={30} /> </>
            ),
            href: '/d2.pdf',
            style: 'rounded-brr-md',
            download: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={"justify-between items-center flex w-40 h-14 px-4 bg-gray-500 hover:ml-[-10px] ml-[-100px] lg:ml-[-110px] hover:rounded-md duration-300 " + " " + style}>
                        <a href={href} download={download} rel="noreferrer" target="_blank" className="flex justify-between items-center w-full text-white ">{child}</a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLinks