import ReactNode from 'react'
import {Pressable, Text} from 'react-native';

interface IDoublePressable{
    onDoublePressable?: () => void;
    children: ReactNode;
}

export default function DoublePressable({onDoublePressable = () => {}, children}: IDoublePressable){
    let lastTap = 0;
    const handleDoublePress = () => {
      const now = Date.now();
      if(now - lastTap < 300){
        onDoublePressable();
      }
  
      lastTap = now;
    };

    return(
        <Pressable onPress={handleDoublePress}>
           {children}
        </Pressable>
    );
}