import sad from '../../img/sad.png'
import happy from '../../img/happy.png'
import mixed from '../../img/mixed.png'
import depressed from '../../img/depressed.png'

export const moodImage = (mood) => {
    if(mood === 'sad'){
        return sad;
    }
    if(mood === 'happy'){
        return happy;
    }
    if(mood === 'mixed'){
        return mixed;
    }
    if(mood === 'depressed'){
        return depressed;
    }
}