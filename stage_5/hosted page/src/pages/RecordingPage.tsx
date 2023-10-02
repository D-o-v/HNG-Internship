// import React, { useState, useEffect } from 'react';

// const ScreenRecorder: React.FC = () => {
//   const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
//   const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null);
//   const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
//   const [recording, setRecording] = useState<boolean>(false);
//   const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

//   useEffect(() => {
//     if (recording) {
//       startRecording();
//     } else {
//       stopRecording();
//     }
//   }, [recording]);

//   const startRecording = async () => {
//     try {
//       // Capture user's screen with system audio
//       const screenStream = await navigator.mediaDevices.getDisplayMedia({
//         video: { mediaSource: 'screen' },
//         audio: true,
//       });

//       // Capture user's webcam video
//       const webcamStream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//       });

//       // Capture user's microphone audio
//       const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

//       // Combine screen, webcam, and mic audio streams
//       const combinedStream = new MediaStream([
//         ...screenStream.getTracks(),
//         ...webcamStream.getTracks(),
//         ...micStream.getTracks(),
//       ]);

//       // Create a MediaRecorder to record the combined stream
//       const mediaRecorder = new MediaRecorder(combinedStream);

//       // Handle data available event
//       mediaRecorder.ondataavailable = (e) => {
//         if (e.data.size > 0) {
//           setRecordedChunks((prevChunks) => [...prevChunks, e.data]);
//         }
//       };

//       // Start recording
//       mediaRecorder.start();

//       setScreenStream(screenStream);
//       setWebcamStream(webcamStream);
//       setRecorder(mediaRecorder);
//     } catch (error) {
//       console.error('Error starting recording:', error);
//     }
//   };

//   const stopRecording = () => {
//     if (recorder) {
//       recorder.stop();
//       setRecording(false);
//     }
//   };

//   const saveRecording = () => {
//     if (recordedChunks.length > 0) {
//       const blob = new Blob(recordedChunks, { type: 'video/mp4' });
//       const url = URL.createObjectURL(blob);

//       // Create a download link
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'screen_recording.mp4';
//       a.click();
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => setRecording(!recording)} disabled={recording}>
//         {recording ? 'Stop Recording' : 'Start Recording'}
//       </button>
//       <button onClick={saveRecording} disabled={recordedChunks.length === 0}>
//         Save Recording
//       </button>
//       <video
//         src={screenStream ? URL.createObjectURL(screenStream) : ''}
//         autoPlay
//         muted
//         controls
//         width="640"
//         height="360"
//       />
//       <video
//         src={webcamStream ? URL.createObjectURL(webcamStream) : ''}
//         autoPlay
//         controls
//         width="320"
//         height="240"
//       />
//     </div>
//   );
// };

// export default ScreenRecorder;
