import Editor from "./Editor";
import {Box,styled} from '@mui/material';
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
    display:flex;
    background-color: #060606;
    height: 56vh;
    border: rgb(53, 53, 53) solid 0.4px;
`
const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  
  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="css"
        heading="CSS"  
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor 
        language="css"
        heading="JavaScript"
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};
export default Code;