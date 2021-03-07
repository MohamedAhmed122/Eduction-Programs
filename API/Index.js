import {SettingsTwoTone} from '@material-ui/icons'
const users = [
    {
        userName: 'Mohamed',
        id:'1',
        password: '12345'
    },
    {
        userName: 'Mohamed',
        id:'1',
        password: '12345'
    },
    {
        userName: 'Mohamed',
        id:'1',
        password: '12345'
    },
    {
        userName: 'Mohamed',
        id:'1',
        password: '12345'
    },
    {
        userName: 'Mohamed',
        id:'1',
        password: '12345'
    },
]


export const sendData = ()  =>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(users);
    }, 5000);
    });

}
