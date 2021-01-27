import React, { useState } from 'react';
import './styles.css';

const NameFormFn = ({ input, handleChange }) => {
   return (
      <form>
         <input
            value={input}
            onChange={handleChange}
            placeholder='Filter Name'
         ></input>
      </form>
   );
};

const StatementFormFn = ({
   input,
   handleChange,
   handleClear,
   handleSubmit,
}) => {
   return (
      <form onSubmit={handleSubmit}>
         <input value={input} onChange={handleChange}></input>
         <button type='submit'>Add</button>
         <button type='button' onClick={handleClear}>
            Clear
         </button>
      </form>
   );
};

const AdvancedStatementsFn = ({ fitlerPreview, setFilterPreview }) => {
   const handleAnd = () => {
      console.log(`handleAnd`);
      setFilterPreview(`${fitlerPreview} AND `);
   };

   const handleOr = () => {
      console.log(`handleOr`);
      setFilterPreview(`${fitlerPreview} OR `);
   };

   return (
      <>
         <button onClick={handleAnd}>AND</button>
         <button onClick={handleOr}>OR</button>
      </>
   );
};

const OptionsFn = ({ setNameInput, setStatementInput, setFilterPreview }) => {
   const handleReset = () => {
      console.log(`handleReset`);
      setNameInput(``);
      setStatementInput(``);
      setFilterPreview(``);
   };

   const handleSave = () => {
      console.log(`handleSave`);
   };

   return (
      <div>
         <button onClick={handleReset}>Reset All</button>
         <button onClick={handleSave}>Save and Close</button>
      </div>
   );
};

export default function App() {
   const [nameInput, setNameInput] = useState(``);
   const handleNameChange = (e) => setNameInput(e.target.value);

   const [statementInput, setStatementInput] = useState(``);
   const handleStatementChange = (e) => setStatementInput(e.target.value);
   const handleStatementClear = () => {
      console.log(`CLEAR STATEMENT`);
      setStatementInput(``);
   };
   const handleStatementSubmit = (e) => {
      console.log(`STATEMENT SUBMIT: ${statementInput}`);
      e.preventDefault();
      setFilterPreview(`${fitlerPreview} ${statementInput}`);
      setStatementInput(``);
   };

   const [fitlerPreview, setFilterPreview] = useState(``);

   return (
      <div className='App'>
         <NameFormFn input={nameInput} handleChange={handleNameChange} />
         <StatementFormFn
            input={statementInput}
            handleChange={handleStatementChange}
            handleClear={handleStatementClear}
            handleSubmit={handleStatementSubmit}
         />
         {<div>{fitlerPreview}</div>}
         <AdvancedStatementsFn
            fitlerPreview={fitlerPreview}
            setFilterPreview={setFilterPreview}
         />
         <OptionsFn
            setNameInput={setNameInput}
            setStatementInput={setStatementInput}
            setFilterPreview={setFilterPreview}
         />
      </div>
   );
}
