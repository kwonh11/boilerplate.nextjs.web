import Document from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import { ServerStyleSheets as ServerStyleSheet_Mui } from '@material-ui/core/styles';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const sheet_mui = new ServerStyleSheet_Mui();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(sheet_mui.collect(<App {...props} />)),
                // styled.components로만 추출하는 경우
                // enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
            })
            
            const initialProps= await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet_mui.getStyleElement()}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }
}