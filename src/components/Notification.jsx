import React from "react";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.closeNotification = this.closeNotification.bind(this)
  }

  closeNotification() {
    this.props.onCloseNotification(false)
  }

  render() {
    const text = this.props.text

    if(!this.props.show) return null
    return (
      <div className="w-full md:w-60 h-24 xl:w-80 xl:h-28 bg-[#2c2e2f] rounded-md sticky md:absolute bottom-5 right-5">
        <div className="w-full h-full p-2 flex flex-col gap-3">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{fill: "#f2f4f5"}}><path d="M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"></path></svg>
              <p className="text-sm">Clipboard</p>
            </div>
            <div className="cursor-pointer" onClick={this.closeNotification}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#f2f4f5"}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
            </div>
          </div>
          <div className="">
            <p className="text-sm">Text successfully copied:</p>
            <p className="italic truncate">{text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Notification