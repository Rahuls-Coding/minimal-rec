import {Button, useMantineTheme, Card, Alert} from '@mantine/core';
import {Speakerphone, Download, AlertCircle} from 'tabler-icons-react';
import { useState } from 'react';
//@ts-ignore
import RecordRTC, { RecordRTCPromisesHandler } from 'recordrtc'
//@ts-ignore
import { saveAs } from 'file-saver'
//@ts-ignore
import { Player } from 'video-react'; 
import 'video-react/dist/video-react.css';

const AudioRec = () => {
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
            video: false,
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
            <h1 className="icons"> {<Speakerphone size={32} color={theme.colors.green[6]} className="icons-1" />}      Video Recorder</h1>
            {blob ? <Player src={window.URL.createObjectURL(blob)} sytle = {{'padding-top': '0px'}}className="player" /> : <Card color="gray" className="video-box"> Video Hasn't Completed Recording</Card>}
            <div className="Area">
                <Button onClick={() => startRecording()}className = "btn-1" color="green" >Start</Button>
                <div className="record"> 
                    <div className="text">
                    Current Status: 
                    </div>
                    <BlinkingComponent highlighting={highlight} />
                    <div className="texty">
                        {highlight ? "Recording" : "Not Recording"}
                    </div>
                </div>
               
                <Button onClick = {() => stopRecording()}color="green" className="btn-2">Stop</Button>
            </div>
            {blob ? <Button color="green" onClick={() => downloadVideo()}><Download size={16}/> Download</Button> :null}
            <Alert icon={<AlertCircle size={16} />} title=" To go to back to the homescreen, try refreshing!" color="blue">
               
            </Alert>
        </div>

    )

}

export default AudioRec;