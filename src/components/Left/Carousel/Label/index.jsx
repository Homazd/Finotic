const baseLabelStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    width: "150px",
    height: "150px",
    position: "relative",
    boxShadow: "2px 2px gray",
  };
  
  export function Label(props) {
    return (
      <>
        <div
          style={{
            ...baseLabelStyle,
            ...props.extraStyles,
          }}
        >
          {props.children}
        </div>
      </>
    );
  }