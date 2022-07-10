import {Button, useMantineTheme, Card} from '@mantine/core';
import {Camera, Download} from 'tabler-icons-react';
import { useState } from 'react';
//@ts-ignore
import RecordRTC, { RecordRTCPromisesHandler } from 'recordrtc'
//@ts-ignore
import { saveAs } from 'file-saver'
//@ts-ignore
import { Player } from 'video-react'; 
import 'video-react/dist/video-react.css';

const VideoRec = () => {
    const theme = useMantineTheme();
    //@ts-ignore
    const BlinkingComponent = ({ highlighting }) => (
        <div className={`element${highlighting ? " highlight" : ""}`}>◉</div>
      );
    const [highlight, setHighlight] = useState(false);
    const [recorder, setRecorder] = useState<RecordRTC | null>()
    const [stream, setStream] = useState<MediaStream | null>()
    const [blob, setBlob] = useState<Blob | null>()
    


    const  startRecording = async () => {
        const mediaDevices = navigator.mediaDevices
        const stream: MediaStream = await mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        //@ts-ignore
        const recorder: RecordRTC = new RecordRTCPromisesHandler(stream, {
            type: 'video',
        }) 
        await recorder.startRecording();
        setHighlight(true);
            setRecorder(recorder)
            setStream(stream)
      };

    const stopRecording = async () => {
        if (stream) {
        setHighlight(false);
        await recorder?.stopRecording();
        (stream as any).stop();
        const blob = await recorder?.getBlob();
        setBlob(blob);
        console.log(blob)
        setStream(null);
        setRecorder(null);
        }

    }

    const downloadVideo = () => {
        if (blob) {
            saveAs(blob, 'video.webm')
        }
    }
    return(
        <div className="Total">
            <h1 className="icons"> {<Camera size={32} color={theme.colors.pink[6]} className="icons-1" />}      Video Recorder</h1>
            {blob ? <Player src={window.URL.createObjectURL(blob)} sytle = {{'padding-top': '0px'}}className="player" /> : <Card color="gray" className="video-box"> Video Hasn't Completed Recording</Card>}
            <div className="Area">
                <Button onClick={() => startRecording()}className = "btn-1" color="pink" >Start</Button>
                <div className="record"> 
                    <div className="text">
                    Current Status: 
                    </div>
                    <BlinkingComponent highlighting={highlight} />
                    <div className="texty">
                        {highlight ? "Recording" : "Not Recording"}
                    </div>
                </div>
               
                <Button onClick = {() => stopRecording()}color="pink" className="btn-2">Stop</Button>
            </div>
            {blob ? <Button color="pink" onClick={() => downloadVideo()}><Download size={16}/> Download</Button> :null}
        </div>

    )

}

export default VideoRec;