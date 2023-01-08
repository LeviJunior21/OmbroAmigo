import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import { SvgCss } from 'react-native-svg';
import { View } from 'react-native';

export default function Avatar(props) {
  const svg = createAvatar(style, {
    seed:               (props.seed !=             undefined)?  props.seed:              undefined,
    skin:               (props.skin !=             undefined)? [props.skin]:             undefined, 
    top:                (props.top !=              undefined)? [props.top]:              undefined, 
    hairColor:          (props.hairColor !=        undefined)? [props.hairColor]:        undefined, 
    clothes:            (props.clothes !=          undefined)? [props.clothes]:          undefined,
    clothesColor:       (props.clothesColor !=     undefined)? [props.clothesColor]:     undefined, 
    eyes:               (props.eyes !=             undefined)? [props.eyes]:             undefined,
    eyebrow:            (props.eyebrow !=          undefined)? [props.eyebrow]:          undefined, 
    mouth:              (props.mouth !=            undefined)? [props.mouth]:            undefined,
    facialHair:         (props.facialHair !=       undefined)? [props.facialHair]:       undefined,
    facialHairColor:    (props.facialHair !=       undefined)? [props.facialHairColor]:  undefined, 
    accessories:        (props.accessories !=      undefined)? [props.accessories]:      undefined,
    accessoriesColor:   (props.accessoriesColor != undefined)? [props.accessoriesColor]: undefined, 
    accessoriesChance: 100,  
    topChance:         100, 
    facialHairChance:  100
  }) 
  return (
    <SvgCss xml={svg}/>
  )
}
