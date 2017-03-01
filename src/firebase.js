import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyA_e8-8Wo8pp7nAzo9BoHVw4aCDEMCs1Ls',
    authDomain: 'react-goal-coach.firebaseapp.com',
    databaseURL: 'https://react-goal-coach.firebaseio.com',
    storageBucket: 'react-goal-coach.appspot.com',
    messagingSenderId: '135907737048'
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completedGoalRef = firebase.database().ref('goals_completed');
