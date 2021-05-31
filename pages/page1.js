import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Icon from "../static/icon.png";

const BlueP = styled.div`
  color: red;
  font-size: 18px;
`;

function Page1() {
  return (
    <div>
      <BlueP> {`10 + 20 = ${add(10, 20)}`}</BlueP>
      <img src={Icon} />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
      {/* <div>
                <Link href="/page2">
                    <a>page2로 이동</a>
                </Link>
            </div> */}
    </div>
  );
}
export default Page1;
