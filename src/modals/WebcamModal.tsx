import  { useCallback, useState } from "react";
import Rodal from "rodal";
import Webcam from "react-webcam";
import { useRef } from "react"; // import useRef

function WebcamModal({ visible, onClose }: any) {
  const webcamRef: any = useRef(null); 

  const [imgSrc, setImgSrc] = useState(null); 

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  console.log(imgSrc);

  return (
    <Rodal
      width={600}
      height={600}
      visible={visible}
      onClose={onClose}
      className=" "
    >
      <div className="flex items-center justify-center flex-col">
        {!imgSrc && (
          <Webcam
            className="text-center rounded-lg"
            height={300}
            width={300}
            ref={webcamRef}
          />
        )}
        <div className="">
          {imgSrc && (
            <img
              src={imgSrc}
              className="w-[200px] h-[200px] rounded-full "
              alt="webcam"
            />
          )}
          {!imgSrc && (
            <div className="btn-container">
              <button
                className="bg-[#39393F] text-white px-5 py-3 rounded-lg text-center mt-8"
                onClick={capture}
              >
                Capture photo
              </button>
            </div>
          )}
          {imgSrc && (
            <div className="flex gap-16">
              <button
                onClick={() => {
                  onClose();
                }}
                className="bg-[#39393F] text-white px-5 py-3 rounded-lg text-center mt-8"
              >
                Save photo
              </button>
              <button
                className="bg-[#39393F] text-white px-5 py-3 rounded-lg text-center mt-8"
                onClick={retake}
              >
                Retake photo
              </button>
            </div>
          )}
        </div>
      </div>
    </Rodal>
  );
}

export default WebcamModal;
