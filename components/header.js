import Link from "next/link";

import "./Header.scss";

const Header = props => (
  <div className="Layout">
  <Head>
    <title>Scott Nguyen</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
  </Head>

  <Header appTitle={appTitle} />
  <div className="Content">{props.children}</div>
  <NavBar navButtons={navButtons} />
</div>
);

export default Layout;