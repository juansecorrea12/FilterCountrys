export const FormCountrys = (props) => {
    const {handleChangeInput, searchCountry} = props;
    return (
        <>
        <form className="form-container">
        <p>
          <label>Search a country inside the list...</label>
          <input type="text" onChange={handleChangeInput} value={searchCountry} placeholder='Japan'/>
        </p>
      </form>
        </>
    )
}