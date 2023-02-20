export const FormCountrys = (props) => {
    const {handleChangeInput, searchCountry} = props;
    return (
        <>
        <form>
        <p>
          <label>Find Countries</label>
          <input type="text" onChange={handleChangeInput} value={searchCountry}/>
        </p>
      </form>
        </>
    )
}