import Head from 'next/head';
import Icon from '../static/icon.png';
import Link from 'next/link';

function Page1() {
    return (
        <div>
            <p> this is home page </p>
            <img src={Icon} />
            <Head>
                <title>page1</title>
            </Head>
            <Head>
                <meta name="description" content="hello world"></meta>
            </Head>
            <div>
                <Link href="/page2">
                    <a>page2로 이동</a>
                </Link>
            </div>
            <style jsx>{`
                p {
                    color: blue;
                    font-size: 18pt;
                }
            `}</style>
        </div>
    )
}
export default Page1;
