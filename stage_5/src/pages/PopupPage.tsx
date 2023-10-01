import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import logo from '../assets/icon/Frame 249.png';
import settings from '../assets/icon/setting-2.png';
import cancel from '../assets/icon/close-circle.png';
import video from '../assets/icon/Vector.png';
import microphone from '../assets/icon/microphone.png';

export default function PopupPage() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const startRecording = document.getElementById("start-recording");
    const stopRecording = document.querySelector("button#stop_recording");

    startRecording?.addEventListener("click", () => {
      console.log("Start Recording button clicked");
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0]) {
          const tabId = tabs[0].id as number;

          chrome.tabs.sendMessage(tabId, { action: "request_recording" }, function (response) {
            if (!chrome.runtime.lastError) {
              console.log(response);
            } else {
              console.log(chrome.runtime.lastError, "error in line 10");
            }
          });
        }
      });
    });

    // Add event listener for Stop Recording button click
    stopRecording?.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0]) {
          const tabId = tabs[0].id as number;

          chrome.tabs.sendMessage(tabId, { action: "stopRecording" }, function (response) {
            if (!chrome.runtime.lastError) {
              console.log(response);
            } else {
              console.log(chrome.runtime.lastError, "error in line 25");
            }
          });
        }
      });
    });
  }, []); // Empty dependency array to run the effect only once when the component mounts.

  const handleRecording = async () => {
    const tabs = await chrome.tabs.query({ active: true });
    if (tabs[0]) {
      const tabId = tabs[0].id as number;

      let recorder: MediaRecorder | null = null; // Define the recorder variable with the MediaRecorder type

      chrome.scripting.executeScript({
        target: { tabId },
        func: () => {
          console.log("hi, injecting background");

          function onAccessApproved(stream: MediaStream) { // Specify the type for the stream argument
            recorder = new MediaRecorder(stream);
            recorder.start();

            recorder.onstop = function () {
              stream.getTracks().forEach(function (track) {
                if (track.readyState === "live") {
                  track.stop();
                }
              });
            };

            recorder.ondataavailable = function (event) {
              let recordedBlob = event.data;
              let url = URL.createObjectURL(recordedBlob);

              let a = document.createElement("a");
              a.style.display = "none";
              a.href = url;
              a.download = "screen-recording.webm";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            };
          }

          chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.action === "request_recording") {
              console.log("requesting recording");
              console.log(sender);

              sendResponse(`processed: ${message.action}`);

              navigator.mediaDevices
                .getDisplayMedia({
                  audio: true,
                  video: {
                    width: 9999999999,
                    height: 9999999999,
                  },
                })
                .then((stream) => {
                  onAccessApproved(stream);
                });
            }

            if (message.action === "stopRecording") {
              console.log("stopping recording");
              sendResponse(`processed: ${message.action}`);
              if (!recorder) {
                console.log("No recorder");
              }

              recorder?.stop();
            }
          });
        },
      });
    }
  };

  return (
    <div className='d-flex align-items-center justify-content-center border p-4 mx-auto border-light flex-column rounded-3' style={{ width: "300px", height: "439px", boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }}>
      <div className="d-flex align-items-center my-2 col-12 justify-content-between">
        <img src={logo} alt="logo" className='m-0' />
        <div className="d-flex align-items-center  gap-2">
          <img src={settings} alt="settings icon" />
          <img src={cancel} alt="cancel icon" />
        </div>
      </div>
      <p className="my-2 col-12" style={{ color: "#616163" }}>This extension helps you record and share help videos with ease.</p>
      <Form className="d-flex align-items-center mx-0 px-0 flex-column col-12  justify-content-between">
        <div className="d-flex align-items-center my-2 col-12 px-3 justify-content-between">
          <div className="d-flex flex-column align-items-center my-2 justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              style={{ width: "30px", height: "30px" }}>
              <path
                d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"
                fill="#616163"
              />
            </svg>
            <p className='fw-medium my-3' style={{ color: "#616163" }} >Full screen</p>
          </div>
          <div className="d-flex flex-column align-items-center my-2 justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              style={{ width: "30px", height: "30px" }}>
              <path
                d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"
                fill="#120B48"
              />
            </svg>
            <p className='fw-medium my-3' style={{ color: "#120B48" }}>Current Tab</p>
          </div>
        </div>
        <div className="d-flex align-items-center my-2 col-12 px-3 justify-content-between rounded-3" style={{ border: "2px solid #120B48" }}>
          <div className="d-flex align-items-center gap-3 px-3 py-2 justify-content-between">
            <img src={video} alt="video icon" />
            <p className='fw-medium m-0' style={{ color: "#120B48" }}>Camera</p>
          </div>
          <Form.Check
            // disabled
            type="switch"
            // id="disabled-custom-switch"
            className='custom-control-input'
          />
        </div>
        <div className="d-flex align-items-center my-2 col-12 px-3 justify-content-between rounded-3" style={{ border: "2px solid #120B48" }}>
          <div className="d-flex align-items-center gap-3 px-3 py-2 justify-content-between">
            <img src={microphone} alt="Microphone icon" />
            <p className='fw-medium m-0' style={{ color: "#120B48" }}>Audio</p>
          </div>
          <Form.Check
            // disabled
            type="switch"
            // label="disabled switch"
            // id="disabled-custom-switch"
            style={{}}
          />
        </div>
        <div id='start-recording' className="btn d-flex align-items-center my-2 col-12 justify-content-center fw-bold" style={{ backgroundColor: "#120B48", color: "white" }} onClick={() => { handleRecording(); handleShowModal(); }}> Start Recording</div>
      </Form>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Webcam Recording</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video autoPlay controls></video>
          {/* Add control buttons (stop, pause, etc.) here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
