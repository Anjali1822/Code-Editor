import {Box, styled} from '@mui/material';
import { useContext,useState,useEffect} from 'react';//we have html css js in context  
import {DataContext} from '../context/DataProvider';//we have data in dataContext
//it will hold execution of code useeffect
const Container = styled(Box)`
    height:41vh;
`
const Result = () => {
    //css js html as a string we have to combine and form html document and form document in srcCode and we have to display srcCode
    //iframe tag = An inline frame is used to embed another document within the current HTML document.
    const [src,setSrc] =useState('');
    const {html , css, js} = useContext(DataContext);
    const srcCode=`
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    useEffect(() => {                                 
        const timeout = setTimeout(() =>{
            setSrc(srcCode);
        }, 1000)  
        return () => clearTimeout(timeout);                                 
    }, [html,css,js])
    
    return(
        <Container>
            <iframe
                srcDoc={src}                                   //Specifies the HTML content of the page to show in the <iframe>
                title="Output"
                sandbox='allow-scripts'                           //Enables an extra set of restrictions for the content in an
                frameBorder={0}                                   
                width="100%"
                height="100%"
            />
        </Container>
    )
}
export default Result;
/* -It will take time to show results (updating dom while working frequently is not good)
 */