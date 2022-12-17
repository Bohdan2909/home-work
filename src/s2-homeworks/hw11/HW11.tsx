import React, {ChangeEvent, useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'


/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (e: Event, value: number | number[]) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
       if(Array.isArray(value)){
           setValue1(value[0])
           setValue2(value[1])
       }else{
           setValue1(value)
       }


    }



    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change}
                            // сделать так чтоб value1 изменялось // пишет студент

                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1,value2]}
                            onChange={change}
                            // сделать так чтоб value1/2 изменялось // пишет студент

                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
// class ExampleApp extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             value: 5,
//             value2: 10,
//             value3: 10,
//             value4: {
//                 min: 5,
//                 max: 10,
//             },
//             value5: {
//                 min: 3,
//                 max: 7,
//             },
//         };
//     }
//
//     render() {
//         return (
//             <form className="form">
//                 <InputRange
//                     maxValue={20}
//                     minValue={0}
//                     value={this.state.value}
//                     onChange={value => this.setState({ value })}
//                     onChangeComplete={value => console.log(value)} />
//
//                 <InputRange
//                     maxValue={20}
//                     minValue={0}
//                     disabled
//                     value={this.state.value2}
//                     onChange={value => this.setState({ value })}
//                     onChangeComplete={value => console.log(value)} />
//
//                 <InputRange
//                     maxValue={20}
//                     minValue={0}
//                     formatLabel={value => value.toFixed(2)}
//                     value={this.state.value3}
//                     onChange={value => this.setState({ value3: value })}
//                     onChangeComplete={value => console.log(value)} />
//
//                 <InputRange
//                     maxValue={20}
//                     minValue={0}
//                     formatLabel={value => `${value} kg`}
//                     value={this.state.value4}
//                     onChange={value => this.setState({ value4: value })}
//                     onChangeComplete={value => console.log(value)} />
//
//                 <InputRange
//                     draggableTrack
//                     maxValue={20}
//                     minValue={0}
//                     formatLabel={value => `${value} kg`}
//                     value={this.state.value5}
//                     onChange={value => this.setState({ value5: value })}
//                     onChangeComplete={value => console.log(value)} />
//             </form>
//         );
//     }
// }
