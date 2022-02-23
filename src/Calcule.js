import { useState } from "react"
 


const Calcule = () => {

let [valeur , setValeur] = useState("");
let [operation , setOperation] = useState("");
let [preoperation , setpreOperation] = useState("");
let [prevaleur , setpreValeur] = useState("0");





const clear=()=>{
    setpreValeur("0");
    setValeur("");
    setpreOperation("");
}

const Delete=()=>{
    setValeur(valeur.slice(0,-1));
}


const cal =(a)=>{
    
    
       
       
    if( a == "="){
           
        
             switch(preoperation){

                case '/':
                    if (valeur !== "0") {
                        setValeur((parseFloat(prevaleur) / parseFloat(valeur)).toString());
                        setpreValeur("0");
                        setpreOperation("");
                        break;
                    }
                    else{
                        setValeur("error");
                        setpreValeur("");
                        setpreOperation("");
                        break;
                    }
                
                case '*':
                    setValeur((parseFloat(prevaleur) * parseFloat(valeur)).toString());
                    setpreValeur("0");
                    setpreOperation("");
                    
                    break
                case '+':
                    setValeur((parseFloat(prevaleur) + parseFloat(valeur)).toString());
                    setpreValeur("0");
                    setpreOperation("");
                    break;
                case '-':
                    setValeur((parseFloat(prevaleur) - parseFloat(valeur)).toString());
                    setpreValeur("0");
                    setpreOperation("");
                    break
                case '=':
                    console.log("case =")
                    setValeur("0");
                    setpreValeur("0");
                    setpreOperation("");
                    return valeur

                default: return valeur;
 
                }

          setOperation(a);
        }
        else{
            if(prevaleur =="0"){
            setpreValeur(valeur);
            setpreOperation(a);
            setValeur("0")}
            else{
                setpreOperation(a); 
            }


        }
       

}

  
    return ( 
        <div className="calcule">
            <div className="input">
                <div className="oldnum">{prevaleur}{preoperation}</div>
                <div className="newnum">{valeur}</div>
            </div>
            <div className="row1">
                <button onClick={()=>clear()}>AC</button>
                <button onClick={()=>Delete()}>DEL</button>
                <button  onClick={()=>cal('/')}>/</button>
            </div>
            <div className="row2 ">
                <button  onClick={()=>{
                     if(valeur=="0"){
                        setValeur("1")
                   }
                   else if (operation == '='  ){  
                    setValeur("1");
                    setOperation("");

                   }
                   else{
                    setValeur(valeur+1);
                   }
                   
                } }>1</button>
                <button
                onClick={()=>{
                    if(valeur=="0"){
                        setValeur("2")
                   }
                   else if (operation == '='  ){  
                    setValeur("2");
                    setOperation("");
                    
                   }
                   else{
                       setValeur(valeur+2);
                   }
                } }>2</button>
                <button
                onClick={()=>{
                    if(valeur=="0"){
                        setValeur("3")
                   }
                   else if (operation == '='  ){  
                    setValeur("3");
                    setOperation("");
                    
                   }
                   else{
                       setValeur(valeur+3);
                   }
                } }>3</button>
                <button  onClick={()=>cal('*')}>*</button>
            </div>
            <div className="row3">
                <button
                onClick={()=>{
                    if(valeur=="0"){
                        setValeur("4")
                   }
                   else if (operation == '='  ){  
                    setValeur("4");
                    setOperation("");
                    
                   }
                   else{
                       setValeur(valeur+4);
                   }
                } }>4</button>
                <button
                onClick={()=>{
                    if(valeur=="0"){
                        setValeur("5")
                   }
                   else if (operation == '='  ){  
                    setValeur("5");
                    setOperation("");
                    
                   }
                   else{
                       setValeur(valeur+5);
                   }
                } }>5</button>
                <button
                onClick={()=>{
                    if(valeur=="0"){
                        setValeur("6")
                   }
                   else if (operation == '='  ){  
                    setValeur("6");
                    setOperation("");
                    
                   }
                   else{
                       setValeur(valeur+6);
                   }
                } }>6</button>
                <button onClick={()=>cal('+')}>+</button>
            </div>
            <div className="row4">
                <button
                onClick={()=>{
                    if(valeur=="0"){
                        setValeur("7")
                   }
                   else if (operation == '='  ){  
                    setValeur("7");
                    setOperation("");
                    
                   }
                   else{
                       setValeur(valeur+7);
                   }
                } }>7</button>
                <button
                onClick={()=>{
                    if(valeur=="0"){
                        setValeur("8")
                   }
                   else if (operation == '='  ){  
                    setValeur("8");
                    setOperation("");
                    
                   }
                   else{
                       setValeur(valeur+8);
                   }
                } }>8</button>
                <button
                onClick={()=>{
                    if(valeur=="0"){
                         setValeur("9")
                    }
                    else if (operation == '='  ){  
                        setValeur("9");
                        setOperation("");
                        
                       }
                    else{
                        setValeur(valeur+9);
                    }
                    
                } }>9</button>
                <button  onClick={()=>cal('-')}>-</button>
            </div>
            <div className="row5">
                <button
                onClick={()=>{
                    if(valeur==""){
                         setValeur("0.")
                    }
                    else{
                         setValeur(valeur+".")
                    }
                }}
                >.</button>
                <button
                onClick={()=>{
                    if(valeur==""){
                        setValeur("0")
                    }
                    else if(valeur=="0" ){
                        return valeur
                    }
                    else if (operation == '='  ){  
                        setValeur("0");
                        setOperation("");
                        
                       }
                    else{
                         setValeur(valeur+0)
                    }
                   
                } }>0</button>
                <button  onClick={()=>cal('=')}>=</button>
            </div>
        </div>
     );

}
export default Calcule;

