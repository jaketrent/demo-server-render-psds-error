// required if rendered page doesn't have js
// flushes glamor styles to the page (inline script in head)
import Document, { Head, Main, NextScript } from "next/document";
import { renderStatic } from "glamor/server";

export default class GlamorSSRDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const glamorProps = renderStatic(() => page.html || page.errorHtml);
    return { ...page, ...glamorProps };
  }
  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cloud.typography.com/6966154/6397212/css/fonts.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/@pluralsight/ps-design-system-normalize"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  background: #171717;
                }
          `
            }}
          />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
