import { useState } from "react";
import { Box, Typography,Button,styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import '../App.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';    //detects xml on editor
import 'codemirror/mode/javascript/javascript';            //detect JS
import 'codemirror/mode/css/css';
import { FiCopy } from "react-icons/fi"
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`;
const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display:flex;
    flex-direction:column;
    padding: 0 8px 8px;
    
`;
const Header = styled(Box) `
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
    align-items : center;

    .header-wrapper {
      display: flex;
      align-items: center;
    }

    & > *:first-child {
      display: flex;
      align-items: center;
    }

    @media (max-width: 600px ) {
      flex-direction: row;
      justify-content: center;
      padding: 12px 8px;
      & > *:not(:last-child) {
        margin-bottom: 8px;
      }
      .btn{
        height : 
      }
  }
`;
const Editor = ({heading,language,icon,color,value,onChange}) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  }
  return (
    <Container style={open ? null : {flexGrow:0 }} className="wrapper" >
      <Header>
        <Heading>
          <Box 
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: 'flex',
              placeContent: 'center',
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: '#000'
            }}
          >{icon}</Box>
          {heading}
        </Heading>
        <Box style={{ flexGrow: 1 }}>
       
            <button
              className="btn btn-copy"
              onClick={() => {
                navigator.clipboard.writeText(value);
                alert("Copied to clipboard");
              }}
            >
              <FiCopy />
            </button>
         </Box>
        <CloseFullscreenIcon className="btn"
          fontSize="small"
          style={{alignSelf: 'center'}}
          onClick={() => setOpen(prevState => !prevState)}
        /> 
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          mode: language,
          lint: true,
          theme: 'material',
          lineNumbers: true,
         
        }}
      />
    </Container>
  )
};
export default Editor;