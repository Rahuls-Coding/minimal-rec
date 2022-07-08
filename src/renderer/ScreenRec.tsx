import {Button, useMantineTheme} from '@mantine/core';
import {DeviceDesktop} from 'tabler-icons-react';

const ScreenRec = () => {
    const theme = useMantineTheme();
    return(
        <h1 className="icons"> {<DeviceDesktop size={32} color={theme.colors.blue[6]} className="icons-1" />}      Screen Recorder</h1>
    )
}

export default ScreenRec;