import { CardContent, Card } from "../ui/card"
import { CiInstagram, CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import Link from "next/link";

const ContactInfo: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="flex items-center justify-center h-full">
                <Card>
                    <CardContent>
                        <h2 className="text-3xl mb-6 font-bold text-zinc-700 tracking-tighter text-center sm:text-4xl">
                            Contact us now
                        </h2>
                        <div className="text-gray-500 ">
                            <p className='text-center mb-2 text-zinc-600 font-bold'> Performance Builders Inc. </p>
                            <p className='text-center mb-8'> - Build the Future - </p>

                            <div className="flex justify-center">
                                <ul>
                                    <li className="mb-10">
                                        9:00am - 5:00pm EST / Mon - Fri
                                    </li>
                                    <li className="mb-1">
                                        3477 Lawrenceville Suwanee rd
                                    </li>
                                    <li className="mb-8">
                                        Suwanee GA, 30024
                                    </li>
                                    <li className="mb-8">
                                       <Link href="tel:6784730166"> (678)-473-0166 </Link>
                                    </li>
                                    <li className="mb-20">
                                        <Link href='mailto:korey@performancebldrs.com'> korey@Performancebldrs.com </Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="flex justify-center">
                                <ul className="flex space-x-2">
                                    <li>
                                        <Link href="/" className="flex items-center overflow-hidden">
                                            <CiLinkedin size={28} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="flex items-center overflow-hidden">
                                            <CiInstagram size={28} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="flex items-center overflow-hidden">
                                            <CiTwitter size={29} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="flex items-center overflow-hidden">
                                            <CiFacebook size={27} />
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default ContactInfo; 