
import { Button, Menu, useMantineTheme } from '@mantine/core';
import { Camera, DeviceDesktop, Speakerphone, ChevronDown } from 'tabler-icons-react';

const HomeScreen = () => {
    const theme = useMantineTheme();
  return (
    <div>
      <div className="Total">
        <div className="first">
          <div className="parent-1">
            <div className="child-1">
              <h1 className="to-begin">A Minimialist Screen</h1>
              <h1 className="to-end">Recorder</h1>  
            </div>
            <ul>
              <li>No complex video editor</li>
              <li>Simple to use </li>
              <li>Get recording today!</li>
            </ul>
            <Menu  className="child-2"
            control={
          <Button color="orange" radius ="md" size="sm" rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>
            Create new
          </Button>
        }
        transition="pop-top-right"
        placement="end"
        size="lg"
        
        >
        <Menu.Item onClick={() => {console.log("working?")}}
          icon={<DeviceDesktop size={16} color={theme.colors.blue[6]} />}>
          Screen Recording
        </Menu.Item>
        <Menu.Item
          icon={<Camera size={16} color={theme.colors.pink[6]} />}>
          Video Recording
        </Menu.Item>
        <Menu.Item
          icon={<Speakerphone size={16} color={theme.colors.cyan[6]} />}>
          Audio Recording
        </Menu.Item>
            </Menu>
          </div>
          <div className="parent-2">
            <div className="image2"> </div>
            <img className="image1" width="400px" alt="icon" src="https://i.ibb.co/SBqWSs9/Screen-Shot-2022-07-08-at-2-50-01-PM.png" />
          </div>
        </div>
       
      </div>
      {/* <img src="https://i.ibb.co/W2vq6mG/Vector.png" alt="waves" /> */}
      
    </div>
  );
}

export default HomeScreen