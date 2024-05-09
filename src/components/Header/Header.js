import "./Header.css"

function Header( props ) {

    return (
            <div className="header">
                <div className={"back"} onClick={props.onClickHandler}>
                   {"< Back"}
                </div>

                {props.link == true ? 
                <div>
                Link
                </div>
                : <></>}

            </div>    
        );
      
}
export default Header;