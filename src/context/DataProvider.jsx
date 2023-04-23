import  {createContext,useState} from 'react';//created state

export const DataContext = createContext(null);// name given to context (initialize) -takes default value

//context return from component  -
//provider attribute - the value which is stored is export -value in the form of object is export (the state which has created has export)
//value of html css js and will be stored so state is created (useState)
// the state is created and export but now we have to import and used 

const DataProvider = ({children }) =>{

    const[html, setHtml] = useState("<!--Write your html code here...-->");
    const[css, setCss] = useState("/* Write your CSS code here...*/");
    const[js, setJs] = useState("// Write your JS code here...");

    return(
        <DataContext.Provider
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs
            }}>
                {children} 

                     
        </DataContext.Provider>
    )
}
//forwaded children
export default DataProvider;