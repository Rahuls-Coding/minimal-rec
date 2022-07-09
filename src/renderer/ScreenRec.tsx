import {Button, useMantineTheme, Card} from '@mantine/core';
import {DeviceDesktop} from 'tabler-icons-react';

const ScreenRec = () => {
    const theme = useMantineTheme();
    return(
        <div className="Total">
            <h1 className="icons"> {<DeviceDesktop size={32} color={theme.colors.blue[6]} className="icons-1" />}      Screen Recorder</h1>
            <Card color="gray" className="video-box"> 
            </Card>
            <div className="Area">
                <Button className = "btn-1" color="blue" >Start</Button>
                <div className="text">
                    Current Status: 
                </div>
                <Button color="blue" className="btn-2">Stop</Button>
            </div>
        </div>

    )

}

export default ScreenRec;