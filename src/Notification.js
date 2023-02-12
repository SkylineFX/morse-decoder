import React from "react";

class Notification extends React.Component {
  render() {
    return (
      <div className='flex flex-col-reverse absolute bottom-5 right-5 w-80 h-full'>
        <div className="w-full h-28 bg-[#2c2e2f] mt-2 rounded-md">
          <div className="w-full h-full p-2 flex flex-col gap-3">
            <div className="w-full flex justify-between">
              <p className="text-sm">Notice</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{fill: "#f2f4f5"}}><path d="M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"></path></svg>
            </div>
            <div className="">
              <p className="text-sm">Text copied to clipboard:</p>
              <p className="italic">LOREM IPSUM DOLOR SIT AMET</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notification